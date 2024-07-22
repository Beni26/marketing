import { Outlet } from "react-router-dom";
import AppLayout from "../../../ui/AppLayout";
import { DashboardMenu } from "./DashboardMenu";

const ProfileLayout = () => {
  return (
    <AppLayout>
      <div className="container xl:max-w-screen-xl pl-4 pr-4 md:pl-0 md:pr-0">
        <div className="grid grid-cols-7 gap-10 mt-10 mb-10">
          <div className="col-span-2">
            <DashboardMenu />
          </div>
          <div className="col-span-5">
            <Outlet />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};
export default ProfileLayout;
