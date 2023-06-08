import React from "react";
import Navigationbar from "../Pages/Shared/Navbar/Navigationbar";
import { Outlet } from "react-router-dom";
import SideNav from "../Pages/Shared/SideNav/SideNav";

const DashboardLayout = () => {
  return (
    <div>
      <Navigationbar></Navigationbar>
      <div className="grid md:grid-cols-6 lg:grid-cols-5">
        <div className="md:col-span-2 lg:col-span-1 ">
          <SideNav></SideNav>
        </div>
        <div className="md:col-span-4 lg:col-span-4">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
