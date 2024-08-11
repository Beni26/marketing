import React from "react";
import SpecialSale from "../features/SpecialSale";
import Categories from "../features/Categories";
import Brand from "../features/Brand";
import LatestProduct from "../features/product/LatestProduct";
import Sliders from "../features/Sliders";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <div className="container xl:max-w-screen-xl mb-20 pl-4 pr-4 md:pl-0 md:pr-0">
        <div className="grid grid-cols-3 mt-5 gap-4 mb-10">
          <div className="col-span-3 lg:col-span-2 rounded-md">
            <Sliders />
          </div>
          <div className="col-span-3 lg:col-span-1 space-y-3">
            <div className="flex items-center justify-around bg-rose-100 rounded-xl p-1">
              <div>
                <h2 className="text-accent font-bold mb-1">کنسرو غذای آماده</h2>
                <p className="text-md">محصولات کنسرو و غذای آماده</p>
              </div>
              <div>
                <img
                  src="https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/400969-1-min.png"
                  alt=""
                  className="w-28 lg:w-32"
                />
              </div>
            </div>
            <div className="flex items-center justify-around bg-rose-100 rounded-xl p-1">
              <div>
                <h2 className="text-accent font-bold mb-1"> محصولات لبنیات</h2>
                <p className="text-md">برترین محصولات لبنیات</p>
              </div>
              <div>
                <img
                  src="https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/400967.png"
                  alt=""
                  className="w-28 lg:w-32"
                />
              </div>
            </div>
            <div className="flex items-center justify-around bg-rose-100 rounded-xl p-1">
              <div>
                <h2 className="text-accent font-bold mb-1">
                  محصولات نظافت منزل
                </h2>
                <p className="text-md">برترین محصولات نظافت منزل</p>
              </div>
              <div>
                <img
                  src="https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/400977.png"
                  alt=""
                  className="w-28 lg:w-32"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center border border-cl_border rounded-md gap-3 p-5 group shadow-[0_5px_15px_0_rgba(242.9,242.99,242.9,0.70)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              className="group-hover:scale-[0.8] transition-all ease-in-out duration-300"
            >
              <path
                opacity="0.4"
                d="M26.778 6.85841L31.231 15.807C31.5591 16.4553 32.1852 16.9055 32.9074 17.0056L42.9095 18.4623C43.4936 18.5444 44.0237 18.8525 44.3818 19.3227C44.7359 19.787 44.8879 20.3753 44.8019 20.9536C44.7319 21.4338 44.5058 21.878 44.1598 22.2182L36.9122 29.2438C36.3821 29.734 36.1421 30.4604 36.2701 31.1708L38.0545 41.0478C38.2445 42.2404 37.4543 43.365 36.2701 43.5911C35.782 43.6691 35.2819 43.5871 34.8418 43.363L25.9199 38.7146C25.2577 38.3804 24.4755 38.3804 23.8134 38.7146L14.8915 43.363C13.7953 43.9453 12.437 43.5491 11.8268 42.4685C11.6008 42.0383 11.5208 41.5481 11.5948 41.0698L13.3792 31.1908C13.5072 30.4824 13.2651 29.7521 12.737 29.2618L5.48947 22.2402C4.62729 21.4078 4.60128 20.0371 5.43146 19.1747C5.44946 19.1567 5.46947 19.1367 5.48947 19.1166C5.83355 18.7665 6.28564 18.5444 6.77375 18.4863L16.7759 17.0276C17.496 16.9255 18.1222 16.4793 18.4523 15.827L22.7452 6.85841C23.1273 6.09002 23.9194 5.61178 24.7796 5.63179H25.0477C25.7938 5.72183 26.444 6.18407 26.778 6.85841Z"
                fill="#EE384E"
              ></path>
              <path
                d="M24.8095 38.4654C24.4221 38.4774 24.0446 38.5815 23.7052 38.7677L14.8269 43.4055C13.7406 43.9239 12.4406 43.5216 11.8315 42.4827C11.6059 42.0584 11.524 41.572 11.5999 41.0956L13.3731 31.2375C13.4929 30.5209 13.2533 29.7923 12.7321 29.2879L5.48131 22.2681C4.62064 21.4254 4.60467 20.0423 5.44737 19.1796C5.45935 19.1676 5.46933 19.1576 5.48131 19.1476C5.82478 18.8073 6.2681 18.5831 6.74536 18.5131L16.7559 17.0399C17.4808 16.9478 18.1098 16.4954 18.4293 15.8389L22.7806 6.75742C23.194 6.02482 23.9867 5.58846 24.8254 5.6345C24.8095 6.22899 24.8095 38.0611 24.8095 38.4654Z"
                fill="black"
              ></path>
            </svg>

            <div>
              <h2 className="text-accent font-bold mb-1">محصولات بروز</h2>
              <p className="text-md">جدیدترین های دنیا</p>
            </div>
          </div>

          <div className="flex items-center border border-cl_border rounded-md gap-3 p-5 group shadow-[0_5px_15px_0_rgba(242.9,242.99,242.9,0.70)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              className="group-hover:scale-[0.8] transition-all ease-in-out duration-300"
            >
              <path
                d="M42.8548 5.1566C41.8548 4.1346 40.3748 3.7566 38.9948 4.1566L6.81484 13.4546C5.35884 13.8586 4.32684 15.0126 4.04884 16.4766C3.76484 17.9686 4.75684 19.8646 6.05284 20.6566L16.1148 26.8006C17.1468 27.4326 18.4788 27.2746 19.3328 26.4186L30.8548 14.8966C31.4348 14.2946 32.3948 14.2946 32.9748 14.8966C33.5548 15.4746 33.5548 16.4166 32.9748 17.0166L21.4328 28.5386C20.5768 29.3946 20.4168 30.7226 21.0468 31.7566L27.1948 41.8566C27.9148 43.0546 29.1548 43.7366 30.5148 43.7366C30.6748 43.7366 30.8548 43.7366 31.0148 43.7146C32.5748 43.5166 33.8148 42.4546 34.2748 40.9546L43.8148 9.0166C44.2348 7.6566 43.8548 6.1766 42.8548 5.1566Z"
                fill="black"
              ></path>
              <path
                opacity="0.4"
                d="M18.9028 38.2844C19.4868 38.8704 19.4868 39.8204 18.9028 40.4064L16.1708 43.1364C15.8788 43.4304 15.4948 43.5764 15.1108 43.5764C14.7268 43.5764 14.3428 43.4304 14.0508 43.1364C13.4648 42.5504 13.4648 41.6024 14.0508 41.0164L16.7808 38.2844C17.3668 37.7004 18.3168 37.7004 18.9028 38.2844ZM17.3354 30.7084C17.9194 31.2944 17.9194 32.2444 17.3354 32.8304L14.6034 35.5604C14.3114 35.8544 13.9274 36.0004 13.5434 36.0004C13.1594 36.0004 12.7754 35.8544 12.4834 35.5604C11.8974 34.9744 11.8974 34.0264 12.4834 33.4404L15.2134 30.7084C15.7994 30.1244 16.7494 30.1244 17.3354 30.7084ZM9.81299 28.3236C10.397 28.9096 10.397 29.8596 9.81299 30.4456L7.08098 33.1756C6.78898 33.4696 6.40498 33.6156 6.02098 33.6156C5.63698 33.6156 5.25298 33.4696 4.96098 33.1756C4.37498 32.5896 4.37498 31.6416 4.96098 31.0556L7.69098 28.3236C8.27698 27.7396 9.22699 27.7396 9.81299 28.3236Z"
                fill="#EE384E"
              ></path>
            </svg>
            <div>
              <h2 className="text-accent font-bold mb-1">ارسال رایگان</h2>
              <p className="text-md"> خرید های بالای 500 تومان</p>
            </div>
          </div>

          <div className="flex items-center border border-cl_border rounded- gap-3 p-5 group shadow-[0_5px_15px_0_rgba(242.9,242.99,242.9,0.70)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              className="group-hover:scale-[0.8] transition-all ease-in-out duration-300"
            >
              <g opacity="0.4">
                <path
                  d="M30.6621 11.6111C29.71 11.4352 28.8356 12.0428 28.6543 12.9721C28.4731 13.9015 29.0826 14.8089 30.0088 14.9907C32.7973 15.5344 34.9504 17.6929 35.4962 20.491C35.6516 21.2964 36.3606 21.884 37.1773 21.884C37.2868 21.884 37.3964 21.874 37.5079 21.854C38.4341 21.6682 39.0436 20.7628 38.8623 19.8314C38.0477 15.6523 34.8309 12.4245 30.6621 11.6111Z"
                  fill="#EE384E"
                ></path>
                <path
                  d="M30.5376 4.64704C30.0915 4.58309 29.6433 4.715 29.2868 4.9988C28.9203 5.2866 28.6912 5.70232 28.6414 6.168C28.5359 7.10935 29.2151 7.96077 30.1552 8.06669C36.6385 8.7902 41.6778 13.8407 42.4068 20.3443C42.5044 21.2157 43.2354 21.8732 44.1078 21.8732C44.1735 21.8732 44.2372 21.8692 44.303 21.8612C44.7591 21.8113 45.1654 21.5854 45.4523 21.2257C45.7371 20.8659 45.8665 20.4182 45.8148 19.9605C44.9065 11.8461 38.6263 5.54842 30.5376 4.64704Z"
                  fill="#EE384E"
                ></path>
              </g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.8889 26.576C31.8671 34.5519 33.677 25.3246 38.7567 30.4008C43.654 35.2967 46.4687 36.2776 40.2639 42.4806C39.4867 43.1052 34.5487 50.6197 17.1946 33.2705C-0.161517 15.9192 7.34861 10.9761 7.97338 10.1991C14.1932 3.97888 15.1572 6.80995 20.0544 11.7058C25.1342 16.7842 15.9108 18.6 23.8889 26.576Z"
                fill="black"
              ></path>
            </svg>
            <div>
              <h2 className="text-accent font-bold mb-1">پشتیبانی سریع </h2>
              <p className="text-md"> پشتیبانی 24 ساعته</p>
            </div>
          </div>

          <div className="flex items-center border border-cl_border rounded-md gap-3 p-5 group shadow-[0_5px_15px_0_rgba(242.9,242.99,242.9,0.70)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              className="group-hover:scale-[0.8] transition-all ease-in-out duration-300"
            >
              <path
                d="M33.853 6.63118C40.7454 6.63118 44.8183 10.5884 44.8183 17.3069V17.3814H36.349C32.4077 17.3884 29.2148 20.5015 29.2077 24.3443C29.2023 28.1958 32.3988 31.3228 36.349 31.328H44.8254V31.9399C44.8254 38.6583 40.7526 42.6312 33.8601 42.6312H15.7926C8.89833 42.6312 4.82544 38.6583 4.82544 31.9399V17.3069C4.82544 10.5884 8.89833 6.63118 15.7926 6.63118H33.853ZM25.5917 14.381H14.3046C13.4654 14.3845 12.7846 15.0483 12.781 15.8682C12.7774 16.6916 13.4601 17.3624 14.3046 17.3658H25.6059C26.4503 17.3624 27.133 16.6916 27.1295 15.8665C27.1259 15.0431 26.4361 14.3775 25.5917 14.381Z"
                fill="black"
              ></path>
              <path
                opacity="0.4"
                d="M32.9003 25.2245C33.3185 27.1269 34.9864 28.4653 36.8906 28.4305H43.3905C44.1828 28.4305 44.8254 27.7744 44.8254 26.9633V21.9002C44.8237 21.0908 44.1828 20.4329 43.3905 20.4312H36.7376C34.5716 20.4381 32.822 22.2361 32.8254 24.4517C32.8254 24.7111 32.851 24.9704 32.9003 25.2245Z"
                fill="#EE384E"
              ></path>
              <path
                d="M36.8254 26.4312C37.93 26.4312 38.8254 25.5358 38.8254 24.4312C38.8254 23.3266 37.93 22.4312 36.8254 22.4312C35.7209 22.4312 34.8254 23.3266 34.8254 24.4312C34.8254 25.5358 35.7209 26.4312 36.8254 26.4312Z"
                fill="black"
              ></path>
            </svg>
            <div>
              <h2 className="text-accent font-bold mb-1"> پرداخت امن</h2>
              <p className="text-md">همه کارت های عضو شتاب </p>
            </div>
          </div>
        </div>
      </div>
      <SpecialSale />
      <div className="container xl:max-w-screen-xl mb-20 pl-4 pr-4 md:pl-0 md:pr-0">
        <div className="grid md:grid-cols-3 gap-5  ">
          <img
            className="rounded-xl w-[90%] lg:w-auto m-auto transform transition-transform duration-500 hover:translate-y-[-12px] cursor-pointer"
            src="https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/640dcde70face.jpg"
            alt=""
            
          />
          <img
            className="rounded-xl w-[90%] lg:w-auto m-auto transform transition-transform duration-500 hover:translate-y-[-12px] cursor-pointer"
            src="https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/640dce0859e3a.jpg"
            alt=""
          />
          <img
            className="rounded-xl w-[90%] lg:w-auto m-auto transform transition-transform duration-500 hover:translate-y-[-12px] cursor-pointer"
            src="https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/640dce2b1393b.jpg"
            alt=""
          />
        </div>
      </div>

      <LatestProduct />
      <Categories />
      <div className="container xl:max-w-screen-xl mb-20 pl-4 pr-4 md:pl-0 md:pr-0">
        <img
          src="https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/banner.jpg"
          className="rounded-lg"
          alt=""
        />
      </div>
      <Brand />
    </div>
  );
};

export default Home;
