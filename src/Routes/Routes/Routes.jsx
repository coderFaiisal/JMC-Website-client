import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Events from "../../Pages/Events/Events/Events";
import Showreel from "../../Pages/Showreel/Showreel/Showreel";
import NotFound from "../../Pages/NotFound/NotFound";
import Home from "../../Pages/Home/Home/Home";

import SignUp from "../../Pages/SignUp/SignUp";
import SignIn from "../../Pages/SignIn/SignIn";
import DashboardLayout from "../../Layout/DashboardLayout";
import Contact from "../../Pages/Shared/Footer/FooterComponents/Contact";
import ReportIssues from "../../Pages/Shared/Footer/FooterComponents/ReportIssues";
import LocationMap from "../../Pages/Shared/Footer/FooterComponents/LocationMap";
import QuickLinkCordinator from "../../Pages/Home/HomeQuickLink/QuickLinkCordinator";
import TalentHunt from "../../Pages/TalentHunt/TalentHunt";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import EventRegistration from "../../Pages/Events/EventRegistration/EventRegistration";
import UpcomingEvent from "../../Pages/Dashboard/UpcomingEvent/UpcomingEvent";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import PreviousEvent from "../../Pages/Dashboard/PreviousEvent/PreviousEvent";
import UpcomingEventDetails from "../../Pages/Events/UpcomingEvent/UpcomingEventDetails";
import PreviousEventDetails from "../../Pages/Events/PreviousEvent/PreviousEventDetails";
import MediaBuzz from "../../Pages/Dashboard/MediaBuzz/MediaBuzz";
import MediaBuzzMain from "../../Pages/MediaBuzz/MediaBuzzMain/MediaBuzzMain";
import MediaBuzzTopEventDetails from "../../Pages/MediaBuzz/MediaBuzzDatails/MediaBuzzTopEvents/MediaBuzzTopEventDetails/MediaBuzzTopEventDetails";
import MediaBuzzDetails from "../../Pages/MediaBuzz/MediaBuzzDatails/MediaBuzzDetails/MediaBuzzDetails";
import About from "../../Pages/About/About";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";

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
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/mediaBuzz",
        element: <MediaBuzzMain></MediaBuzzMain>,
      },
      {
        path: "/mediaBuzz/:id",
        element: <MediaBuzzDetails></MediaBuzzDetails>,
      },
      {
        path: "/mediaBuzzTopEventDetails/:id/:eventId",
        element: <MediaBuzzTopEventDetails></MediaBuzzTopEventDetails>,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/api/v1/upcomingEvent/:id",
        element: <UpcomingEventDetails></UpcomingEventDetails>,
      },
      {
        path: "/api/v1/previousEvent/:id",
        element: <PreviousEventDetails></PreviousEventDetails>,
      },
      {
        path: "/eventRegistration/:id",
        element: <EventRegistration></EventRegistration>,
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
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/talent",
        element: <TalentHunt></TalentHunt>,
      },
      {
        path: "/cordinator",
        element: <QuickLinkCordinator></QuickLinkCordinator>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/reportIssues",
        element: <ReportIssues></ReportIssues>,
      },
      {
        path: "/location",
        element: <LocationMap></LocationMap>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <AdminRoute>
          <DashboardLayout></DashboardLayout>
        </AdminRoute>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/upcomingEvent",
        element: <UpcomingEvent></UpcomingEvent>,
      },
      {
        path: "/dashboard/previousEvent",
        element: <PreviousEvent></PreviousEvent>,
      },
      {
        path: "/dashboard/mediaBuzz",
        element: <MediaBuzz></MediaBuzz>,
      },
    ],
  },
]);

export default router;
