import { useEffect, useRef, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { HiOutlineUser } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuLogIn, LuShoppingCart } from "react-icons/lu";
import { TbLogout } from "react-icons/tb";
import useProfile from "./useProfile";
import { Link } from "react-router-dom";
import UseLogOut from "../authentication/UseLogOut";

const Profile = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, data } = useProfile();
  const logout = UseLogOut();

  const handleLogout = () => {
      logout();
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);
  return (
    <div>
      {!isLoading && data ? (
        <div className="relative">
          <button
            className="bg-gray-100 p-3 rounded-lg ml-2 text-2xl hidden lg:flex  items-center justify-between"
            ref={buttonRef}
            onClick={() => setIsOpen(!isOpen)}
          >
            <HiOutlineUser className="" />
            <IoMdArrowDropdown className="text-sm" />
          </button>
          {isOpen && (
            <div
              className="absolute w-64 bg-white left-0 border  rounded-lg z-10 overflow-hidden"
              ref={profileRef}
            >
              <ul>
                <li className="p-3 border-b hover:bg-slate-100 cursor-pointer flex items-center gap-4">
                  <CgProfile /> {data.fullName ? data.fullName : "کاربر میهمان"}
                </li>
                <li className="p-3 border-b hover:bg-slate-100 cursor-pointer flex items-center gap-4">
                  <LuShoppingCart /> سفارش ها
                </li>
                <li
                  className="p-3  hover:bg-slate-100 cursor-pointer flex items-center gap-4"
                  onClick={handleLogout}
                >
                  <TbLogout /> خروج از حساب
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <Link
          to="/auth"
          title="ورود"
          className="bg-gray-100 p-3 rounded-lg ml-2 text-2xl hidden lg:flex  items-center justify-between"
        >
          <LuLogIn />
        </Link>
      )}
    </div>
  );
};

export default Profile;
