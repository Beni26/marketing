import { MenuItemProps } from "./type";

function MenuItem({ subCategory }: MenuItemProps) {
  return (
    <ul className="absolute -left-full w-full bg-white border top-0 ">
      {subCategory.map((sub,index) => (
        <li key={sub.id} className={`${subCategory.length !== ++index ? "border-b-2" : ""} p-2 pt-3 pb-3  border-cl_border`}>{sub.title}</li>
      ))}
    </ul>
  );
}
export default MenuItem;





