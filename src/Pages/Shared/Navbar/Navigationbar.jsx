import React, { useState, useEffect, useContext } from "react";
import logo from "../../../assets/logo.png";
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  PowerIcon,
  Bars3Icon,
  IdentificationIcon,
  ClipboardDocumentListIcon,
  DocumentIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";

// Profile menu component
const ProfileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const { user, logoutUser } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user.email);

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
        <Link to="/profile">
          <MenuItem className={`flex items-center gap-2 rounded`}>
            {React.createElement(UserCircleIcon, {
              className: `h-4 w-4`,
              strokeWidth: 2,
            })}
            <Typography as="span" variant="small" className="font-normal">
              My Profile
            </Typography>
          </MenuItem>
        </Link>

        {isAdmin && (
          <Link to="/dashboard">
            <MenuItem className={`flex items-center gap-2 rounded`}>
              {React.createElement(TableCellsIcon, {
                className: `h-4 w-4`,
                strokeWidth: 2,
              })}
              <Typography as="span" variant="small" className="font-normal">
                Dashboard
              </Typography>
            </MenuItem>
          </Link>
        )}
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
  { item: "Research", link: "/research" },
  { item: "Faculty", link: "/faculty" },
  { item: "Student Stories", link: "/studentStories" },
  { item: "Student Life Blog", link: "/lifeBlog" },

  { item: "Projects", link: "/project" },
  { item: "Alumni", link: "/alumni" },
  { item: "Alumni Stories", link: "/alumniStories" },
  { item: "Photo Exhibition", link: "/photoExhibition" },

  { item: "International Collaboration", link: "/affiliation" },
  { item: "Community", link: "/community" },
  { item: "Faculty Stories", link: "/facultyStories" },
  { item: "Video Exhibition", link: "/videoExhibition" },
];

const NavListMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };

  const renderItems = navListMenuItems.map(({ item, link }, idx) => (
    <Link to={link} key={idx}>
      <MenuItem className="w-44">
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
          <Typography variant="small" className="font-normal text-lg">
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
  { item: "About Us", link: "/about", icon: IdentificationIcon },
  { item: "Programs", link: "/programs", icon: ClipboardDocumentListIcon },
  { item: "Admissions", link: "/admissions", icon: DocumentIcon },
];

const NavList = () => {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ item, link, icon }, idx) => (
        <Link to={link} key={idx}>
          <Typography
            as="a"
            variant="small"
            color="blue-gray"
            className="font-normal text-lg"
          >
            <MenuItem className="flex items-center gap-2 w-36 lg:rounded-full">
              {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
              {item}
            </MenuItem>
          </Typography>
        </Link>
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
    <Navbar className="mx-auto p-2 rounded-none lg:pl-6 sticky inset-0 z-20 px-4 lg:px-8">
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
          <div className="py-1 px-2 absolute right-12 mg:right-16 lg:right-0 rounded-md  bg-blue-500  text-white ">
            <Link to="signin">Sign In</Link>
          </div>
        )}
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default Navigationbar;
