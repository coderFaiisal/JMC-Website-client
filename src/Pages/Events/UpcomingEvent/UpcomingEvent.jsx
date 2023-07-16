import React, { useContext, useEffect } from "react";
import {
  ClockIcon,
  CalendarIcon,
  EllipsisVerticalIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../components/Loading";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";

const UpcomingEvent = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email)
  const {
    data: upcomingEvents = [],
    isLoading: isLoadingUpcomingEvents,
    refetch: refetchUpcomingEvent,
  } = useQuery({
    queryKey: ["upcomingEvents"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/v1/upcomingEvent");
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteEvent = (id) => {
    fetch(`http://localhost:5000/api/v1/upcomingEvent/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.deletedCount > 0) {
          toast.success("Delete Successfull");
          refetchUpcomingEvent();
        } else if (data?.deletedCount === 0) {
          toast.error("Something went wrong");
        }
      });
  };

  const bgColors = ["#01AFA3", "#F7ABB4", "#61CE70", "#F5821F", "#7FC241"];

  if (isLoadingUpcomingEvents) {
    return <Loading></Loading>;
  }

  return (
    <section className="bg-black py-12">
      <h1 className="pb-8 text-white text-5xl font-normal w-1/2 text-center mx-auto  ">
        Upcoming Events
      </h1>

      <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
        {upcomingEvents.map((event, index) => (
          <Card
            className="max-w-[24rem] rounded-md overflow-hidden my-2"
            style={{ backgroundColor: bgColors[index % bgColors.length] }}
          >
            {isAdmin && (
              <div className="absolute top-0 z-50 right-0">
                <Popover placement="bottom-end">
                  <PopoverHandler className="rounded-full bg-black w-8 p-2 text-white">
                    <EllipsisVerticalIcon className="h-4 w-4" />
                  </PopoverHandler>
                  <PopoverContent
                    onClick={() => handleDeleteEvent(event?._id)}
                    className=" rounded-full p-2"
                  >
                    <TrashIcon className="h-5 w-5 text-red-500" />
                  </PopoverContent>
                </Popover>
              </div>
            )}
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src={event?.photoURL}
                alt="event img"
                className="h-52 w-full transform hover:scale-95 hover:rounded-md hover:opacity-70 duration-700"
              />
              <p className=" bg-yellow-700 px-2 py-1 bottom-0 absolute text-2xl text-black font-bold">
                {" "}
                {new Date(event?.date).getDate()}
              </p>
            </CardHeader>
            <CardBody
              className=""
              style={{ backgroundColor: bgColors[index % bgColors.length] }}
            >
              <Link to={`/api/v1/upcomingEvent/${event?._id}`}>
                <Typography className="text-2xl font-semibold  text-black hover:underline underline-offset-4">
                  {event?.title}
                </Typography>
              </Link>
              <p className="my-2 text-black">{event?.speakers[0]}</p>
              <p className="my-4 text-black">{event?.location}</p>
              <div className="flex items-center  justify-between">
                <p className="flex items-center text-sm text-black">
                  <CalendarIcon className="h-5 w-5 me-2 bg-white rounded-sm text-black" />
                  {event?.date}
                </p>
                <Typography className="font-normal text-black flex items-center text-sm">
                  <ClockIcon className="h-5 w-5 me-2 text-white bg-black rounded-full" />
                  {event?.time}
                </Typography>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvent;
