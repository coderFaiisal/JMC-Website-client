import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import {
  Card,
  Input,
  Select,
  Option,
  Textarea,
  Typography,
} from "@material-tailwind/react";

const PreviousEvent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      eventDate,
      eventOrganizers,
      eventDescription,
      eventVideos,
      eventPhotos,
      reviewerName,
      reviewerImage,
      reviewerMessage,
      reviewerPosition,
    } = data;

    const testimonials = [
      {
        name: reviewerName,
        image: reviewerImage,
        message: reviewerMessage,
        position: reviewerPosition,
      },
    ];

    const speakersArray = eventSpeakers
      .split(",")
      .map((speaker) => speaker.trim());

    const videosArray = eventVideos.split(",").map((v) => v.trim());
    const photosArray = eventPhotos.split(",").map((v) => v.trim());

    const eventInfo = {
      title: eventTitle,
      photoURL: eventPhoto,
      speakers: speakersArray,
      description: eventDescription,
      organizer: eventOrganizers,
      date: eventDate,
      videos: videosArray,
      photos: photosArray,
      testimonials,
    };

    fetch("http://localhost:5000/api/v1/previousEvent/createEvent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully Added");
        reset();
      });
  };

  return (
    <div className="flex mx-auto py-4 lg:py-10">
      <Card className="p-6">
        <Typography className="text-3xl font-semibold">
          Previous Event Info
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
            <Textarea
              {...register("eventVideos", {
                required: "Event videos is required",
              })}
              type="text"
              label="Videos Link"
            />
            {errors?.eventVideos && (
              <p className="text-red-500 text-xs">
                {errors?.eventVideos?.message}
              </p>
            )}
            <Textarea
              {...register("eventPhotos", {
                required: "Event photos is required",
              })}
              type="text"
              label="Photos Link"
            />
            {errors?.eventPhotos && (
              <p className="text-red-500 text-xs">
                {errors?.eventPhotos?.message}
              </p>
            )}

            <Input
              {...register("reviewerName")}
              type="text"
              label="Reviewer Name"
            />
            {errors.reviewerName && (
              <p className="text-red-500 text-xs">
                {errors.reviewerName.message}
              </p>
            )}
            <Input
              {...register("reviewerImage")}
              type="text"
              label="Image Link"
            />
            {errors.reviewerImage && (
              <p className="text-red-500 text-xs">
                {errors.reviewerImage.message}
              </p>
            )}

            <Textarea
              {...register("reviewerMessage")}
              type="text"
              label="Review Message"
            />
            {errors?.reviewerMessage && (
              <p className="text-red-500 text-xs">
                {errors?.reviewerMessage?.message}
              </p>
            )}

            <Input
              {...register("reviewerPosition")}
              type="text"
              label="Event Reviewer Position"
            />
            {errors.reviewerPosition && (
              <p className="text-red-500 text-xs">
                {errors.reviewerPosition.message}
              </p>
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

export default PreviousEvent;
