import React from "react";
import Navigationbar from "../Pages/Shared/Navbar/Navigationbar";
import { Link, Outlet } from "react-router-dom";
import {
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  CalendarDaysIcon,
  UserGroupIcon
} from "@heroicons/react/24/solid";

const DashboardLayout = () => {
  const data = [
    {
      label: "Dashboard",
      value: "dashboard",
      icon: Square3Stack3DIcon,
      route: "dashboard",
    },
    {
      label: "All Users",
      value: "allUsers",
      icon: UserGroupIcon,
      route: "dashboard/allUsers",
    },
    {
      label: "Upcoming Event",
      value: "upcomingEvent",
      icon: CalendarDaysIcon,
      route: "dashboard/upcomingEvent",
    },
    {
      label: "Previous Event",
      value: "previousEvent",
      icon: CalendarDaysIcon,
      route: "dashboard/previousEvent",
    },
    {
      label: "Media Buzz",
      value: "mediaBuzz",
      icon: CalendarDaysIcon,
      route: "dashboard/mediaBuzz",
    },
  ];

  return (
    <div>
      <Navigationbar></Navigationbar>
      <Tabs value="dashboard" className="flex flex-col md:flex-row">
        <TabsHeader className="flex flex-col w-1/2 md:w-full lg:w-60 lg:sticky md:h-screen mx-auto">
          {data.map(({ label, value, icon, route }) => (
            <Tab key={value} value={value} className="place-items-start h-10 z-0">
              <Link to={`/${route}`}>
                <div className="flex items-center gap-2 w-56 md:w-72 lg:w-56">
                  {React.createElement(icon, { className: "w-5 h-5" })}
                  <p>{label}</p>
                </div>
              </Link>
            </Tab>
          ))}
        </TabsHeader>
        <Outlet></Outlet>
      </Tabs>
    </div>
  );
};

export default DashboardLayout;
