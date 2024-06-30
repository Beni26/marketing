import React, { useEffect, useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import useGetHome from "../hooks/UseGetHome";
import { lists } from '../utils/MenuPages';


type SubTabs = {
  subLists: { title: string; id?: string }[];
};

const List: React.FC<SubTabs> = ({ subLists }) => {
  return (
    <ul className="pr-8 pl-8 ">
      {subLists.map((subList) => (
        <li className=" border-cl_border border-b-2" key={subList.id}>
          <Link to="" className="w-full block h-full pt-4 pb-4">
            {subList.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

type HamburgerMenuProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, setIsOpen }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<string>("mainMenu");
  const { categories } = useGetHome();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`${
          isOpen ? "" : "translate-x-96 "
        } bg-white w-96 top-0 right-0 fixed h-full overflow-hidden transition-all duration-500 ease-in-out z-10`}
      >
        <div className="w-full flex  bg-gray-100 h-14 items-center pr-8 pl-8 justify-between">
          <button
            className={`flex items-center justify-center text-accent font-bold relative h-full content-center after:transition-all after:ease-in-out after:duration-200   after:absolute after:bottom-0   after:h-[2px]   after:bg-primary  ${
              activeTab === "mainMenu" ? "after:w-full" : "after:w-0"
            }`}
            onClick={() => setActiveTab("mainMenu")}
          >
            منو اصلی
          </button>
          <button
            className={`flex items-center justify-center text-accent font-bold relative h-full content-center after:transition-all after:ease-in-out after:duration-200   after:absolute after:bottom-0   after:h-[2px]   after:bg-primary  ${
              activeTab === "productCategories" ? "after:w-full" : "after:w-0"
            }`}
            onClick={() => setActiveTab("productCategories")}
          >
            دسته بندی محصولات
          </button>

          <div
            className="w-8 h-8  flex items-center justify-center cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <IoCloseSharp />
          </div>
        </div>

        {activeTab === "mainMenu" && <List subLists={lists} />}
        {activeTab === "productCategories" && <List subLists={categories} />}
      </nav>
      {/* <div
        className={` ${
          isOpen ? "" : "hidden"
        }fixed top-0 before: right-0 w-full h-full bg-black bg-opacity-60`}
      ></div> */}
    </>
  );
};

export default HamburgerMenu;
// pr-8 pl-8 pt-5
