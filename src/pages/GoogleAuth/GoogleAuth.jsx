import { useState } from "react";
import { motion } from "framer-motion";
import "../Home/gg.css";
import { Link } from "react-router-dom";

const GoogleAuth = () => {
  return (
    <div
      className="bg-container  flex justify-center h-screen "
      style={{
        backgroundImage: `url('/assets/bg-2.png')`,
      }}
    >
      <div className="w-full flex items-center relative justify-center">
        <img src="/assets/wheel2.png" alt="" className="object-fit w-fit" />
        <div className="absolute mt-32">
          <svg
            width="600"
            height="300"
            viewBox="0 0 460 377"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 18.9513C0 8.48481 8.48479 0 18.9513 0H441.049C451.515 0 460 8.48479 460 18.9513V358.049C460 368.515 451.515 377 441.049 377H18.9513C8.48481 377 0 368.515 0 358.049V18.9513Z"
              fill="white"
            />
            <path
              d="M135 327C135 323.134 138.134 320 142 320H330C333.866 320 337 323.134 337 327V358C337 361.866 333.866 365 330 365H142C138.134 365 135 361.866 135 358V327Z"
              fill="#4285F4"
            />
            <path
              d="M210.024 337.352V340.616H213.864V342.104H210.024V345.512H214.344V347H208.2V335.864H214.344V337.352H210.024Z"
              fill="white"
            />
            <path
              d="M221.039 338.04C221.732 338.04 222.351 338.184 222.895 338.472C223.449 338.76 223.881 339.187 224.191 339.752C224.5 340.317 224.655 341 224.655 341.8V347H222.847V342.072C222.847 341.283 222.649 340.68 222.255 340.264C221.86 339.837 221.321 339.624 220.639 339.624C219.956 339.624 219.412 339.837 219.007 340.264C218.612 340.68 218.415 341.283 218.415 342.072V347H216.591V338.184H218.415V339.192C218.713 338.829 219.092 338.547 219.551 338.344C220.02 338.141 220.516 338.04 221.039 338.04Z"
              fill="white"
            />
            <path
              d="M230.389 345.368L232.885 338.184H234.821L231.461 347H229.285L225.941 338.184H227.893L230.389 345.368Z"
              fill="white"
            />
            <path
              d="M240.024 347.144C239.192 347.144 238.44 346.957 237.768 346.584C237.096 346.2 236.568 345.667 236.184 344.984C235.8 344.291 235.608 343.491 235.608 342.584C235.608 341.688 235.805 340.893 236.2 340.2C236.595 339.507 237.133 338.973 237.816 338.6C238.499 338.227 239.261 338.04 240.104 338.04C240.947 338.04 241.709 338.227 242.392 338.6C243.075 338.973 243.613 339.507 244.008 340.2C244.403 340.893 244.6 341.688 244.6 342.584C244.6 343.48 244.397 344.275 243.992 344.968C243.587 345.661 243.032 346.2 242.328 346.584C241.635 346.957 240.867 347.144 240.024 347.144ZM240.024 345.56C240.493 345.56 240.931 345.448 241.336 345.224C241.752 345 242.088 344.664 242.344 344.216C242.6 343.768 242.728 343.224 242.728 342.584C242.728 341.944 242.605 341.405 242.36 340.968C242.115 340.52 241.789 340.184 241.384 339.96C240.979 339.736 240.541 339.624 240.072 339.624C239.603 339.624 239.165 339.736 238.76 339.96C238.365 340.184 238.051 340.52 237.816 340.968C237.581 341.405 237.464 341.944 237.464 342.584C237.464 343.533 237.704 344.269 238.184 344.792C238.675 345.304 239.288 345.56 240.024 345.56Z"
              fill="white"
            />
            <path
              d="M254.339 338.184L248.931 351.144H247.043L248.835 346.856L245.363 338.184H247.395L249.875 344.904L252.451 338.184H254.339Z"
              fill="white"
            />
            <path
              d="M263.796 342.376C263.796 342.707 263.774 343.005 263.732 343.272H256.996C257.049 343.976 257.31 344.541 257.78 344.968C258.249 345.395 258.825 345.608 259.508 345.608C260.489 345.608 261.182 345.197 261.588 344.376H263.556C263.289 345.187 262.804 345.853 262.1 346.376C261.406 346.888 260.542 347.144 259.508 347.144C258.665 347.144 257.908 346.957 257.236 346.584C256.574 346.2 256.052 345.667 255.668 344.984C255.294 344.291 255.108 343.491 255.108 342.584C255.108 341.677 255.289 340.883 255.652 340.2C256.025 339.507 256.542 338.973 257.204 338.6C257.876 338.227 258.644 338.04 259.508 338.04C260.34 338.04 261.081 338.221 261.732 338.584C262.382 338.947 262.889 339.459 263.252 340.12C263.614 340.771 263.796 341.523 263.796 342.376ZM261.892 341.8C261.881 341.128 261.641 340.589 261.172 340.184C260.702 339.779 260.121 339.576 259.428 339.576C258.798 339.576 258.26 339.779 257.812 340.184C257.364 340.579 257.097 341.117 257.012 341.8H261.892Z"
              fill="white"
            />
            <path
              d="M267.415 339.464C267.681 339.016 268.033 338.669 268.471 338.424C268.919 338.168 269.447 338.04 270.055 338.04V339.928H269.591C268.876 339.928 268.332 340.109 267.959 340.472C267.596 340.835 267.415 341.464 267.415 342.36V347H265.591V338.184H267.415V339.464Z"
              fill="white"
            />
            <path
              d="M59.4385 180.783C59.4385 173.171 65.6092 167 73.2213 167H390.225C397.837 167 404.008 173.171 404.008 180.783V287.599C404.008 295.211 397.837 301.382 390.225 301.382H73.2213C65.6092 301.382 59.4385 295.211 59.4385 287.599V180.783Z"
              fill="#F5F5F5"
            />
            <path
              d="M92.9494 202.944C92.3344 202.944 91.7828 202.842 91.2946 202.637C90.8065 202.422 90.4209 202.129 90.1377 201.758C89.8546 201.377 89.6984 200.943 89.6691 200.455H91.0457C91.0847 200.855 91.2702 201.182 91.6021 201.436C91.9438 201.69 92.3881 201.817 92.9348 201.817C93.4424 201.817 93.8427 201.704 94.1356 201.48C94.4285 201.255 94.5749 200.972 94.5749 200.631C94.5749 200.279 94.4187 200.02 94.1063 199.854C93.7939 199.679 93.3106 199.508 92.6565 199.342C92.061 199.186 91.5729 199.029 91.1921 198.873C90.8211 198.707 90.499 198.468 90.2256 198.156C89.962 197.833 89.8302 197.414 89.8302 196.896C89.8302 196.486 89.9522 196.11 90.1963 195.769C90.4404 195.427 90.787 195.158 91.236 194.963C91.6851 194.758 92.1977 194.656 92.7737 194.656C93.6621 194.656 94.3797 194.88 94.9264 195.329C95.4731 195.778 95.766 196.393 95.805 197.174H94.4724C94.4431 196.755 94.2723 196.418 93.9599 196.164C93.6572 195.91 93.2472 195.783 92.7298 195.783C92.2514 195.783 91.8706 195.886 91.5875 196.091C91.3044 196.296 91.1628 196.564 91.1628 196.896C91.1628 197.16 91.2458 197.38 91.4118 197.555C91.5875 197.721 91.8023 197.858 92.0561 197.965C92.3197 198.063 92.6809 198.175 93.1398 198.302C93.7158 198.458 94.1844 198.615 94.5456 198.771C94.9069 198.917 95.2144 199.142 95.4682 199.444C95.7318 199.747 95.8685 200.142 95.8783 200.631C95.8783 201.07 95.7562 201.465 95.5122 201.817C95.2681 202.168 94.9215 202.446 94.4724 202.651C94.0331 202.847 93.5254 202.944 92.9494 202.944Z"
              fill="#AAAAAA"
            />
            <path
              d="M97.2616 198.771C97.2616 197.951 97.4275 197.233 97.7595 196.618C98.0914 195.993 98.5454 195.51 99.1214 195.168C99.7071 194.827 100.356 194.656 101.069 194.656C101.772 194.656 102.382 194.807 102.9 195.11C103.417 195.412 103.803 195.793 104.056 196.252V194.787H105.404V202.812H104.056V201.319C103.793 201.787 103.397 202.178 102.87 202.49C102.353 202.793 101.748 202.944 101.054 202.944C100.342 202.944 99.6974 202.769 99.1214 202.417C98.5454 202.066 98.0914 201.573 97.7595 200.938C97.4275 200.303 97.2616 199.581 97.2616 198.771ZM104.056 198.785C104.056 198.18 103.934 197.653 103.69 197.204C103.446 196.755 103.114 196.413 102.695 196.179C102.285 195.935 101.831 195.813 101.333 195.813C100.835 195.813 100.381 195.93 99.9707 196.164C99.5607 196.398 99.2336 196.74 98.9896 197.189C98.7455 197.638 98.6235 198.165 98.6235 198.771C98.6235 199.386 98.7455 199.923 98.9896 200.382C99.2336 200.831 99.5607 201.177 99.9707 201.421C100.381 201.656 100.835 201.773 101.333 201.773C101.831 201.773 102.285 201.656 102.695 201.421C103.114 201.177 103.446 200.831 103.69 200.382C103.934 199.923 104.056 199.391 104.056 198.785Z"
              fill="#AAAAAA"
            />
            <path
              d="M108.344 193.484C108.09 193.484 107.875 193.396 107.7 193.221C107.524 193.045 107.436 192.83 107.436 192.576C107.436 192.322 107.524 192.108 107.7 191.932C107.875 191.756 108.09 191.668 108.344 191.668C108.588 191.668 108.793 191.756 108.959 191.932C109.135 192.108 109.223 192.322 109.223 192.576C109.223 192.83 109.135 193.045 108.959 193.221C108.793 193.396 108.588 193.484 108.344 193.484ZM108.988 194.787V202.812H107.656V194.787H108.988Z"
              fill="#AAAAAA"
            />
            <path
              d="M114.101 202.944C113.485 202.944 112.934 202.842 112.446 202.637C111.958 202.422 111.572 202.129 111.289 201.758C111.006 201.377 110.85 200.943 110.82 200.455H112.197C112.236 200.855 112.421 201.182 112.753 201.436C113.095 201.69 113.539 201.817 114.086 201.817C114.594 201.817 114.994 201.704 115.287 201.48C115.58 201.255 115.726 200.972 115.726 200.631C115.726 200.279 115.57 200.02 115.257 199.854C114.945 199.679 114.462 199.508 113.808 199.342C113.212 199.186 112.724 199.029 112.343 198.873C111.972 198.707 111.65 198.468 111.377 198.156C111.113 197.833 110.981 197.414 110.981 196.896C110.981 196.486 111.103 196.11 111.347 195.769C111.592 195.427 111.938 195.158 112.387 194.963C112.836 194.758 113.349 194.656 113.925 194.656C114.813 194.656 115.531 194.88 116.078 195.329C116.624 195.778 116.917 196.393 116.956 197.174H115.624C115.594 196.755 115.423 196.418 115.111 196.164C114.808 195.91 114.398 195.783 113.881 195.783C113.403 195.783 113.022 195.886 112.739 196.091C112.456 196.296 112.314 196.564 112.314 196.896C112.314 197.16 112.397 197.38 112.563 197.555C112.739 197.721 112.953 197.858 113.207 197.965C113.471 198.063 113.832 198.175 114.291 198.302C114.867 198.458 115.336 198.615 115.697 198.771C116.058 198.917 116.366 199.142 116.619 199.444C116.883 199.747 117.02 200.142 117.029 200.631C117.029 201.07 116.907 201.465 116.663 201.817C116.419 202.168 116.073 202.446 115.624 202.651C115.184 202.847 114.677 202.944 114.101 202.944Z"
              fill="#AAAAAA"
            />
            <path
              d="M119.599 193.484C119.345 193.484 119.13 193.396 118.955 193.221C118.779 193.045 118.691 192.83 118.691 192.576C118.691 192.322 118.779 192.108 118.955 191.932C119.13 191.756 119.345 191.668 119.599 191.668C119.843 191.668 120.048 191.756 120.214 191.932C120.39 192.108 120.478 192.322 120.478 192.576C120.478 192.83 120.39 193.045 120.214 193.221C120.048 193.396 119.843 193.484 119.599 193.484ZM120.243 194.787V202.812H118.911V194.787H120.243Z"
              fill="#AAAAAA"
            />
            <path
              d="M123.847 196.091C124.081 195.632 124.413 195.276 124.843 195.022C125.282 194.768 125.814 194.641 126.439 194.641V196.018H126.088C124.594 196.018 123.847 196.828 123.847 198.449V202.812H122.514V194.787H123.847V196.091Z"
              fill="#AAAAAA"
            />
            <path
              d="M134.869 201.582L137.359 194.787H138.779L135.63 202.812H134.078L130.93 194.787H132.365L134.869 201.582Z"
              fill="#AAAAAA"
            />
            <path
              d="M143.59 202.944C142.839 202.944 142.155 202.773 141.54 202.432C140.935 202.09 140.456 201.607 140.105 200.982C139.763 200.347 139.592 199.615 139.592 198.785C139.592 197.965 139.768 197.243 140.12 196.618C140.481 195.983 140.969 195.5 141.584 195.168C142.199 194.827 142.887 194.656 143.649 194.656C144.41 194.656 145.099 194.827 145.714 195.168C146.329 195.5 146.812 195.979 147.163 196.603C147.525 197.228 147.705 197.956 147.705 198.785C147.705 199.615 147.52 200.347 147.149 200.982C146.788 201.607 146.295 202.09 145.67 202.432C145.045 202.773 144.352 202.944 143.59 202.944ZM143.59 201.773C144.069 201.773 144.518 201.66 144.938 201.436C145.357 201.211 145.694 200.875 145.948 200.425C146.212 199.976 146.343 199.43 146.343 198.785C146.343 198.141 146.216 197.594 145.963 197.145C145.709 196.696 145.377 196.364 144.967 196.149C144.557 195.925 144.113 195.813 143.634 195.813C143.146 195.813 142.697 195.925 142.287 196.149C141.887 196.364 141.565 196.696 141.32 197.145C141.076 197.594 140.954 198.141 140.954 198.785C140.954 199.439 141.072 199.991 141.306 200.44C141.55 200.889 141.872 201.226 142.272 201.451C142.673 201.665 143.112 201.773 143.59 201.773Z"
              fill="#AAAAAA"
            />
            <path
              d="M151.083 195.886V200.616C151.083 201.006 151.166 201.285 151.332 201.451C151.498 201.607 151.786 201.685 152.196 201.685H153.177V202.812H151.976C151.234 202.812 150.678 202.642 150.307 202.3C149.936 201.958 149.75 201.397 149.75 200.616V195.886H148.711V194.787H149.75V192.767H151.083V194.787H153.177V195.886H151.083Z"
              fill="#AAAAAA"
            />
            <path
              d="M156.124 196.091C156.359 195.632 156.691 195.276 157.12 195.022C157.559 194.768 158.092 194.641 158.716 194.641V196.018H158.365C156.871 196.018 156.124 196.828 156.124 198.449V202.812H154.792V194.787H156.124V196.091Z"
              fill="#AAAAAA"
            />
            <path
              d="M167.577 198.492C167.577 198.746 167.562 199.015 167.533 199.298H161.119C161.168 200.089 161.436 200.709 161.924 201.158C162.422 201.597 163.022 201.817 163.725 201.817C164.301 201.817 164.78 201.685 165.161 201.421C165.551 201.148 165.824 200.787 165.981 200.338H167.416C167.201 201.109 166.771 201.739 166.127 202.227C165.483 202.705 164.682 202.944 163.725 202.944C162.964 202.944 162.28 202.773 161.675 202.432C161.08 202.09 160.611 201.607 160.269 200.982C159.928 200.347 159.757 199.615 159.757 198.785C159.757 197.956 159.923 197.228 160.255 196.603C160.587 195.979 161.05 195.5 161.646 195.168C162.251 194.827 162.944 194.656 163.725 194.656C164.487 194.656 165.161 194.822 165.746 195.154C166.332 195.486 166.781 195.944 167.094 196.53C167.416 197.106 167.577 197.76 167.577 198.492ZM166.2 198.214C166.2 197.707 166.088 197.272 165.863 196.911C165.639 196.54 165.331 196.262 164.941 196.076C164.56 195.881 164.135 195.783 163.667 195.783C162.993 195.783 162.417 195.998 161.939 196.428C161.47 196.857 161.202 197.453 161.133 198.214H166.2Z"
              fill="#AAAAAA"
            />
            <path
              d="M172.742 198.771C172.742 197.951 172.908 197.233 173.24 196.618C173.572 195.993 174.026 195.51 174.602 195.168C175.188 194.827 175.837 194.656 176.55 194.656C177.253 194.656 177.863 194.807 178.38 195.11C178.898 195.412 179.283 195.793 179.537 196.252V194.787H180.884V202.812H179.537V201.319C179.273 201.787 178.878 202.178 178.351 202.49C177.833 202.793 177.228 202.944 176.535 202.944C175.822 202.944 175.178 202.769 174.602 202.417C174.026 202.066 173.572 201.573 173.24 200.938C172.908 200.303 172.742 199.581 172.742 198.771ZM179.537 198.785C179.537 198.18 179.415 197.653 179.171 197.204C178.927 196.755 178.595 196.413 178.175 196.179C177.765 195.935 177.311 195.813 176.813 195.813C176.315 195.813 175.861 195.93 175.451 196.164C175.041 196.398 174.714 196.74 174.47 197.189C174.226 197.638 174.104 198.165 174.104 198.771C174.104 199.386 174.226 199.923 174.47 200.382C174.714 200.831 175.041 201.177 175.451 201.421C175.861 201.656 176.315 201.773 176.813 201.773C177.311 201.773 177.765 201.656 178.175 201.421C178.595 201.177 178.927 200.831 179.171 200.382C179.415 199.923 179.537 199.391 179.537 198.785Z"
              fill="#AAAAAA"
            />
            <path
              d="M186.124 201.582L188.613 194.787H190.034L186.885 202.812H185.333L182.184 194.787H183.62L186.124 201.582Z"
              fill="#AAAAAA"
            />
            <path
              d="M192.033 193.484C191.779 193.484 191.565 193.396 191.389 193.221C191.213 193.045 191.125 192.83 191.125 192.576C191.125 192.322 191.213 192.108 191.389 191.932C191.565 191.756 191.779 191.668 192.033 191.668C192.277 191.668 192.482 191.756 192.648 191.932C192.824 192.108 192.912 192.322 192.912 192.576C192.912 192.83 192.824 193.045 192.648 193.221C192.482 193.396 192.277 193.484 192.033 193.484ZM192.678 194.787V202.812H191.345V194.787H192.678Z"
              fill="#AAAAAA"
            />
            <path
              d="M197.79 202.944C197.175 202.944 196.623 202.842 196.135 202.637C195.647 202.422 195.261 202.129 194.978 201.758C194.695 201.377 194.539 200.943 194.51 200.455H195.886C195.925 200.855 196.111 201.182 196.443 201.436C196.784 201.69 197.228 201.817 197.775 201.817C198.283 201.817 198.683 201.704 198.976 201.48C199.269 201.255 199.415 200.972 199.415 200.631C199.415 200.279 199.259 200.02 198.947 199.854C198.634 199.679 198.151 199.508 197.497 199.342C196.901 199.186 196.413 199.029 196.033 198.873C195.662 198.707 195.339 198.468 195.066 198.156C194.802 197.833 194.671 197.414 194.671 196.896C194.671 196.486 194.793 196.11 195.037 195.769C195.281 195.427 195.627 195.158 196.076 194.963C196.526 194.758 197.038 194.656 197.614 194.656C198.503 194.656 199.22 194.88 199.767 195.329C200.314 195.778 200.606 196.393 200.645 197.174H199.313C199.284 196.755 199.113 196.418 198.8 196.164C198.498 195.91 198.088 195.783 197.57 195.783C197.092 195.783 196.711 195.886 196.428 196.091C196.145 196.296 196.003 196.564 196.003 196.896C196.003 197.16 196.086 197.38 196.252 197.555C196.428 197.721 196.643 197.858 196.897 197.965C197.16 198.063 197.521 198.175 197.98 198.302C198.556 198.458 199.025 198.615 199.386 198.771C199.747 198.917 200.055 199.142 200.309 199.444C200.572 199.747 200.709 200.142 200.719 200.631C200.719 201.07 200.597 201.465 200.353 201.817C200.109 202.168 199.762 202.446 199.313 202.651C198.874 202.847 198.366 202.944 197.79 202.944Z"
              fill="#AAAAAA"
            />
            <path
              d="M158.524 27.1633V38H157.192V27.1633H158.524Z"
              fill="black"
            />
            <path
              d="M160.298 33.9582C160.298 33.1381 160.463 32.4206 160.795 31.8055C161.127 31.1807 161.581 30.6974 162.157 30.3557C162.743 30.014 163.392 29.8432 164.105 29.8432C164.808 29.8432 165.418 29.9945 165.936 30.2972C166.453 30.5998 166.839 30.9805 167.092 31.4394V29.975H168.44V38H167.092V36.5063C166.829 36.9749 166.433 37.3654 165.906 37.6778C165.389 37.9805 164.784 38.1318 164.09 38.1318C163.378 38.1318 162.733 37.9561 162.157 37.6046C161.581 37.2531 161.127 36.7601 160.795 36.1255C160.463 35.491 160.298 34.7685 160.298 33.9582ZM167.092 33.9728C167.092 33.3676 166.97 32.8404 166.726 32.3913C166.482 31.9422 166.15 31.6005 165.731 31.3662C165.32 31.1221 164.867 31.0001 164.369 31.0001C163.871 31.0001 163.417 31.1172 163.007 31.3515C162.597 31.5858 162.27 31.9275 162.026 32.3766C161.781 32.8257 161.659 33.3529 161.659 33.9582C161.659 34.5733 161.781 35.1102 162.026 35.5691C162.27 36.0182 162.597 36.3647 163.007 36.6088C163.417 36.8431 163.871 36.9603 164.369 36.9603C164.867 36.9603 165.32 36.8431 165.731 36.6088C166.15 36.3647 166.482 36.0182 166.726 35.5691C166.97 35.1102 167.092 34.5781 167.092 33.9728Z"
              fill="black"
            />
            <path
              d="M171.38 28.6716C171.126 28.6716 170.911 28.5838 170.736 28.4081C170.56 28.2323 170.472 28.0175 170.472 27.7637C170.472 27.5099 170.56 27.2951 170.736 27.1194C170.911 26.9436 171.126 26.8558 171.38 26.8558C171.624 26.8558 171.829 26.9436 171.995 27.1194C172.171 27.2951 172.259 27.5099 172.259 27.7637C172.259 28.0175 172.171 28.2323 171.995 28.4081C171.829 28.5838 171.624 28.6716 171.38 28.6716ZM172.024 29.975V38H170.692V29.975H172.024Z"
              fill="black"
            />
            <path
              d="M177.137 38.1318C176.521 38.1318 175.97 38.0293 175.482 37.8243C174.994 37.6095 174.608 37.3166 174.325 36.9456C174.042 36.5649 173.886 36.1304 173.856 35.6423H175.233C175.272 36.0426 175.457 36.3696 175.789 36.6234C176.131 36.8773 176.575 37.0042 177.122 37.0042C177.63 37.0042 178.03 36.8919 178.323 36.6674C178.616 36.4428 178.762 36.1597 178.762 35.818C178.762 35.4666 178.606 35.2078 178.293 35.0419C177.981 34.8661 177.498 34.6953 176.844 34.5293C176.248 34.3731 175.76 34.2169 175.379 34.0607C175.008 33.8947 174.686 33.6556 174.413 33.3431C174.149 33.021 174.017 32.6012 174.017 32.0837C174.017 31.6737 174.139 31.2978 174.383 30.9561C174.627 30.6144 174.974 30.346 175.423 30.1507C175.872 29.9457 176.385 29.8432 176.961 29.8432C177.849 29.8432 178.567 30.0677 179.113 30.5168C179.66 30.9659 179.953 31.581 179.992 32.362H178.66C178.63 31.9422 178.459 31.6054 178.147 31.3515C177.844 31.0977 177.434 30.9708 176.917 30.9708C176.438 30.9708 176.058 31.0733 175.775 31.2783C175.491 31.4833 175.35 31.7518 175.35 32.0837C175.35 32.3473 175.433 32.567 175.599 32.7427C175.775 32.9087 175.989 33.0454 176.243 33.1528C176.507 33.2504 176.868 33.3627 177.327 33.4896C177.903 33.6458 178.372 33.802 178.733 33.9582C179.094 34.1046 179.401 34.3292 179.655 34.6318C179.919 34.9345 180.056 35.3299 180.065 35.818C180.065 36.2573 179.943 36.6527 179.699 37.0042C179.455 37.3557 179.109 37.6339 178.66 37.8389C178.22 38.0342 177.713 38.1318 177.137 38.1318Z"
              fill="black"
            />
            <path
              d="M184.788 38.1318C184.172 38.1318 183.621 38.0293 183.133 37.8243C182.645 37.6095 182.259 37.3166 181.976 36.9456C181.693 36.5649 181.537 36.1304 181.507 35.6423H182.884C182.923 36.0426 183.108 36.3696 183.44 36.6234C183.782 36.8773 184.226 37.0042 184.773 37.0042C185.281 37.0042 185.681 36.8919 185.974 36.6674C186.267 36.4428 186.413 36.1597 186.413 35.818C186.413 35.4666 186.257 35.2078 185.944 35.0419C185.632 34.8661 185.149 34.6953 184.495 34.5293C183.899 34.3731 183.411 34.2169 183.03 34.0607C182.659 33.8947 182.337 33.6556 182.064 33.3431C181.8 33.021 181.668 32.6012 181.668 32.0837C181.668 31.6737 181.79 31.2978 182.034 30.9561C182.278 30.6144 182.625 30.346 183.074 30.1507C183.523 29.9457 184.036 29.8432 184.612 29.8432C185.5 29.8432 186.218 30.0677 186.764 30.5168C187.311 30.9659 187.604 31.581 187.643 32.362H186.311C186.281 31.9422 186.11 31.6054 185.798 31.3515C185.495 31.0977 185.085 30.9708 184.568 30.9708C184.089 30.9708 183.709 31.0733 183.426 31.2783C183.143 31.4833 183.001 31.7518 183.001 32.0837C183.001 32.3473 183.084 32.567 183.25 32.7427C183.426 32.9087 183.64 33.0454 183.894 33.1528C184.158 33.2504 184.519 33.3627 184.978 33.4896C185.554 33.6458 186.023 33.802 186.384 33.9582C186.745 34.1046 187.053 34.3292 187.306 34.6318C187.57 34.9345 187.707 35.3299 187.716 35.818C187.716 36.2573 187.594 36.6527 187.35 37.0042C187.106 37.3557 186.76 37.6339 186.311 37.8389C185.871 38.0342 185.364 38.1318 184.788 38.1318Z"
              fill="black"
            />
            <path
              d="M190.593 36.9017H194.533V38H189.07V36.9017L192.966 31.0587H189.1V29.975H194.503V31.0587L190.593 36.9017Z"
              fill="black"
            />
            <path
              d="M203.584 33.68C203.584 33.9338 203.569 34.2023 203.54 34.4854H197.126C197.175 35.2762 197.443 35.8961 197.931 36.3452C198.429 36.7845 199.03 37.0042 199.732 37.0042C200.309 37.0042 200.787 36.8724 201.168 36.6088C201.558 36.3354 201.832 35.9742 201.988 35.5251H203.423C203.208 36.2964 202.779 36.9261 202.134 37.4142C201.49 37.8926 200.689 38.1318 199.732 38.1318C198.971 38.1318 198.288 37.9609 197.682 37.6193C197.087 37.2776 196.618 36.7943 196.276 36.1695C195.935 35.5349 195.764 34.8027 195.764 33.9728C195.764 33.143 195.93 32.4157 196.262 31.7909C196.594 31.166 197.057 30.6877 197.653 30.3557C198.258 30.014 198.951 29.8432 199.732 29.8432C200.494 29.8432 201.168 30.0091 201.753 30.3411C202.339 30.673 202.788 31.1319 203.101 31.7176C203.423 32.2936 203.584 32.9478 203.584 33.68ZM202.207 33.4017C202.207 32.8941 202.095 32.4596 201.871 32.0984C201.646 31.7274 201.338 31.4492 200.948 31.2637C200.567 31.0684 200.143 30.9708 199.674 30.9708C199 30.9708 198.424 31.1856 197.946 31.6151C197.477 32.0447 197.209 32.6402 197.14 33.4017H202.207Z"
              fill="black"
            />
            <path
              d="M210.908 32.0691V33.1967H205.065V32.0691H210.908Z"
              fill="black"
            />
            <path
              d="M217.319 29.8285C218.295 29.8285 219.086 30.1263 219.691 30.7218C220.296 31.3076 220.599 32.157 220.599 33.2699V38H219.281V33.4603C219.281 32.6598 219.081 32.0496 218.681 31.6298C218.28 31.2002 217.734 30.9854 217.04 30.9854C216.338 30.9854 215.776 31.2051 215.356 31.6444C214.946 32.0837 214.741 32.7232 214.741 33.5628V38H213.409V29.975H214.741V31.1172C215.005 30.7072 215.361 30.3899 215.81 30.1654C216.269 29.9408 216.772 29.8285 217.319 29.8285Z"
              fill="black"
            />
            <path
              d="M226.276 38.1318C225.524 38.1318 224.841 37.9609 224.226 37.6193C223.62 37.2776 223.142 36.7943 222.79 36.1695C222.449 35.5349 222.278 34.8027 222.278 33.9728C222.278 33.1528 222.454 32.4303 222.805 31.8055C223.166 31.1709 223.654 30.6877 224.27 30.3557C224.885 30.014 225.573 29.8432 226.334 29.8432C227.096 29.8432 227.784 30.014 228.399 30.3557C229.014 30.6877 229.498 31.166 229.849 31.7909C230.21 32.4157 230.391 33.143 230.391 33.9728C230.391 34.8027 230.205 35.5349 229.834 36.1695C229.473 36.7943 228.98 37.2776 228.355 37.6193C227.73 37.9609 227.037 38.1318 226.276 38.1318ZM226.276 36.9603C226.754 36.9603 227.203 36.848 227.623 36.6234C228.043 36.3989 228.38 36.0621 228.634 35.613C228.897 35.1639 229.029 34.6172 229.029 33.9728C229.029 33.3285 228.902 32.7818 228.648 32.3327C228.394 31.8836 228.062 31.5517 227.652 31.3369C227.242 31.1123 226.798 31.0001 226.32 31.0001C225.832 31.0001 225.382 31.1123 224.972 31.3369C224.572 31.5517 224.25 31.8836 224.006 32.3327C223.762 32.7818 223.64 33.3285 223.64 33.9728C223.64 34.627 223.757 35.1786 223.991 35.6276C224.235 36.0767 224.558 36.4135 224.958 36.6381C225.358 36.8529 225.797 36.9603 226.276 36.9603Z"
              fill="black"
            />
            <path
              d="M239.26 29.975V38H237.927V36.8138C237.674 37.2239 237.317 37.546 236.858 37.7803C236.409 38.0049 235.911 38.1172 235.365 38.1172C234.74 38.1172 234.179 37.9902 233.681 37.7364C233.183 37.4728 232.787 37.0823 232.494 36.5649C232.211 36.0474 232.07 35.4177 232.07 34.6758V29.975H233.388V34.5C233.388 35.2908 233.588 35.901 233.988 36.3306C234.388 36.7504 234.935 36.9603 235.628 36.9603C236.341 36.9603 236.902 36.7406 237.312 36.3013C237.722 35.8619 237.927 35.2225 237.927 34.3829V29.975H239.26Z"
              fill="black"
            />
            <path
              d="M244.351 38.1318C243.736 38.1318 243.184 38.0293 242.696 37.8243C242.208 37.6095 241.823 37.3166 241.539 36.9456C241.256 36.5649 241.1 36.1304 241.071 35.6423H242.447C242.486 36.0426 242.672 36.3696 243.004 36.6234C243.346 36.8773 243.79 37.0042 244.336 37.0042C244.844 37.0042 245.244 36.8919 245.537 36.6674C245.83 36.4428 245.977 36.1597 245.977 35.818C245.977 35.4666 245.82 35.2078 245.508 35.0419C245.196 34.8661 244.712 34.6953 244.058 34.5293C243.463 34.3731 242.975 34.2169 242.594 34.0607C242.223 33.8947 241.901 33.6556 241.627 33.3431C241.364 33.021 241.232 32.6012 241.232 32.0837C241.232 31.6737 241.354 31.2978 241.598 30.9561C241.842 30.6144 242.189 30.346 242.638 30.1507C243.087 29.9457 243.599 29.8432 244.175 29.8432C245.064 29.8432 245.781 30.0677 246.328 30.5168C246.875 30.9659 247.168 31.581 247.207 32.362H245.874C245.845 31.9422 245.674 31.6054 245.362 31.3515C245.059 31.0977 244.649 30.9708 244.131 30.9708C243.653 30.9708 243.272 31.0733 242.989 31.2783C242.706 31.4833 242.564 31.7518 242.564 32.0837C242.564 32.3473 242.647 32.567 242.813 32.7427C242.989 32.9087 243.204 33.0454 243.458 33.1528C243.721 33.2504 244.083 33.3627 244.541 33.4896C245.117 33.6458 245.586 33.802 245.947 33.9582C246.309 34.1046 246.616 34.3292 246.87 34.6318C247.133 34.9345 247.27 35.3299 247.28 35.818C247.28 36.2573 247.158 36.6527 246.914 37.0042C246.67 37.3557 246.323 37.6339 245.874 37.8389C245.435 38.0342 244.927 38.1318 244.351 38.1318Z"
              fill="black"
            />
            <path
              d="M260.182 29.975V38H258.85V36.8138C258.596 37.2239 258.24 37.546 257.781 37.7803C257.332 38.0049 256.834 38.1172 256.287 38.1172C255.662 38.1172 255.101 37.9902 254.603 37.7364C254.105 37.4728 253.71 37.0823 253.417 36.5649C253.134 36.0474 252.992 35.4177 252.992 34.6758V29.975H254.31V34.5C254.31 35.2908 254.51 35.901 254.91 36.3306C255.311 36.7504 255.857 36.9603 256.551 36.9603C257.263 36.9603 257.825 36.7406 258.235 36.3013C258.645 35.8619 258.85 35.2225 258.85 34.3829V29.975H260.182Z"
              fill="black"
            />
            <path
              d="M266.342 29.8285C267.319 29.8285 268.109 30.1263 268.715 30.7218C269.32 31.3076 269.623 32.157 269.623 33.2699V38H268.305V33.4603C268.305 32.6598 268.105 32.0496 267.704 31.6298C267.304 31.2002 266.757 30.9854 266.064 30.9854C265.361 30.9854 264.8 31.2051 264.38 31.6444C263.97 32.0837 263.765 32.7232 263.765 33.5628V38H262.432V29.975H263.765V31.1172C264.029 30.7072 264.385 30.3899 264.834 30.1654C265.293 29.9408 265.796 29.8285 266.342 29.8285Z"
              fill="black"
            />
            <path
              d="M275.206 33.9582C275.206 33.1381 275.372 32.4206 275.704 31.8055C276.036 31.1807 276.49 30.6974 277.066 30.3557C277.651 30.014 278.301 29.8432 279.013 29.8432C279.716 29.8432 280.326 29.9945 280.844 30.2972C281.361 30.5998 281.747 30.9805 282.001 31.4394V29.975H283.348V38H282.001V36.5063C281.737 36.9749 281.342 37.3654 280.815 37.6778C280.297 37.9805 279.692 38.1318 278.999 38.1318C278.286 38.1318 277.642 37.9561 277.066 37.6046C276.49 37.2531 276.036 36.7601 275.704 36.1255C275.372 35.491 275.206 34.7685 275.206 33.9582ZM282.001 33.9728C282.001 33.3676 281.879 32.8404 281.635 32.3913C281.391 31.9422 281.059 31.6005 280.639 31.3662C280.229 31.1221 279.775 31.0001 279.277 31.0001C278.779 31.0001 278.325 31.1172 277.915 31.3515C277.505 31.5858 277.178 31.9275 276.934 32.3766C276.69 32.8257 276.568 33.3529 276.568 33.9582C276.568 34.5733 276.69 35.1102 276.934 35.5691C277.178 36.0182 277.505 36.3647 277.915 36.6088C278.325 36.8431 278.779 36.9603 279.277 36.9603C279.775 36.9603 280.229 36.8431 280.639 36.6088C281.059 36.3647 281.391 36.0182 281.635 35.5691C281.879 35.1102 282.001 34.5781 282.001 33.9728Z"
              fill="black"
            />
            <path
              d="M288.587 36.7699L291.077 29.975H292.497L289.349 38H287.797L284.648 29.975H286.083L288.587 36.7699Z"
              fill="black"
            />
            <path
              d="M294.497 28.6716C294.243 28.6716 294.028 28.5838 293.853 28.4081C293.677 28.2323 293.589 28.0175 293.589 27.7637C293.589 27.5099 293.677 27.2951 293.853 27.1194C294.028 26.9436 294.243 26.8558 294.497 26.8558C294.741 26.8558 294.946 26.9436 295.112 27.1194C295.288 27.2951 295.376 27.5099 295.376 27.7637C295.376 28.0175 295.288 28.2323 295.112 28.4081C294.946 28.5838 294.741 28.6716 294.497 28.6716ZM295.141 29.975V38H293.809V29.975H295.141Z"
              fill="black"
            />
            <path
              d="M300.254 38.1318C299.639 38.1318 299.087 38.0293 298.599 37.8243C298.111 37.6095 297.725 37.3166 297.442 36.9456C297.159 36.5649 297.003 36.1304 296.973 35.6423H298.35C298.389 36.0426 298.574 36.3696 298.906 36.6234C299.248 36.8773 299.692 37.0042 300.239 37.0042C300.747 37.0042 301.147 36.8919 301.44 36.6674C301.733 36.4428 301.879 36.1597 301.879 35.818C301.879 35.4666 301.723 35.2078 301.41 35.0419C301.098 34.8661 300.615 34.6953 299.961 34.5293C299.365 34.3731 298.877 34.2169 298.496 34.0607C298.125 33.8947 297.803 33.6556 297.53 33.3431C297.266 33.021 297.134 32.6012 297.134 32.0837C297.134 31.6737 297.256 31.2978 297.5 30.9561C297.745 30.6144 298.091 30.346 298.54 30.1507C298.989 29.9457 299.502 29.8432 300.078 29.8432C300.966 29.8432 301.684 30.0677 302.231 30.5168C302.777 30.9659 303.07 31.581 303.109 32.362H301.777C301.747 31.9422 301.576 31.6054 301.264 31.3515C300.961 31.0977 300.551 30.9708 300.034 30.9708C299.556 30.9708 299.175 31.0733 298.892 31.2783C298.609 31.4833 298.467 31.7518 298.467 32.0837C298.467 32.3473 298.55 32.567 298.716 32.7427C298.892 32.9087 299.106 33.0454 299.36 33.1528C299.624 33.2504 299.985 33.3627 300.444 33.4896C301.02 33.6458 301.489 33.802 301.85 33.9582C302.211 34.1046 302.519 34.3292 302.772 34.6318C303.036 34.9345 303.173 35.3299 303.182 35.818C303.182 36.2573 303.06 36.6527 302.816 37.0042C302.572 37.3557 302.226 37.6339 301.777 37.8389C301.337 38.0342 300.83 38.1318 300.254 38.1318Z"
              fill="black"
            />
            <path
              d="M219.23 73.2576C219.23 79.8675 214.075 84.7383 207.749 84.7383C201.423 84.7383 196.268 79.8675 196.268 73.2576C196.268 66.6011 201.423 61.7769 207.749 61.7769C214.075 61.7769 219.23 66.6011 219.23 73.2576ZM214.204 73.2576C214.204 69.127 211.216 66.3009 207.749 66.3009C204.281 66.3009 201.294 69.127 201.294 73.2576C201.294 77.3467 204.281 80.2143 207.749 80.2143C211.216 80.2143 214.204 77.3416 214.204 73.2576Z"
              fill="#EA4335"
            />
            <path
              d="M245.253 73.2576C245.253 79.8675 239.755 84.7383 233.007 84.7383C226.259 84.7383 220.761 79.8675 220.761 73.2576C220.761 66.6063 226.259 61.7769 233.007 61.7769C239.755 61.7769 245.253 66.6011 245.253 73.2576ZM239.892 73.2576C239.892 69.127 236.705 66.3009 233.007 66.3009C229.308 66.3009 226.122 69.127 226.122 73.2576C226.122 77.3467 229.308 80.2143 233.007 80.2143C236.705 80.2143 239.892 77.3416 239.892 73.2576Z"
              fill="#FBBC05"
            />
            <path
              d="M271.276 62.4795V83.3577C271.276 91.9459 265.712 95.4535 259.134 95.4535C252.942 95.4535 249.215 91.6837 247.809 88.6008L252.694 86.75C253.564 88.6427 255.695 90.8763 259.128 90.8763C263.339 90.8763 265.948 88.5116 265.948 84.0602V82.3877H265.752C264.497 83.7981 262.077 85.0302 259.024 85.0302C252.636 85.0302 246.784 79.9653 246.784 73.4481C246.784 66.8837 252.636 61.7769 259.024 61.7769C262.071 61.7769 264.491 63.0091 265.752 64.3775H265.948V62.4848H271.276V62.4795ZM266.346 73.4481C266.346 69.3533 263.344 66.3594 259.526 66.3594C255.655 66.3594 252.412 69.3533 252.412 73.4481C252.412 77.5011 255.655 80.453 259.526 80.453C263.344 80.453 266.346 77.5011 266.346 73.4481Z"
              fill="#4285F4"
            />
            <path
              d="M278.93 49.5306V84.738H272.807V49.5306H278.93Z"
              fill="#34A853"
            />
            <path
              d="M297.709 77.0414L301.67 79.6501C300.392 81.5187 297.311 84.7383 291.989 84.7383C285.389 84.7383 280.459 79.6967 280.459 73.2576C280.459 66.4303 285.43 61.7769 291.418 61.7769C297.448 61.7769 300.397 66.5183 301.361 69.0805L301.89 70.3848L286.358 76.7411C287.547 79.0445 289.396 80.2195 291.989 80.2195C294.587 80.2195 296.389 78.9565 297.709 77.0414ZM285.52 72.9108L295.902 68.6508C295.331 67.217 293.613 66.2181 291.591 66.2181C288.998 66.2181 285.389 68.48 285.52 72.9108Z"
              fill="#EA4335"
            />
            <path
              d="M177.122 69.8359V64.817H194.481C194.651 65.6917 194.738 66.7264 194.738 67.8465C194.738 71.612 193.682 76.2683 190.277 79.5858C186.965 82.946 182.733 84.7381 177.127 84.7381C166.737 84.7381 158 76.4923 158 66.3691C158 56.2458 166.737 48 177.127 48C182.875 48 186.97 50.1975 190.047 53.0616L186.412 56.6032C184.206 54.587 181.217 53.019 177.122 53.019C169.534 53.019 163.6 58.9766 163.6 66.3691C163.6 73.7615 169.534 79.7192 177.122 79.7192C182.043 79.7192 184.846 77.7937 186.642 76.0443C188.098 74.6255 189.056 72.5988 189.434 69.8306L177.122 69.8359Z"
              fill="#4285F4"
            />
            <path
              d="M126.674 107L131.316 121.285H146.336L134.184 130.114L138.826 144.4L126.674 135.571L114.522 144.4L119.164 130.114L107.012 121.285H122.033L126.674 107Z"
              fill="#F5F5F5"
            />
            <path
              d="M178.36 107L183.001 121.285H198.022L185.87 130.114L190.512 144.4L178.36 135.571L166.208 144.4L170.849 130.114L158.697 121.285H173.718L178.36 107Z"
              fill="#F5F5F5"
            />
            <path
              d="M230.045 107L234.687 121.285H249.708L237.556 130.114L242.197 144.4L230.045 135.571L217.893 144.4L222.535 130.114L210.383 121.285H225.404L230.045 107Z"
              fill="#F5F5F5"
            />
            <path
              d="M281.731 107L286.372 121.285H301.393L289.241 130.114L293.883 144.4L281.731 135.571L269.579 144.4L274.22 130.114L262.069 121.285H277.089L281.731 107Z"
              fill="#F5F5F5"
            />
            <path
              d="M333.415 107L338.057 121.285H353.078L340.926 130.114L345.567 144.4L333.415 135.571L321.263 144.4L325.905 130.114L313.753 121.285H328.774L333.415 107Z"
              fill="#F5F5F5"
            />
          </svg>
       
        </div>
      </div>
    </div>
  );
};

export default GoogleAuth;
