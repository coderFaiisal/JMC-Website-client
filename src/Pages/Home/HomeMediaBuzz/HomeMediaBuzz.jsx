import React from "react";
import mediaBuzzImg from "../../../assets/Media Buzz Banner.jpg";

import { Typography } from "@material-tailwind/react";
import { ChevronDoubleLeftIcon, CheckIcon } from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";

const HomeMediaBuzz = () => {
  return (
    <section className="h-[400px] md:h-[550px] lg:h-[800px] lg:mb-40">
      <div className="">
        <img src={mediaBuzzImg} alt="media buzz" className="w-full" />
      </div>

      <div className="relative bg-black w-2/3 p-4 mx-auto mt-[-40px] lg:mt-[-70px] ">
        <Typography className="uppercase text-white text-center text-md lg:text-2xl  mb-4">
          An event for the networking & Knowledge sharing
        </Typography>
        <div>
          <ul className=" hidden lg:grid grid-cols-2 justify-items-center lg:gap-4 text-white">
            <li className="flex items-center gap-4">
              <span className="rounded-full border-2 border-red-600 bg-white text-black p-1">
                <CheckIcon className="h-3 w-3" />
              </span>
              <Typography className="font-normal">15 sponsors</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border-2 border-red-600 bg-white text-black p-1">
                <CheckIcon className="h-3 w-3" />
              </span>
              <Typography className="font-normal">300+ students</Typography>
            </li>

            <li className="flex items-center gap-4">
              <span className="rounded-full border-2 border-red-600 bg-white text-black p-1">
                <CheckIcon className="h-3 w-3" />
              </span>
              <Typography className="font-normal">Yearly program</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border-2 border-red-600 bg-white text-black p-1">
                <CheckIcon className="h-3 w-3" />
              </span>
              <Typography className="font-normal">3 days long</Typography>
            </li>
          </ul>
        </div>
        <div className="mt-4 flex justify-center lg:mt-12">
          <button className="w-36 lg:w-52 border-[1px] shadow-lg hover:shadow-sm hover:shadow-white border-black lg:px-8 lg:py-4 py-2 bg-white transform duration-300 hover:text-white hover:bg-black">
            <Link to="mediaBuzz" className="flex items-center justify-center">
              EXPLORE
              <ChevronDoubleLeftIcon className=" ml-2 transform rotate-180 w-5 h-5" />
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeMediaBuzz;
