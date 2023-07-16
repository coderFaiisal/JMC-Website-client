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

const MediaBuzzMemoriesVideos = ({ memories, refetch, isAdmin, id }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => setOpenDialog(!openDialog);

  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const handleMemoriesVideoForm = (data) => {
    const videoId = data?.videoURL.split("/").pop();

    const videoURL = {
      url: videoId,
    };
    fetch(`https://jmc-web-server.vercel.app/api/v1/mediaBuzz/addMemoriesVideo/${id}`, {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(videoURL),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
          Video Memories
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
              onSubmit={handleSubmit(handleMemoriesVideoForm)}
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
      <div className="grid grid-cols-2 gap-2">
        {memories?.videos.map((video) => (
          <iframe
            className="w-full h-[315px]"
            src={`https://www.youtube.com/embed/${video}`}
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

export default MediaBuzzMemoriesVideos;
