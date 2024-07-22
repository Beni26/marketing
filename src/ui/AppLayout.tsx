import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
type AppLayoutProps = {
  children?:React.ReactNode;
}
const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        {children || <Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
