import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Card, Input, Textarea, Typography } from "@material-tailwind/react";

const MediaBuzz = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddBuzz = (data) => {
    const {
      buzzTitle,
      buzzBanner,

      buzzGuest,
      buzzGuestImg,
      guestDesignation,

      meetTheGuest,

      sponsor,

      eventSessionName,
      eventSessionPoster,
      eventSessionGuests,
      eventSessionGuestsRole,
      eventSessionPhotos,
      eventSessionVideos,

      photoExhibitionTitle,
      photoExhibitionPhotoLink,

      photoMemories,
      videoMemories,

      reviewerName,
      reviewerImage,
      reviewerMessage,
      reviewerDesignation,
    } = data;

    const guests = [
      {
        name: buzzGuest,
        imgURL: buzzGuestImg,
        designation: guestDesignation,
      },
    ];

    const meetTheGuestVideos = [{ videoURL: meetTheGuest }];

    const sponsors = [{ imgURL: sponsor }];

    const guestNames = eventSessionGuests
      .split(",")
      .map((speaker) => speaker.trim());

    const eventSessions = [
      {
        name: eventSessionName,
        posterURL: eventSessionPoster,
        guests: guestNames,
        guestRole: eventSessionGuestsRole,
        videos: [eventSessionVideos],
      },
    ];

    const photoExhibition = {
      title: photoExhibitionTitle,
      photos: [photoExhibitionPhotoLink],
    };

    const memories = {
      photos: [photoMemories],
      videos: [videoMemories],
    };
    const testimonials = [
      {
        name: reviewerName,
        image: reviewerImage,
        message: reviewerMessage,
        designation: reviewerDesignation,
      },
    ];

    const buzzInfo = {
      title: buzzTitle,
      bannerURL: buzzBanner,
      guests,
      meetTheGuestVideos,
      sponsors,
      eventSessions,
      photoExhibition,
      memories,
      testimonials,
    };

    fetch("https://jmc-web-server.vercel.app/api/v1/mediaBuzz/createMediaBuzz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(buzzInfo),
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
          Media Buzz Info
        </Typography>
        <form
          onSubmit={handleSubmit(handleAddBuzz)}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-4">
            <Input
              {...register("buzzTitle", {
                required: "Buzz Title is required",
              })}
              type="text"
              label="Buzz Title"
            />
            {errors.buzzTitle && (
              <p className="text-red-500 text-xs">{errors.buzzTitle.message}</p>
            )}
            <Input
              {...register("buzzBanner", {
                required: "Banner image link is required",
              })}
              type="text"
              label="Buzz Banner Image Link"
            />
            {errors?.buzzBanner && (
              <p className="text-red-500 text-xs">
                {errors?.buzzBanner?.message}
              </p>
            )}
            <p>Guest Info</p>
            <Input {...register("buzzGuest")} type="text" label="Guest Name" />

            <Input
              {...register("buzzGuestImg")}
              type="text"
              label="Guest Image Link"
            />

            <Input
              {...register("guestDesignation")}
              type="text"
              label="Guest Designation"
            />

            <p>Meet The Guest</p>
            <Input
              {...register("meetTheGuest")}
              type="text"
              label="Meet the guest video link"
            />

            <p>Sponsor</p>
            <Input
              {...register("sponsor")}
              type="text"
              label="Sponsor's image link"
            />
            <p>Event Session</p>
            <Input
              {...register("eventSessionName")}
              type="text"
              label="Event Session Name"
            />

            <Input
              {...register("eventSessionPoster")}
              type="text"
              label="Event Session Poster"
            />

            <Input
              {...register("eventSessionGuests")}
              type="text"
              label="Event Session Guests Name"
            />

            <Input
              {...register("eventSessionGuestsRole")}
              type="text"
              label="Event Session Guests Role"
            />

            <Input
              {...register("eventSessionPhotos")}
              type="text"
              label="Event Session Videos"
            />

            <Input
              {...register("eventSessionVideos")}
              type="text"
              label="Event Session Videos"
            />

            <p>Photo Exhibition</p>
            <Input
              {...register("photoExhibitionTitle")}
              type="text"
              label="Photo Exhibition Title"
            />

            <Input
              {...register("photoExhibitionPhotoLink")}
              type="text"
              label="Photo link"
            />

            <p>Memories</p>
            <Input
              {...register("photoMemories")}
              type="text"
              label="Photo link"
            />

            <Input
              {...register("videoMemories")}
              type="text"
              label="video link"
            />

            <p>Testimonial</p>
            <Input
              {...register("reviewerName")}
              type="text"
              label="Reviewer Name"
            />

            <Input
              {...register("reviewerImage")}
              type="text"
              label="Image Link"
            />

            <Textarea
              {...register("reviewerMessage")}
              type="text"
              label="Message"
            />

            <Input
              {...register("reviewerDesignation")}
              type="text"
              label="Reviewer Designation"
            />
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

export default MediaBuzz;
