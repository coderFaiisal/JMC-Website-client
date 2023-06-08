import React, { useState, useEffect, useContext } from "react";
import logo from "../../../assets/logo.png";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  LifebuoyIcon,
  PowerIcon,
  Bars3Icon,
  FilmIcon,
  CalendarDaysIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

// Profile menu component
const ProfileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const { user, logoutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    logoutUser()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="img"
            className="border border-blue-500 p-0.5"
            src={user?.photoURL}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1" onClick={closeMenu}>
        <MenuItem className={`flex items-center gap-2 rounded`}>
          {React.createElement(UserCircleIcon, {
            className: `h-4 w-4`,
            strokeWidth: 2,
          })}
          <Typography as="span" variant="small" className="font-normal">
            My Profile
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={handleSignOut}
          className={`flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10`}
        >
          {React.createElement(PowerIcon, {
            className: `h-4 w-4`,
            strokeWidth: 2,
          })}
          <Typography as="span" variant="small" className="font-normal">
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

// Nav list menu
const navListMenuItems = [
  <Link to="/history">Our History </Link>,
  <Link to="/faculty">Faculty</Link>,
  <Link to="/notice">Notice</Link>,
  <Link to="studentStories">Student Stories</Link>,
  <Link to="/talent">Talent Hunt</Link>,
  <Link to="/alumni">Alumni</Link>,
  <Link to="/research">Research</Link>,
  <Link to="alumniStories"> Alumni Stories</Link>,
  <Link to="programs">Programs</Link>,
  <Link to="community">Community</Link>,
  <Link to="lifeBlog">Student Life Blog</Link>,
  <Link to="facultyStories">Faculty Stories</Link>,
  <Link to="/admissions">Admissions</Link>,
  <Link to="/affiliation">Affiliation</Link>,
  <Link to="/exhibition">Photo Exhibition</Link>,
  <Link to="/dashboard">Dashboard</Link>,
];

const NavListMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };

  const renderItems = navListMenuItems.map((item, idx) => (
    <Link key={idx}>
      <MenuItem>
        <Typography
          variant="h6"
          color="blue-gray"
          className="mb-1 font-normal text-lg"
        >
          {item}
        </Typography>
      </MenuItem>
    </Link>
  ));

  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography
            as="a"
            variant="small"
            className="font-normal text-lg"
          >
            <MenuItem
              {...triggers}
              className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full"
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> More{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList {...triggers} className="hidden overflow-visible lg:grid">
          <ul className="grid grid-cols-4 justify-items-center w-full gap-3">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]" /> More
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
};

// Nav list component
const navListItems = [
  [<Link to="/mediaBuzz">Media Buzz</Link>, FilmIcon],
  [<Link to="/events">Events</Link>, CalendarDaysIcon],
  [<Link to="/showreel">Showreel</Link>, VideoCameraIcon],
];

const NavList = () => {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(([item, icon], idx) => (
        <Typography
          key={idx}
          as="a"
          variant="small"
          color="blue-gray"
          className="font-normal text-lg"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            {item}
          </MenuItem>
        </Typography>
      ))}
      <NavListMenu />
    </ul>
  );
};

const Navigationbar = () => {
  const { user } = useContext(AuthContext);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto p-2 rounded-none lg:pl-6 sticky   inset-0 z-20 px-4 lg:px-8">
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <Typography
          as="a"
          className="text-3xl mr-4 ml-2 cursor-pointer py-1.5 font-bold"
        >
          <Link to="/">
            <img className=" w-36" src={logo} alt="" />
          </Link>
        </Typography>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars3Icon className="h-6 w-6" />
        </IconButton>
        {user?.uid ? (
          <ProfileMenu />
        ) : (
          <div className="py-1 px-2 absolute right-12 mg:right-16 lg:right-0 rounded-md outline outline-1 text-blue-600 hover:bg-blue-gray-50 font-serif">
            <Link to="signin">Sign In</Link>
          </div>
        )}
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
};

export default Navigationbar;
