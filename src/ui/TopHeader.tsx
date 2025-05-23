import React, {  useState } from "react";
import logo from "../assets/images/logo.png"; // Import the image
import { CiShoppingCart } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import HamburgerMenu from "./HamburgerMenu";
import Profile from "../features/User/Profile";
import CartDrawer from "../features/Orders/CartDrawer";
import MenuList from "../features/Menu/MenuList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { toPersianNumbers } from "../utils/topersianNumbers";
import { setIsOpenCartDrawer } from "../features/ShareSlice/drawerSlice";
import useGetCart from "../features/Orders/useGetCart";
import SearchProduct from "../features/product/SearchProduct";

const TopHeader: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("mainMenu");
  // const items = useSelector((state: RootState) => state.cart.items);
  const isOpenCartDrawer = useSelector((state: RootState) => state.drawer.isOpenCartDrawer);
  const CheckLogin = useSelector((state: RootState) => state.auth.isLoggedIn);

  const dispatch = useDispatch();
  const discount = {
    data:null
  }
  // const formData = new FormData();
  // formData.append("body", JSON.stringify(data));

  const { cartItems } = useGetCart({discount,CheckLogin});
  // useEffect(() => {
  //   fetchCart(formData); // Trigger the fetch when the component mounts
  // }, [fetchCart]);

  // console.log(cartItems);

  return (
    <div className="grid grid-cols-[auto_1fr_auto] lg:grid-cols-[auto_1fr_1fr_auto] max-h-[200px] bg-white gap-5 items-center pt-5 pb-5 rounded-lg shadow-[0_4px_60px_0_rgba(0,0,0,0.039)]">
      <button
        className="bg-gray-100 p-3 rounded-lg ml-2 text-2xl lg:hidden"
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        <RiMenu3Line />
      </button>
      <div className="m-auto">
        <img className="" width={145} height={59} src={logo} alt="logo" />
      </div>
      <div className="hidden lg:block">
        {/* <TextFieldSearch
          name="search"
          onChange={(e) => e.target.value}
          value=""
          placeholder="جستجوی محصولات..."
        /> */}
        <SearchProduct />
      </div>
      <div className="justify-self-end flex">
        <Profile />
        <button
          className="bg-gray-100 p-3 rounded-lg text-2xl relative"
          onClick={() => dispatch(setIsOpenCartDrawer(!isOpenCartDrawer))}
        >
          <CiShoppingCart />
          <span className="absolute -top-9 -left-6 flex items-center justify-center bg-primary text-white font-bold text-xs rounded-full w-6 h-6">
            {toPersianNumbers(cartItems.orderItems.length )}
          </span>
        </button>
      </div>
      <div className="hidden lg:flex bg-custom-pattern w-48 relative h-full bg-no-repeat items-center justify-between">
        <div className="flex flex-col h-full justify-center absolute right-3 -top-1">
          <div>
            <span className="text-xs">021</span>
            <span className="text-primary text-xl font-bold">33556677</span>
          </div>
          <div className="text-xs">با ما در تماس باشید</div>
        </div>
        <div className="w-11 h-11 rounded-full left-1 top-1 bg-black absolute text-white text-2xl flex justify-center items-center transition-all duration-300 ease-in-out transform hover:rotate-44">
          <IoCall />
        </div>
      </div>
      <HamburgerMenu
        isOpen={isOpenMenu}
        setIsOpen={setIsOpenMenu}
        openFrom="right"
      >
        <MenuList
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setIsOpen={setIsOpenMenu}
        />
      </HamburgerMenu>

      <HamburgerMenu
        isOpen={isOpenCartDrawer}
        setIsOpen={(open) => dispatch(setIsOpenCartDrawer(open))}
        openFrom="left"
      >
        <CartDrawer setIsOpen={(open) => dispatch(setIsOpenCartDrawer(open))} carts={cartItems} />
      </HamburgerMenu>
    </div>
  );
};

export default TopHeader;
