import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import MenuItem from "./MenuItem";
import { FaChevronLeft } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { MenuProps } from "./type";
import MenuPegs from "./MenuPegs";

const Menu: React.FC<MenuProps> = ({ categories = [], isLoading }) => {
  const [openCategory, setOpenCategory] = useState<string | null>("");

  const handleMouseEnter = (categoryId: string) => {
    setOpenCategory(categoryId);
  };

  const handleMouseLeave = () => {
    setOpenCategory(null);
  };
  return (
    <div className=" items-center bg-gray-100 ml-12 mr-12 pl-7 pr-7   rounded-b-xl hidden lg:flex">
      <div className="h-full">
        <ul className=" w-60 ">
          <li className=" relative group cursor-pointer p-2">
            <p className="flex items-center gap-2 font-bold text-accent p-2">
              <FiMenu /> دسته بندی محصولات
            </p>
            {!isLoading && categories.length > 0 && (
              <ul className="absolute right-0 bg-white border rounded-lg w-full top-[56px]  hidden group-hover:block z-30">
                {categories.map((category, index) => (
                  <li
                    key={category.id}
                    className={`${
                      categories.length !== ++index ? "border-b-2" : ""
                    } relative p-2 pt-3 pb-3   border-cl_border cursor-pointer `}
                    onMouseEnter={() => handleMouseEnter(category.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex items-center justify-between hover:text-primary">
                      <span className="flex items-center gap-2">
                        <IoFastFoodOutline />
                        {category.title}
                      </span>
                      {category.subCategory &&
                        category.subCategory.length > 0 && (
                          <FaChevronLeft className="text-xs" />
                        )}
                    </div>
                    {openCategory === category.id && category.subCategory && (
                      <MenuItem subCategory={category.subCategory} />
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="">
        <MenuPegs />
      </div>
    </div>
  );
};

export default Menu;
