import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  Button,
  DialogHeader,
  DialogFooter,
  Input,
} from "@material-tailwind/react";

import { PlusIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const MediaBuzzTopEvents = ({ eventSessions, refetch, isAdmin, id }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => setOpenDialog(!openDialog);

  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const handleTopEventFormSubmit = (data) => {
    const topEventInfo = {
      name: data.name,
      posterURL: data.posterURL,
      guests: data.guest,
      guestRole: data.guestRole,
      photos: data.photoURL,
      videos: data.videoURL,
    };
    fetch(`https://jmc-web-server.vercel.app/api/v1/mediaBuzz/addTopEvent/${id}`, {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(topEventInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Event added successfully");
        setOpenDialog(!openDialog);
        reset();
        refetch();
      });
  };

  return (
    <div className="max-w-5xl mx-auto my-6 text-white">
      <div className="flex items-center gap-2 my-6">
        <h1 className="text-3xl underline underline-offset-4">Top Events</h1>
        <div>
          {isAdmin && (
            <PlusIcon
              onClick={handleOpenDialog}
              className=" opacity-50 border w-6"
            />
          )}

          <Dialog open={openDialog} handler={handleOpenDialog}>
            <DialogHeader>Add Testimonial</DialogHeader>
            <form
              onSubmit={handleSubmit(handleTopEventFormSubmit)}
              className="p-4 grid gap-2"
            >
              <Input
                {...register("name", {
                  required: "Name is required",
                })}
                label="Event Name"
              />
              {errors?.name && (
                <p className="text-red-500 text-xs">{errors?.name?.message}</p>
              )}

              <Input
                {...register("posterURL", {
                  required: "Poster url is required",
                })}
                label="Event Poster URL"
              />
              {errors?.posterURL && (
                <p className="text-red-500 text-xs">
                  {errors?.posterURL?.message}
                </p>
              )}

              <Input
                {...register("guest", {
                  required: "Guest name is required",
                })}
                label="Guest Name"
              />
              {errors?.guest && (
                <p className="text-red-500 text-xs">{errors?.guest?.message}</p>
              )}

              <Input
                {...register("guestRole", {
                  required: "Guest role is required",
                })}
                label="Guest Role"
              />
              {errors?.guestRole && (
                <p className="text-red-500 text-xs">
                  {errors?.guestRole?.message}
                </p>
              )}
              <Input
                {...register("photoURL", {
                  required: "Photo url is required",
                })}
                label="Event Photo URL"
              />
              {errors?.photoURL && (
                <p className="text-red-500 text-xs">
                  {errors?.photoURL?.message}
                </p>
              )}

              <Input
                {...register("videoURL", {
                  required: "Video url is required",
                })}
                label="Event Video URL"
              />
              {errors?.videoURL && (
                <p className="text-red-500 text-xs">
                  {errors?.videoURL?.message}
                </p>
              )}

              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={handleOpenDialog}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
                <input
                  className="text-green-600 font-bold hover:bg-green-50 px-4 py-2 rounded-lg"
                  type="submit"
                  value="Confirm"
                />
              </DialogFooter>
            </form>
          </Dialog>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {eventSessions?.map((event) => (
          <Link to={`/mediaBuzzTopEventDetails/${id}/${event?._id}`}>
            <img
              className="w-full gap-2 h-56 "
              src={event?.posterURL}
              alt="event image"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MediaBuzzTopEvents;
