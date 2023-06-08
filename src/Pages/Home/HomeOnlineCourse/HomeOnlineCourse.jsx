import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const HomeOnlineCourse = () => {
  return (
    <div className="bg-black py-40">
      <Card className="flex-row w-full rounded-none">
        <CardBody>
          <Typography className="mb-2 font-bold text-4xl text-black">
            Online Courses
          </Typography>
          <Typography className="font-normal font-mono text-black text-xl my-6">
            DIU Blended Learning Center has highly specialized courses develop
            the specific skills required in rapidly changing fields of work.
            Continuous, practical professional training is a necessary tool to
            meet the challenges of the contemporary world.
          </Typography>
        </CardBody>
        <CardHeader className="w-3/4 shrink-0 m-0 rounded-none ">
          <img
            src="https://images.pexels.com/photos/6325978/pexels-photo-6325978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image"
            className="w-full h-full object-cover"
          />
        </CardHeader>
      </Card>
    </div>
  );
};

export default HomeOnlineCourse;
