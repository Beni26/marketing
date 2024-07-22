import { AiOutlineDashboard } from "react-icons/ai";
import { BsFillBasket2Fill } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { CustomNavLink } from "../../../ui/CustomNavLink";

export const DashboardMenu = () => {
  return (
    <div className="  mb-20">
      <ul>
        <li className="  pt-4 pb-4 border-b border-t hover:text-primary transition-all duration-200 cursor-pointer group">
          <CustomNavLink
            link="/my-account"
            text="پیشخوان"
            icon={AiOutlineDashboard}
          />
        </li>
        <li className="  items-center pt-4 pb-4 border-b hover:text-primary transition-all duration-200cursor-pointer group">
          <CustomNavLink link="/my-account/orders" text="سفارش ها" icon={BsFillBasket2Fill} />
        </li>
        <li className="  items-center pt-4 pb-4 border-b hover:text-primary transition-all duration-200cursor-pointer group">
          <CustomNavLink text="آدرس " link="/" icon={IoHomeOutline} />
        </li>
        <li className="  items-center pt-4 pb-4 border-b hover:text-primary transition-all duration-200cursor-pointer group">
          <CustomNavLink text="جزئیات حساب" link="/" icon={VscAccount} />
        </li>
        <li className=" items-center pt-4 pb-4 border-b hover:text-primary transition-all duration-200cursor-pointer group">
          <CustomNavLink text="خروج" link="/" icon={IoIosLogOut} />
        </li>
      </ul>
    </div>
  );
};
