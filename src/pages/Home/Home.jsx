import { useState } from "react";
import { motion } from "framer-motion";
import "./gg.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
      className="bg-container h-full flex flex-col items-center justify-between !select-none relative "
      style={{
        backgroundImage: `url('/assets/blank.png')`,
      }}
    >
      {/* TITLE */}

      <div className="flex flex-col items-center justify-center">
        <motion.img
          transition={{
            scale: {
              duration: 0.5,
              ease: "easeInOut",
            },
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          src="/assets/title.png"
          className="w-8/12 pt-2 md:pt-4  "
          alt="Title"
          draggable="false"
          style={{ zIndex: 9999 }}
        />
        <motion.img
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          src="/assets/coins-cut2.png"
          className="huge:w-4/12 w-56 absolute lg:w-3/12 huge:-left-56 huge:-top-72 md:rotate-45 top-0  left-0  "
          alt="left-Coins"
          draggable="false"
          style={{ zIndex: 9998 }}
        />
        <motion.img
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          src="/assets/coins2.png"
          className="huge:w-4/12 w-72 absolute lg:w-3/12 huge:-right-56 huge:-top-72 md:rotate-45  right-0 "
          alt="right-Coins"
          draggable="false"
          // style={{ zIndex: 9998 }}
        />

        {/* ANIMATED WHEEL CODE */}

        <motion.img
          initial={{ rotate: 0, scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            scale: {
              duration: 0.5,
              ease: "easeInOut",
            },
            rotate: {
              repeat: Infinity,
              duration: 6,
              delay: 0.5,
              ease: "linear",
            },
          }}
          src="/assets/wheel.png"
          className="huge:w-[500px] w-[350px]  p-4  ml-2  rounded-full"
          alt="Spinning-Wheel"
          draggable="false"
        />
      </div>

      {/* ANIMATED WHEEL CODE TO CHECK OUT AFTER
      // <motion.div
      //   className="flex w-full justify-center items-center relative"
      //   initial={{ scale: 0 }}
      //   animate={{ scale: 1 }}
      //   transition={{
      //     scale: {
      //       duration: 0.5,
      //       ease: "easeInOut",
      //     },
      //   }}
      // >
      //   <div className="absolute -top-12" style={{zIndex : 999}}>
      //     <img src="/assets/ARROW.png" alt="" />
      //   </div>
      //   <motion.div
      //   style={{zIndex : 1}}
      //     initial={{ rotate: 0 }}
      //     animate={{ rotate: 360 }}
      //     transition={{
      //       repeat: Infinity,
      //       duration: 2,
      //       ease: "linear",
      //     }}
      //     className="huge:w-1/3 flex justify-center"
      //   >
      //     <img src="/assets/wheel.png" className="w-8/12" alt="" />
      //   </motion.div>
      // </motion.div> */}

      {/* PLAY BUTTON */}

      {/* LOGO */}

   
    </div>
  );
};

export default Home;
