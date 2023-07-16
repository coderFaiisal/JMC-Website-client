import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import {
  Card,
  Checkbox,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { AuthContext } from "../../../Context/AuthProvider";

const UpcomingEvent = () => {
  const { user } = useContext(AuthContext);
  const [isPaid, setIsPaid] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsPaid(e.target.checked);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddEvent = (data) => {
    const {
      eventTitle,
      eventPhoto,
      eventSpeakers,
      eventDescription,
      eventDate,
      eventTime,
      eventLocation,
      eventOrganizers,
      eventRegistration,
      eventPrice,
    } = data;

    const speakersArray = eventSpeakers
      .split(",")
      .map((speaker) => speaker.trim());

    const eventInfo = {
      title: eventTitle,
      photoURL: eventPhoto,
      speakers: speakersArray,
      description: eventDescription,
      date: eventDate,
      time: eventTime,
      location: eventLocation,
      organizer: eventOrganizers,
      registration: eventRegistration,
      price: eventPrice,
    };

    fetch("https://jmc-web-server.vercel.app/api/v1/upcomingEvent/createEvent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully Added");
        reset();
      });
  };

  return (
    <div className="flex mx-auto py-4 lg:py-10">
      <Card className="p-6">
        <Typography className="text-3xl font-semibold">
          Upcoming Event Info
        </Typography>
        <form
          onSubmit={handleSubmit(handleAddEvent)}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-4">
            <Input
              {...register("eventTitle", {
                required: "Event Title is required",
              })}
              type="text"
              label="Event Title"
            />
            {errors.eventTitle && (
              <p className="text-red-500 text-xs">
                {errors.eventTitle.message}
              </p>
            )}
            <Input
              {...register("eventPhoto", {
                required: "Event photo is required",
              })}
              type="text"
              label="Event Photo Link"
            />
            {errors?.eventPhoto && (
              <p className="text-red-500 text-xs">
                {errors?.eventPhoto?.message}
              </p>
            )}

            <Input
              {...register("eventSpeakers", {
                required: "Event Speakers are required",
              })}
              type="text"
              label="Event Speakers"
            />
            {errors.eventSpeakers && (
              <p className="text-red-500 text-xs">
                {errors.eventSpeakers.message}
              </p>
            )}

            <Textarea
              {...register("eventDescription", {
                required: "Event Description is required",
              })}
              type="text"
              label="Event Description"
            />
            {errors.eventDescription && (
              <p className="text-red-500 text-xs">
                {errors.eventDescription.message}
              </p>
            )}

            <Input
              {...register("eventDate", {
                required: "Event Date is required",
              })}
              type="date"
              label="Event Date"
            />
            {errors?.eventDate && (
              <p className="text-red-500 text-xs">
                {errors?.eventDate?.message}
              </p>
            )}
            <Input
              {...register("eventTime", {
                required: "Event Time is required",
              })}
              type="time"
              label="Event Time"
            />
            {errors?.eventTime && (
              <p className="text-red-500 text-xs">
                {errors?.eventTime?.message}
              </p>
            )}

            <Input
              {...register("eventLocation", {
                required: "Event Location is required",
              })}
              type="text"
              label="Event Location"
            />
            {errors?.eventLocation && (
              <p className="text-red-500 text-xs">
                {errors?.eventLocation?.message}
              </p>
            )}

            <Input
              {...register("eventOrganizers", {
                required: "Event Organizers are required",
              })}
              type="text"
              label="Event Organizers"
            />
            {errors?.eventOrganizers && (
              <p className="text-red-500 text-xs">
                {errors?.eventOrganizers?.message}
              </p>
            )}

            <Checkbox
              onClick={handleCheckboxChange}
              {...register("eventRegistration")}
              label="Event Registration Required?"
            />
            {isPaid ? (
              <>
                <Input
                  {...register("eventPrice", {
                    required: "Event price is required",
                  })}
                  type="number"
                  label="Event Price"
                />
                {errors?.eventPrice && (
                  <p className="text-red-500 text-xs">
                    {errors?.eventPrice?.message}
                  </p>
                )}
              </>
            ) : (
              ""
            )}
          </div>

          <input
            type="submit"
            className="mt-6 bg-blue-700 block w-1/2 mx-auto text-white py-2 rounded-lg"
            value="Add"
          />
        </form>
      </Card>
    </div>
  );
};

export default UpcomingEvent;
