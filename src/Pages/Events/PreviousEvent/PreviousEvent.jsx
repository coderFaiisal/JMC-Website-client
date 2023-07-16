import React, { useContext } from "react";
import { EllipsisVerticalIcon, TrashIcon } from "@heroicons/react/24/solid";
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
  Button,
  PopoverContent,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import Loading from "../../../components/Loading";
import { AuthContext } from "../../../Context/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";

const PreviousEvent = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  const {
    data: previousEvents = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["previousEvents"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/v1/previousEvent");
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteEvent = (id) => {
    fetch(`http://localhost:5000/api/v1/previousEvent/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.deletedCount > 0) {
          toast.success("Delete Successfull");
          refetch();
        } else if (data?.deletedCount === 0) {
          toast.error("Something went wrong");
        }
      });
  };
  const bgColors = ["#01AFA3", "#F7ABB4", "#61CE70", "#F5821F", "#7FC241"];

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className=" bg-red-50 py-12">
      <h1 className="pb-8 text-5xl font-normal w-1/2 text-center mx-auto  ">
        Previous Events
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
        {previousEvents.map((event, index) => (
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
                alt="ui/ux review check"
                className="h-56 w-full transform hover:scale-105 duration-700 hover:opacity-70"
              />
            </CardHeader>
            <CardBody
              style={{ backgroundColor: bgColors[index % bgColors.length] }}
            >
              <Link to={`/api/v1/previousEvent/${event?._id}`}>
                <Typography className="text-2xl font-semibold text-black hover:underline underline-offset-4">
                  {event?.title}
                </Typography>
              </Link>
              <p className="my-2 text-black">{event?.speakers[0]}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PreviousEvent;
