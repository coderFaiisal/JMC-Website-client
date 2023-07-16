import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import {
  Dialog,
  Button,
  DialogHeader,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const MediaBuzzMeetTheGuests = ({
  meetTheGuestVideos,
  refetch,
  isAdmin,
  id,
}) => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => setOpenDialog(!openDialog);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleMeetTheGuestsForm = (data) => {
    const videoId = data.videoURL.split("/").pop();
    const payloadData = {
      videoURL: videoId,
    };
    fetch(`https://jmc-web-server.vercel.app/api/v1/mediaBuzz/addMeetTheGuests/${id}`, {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(payloadData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Video added successfully");
          setOpenDialog(!openDialog);
          reset();
          refetch();
        }
      });
  };
  return (
    <div className="max-w-5xl mx-auto my-6 text-white">
      <div className="flex items-center gap-2 my-6">
        <h1 className="text-3xl underline underline-offset-4">
          Meet The Guests
        </h1>
        <div>
          {isAdmin && (
            <PlusIcon
              onClick={handleOpenDialog}
              className=" opacity-50 border w-6"
            />
          )}

          <Dialog open={openDialog} handler={handleOpenDialog}>
            <DialogHeader>Add Video</DialogHeader>
            <form
              onSubmit={handleSubmit(handleMeetTheGuestsForm)}
              className="p-4"
            >
              <Input
                {...register("videoURL", {
                  required: "Video url is required",
                })}
                label="Video URL"
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

      <div className="grid grid-cols-2 gap-1">
        {meetTheGuestVideos?.map((video) => (
          <iframe
            className="w-full h-[315px]"
            src={`https://www.youtube.com/embed/${video?.videoURL}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default MediaBuzzMeetTheGuests;
