import { IoIosArrowBack, IoMdArrowRoundBack } from "react-icons/io";
import {
  PiChatCircleDotsLight,
  PiCodesandboxLogoThin,
  PiCreditCard,
} from "react-icons/pi";

import { VscReferences } from "react-icons/vsc";
import BrandSwiper from "../features/Brand/BrandSwiper";
import Comments from "../features/Comments";

const AboutUs = () => {
  return (
    <div className="container xl:max-w-screen-xl mb-20 pl-4 pr-4 ">
      <p className="mt-14 mb-14 text-xl">درباره ما</p>
      <div className="grid lg:grid-cols-2 mb-10 gap-20">
        <div>
          <div className="space-y-2">
            <p className="text-primary font-bold text-lg">چرا ما؟</p>
            <p className="font-bold text-2xl">در مورد کیفیت فروشگاه ما</p>
            <p className="text-primary font-bold text-2xl">بیشتر بدونید !</p>
          </div>
          <p className="text-accent leading-7 mt-7 mb-7">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
          <button className="flex items-center gap-3 font-bold text-primary bg-pink-100 p-4 rounded-xl hover:translate-y-[-8px] transition-all ease-in-out duration-300">
            تماس با ما <IoMdArrowRoundBack />
          </button>
        </div>
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col gap-8 items-center">
            <div className="w-full lg:w-56 h-56 p-4 flex flex-col gap-4 justify-center items-center overflow-hidden  rounded-lg shadow-[10px_10px_45px_40px_rgba(242.9,242.99,242.9,0.70)]">
              <div className="w-14 h-14 overflow-hidden rounded-full text-4xl flex justify-center items-center bg-pink-200 text-primary">
                <PiCodesandboxLogoThin />
              </div>
              <h2 className="text-lg font-bold">امکان تحویل اکسپرس</h2>
              <p className="text-xs text-center">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
              </p>
            </div>
            <div className="w-full lg:w-56 h-56 p-4 flex flex-col gap-4 justify-center items-center overflow-hidden  rounded-lg shadow-[10px_10px_45px_40px_rgba(242.9,242.99,242.9,0.70)]">
              <div className="w-14 h-14 overflow-hidden rounded-full text-4xl flex justify-center items-center bg-pink-200 text-primary">
                <PiChatCircleDotsLight />
              </div>
              <h2 className="text-lg font-bold">7روز هفته، 24 ساعته</h2>
              <p className="text-xs text-center">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center mt-10">
            <div className="w-full lg:w-56 h-56 p-4 flex flex-col gap-4 justify-center items-center overflow-hidden  rounded-lg shadow-[10px_10px_45px_40px_rgba(242.9,242.99,242.9,0.70)]">
              <div className="w-14 h-14 overflow-hidden rounded-full text-4xl flex justify-center items-center bg-pink-200 text-primary">
                <PiCreditCard />
              </div>
              <h2 className="text-lg font-bold">امکان پرداخت در محل</h2>
              <p className="text-xs text-center">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
              </p>
            </div>
            <div className="w-full lg:w-56 h-56 p-4 flex flex-col gap-4 justify-center items-center overflow-hidden  rounded-lg shadow-[10px_10px_45px_40px_rgba(242.9,242.99,242.9,0.70)]">
              <div className="w-14 h-14 overflow-hidden rounded-full text-4xl flex justify-center items-center bg-pink-200 text-primary">
                <VscReferences />
              </div>
              <h2 className="text-lg font-bold"> 7روزضمانت بازگشت کالا</h2>
              <p className="text-xs text-center">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <BrandSwiper />
      </div>
      <div className="mt-20 text-center">
        <div className="space-y-4">
          <p className="text-primary text-xl ">نظرات شما</p>
          <h1 className="text-3xl text-accent font-bold">
            مشتریان ما چه می گویند؟
          </h1>
          <p className="text-accent">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و است.
          </p>
        </div>
      </div>
      <div className="lg:bg-swiperBg pt-28 pb-28  bg-no-repeat bg-center bg-[length:100%_100%] lg:bg-[length:60%_auto] ">
        <Comments />
      </div>
      <div className="rounded-xl bg-instagram bg-[top_center] bg-cover  bg-no-repeat  w-full pt-10 pb-10 pr-5 pl-5 mb-36">
        <div className="relative flex justify-center text-white font-bold items-center">
          <img
            src="https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/mobile.png"
            className="absolute right-[-68px] hidden md:block"
            alt=""
          />
          <div className="p-3 flex items-center gap-3">
            <p>ما روزانه مطالب آموزشی جالب در اینستاگرام منتشر می‌کنیم!</p>
            <span className="bg-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer">
              <IoIosArrowBack className="text-black" />
            </span>
          </div>
          <img
            src="https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/Instagram-1.png"
            className="absolute left-0 filter blur-sm "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
