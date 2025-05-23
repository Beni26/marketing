import React from "react";
import SwiperSlider from "./SwiperSlider";


const SpecialSale: React.FC = () => {
  return (
    <div className="bg-speacialSales w-full  bg-no-repeat bg-top bg-[length:100%_100%] lg:bg-[length:100%_auto]  relative mb-16">
      <div className="bg-speacialSales2 bg-[length:75%_auto] md:bg-[length:35%_auto] lg:bg-[length:28%_auto] bg-[50%_0%] bg-no-repeat  h-full w-full absolute top-0 left-0"></div>
      <div className="container xl:max-w-screen-xl  relative mb-10">
        <div className="flex justify-center w-full flex-col items-center gap-3 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 512 512"
            fill="none"
            className="absolute top-[-45px] group-hover:scale-[0.8] transition-all ease-in-out duration-300"
          >
            <g clipPath="url(#clip0_43261_7491)">
              <path
                d="M414.042 149.67L329.513 137.387L291.71 60.791C277.109 31.204 234.888 31.213 220.292 60.79L182.489 137.386L97.9601 149.67C65.3071 154.414 52.2731 194.569 75.8911 217.593L137.057 277.215L122.618 361.4C117.041 393.921 151.2 418.725 180.397 403.38L256.002 363.63L331.608 403.38C360.764 418.707 394.963 393.916 389.387 361.4L374.948 277.214L436.115 217.592C459.737 194.56 446.681 154.413 414.042 149.67ZM412.286 193.151L344.695 259.035C340.673 262.956 338.838 268.605 339.787 274.141L355.743 367.172C356.544 371.844 351.683 375.372 347.489 373.169L263.942 329.246C258.971 326.633 253.03 326.633 248.059 329.246L164.512 373.169C160.316 375.374 155.457 371.843 156.258 367.172L172.214 274.141C173.163 268.605 171.328 262.956 167.306 259.035L99.7151 193.151C96.3201 189.842 98.1771 184.13 102.868 183.447L196.276 169.874C201.834 169.066 206.64 165.576 209.126 160.539L250.9 75.896C252.997 71.648 259.004 71.645 261.102 75.897L302.876 160.539C305.362 165.576 310.168 169.067 315.726 169.874L409.134 183.447C413.824 184.13 415.68 189.843 412.286 193.151Z"
                fill="#EE384E"
              ></path>
              <path
                d="M134.731 47.152L114.32 19.059C108.778 11.435 98.106 9.743 90.482 15.285C82.857 20.825 81.166 31.498 86.707 39.123L107.118 67.215C112.662 74.843 123.334 76.528 130.956 70.989C138.581 65.45 140.272 54.777 134.731 47.152Z"
                fill="#EE384E"
              ></path>
              <path
                d="M66.9971 298.907C64.0861 289.944 54.4581 285.034 45.4921 287.95L11.7961 298.899C2.83205 301.812 -2.07295 311.439 0.839055 320.404C3.75605 329.383 13.4001 334.271 22.3441 331.361L56.0401 320.412C65.0051 317.499 69.9101 307.871 66.9971 298.907Z"
                fill="#EE384E"
              ></path>
              <path
                d="M421.519 15.286C413.895 9.746 403.222 11.435 397.681 19.06L377.27 47.152C371.729 54.777 373.42 65.451 381.045 70.99C388.673 76.532 399.345 74.838 404.883 67.216L425.294 39.124C430.834 31.499 429.144 20.825 421.519 15.286Z"
                fill="#EE384E"
              ></path>
              <path
                d="M500.203 298.899L466.507 287.95C457.543 285.032 447.915 289.943 445.002 298.907C442.089 307.871 446.994 317.5 455.959 320.412L489.655 331.361C498.6 334.27 508.243 329.382 511.16 320.404C514.073 311.44 509.167 301.812 500.203 298.899Z"
                fill="#EE384E"
              ></path>
              <path
                d="M256 431.205C246.575 431.205 238.934 438.846 238.934 448.271V482.909C238.934 492.334 246.575 499.975 256 499.975C265.425 499.975 273.066 492.334 273.066 482.909V448.271C273.067 438.845 265.426 431.205 256 431.205Z"
                fill="#EE384E"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_43261_7491">
                <rect width="512" height="512" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <p className="text-sm lg:text-md xl:text-2xl  font-bold">
            فروش ویژه اکولایو مارکت
          </p>
          <span className="text-xs lg:text-[15px] text-accent ">
            Ecolive Market special sale
          </span>
        </div>
        <SwiperSlider />
      </div>
    </div>
  );
};

export default SpecialSale;
