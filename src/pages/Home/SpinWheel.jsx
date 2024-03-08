import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "./style.css";

const SpinWheelApp = () => {
  const [result, setResult] = useState();
  const wheelRef = useRef(null);
  const spinBtnRef = useRef(null);
  const finalValueRef = useRef(null);

  const chartData = [
    { label: "Mohamed", color: "#e6cf6c", probability: 20 },
    { label: "Samir", color: "#204146", probability: 20 },
    { label: "Lkhadir", color: "#c12f49", probability: 20 },
    { label: "Ismail", color: "#812707", probability: 20 },
    { label: "Fatima", color: "#254789", probability: 20 },
    { label: "Jamila", color: "#555555", probability: 0 },
  ];

  useEffect(() => {
    function generateRotationValues(num) {
      const fullCircle = 360;
      const degreeSpan = fullCircle / num;
      const rotationValues = [];

      let previousEndDegree = 0; // Initialize the previous end degree

      for (let i = 0; i < num; i++) {
        const startDegree = previousEndDegree + 1; // Start degree of the current segment
        const endDegree = startDegree + degreeSpan - 1; // End degree of the current segment

        const rotationSegment = {
          minDegree: startDegree,
          maxDegree: endDegree,
          value: i + 1,
        };

        rotationValues.push(rotationSegment);

        previousEndDegree = endDegree; // Update the previous end degree for the next iteration
      }

      return rotationValues;
    }

    const getRandomElementIndex = () => {
      // Calculate the total sum of probabilities
      const totalProbability = chartData.reduce(
        (acc, curr) => acc + curr.probability,
        0
      );

      // Generate a random number between 0 and totalProbability
      const randomNum = Math.random() * totalProbability;

      // Iterate through the chartData to find the element based on probabilities
      let cumulativeProbability = 0;
      for (let i = 0; i < chartData.length; i++) {
        cumulativeProbability += chartData[i].probability;
        if (randomNum < cumulativeProbability) {
          return i; // Return the index of the selected element
        }
      }

      // If no element is returned, return -1 or handle it according to your needs
      return -1;
    };

    const rotationValues = generateRotationValues(chartData.length);

    // console.log({ rotationValues });

    const data = Array.from({ length: chartData.length }, () => 16); // Create an array with 'numSegments' number of elements each with a value of 16
    const pieColors = chartData?.map((elem) => elem.color);

    const wheel = wheelRef.current;
    const spinBtn = spinBtnRef.current;
    const finalValue = finalValueRef.current;

    const spinPointer = {
      id: "spinPointer",
      afterDatasetsDraw(chart, args, plugins) {
        const {
          ctx,
          chartArea: { top },
        } = chart;
        const xCenter = chart.getDatasetMeta(0).data[0].x;

        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "gold";
        ctx.moveTo(xCenter, top + 30);
        ctx.lineTo(xCenter - 15, top);
        ctx.lineTo(xCenter + 15, top);
        ctx.fill();
      },
    };

    let myChart = new Chart(wheel, {
      plugins: [ChartDataLabels, spinPointer],
      type: "pie",
      data: {
        labels: chartData.map((elem) => elem.label), // Generate labels dynamically
        datasets: [{ backgroundColor: pieColors, data: data }],
      },
      options: {
        responsive: true,
        animation: { duration: 1 },
        plugins: {
          tooltip: false,
          legend: { display: false },
          datalabels: {
            color: "#ffffff",
            formatter: (_, context) =>
              context.chart.data.labels[context.dataIndex],
            font: { size: 24 },
          },
        },
      },
    });

    const winningSegment = getRandomElementIndex();

    console.log({ winningSegment });

    function rotation() {
      // Set a random final rotation angle that is at least two complete rotations
      const finalRotation = 360 * 300 + Math.random(); // Allows for 10 complete rotations and adds some randomness

      // console.log({ finalRotation });

      // Define the initial rotation
      let currentRotation = myChart.config.data.datasets[0].rotation || 0;

      // console.log({ currentRotation });

      // console.log({ rotationValues });

      const oneRotation = 7.298719004323966;
      const fiveRotations = 36.0969864637;
      // console.log({ math: fullRotate * 2, manually: TwofullRotate });

      // Define the initial increment for each frame
      // let increment = 14.4986662789;

      // console.log(rotationValues[winningSegment]);
      const degPerSeg = 360 / chartData.length;

      let diffrence = rotationValues[winningSegment].minDegree + degPerSeg / 2;

      let winningSegmentRange = (diffrence * oneRotation) / 360;

      // console.log({ winningSegmentRange });

      // console.log({ diffrence });

      let increment = fiveRotations - winningSegmentRange;

      // console.log({ increment, degPerSeg });

      // Define the deceleration rate
      const deceleration = 0.98;

      // Define a function to animate the spinning
      function animateSpin() {
        // Increase the rotation angle by the increment
        currentRotation += increment;

        // Update the chart with the new rotation angle
        myChart.config.data.datasets[0].rotation = currentRotation;
        myChart.update();

        // Gradually reduce the increment to simulate deceleration
        increment *= deceleration;

        // Check if the final rotation angle is reached or increment becomes very small
        if (currentRotation < finalRotation && increment > 0.1) {
          // Continue animating
          requestAnimationFrame(animateSpin);
        } else {
          // Stop spinning and determine the selected segment
          determineSelectedSegment();
        }
      }

      // Start the spinning animation
      animateSpin();
    }

    function determineSelectedSegment() {
      const angle = 180 / Math.PI;
      let selectedIndex = -1;

      myChart.getDatasetMeta(0).data.forEach((datapoint, index) => {
        const netStartAngle = (datapoint.startAngle * angle) % 360;
        const netEndAngle = (datapoint.endAngle * angle) % 360;

        // Assuming 270 degrees is the indicator's position
        if (270 > netStartAngle && 270 < netEndAngle) {
          selectedIndex = index + 1; // Output the selected segment index
        }
      });
      // console.log({ selectedIndex });
      // console.log({ selectedIndex: chartData[selectedIndex - 1].label });

      setResult(chartData[selectedIndex - 1].label);

      console.log("Selected Segment:", selectedIndex);
    }

    spinBtn.addEventListener("click", rotation);

    return () => {
      spinBtn.removeEventListener("click", rotation);
      myChart.destroy();
    };
  }, []);

  // console.log({ winningSegment });

  return (
    <div className="wrapper">
      <div className="container">
        <canvas ref={wheelRef} id="wheel"></canvas>
        <button ref={spinBtnRef} id="spin-btn">
          Spin
        </button>
      </div>
      <div id="final-value">
        {result ? result : <p>Click On The Spin Button To Start</p>}
      </div>
    </div>
  );
};

export default SpinWheelApp;
