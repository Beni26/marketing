import { Link } from "react-router-dom";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { toPersianNumbersWithComma } from "../../utils/topersianNumbers";
import truncateText from "../../utils/truncateText";

const ItemProduct = () => {
  return (
    <div className="relative    group  transition-all duration-500 h-[354px] w-full">
      <div className="text-right border border-cl_border p-5 rounded-3xl absolute w-full h-full left-0 top-0 bottom-0 bg-white group-hover:h-[410px] group-hover:z-20">
        <div className="relative w-[203px] h-[155px]">
          <img
            src="https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/New-Project-32.png"
            className="cursor-pointer"
          />
          <span className="bg-primary text-white font-bold text-xs p-0.5 pr-2 pl-2 rounded-lg absolute top-0 right-0 leading-[22px]">
            {toPersianNumbersWithComma(10)} -
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            to=""
            className="text-[15px] hover:text-link_hover hover:underline hover:cursor-pointer"
          >
            مواد غذایی
          </Link>
          <Link
            to=""
            className="text-[16px] text-accent font-[600] hover:text-primary hover:cursor-pointer"
          >
            {truncateText("دانه قهوه اسپرسو بن مانو جورنو – 250 گرم", 30)}
          </Link>
        </div>
        <div className="mt-2 relative">
          <div className="text-primary font-bold text-xl">
            {toPersianNumbersWithComma(110000)} تومان
          </div>
          <del className="text-md font-bold text-gray-300">
            {toPersianNumbersWithComma(117000)} تومان
          </del>
          <div className="absolute w-full flex items-center justify-between mt-3 top-[-23px] group-hover:top-0 group-hover:relative transition-all duration-200 z-10">
            <div className="flex items-center justify-center invisible group-hover:visible ">
              <button className="flex items-center justify-center w-9 h-10 border border-cl_border rounded-r-md bg-white">
                +
              </button>
              <div className="flex items-center justify-center w-9 h-10 border-t border-b border-cl_border bg-gray-100 text-sm">
                {toPersianNumbersWithComma(4)}
              </div>
              <button className="flex items-center justify-center w-9 h-10 border border-cl_border rounded-l-md bg-white">
                -
              </button>
            </div>
            <div className="bg-gray-100 h-[50px] w-[50px] flex items-center justify-center rounded-xl rounded-bl-[28px] font-bold text-gray-400 transition-all ease-in-out duration-500 group-hover:bg-primary group-hover:text-white hover:rounded-bl-xl cursor-pointer">
              <HiMiniShoppingBag />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ItemProduct;

