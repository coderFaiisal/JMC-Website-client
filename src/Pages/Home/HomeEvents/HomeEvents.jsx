import React from "react";
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
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../components/Loading";

const HomeEvents = () => {
  const { data: events = [], isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await fetch(
        "http://localhost:5000/api/v1/upcomingEvent/homeEvent"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="py-10 lg:py-20 bg-black">
      <h1 className="text-5xl text-white font-normal border-b-4 w-1/2 text-center pb-10 mx-auto border-white  ">
        Upcoming Events
      </h1>
      <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {events.map((event, index) => (
          <Link to={`/api/v1/upcomingEvent/${event?._id}`}>
            <Card
              key={event?._id}
              className="w-96 h-[490px] overflow-hidden hover:shadow-md rounded-none shadow-none my-4 lg:mt-12 lg:mb-6"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-sm"
              >
                <img
                  src={event?.photoURL}
                  alt="event img"
                  className="w-96  transform hover:scale-110 duration-500 hover:opacity-70 h-80"
                />
                <p className=" bg-yellow-700 p-2 top-0 right-0 absolute text-3xl text-black font-bold">
                  {" "}
                  {new Date(event?.date).getDate()}
                </p>
              </CardHeader>

              <CardBody className="absolute top-[57%]  left-[12%] w-3/4 bg-white">
                <Typography className="text-2xl font-semibold text-black">
                  {event?.title}
                </Typography>

                <p className="my-4  text-black">{event?.location}</p>
                <div className="flex items-center  justify-between">
                  <p className="flex items-center text-sm  text-black">
                    <CalendarIcon className="h-5 w-5 me-2 bg-white rounded-sm " />
                    {event?.date}
                  </p>
                  <Typography className="font-normal text-black flex items-center text-sm">
                    <ClockIcon className="h-5 w-5 me-2 text-white bg-black rounded-full" />
                    {event?.time}
                  </Typography>
                </div>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
      <div className="flex justify-center ">
        <Link to="/events">
          <button className="flex items-center justify-center w-56 border-[1px] border-white px-8 py-4 bg-white hover:bg-black hover:text-white">
            All Events{" "}
            <ChevronDoubleLeftIcon className="transform rotate-180 w-5 h-5 ml-2" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomeEvents;
