import { useState } from "react";
import { motion } from "framer-motion";
import "./gg.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
      className="bg-container flex flex-col items-center justify-between !select-none h-screen font-primary "
      style={{
        backgroundImage: `url('/assets/blank.png')`,
      }}
    >
      {/* TITLE */}

      <div className="flex flex-col items-center justify-center  ">
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
          className="huge:w-[360px] xl:w-[200px] w-[250px] pt-2 md:pt-4"
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
        />

        {/* ANIMATED WHEEL CODE */}

        <motion.div
          className="w-full  flex flex-col items-center  gap-3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            scale: {
              duration: 0.5,
              ease: "easeInOut",
            },
          }}
        >
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
            src="/assets/wheeeeeeeeeeeeeeeeeel.png"
            className="huge:w-[400px] w-[300px] ml-2 rounded-full"
            alt="Spinning-Wheel"
            draggable="false"
          />
          <Link to={`/googleAuth`}>
            <button className="btn bg-primary  flex text-sm h-20 w-72 hover:bg-primary  md:text-2xl font-bold tracking-wide md:tracking-tighter text-white uppercase border-none rounded-xl ">
              Je veux jouer
            </button>
          </Link>
        </motion.div>
      </div>

      {/* PLAY BUTTON */}

      {/* LOGO */}
      <div className="">
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
        ></motion.div>
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
