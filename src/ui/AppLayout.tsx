import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout: React.FC = () => {
  return (
    <div >
      <Header />
      {/* <div>App Sidebar</div> */}
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
