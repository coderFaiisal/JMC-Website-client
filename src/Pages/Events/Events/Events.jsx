import React from 'react';
import {
    ClockIcon,
    CalendarIcon,
    ChevronDoubleLeftIcon,
  } from "@heroicons/react/24/solid";
  import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
  import { Link } from "react-router-dom";

const Events = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mx-4">
        <Card className="max-w-[24rem] rounded-none overflow-hidden my-12">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="ui/ux review check"
            />
          </CardHeader>
          <CardBody>
            <Link to="/events/1">
              <Typography className="text-xl text-yellow-800 hover:underline underline-offset-4">
                JMC Media Buzz: Spring 2022
              </Typography>
            </Link>
            <p className="my-4">Online</p>
            <div className="flex items-center  justify-between">
              <p className="flex items-center text-sm ">
                <CalendarIcon className="h-5 w-5 me-2 text-black" />
                June 12
              </p>
              <Typography className="font-normal flex items-center text-sm">
                <ClockIcon className="h-4 w-4 me-2 text-white bg-black rounded-full" />
                9:00am - 11:15am
              </Typography>
            </div>
          </CardBody>
        </Card>
        <Card className="max-w-[24rem] rounded-none overflow-hidden my-12">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src="https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="ui/ux review check"
            />
          </CardHeader>
          <CardBody>
            <Link to="/events/2">
              <Typography className="text-xl text-yellow-800 hover:underline underline-offset-4">
                JMC Media Buzz: Spring 2022
              </Typography>
            </Link>
            <p className="my-4">DSC</p>
            <div className="flex items-center justify-between">
              <p className="flex items-center -space-x-3 text-sm">
                <CalendarIcon className="h-5 w-5 me-2 text-black" />
                June 12
              </p>
              <Typography className="font-normal flex items-center text-sm">
                <ClockIcon className="h-4 w-4 me-2 text-white bg-black  rounded-full" />
                9:00am - 11:15am
              </Typography>
            </div>
          </CardBody>
        </Card>
        <Card className="max-w-[24rem] rounded-none overflow-hidden my-12">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src="https://images.pexels.com/photos/8345978/pexels-photo-8345978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="ui/ux review check"
            />
          </CardHeader>
          <CardBody>
            <Link to="/events/3">
              <Typography className="text-xl text-yellow-800 hover:underline underline-offset-4">
                JMC Media Buzz: Spring 2022
              </Typography>
            </Link>
            <p className="my-4">Offline</p>
            <div className="flex items-center justify-between">
              <p className="flex items-center -space-x-3 text-sm">
                <CalendarIcon className="h-5 w-5 me-2 text-black" />
                June 12
              </p>
              <Typography className="font-normal flex items-center text-sm">
                <ClockIcon className="h-4 w-4 me-2 text-white bg-black rounded-full" />
                9:00am - 11:15am
              </Typography>
            </div>
          </CardBody>
        </Card>
        <Card className="max-w-[24rem] rounded-none overflow-hidden my-12">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="ui/ux review check"
            />
          </CardHeader>
          <CardBody>
            <Link to="/events/4">
              <Typography className="text-xl text-yellow-800 hover:underline underline-offset-4">
                JMC Media Buzz: Spring 2022
              </Typography>
            </Link>
            <p className="my-4">Virtually</p>
            <div className="flex items-center justify-between">
              <p className="flex items-center -space-x-3 text-sm">
                <CalendarIcon className="h-5 w-5 me-2 text-black" />
                June 12
              </p>
              <Typography className="font-normal flex items-center text-sm">
                <ClockIcon className="h-4 w-4 me-2 text-white bg-black rounded-full" />
                9:00am - 11:15am
              </Typography>
            </div>
          </CardBody>
        </Card>
      </div>
    );
};

export default Events;