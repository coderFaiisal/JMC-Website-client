import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const HomeTalentHunt = () => {
  return (
    <div className="">
      <Card
        shadow={false}
        className="relative grid w-full rounded-none items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.pexels.com/photos/381843/pexels-photo-381843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography className="mb-6 text-3xl lg:text-5xl text-white font-bold leading-[1.5] capitalize ">
            Want to be a media star?
          </Typography>
          <Typography className="text-white text-2xl lg:text-3xl font-bold">
            Confirm Your Sit
          </Typography>
          <Link to="/talent">
            <button className="mt-6 bg-white text-black hover:bg-black shadow-sm shadow-white hover:text-white w-36 h-10 ">
              Registration
            </button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default HomeTalentHunt;
