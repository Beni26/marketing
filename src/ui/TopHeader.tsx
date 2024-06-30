import logo from "../assets/images/logo.png"; // Import the image
import TextFieldSearch from "./TextFieldSearch";
import { CiShoppingCart } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import Profile from "../features/User/Profile";



const TopHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid grid-cols-[auto_1fr_auto] lg:grid-cols-[auto_1fr_1fr_auto] max-h-[200px] bg-white gap-5  items-center p-5 rounded-lg shadow-[0_4px_60px_0_rgba(0,0,0,0.039)]">
      <button
        className="bg-gray-100 p-3 rounded-lg ml-2 text-2xl   lg:hidden "
        onClick={() => setIsOpen(true)}
      >
        <RiMenu3Line />
      </button>
      <div className="m-auto ">
        <img className="" width={145} height={59} src={logo} alt="logo" />
      </div>
      <div className="hidden lg:block">
        <TextFieldSearch
          name="search"
          onChange={(e) => e.target.value}
          value=""
          placeholder="جستجوی محصولات..."
        />
      </div>
      <div className="justify-self-end flex">
        <Profile />
        <button className="bg-gray-100 p-3 rounded-lg text-2xl relative">
          <CiShoppingCart />
          <span className="absolute -top-9 -left-6 flex items-center justify-center bg-primary text-white font-bold text-xs rounded-full w-6 h-6">
            10
          </span>
        </button>
      </div>
      <div className="hidden lg:flex bg-custom-pattern w-48 relative  h-full bg-no-repeat  items-center justify-between ">
        <div className="flex flex-col h-full justify-center absolute right-3 -top-1">
          <div>
            <span className="text-xs">021</span>
            <span className="text-primary text-xl font-bold">33556677</span>
          </div>
          <div className="text-xs">با ما در تماس باشید</div>
        </div>
        <div className=" w-11 h-11  rounded-full  left-1 top-1 bg-black absolute text-white text-2xl flex justify-center items-center  transition-all duration-300 ease-in-out transform hover:rotate-44">
          <IoCall />
        </div>
      </div>
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default TopHeader;
