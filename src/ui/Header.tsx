import Menu from "../features/Menu";

import useGetHome from "../hooks/UseGetHome";
import TopHeader from "./TopHeader";

const Header = () => {
  const {categories,isLoading}=useGetHome()
  return (
    <header className="mt-5 container xl:max-w-screen-xl" >
      <TopHeader />
      <Menu  categories={categories} isLoading={isLoading}/>
    </header>
  );
};

export default Header;
