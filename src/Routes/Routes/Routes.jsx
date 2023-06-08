import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Events from "../../Pages/Events/Events/Events";
import Showreel from "../../Pages/Showreel/Showreel/Showreel";
import NotFound from "../../Pages/NotFound/NotFound";
import Home from "../../Pages/Home/Home/Home";
import MediaBuzzHome from "../../Pages/MediaBuzz/MediaBuzzHome/MediaBuzzHome";
import MediaBuzzDetails from "../../Pages/MediaBuzz/MediaBuzzDatails/MediaBuzzDetails";
import SignUp from "../../Pages/SignUp/SignUp";
import SignIn from "../../Pages/SignIn/SignIn";
import EventDetails from "../../Pages/Events/EventDetails/EventDetails";
import DashboardLayout from "../../Layout/DashboardLayout";
import Contact from "../../Pages/Shared/Footer/FooterComponents/Contact";
import ReportIssues from "../../Pages/Shared/Footer/FooterComponents/ReportIssues";
import LocationMap from "../../Pages/Shared/Footer/FooterComponents/LocationMap";
import QuickLinkCordinator from "../../Pages/Home/HomeQuickLink/QuickLinkCordinator";
import TalentHunt from "../../Pages/TalentHunt/TalentHunt";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import EventRegistration from "../../Pages/Events/EventRegistration/EventRegistration";
import AddMediaBuzzVideos from "../../Pages/Dashboard/addMediaBuzzVideos/AddMediaBuzzVideos";

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
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/addMediaBuzzVideos",
        element: (
          <PrivateRoute>
            <AddMediaBuzzVideos></AddMediaBuzzVideos>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
