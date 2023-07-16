import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ClockIcon, CalendarIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../../components/Loading";

const UpcomingEventDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const eventId = useParams();
  const { data: upcomingEvent = [], isLoading } = useQuery({
    queryKey: ["upcomingEvent"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/api/v1/upcomingEvent/${eventId?.id}`
      );
      const data = await res.json();
      return data;
    },
  });

  const {
    _id,
    title,
    photoURL,
    description,
    location,
    organizer,
    registration,
    speakers,
    date,
    time,
    price,
  } = upcomingEvent;

  const handleEventRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.resetEmail.value;
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="py-4 bg-black text-white lg:py-12">
      <div className="max-w-5xl mx-auto p-4 rounded-lg">
        <Typography className="text-3xl font-bold  my-4">
          {title}
        </Typography>
        <Typography className="uppercase mb-2">
          {speakers.length > 1 ? "Speakers" : "Speaker"} : {speakers}
        </Typography>

        <div className="w-1/2">
          <img src={photoURL} alt="image" className="w-full my-4 rounded-md" />
        </div>
        <div >
          <Typography className="font-normal mb-4">
            Overview : {description}
          </Typography>
          <p className="my-2"> Organize by : {organizer}</p>
          <p className="my-2">Location : {location}</p>
          <p className="my-2">Price : {price} Taka</p>

          <div className="flex gap-6" >
            <Typography className="flex items-center text-sm my-2 ">
              <CalendarIcon className="h-5 w-5 me-2 text-black bg-white rounded-sm" />
              {date}
            </Typography>
            <Typography className="font-normal flex items-center text-sm">
              <ClockIcon className="h-5 w-5 me-2 text-white bg-black rounded-full" />
              {time}
            </Typography>
          </div>
          {registration ? (
            <Link to={`/eventRegistration/${_id}`}>
              <Button className="flex items-center justify-center mt-2 w-1/4 gap-2 ">
                Registration Now
              </Button>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventDetails;
