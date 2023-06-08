import React from "react";
import mediaBuzzImg from "../../../assets/Media Buzz.jpg";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { ChevronDoubleLeftIcon, CheckIcon } from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";

const HomeMediaBuzz = () => {
  return (
    <section className="bg-black py-20">
      <Card className="flex lg:flex-row w-4/5 lg:max-h-screen rounded-none my-2 lg:my-20 mx-auto">
        <CardHeader
          shadow={false}
          floated={false}
          className="lg:w-3/5 shrink-0 m-0 rounded-none"
        >
          <Link to="/mediaBuzz">
            <img
              src={mediaBuzzImg}
              alt="image"
              className="w-full h-full object-fit"
            />
          </Link>
        </CardHeader>
        <CardBody className="p-4 lg:p-10 ml-16">
          <Typography className="uppercase text-black mb-4 text-2xl lg:text-5xl font-normal font-serif italic">
            Media Buzz
          </Typography>
          <Typography className="uppercase text-black text-md lg:text-xl font-serif mb-4">
            An event for the networking & Knowledge sharing
          </Typography>
          <div>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon className="h-3 w-3" />
                </span>
                <Typography className="font-normal">5 team members</Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon className="h-3 w-3" />
                </span>
                <Typography className="font-normal">200+ components</Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon className="h-3 w-3" />
                </span>
                <Typography className="font-normal">
                  40+ built-in pages
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon className="h-3 w-3" />
                </span>
                <Typography className="font-normal">
                  1 year free updates
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon className="h-3 w-3" />
                </span>
                <Typography className="font-normal">
                  Life time technical support
                </Typography>
              </li>
            </ul>
          </div>
          <div className="mt-4 lg:mt-12">
            <button className="w-36 lg:w-52 border-[1px] border-black lg:px-8 lg:py-4 py-2 hover:bg-black hover:text-white">
              <Link to="mediaBuzz" className="flex items-center justify-center">
                SEE ALL
                <ChevronDoubleLeftIcon className=" ml-2 transform rotate-180 w-5 h-5" />
              </Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </section>
  );
};

export default HomeMediaBuzz;
