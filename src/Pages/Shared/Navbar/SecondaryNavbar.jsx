import React from "react";
import facebook from "../../../assets/Fb.svg";
import instragram from "../../../assets/Insta.svg";
import youtube from "../../../assets/YouTube.svg";
import factCheck from "../../../assets/Fact checking.svg";
import campusTV from "../../../assets/campusTV.png";
import campusRadio from "../../../assets/campusRadio.png";
import prominent from "../../../assets/prominent.jpg";
import {
  Navbar,
  Typography,
  MenuItem,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const SecondaryNavbar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navListItems = [
    { item: "Media Buzz", link: "/mediaBuzz", icon: StarIcon },
    {
      item: "Curriculam Symposium",
      link: "/curriculamSymposium",
      icon: StarIcon,
    },
    { item: "Media Star", link: "/talent", icon: StarIcon },
    { item: "CDSTF", link: "/cdstf", icon: StarIcon },
    { item: "Events", link: "/events", icon: StarIcon },
  ];

  return (
    <Navbar className="mx-auto rounded-none py-2 px-4 lg:px-0 lg:py-0">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="flex gap-1 items-center md:mr-4">
          <a href="https://web.facebook.com/jmc.diu" target="_blank">
            <img
              src={facebook}
              alt=""
              className="transition-opacity hover:opacity-60 hover:scale-110 w-9"
            />
          </a>

          <a href="https://www.youtube.com/@jmcdiu" target="_blank">
            <img
              src={youtube}
              alt=""
              className="transition-opacity hover:opacity-60 w-9 hover:scale-110"
            />
          </a>

          <a href="" target="_blank">
            <img
              src={instragram}
              alt=""
              className="transition-opacity hover:opacity-60 hover:scale-110 w-9"
            />
          </a>
          <a href="https://the-prominent.com/" target="_blank">
            <img
              src={prominent}
              alt=""
              className="transition duration-300 hover:opacity-60 w-20 rounded-lg h-6"
            />
          </a>
          <MapPinIcon className="hidden lg:block transition-opacity hover:opacity-60 w-6 h-5 text-blue-600" />
        </div>
        <div className="hidden lg:flex">
          {navListItems.map(({ item, link, icon }, idx) => (
            <Link to={link} key={idx}>
              <Typography
                as="a"
                variant="small"
                color="blue-gray"
                className="font-normal text-sm flex mx-2"
              >
                <MenuItem className="flex items-center gap-1 lg:rounded-full">
                  {React.createElement(icon, {
                    className: "h-[18px] w-[18px]",
                  })}{" "}
                  {item}
                </MenuItem>
              </Typography>
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center gap-5 mx-3 cursor-pointer overflow-hidden">
          <Link to="/pinnedBD">
            <div className="flex justify-end items-center hover:bg-blue-gray-50 rounded-full p-1 ">
              <img
                src={factCheck}
                alt=""
                className="transition-opacity hover:opacity-60 h-6"
              />
              <p className="  text-center">PINNED BD</p>
            </div>
          </Link>

          <a href="http://www.campustv.ac/" target="_blank">
            <img
              src={campusTV}
              alt=""
              className="w-9 h-7 transform hover:scale-105 duration-100"
            />
          </a>
          <a
            href="https://web.facebook.com/campusradio.ac/?_rdc=1&_rdr"
            target="_blank"
          >
            <img
              src={campusRadio}
              alt=""
              className="w-8 h-7 transform hover:scale-105 duration-100"
            />
          </a>
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navListItems.map(({ item, link, icon }, idx) => (
            <Link to={link} key={idx}>
              <Typography
                as="a"
                variant="small"
                color="blue-gray"
                className="font-normal text-lg"
              >
                <MenuItem className="flex items-center gap-2 lg:rounded-full">
                  {React.createElement(icon, {
                    className: "h-[18px] w-[18px]",
                  })}{" "}
                  {item}
                </MenuItem>
              </Typography>
            </Link>
          ))}
        </div>
      </Collapse>
    </Navbar>
  );
};

export default SecondaryNavbar;
