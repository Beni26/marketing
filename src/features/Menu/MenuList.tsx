import { Link } from "react-router-dom";
import useGetHome from "../../hooks/UseGetHome";
import { lists } from "../../utils/MenuPages";
import { IoCloseSharp } from "react-icons/io5";

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
type MenuListProps = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const MenuList: React.FC<MenuListProps> = ({
  activeTab,
  setActiveTab,
  setIsOpen,
}) => {
  const { categories } = useGetHome();
  return (
    <div>
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
    </div>
  );
};
export default MenuList;
