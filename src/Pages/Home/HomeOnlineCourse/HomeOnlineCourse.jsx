import React from "react";
import blc from "../../../assets/blc.png";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";

const HomeOnlineCourse = () => {
  return (
    <div className="bg-black py-40 px-20">
      <Card className="flex-row w-full rounded-none">
        <CardBody>
          <Typography className="mb-2 font-serif font-bold text-4xl text-black">
            Online Learning
          </Typography>
          <Typography className="font-normal font-mono text-black text-xl my-6">
            DIU Blended Learning Center has highly specialized courses develop
            the specific skills required in rapidly changing fields of work.
          </Typography>
          <div className="mt-4 lg:mt-12">
            <button className="w-36 lg:w-52 border-[1px] border-black lg:px-8 lg:py-4 py-2 hover:bg-black hover:text-white">
              <a
                href="https://elearn.daffodilvarsity.edu.bd/"
                target="_blank"
                className="flex items-center justify-center"
              >
                EXPLORE
                <ChevronDoubleLeftIcon className=" ml-2 transform rotate-180 w-5 h-5" />
              </a>
            </button>
          </div>
        </CardBody>
        <CardHeader className="w-3/4 shrink-0 m-0 rounded-none overflow-hidden ">
          <img
            src={blc}
            alt="image"
            className="w-full h-full object-cover hover:scale-110 transform duration-500 ease-in-out"
          />
        </CardHeader>
      </Card>
    </div>
  );
};

export default HomeOnlineCourse;
