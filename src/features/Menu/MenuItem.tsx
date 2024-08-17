import { Link } from "react-router-dom";
import { MenuItemProps } from "./type";

function MenuItem({ subCategory }: MenuItemProps) {
  return (
    <ul className="absolute -left-full w-full bg-white border top-0 ">
      {subCategory.map((sub, index) => (
        <Link to={`/shop/${sub.id}`} key={sub.id}>
          <li
            className={`${
              subCategory.length !== ++index ? "border-b-2" : ""
            } p-2 pt-3 pb-3  border-cl_border`}
          >
            {sub.title}
          </li>
        </Link>
      ))}
    </ul>
  );
}
export default MenuItem;
