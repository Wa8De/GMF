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
          animate={{ rotate: 0, scale: 1 }}
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
          className="huge:w-[500px] w-[300px] ml-2  rounded-full"
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
      <div className=" flex flex-col justify-center h-fit mb-6 items-center ">
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
          {/* <svg
            width="339"
            height="119"
            viewBox="0 0 339 119"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_0_1)">
              <rect
                x="21.8945"
                y="17.9805"
                width="295.211"
                height="75.1924"
                rx="7"
                fill="url(#paint0_linear_0_1)"
              />
            </g>
            <g clip-path="url(#clip0_0_1)">
              <path
                d="M94.7549 64.9652V57.9114H98.7967V60.8319H100.323V49.1528H97.5124L96.1197 45.0195H104.34V61.9074C104.125 63.5607 102.705 64.8822 101.045 64.9366V64.9652H94.7549Z"
                fill="#F9F9F9"
              />
              <path
                d="M105.838 64.9652V57.059L104.365 52.9257H105.838V49.1528L104.607 45.0195H114.514L115.906 49.1528H109.883V52.9286H114.514L115.906 57.0619H109.883V60.8347H115.906V64.968H105.838V64.9652Z"
                fill="#F9F9F9"
              />
              <path
                d="M127.901 45.0195H132.96V61.6585L127.311 65.0195L121.663 61.6585V48.4635L120.618 45.0195H125.677V59.2901L127.311 60.2541L128.946 59.2901V48.4635L127.901 45.0195Z"
                fill="#F9F9F9"
              />
              <path
                d="M134.461 64.9652V57.059L132.988 52.9257H134.461V49.1528L133.23 45.0195H143.137L144.529 49.1528H138.506V52.9286H143.137L144.529 57.0619H138.506V60.8347H144.529V64.968H134.464L134.461 64.9652Z"
                fill="#F9F9F9"
              />
              <path
                d="M157.244 45.0195V64.9938H145.891V48.4349L144.846 45.0195H149.905V60.8605H153.224V45.0195H157.241H157.244Z"
                fill="#F9F9F9"
              />
              <path
                d="M164.769 45.0195H169.828V56.7815L167.979 57.8571L169.828 58.9583V64.9909H165.811V61.3553L164.152 60.3628L162.492 61.3553V64.9909H158.475V58.9583L160.324 57.8571L158.475 56.7815V48.4635L157.43 45.0195H162.489V54.3874L164.149 55.3799L165.808 54.3874V48.4635L164.763 45.0195H164.769Z"
                fill="#F9F9F9"
              />
              <path
                d="M175.771 64.9652V57.9114H179.813V60.8319H181.339V49.1528H178.529L177.136 45.0195H185.356V61.9074C185.142 63.5607 183.721 64.8822 182.062 64.9366V64.9652H175.771Z"
                fill="#F9F9F9"
              />
              <path
                d="M197.459 45.0481V64.9937C193.845 64.9937 190.284 65.0224 186.67 65.0224V45.0481H197.459ZM193.417 49.2071H190.687V60.8891H193.417V49.2071Z"
                fill="#F9F9F9"
              />
              <path
                d="M210.204 45.0195V64.9938H198.851V48.4349L197.806 45.0195H202.865V60.8605H206.184V45.0195H210.201H210.204Z"
                fill="#F9F9F9"
              />
              <path
                d="M211.702 64.9652V57.059L210.229 52.9257H211.702V49.1528L210.471 45.0195H220.378L221.771 49.1528H215.747V52.9286H220.378L221.771 57.0619H215.747V60.8347H221.771V64.968H211.705L211.702 64.9652Z"
                fill="#F9F9F9"
              />
              <path
                d="M230.711 64.9652V60.9978C229.293 60.1711 229.988 60.5859 228.595 59.7306L227.391 60.4457V64.9623H223.35V49.1528L221.957 45.0195H234.755V56.095L232.612 57.3622L234.727 58.6008V64.9652H230.711ZM230.711 53.698V49.1528H227.391V55.6831L230.711 53.7009V53.698Z"
                fill="#F9F9F9"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_0_1"
                x="0.894531"
                y="0.980469"
                width="337.211"
                height="117.192"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_0_1"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_0_1"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_0_1"
                x1="-46.0932"
                y1="55.5766"
                x2="361.602"
                y2="55.5766"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF9933" />
                <stop offset="0.378556" stop-color="#DEB602" />
                <stop offset="0.507659" stop-color="#E0B803" />
                <stop offset="0.7" stop-color="#F0C503" />
                <stop offset="0.955" stop-color="#FF9933" />
              </linearGradient>
              <clipPath id="clip0_0_1">
                <rect
                  width="140"
                  height="20"
                  fill="white"
                  transform="translate(94.7549 45.0195)"
                />
              </clipPath>
            </defs>
          </svg> */}

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
          animate={{ y: 10 }} // Move to the top of the viewport
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
