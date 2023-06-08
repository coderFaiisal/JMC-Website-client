import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Events from "../../Pages/Events/Events/Events";
import Showreel from "../../Pages/Showreel/Showreel/Showreel";
import NotFound from "../../Pages/NotFound/NotFound";
import Home from "../../Pages/Home/Home/Home";
import MediaBuzzHome from "../../Pages/MediaBuzz/MediaBuzzHome/MediaBuzzHome";
import MediaBuzzDetails from "../../Pages/MediaBuzz/MediaBuzzDatails/MediaBuzzDetails";
import Register from "../../Pages/Register/Register";
import SignIn from "../../Pages/Login/SignIn";
import EventDetails from "../../Pages/Events/EventDetails/EventDetails";
import DashboardLayout from "../../Layout/DashboardLayout";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Contact from "../../Pages/Shared/Footer/FooterComponents/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/mediaBuzz",
        element: <MediaBuzzHome></MediaBuzzHome>,
      },
      {
        path: "/mediaBuzz/:id",
        element: <MediaBuzzDetails></MediaBuzzDetails>,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/events/:id",
        element: <EventDetails></EventDetails>,
      },

      {
        path: "/showreel",
        element: <Showreel></Showreel>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/allUsers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);

export default router;
