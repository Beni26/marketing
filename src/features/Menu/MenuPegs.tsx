import { Link } from "react-router-dom";
import { lists } from "../../utils/MenuPages";

function MenuPegs() {
  return (
    <ul className="flex gap-7 ">
      {lists.map((list, index) => (
        <li
          className="p-2 pr-0 relative  after:absolute after:bottom-0  after:right-0  after:h-[1px] after:w-0  after:bg-primary hover:after:w-full after:transition-all ease-in-out after:duration-300"
          key={index}
        >
          <Link to={list.link}>{list.title}</Link>
        </li>
      ))}
    </ul>
  );
}
export default MenuPegs;


