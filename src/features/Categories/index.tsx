import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
type categories = {
  title: string;
  img: string;
}[];

const categories: categories = [
  {
    title: "بیسکویت و اسنک",
    img: "https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/400972-min.png",
  },
  {
    title: "صبحانه و لبنیات",
    img: "https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/400971-min.png",
  },
  {
    title: "غذای منجمد",
    img: "https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/400968-min.png",
  },
  {
    title: "مواد غذایی",
    img: "https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/400966-min.png",
  },
  {
    title: "میوه ها و سبزیجات",
    img: "https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/400976-1-min.png",
  },
  {
    title: "نوشیدنی ها",
    img: "https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/400970-min.png",
  },
  {
    title: "گوشت و مرغ",
    img: "https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/400969-1-min.png",
  },
];

const index = () => {
  return (
    <div className="container xl:max-w-screen-xl  mb-20 pl-4 pr-4 md:pl-0 md:pr-0">
      <div className="flex items-center justify-center py-4 gap-3 mb-8">
        <div className="flex-grow border-t border-gray-300 "></div>
        <div className="text-center">
          <h2 className="text-lg font-bold">دسته بندی های اکو لایو مارکت</h2>
          <p className="text-sm font-normal">Ecolive Market categories</p>
        </div>
        <div className="flex-grow border-t border-gray-300 "></div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper categories"
      >
        {categories.map((category,index) => (
          <SwiperSlide key={index}>
            <div
              className="relative text-center w-36 cursor-pointer group"
              key={category.img}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-pink-200 w-[110px] h-[110px] rounded-full transform group-hover:scale-125 group-hover:-translate-y-2 transition-transform duration-300"></div>
              </div>
              <div className="relative z-10">
                <img src={category.img} alt="" />
                <p className="text-sm"> {category.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
};

export default index;
