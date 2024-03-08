import { useState, useRef } from "react";
// import { Items } from "./mocks/items.json";
import "./Test.css";

const Items = [
  {
    name: "Item 1",
    odds: 0.1,
  },
  {
    name: "Item 2",
    odds: 0.2,
  },
  {
    name: "Item 3",
    odds: 0.3,
  },
  {
    name: "Item 4",
    odds: 0.15,
  },
  {
    name: "Item 5",
    odds: 0.25,
  },
];

// Calculate the total odds
const totalOdds = Items.reduce((acc, curr) => acc + curr.odds, 0);

function SpinWheelApp() {
  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState(null);
  const wheelRef = useRef();

  const spin = () => {
    setSpinning(true);

    // Calculate the winning element
    let random = Math.random() * totalOdds;
    let currentOdds = 0;
    let currentSpinCount = 0;
    let currentWinner = null;

    for (let i = 0; i < Items.length; i++) {
      currentOdds += Items[i].odds;
      if (random <= currentOdds) {
        currentWinner = Items[i];
        currentSpinCount = 2 * Items.length + i;
        break;
      }
    }

    // Spin the wheel
    wheelRef.current.style.transitionDuration = `${currentSpinCount * 200}ms`;
    wheelRef.current.style.transform = `rotate(-${
      (360 / Items.length) * currentSpinCount
    }deg)`;

    // Set the winner after the wheel stops spinning
    setTimeout(() => {
      setSpinning(false);
      setWinner(currentWinner);
    }, currentSpinCount * 200);
  };

  return (
    <div className="wheel-container">
      <div className={`wheel ${spinning ? "spinning" : ""}`} ref={wheelRef}>
        {Items.map((item, index) => (
          <div
            key={index}
            className={`${winner && winner.name === item.name ? "winner" : ""}`}
            style={{
              transform: `rotate(${(360 / Items.length) * index}deg)`,
            }}
          >
            {item.name}
            <div className="odds">{(item.odds * 100).toFixed(2)}%</div>
          </div>
        ))}
      </div>
      <button className="spin-button" onClick={spin} disabled={spinning}>
        {spinning ? "Spinning..." : "Spin"}
      </button>
      {winner && (
        <div className="winner">
          The winner is <span>{winner.name}</span>!
        </div>
      )}
    </div>
  );
}

export default SpinWheelApp;
