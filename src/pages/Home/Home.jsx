import { useState } from "react";
import { motion } from "framer-motion";
import "./gg.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
      className="bg-container flex flex-col items-center justify-between !select-none h-screen  "
      style={{
        backgroundImage: `url('/assets/blank.png')`,
      }}
    >
      {/* TITLE */}

      <div className="flex flex-col items-center justify-center ">
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
          className="w-8/12 pt-2 md:pt-4"
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
          style={{ zIndex: 1 }}
        />

        {/* ANIMATED WHEEL CODE */}

        <motion.img
          style={{ zIndex: 2 }}
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
          className="huge:w-[400px] w-[300px] ml-2 rounded-full"
          alt="Spinning-Wheel"
          draggable="false"
        />
      </div>

      {/* PLAY BUTTON */}

      {/* LOGO */}
      <div className=" flex flex-col justify-center full items-center ">
        <motion.div
          className=""
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            scale: {
              duration: 0.5,
              ease: "easeInOut",
            },
          }}
        >
    
          {/* <Link to={`/googleAuth`}>
            <button className="btn bg-primary w-72 border-none shadow-lg text-white font-primary uppercase ">
              Je veux jouer
            </button>
          </Link> */}
        </motion.div>
        <motion.img
          src="/assets/logo.png"
          alt="logo"
          className="w-16"
          draggable="false"
          initial={{ y: 100 }} // Start position is off-screen below
          animate={{ y: -20 }} // Move to the top of the viewport
          transition={{
            scale: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Home;
