import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  Dialog,
  Button,
  DialogHeader,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const MediaBuzzMemoriesPhotos = ({ memories, refetch, isAdmin, id }) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => setOpenDialog(!openDialog);

  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const handleMemoriesPhotoForm = (data) => {
    const photoURL = {
      url: data.photoURL,
    };
    fetch(`https://jmc-web-server.vercel.app/api/v1/mediaBuzz/addMemoriesPhoto/${id}`, {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(photoURL),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Photo added successfully");
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
          Photo Memories
        </h1>
        <div>
          {isAdmin && (
            <PlusIcon
              onClick={handleOpenDialog}
              className=" opacity-50 border w-6"
            />
          )}

          <Dialog open={openDialog} handler={handleOpenDialog}>
            <DialogHeader>Add Photo</DialogHeader>
            <form
              onSubmit={handleSubmit(handleMemoriesPhotoForm)}
              className="p-4"
            >
              <Input
                {...register("photoURL", {
                  required: "photo url is required",
                })}
                label="Photo URL"
              />
              {errors?.photoURL && (
                <p className="text-red-500 text-xs">
                  {errors?.photoURL?.message}
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
        {memories?.photos?.map((photo) => (
          <React.Fragment>
            <Card
              className="cursor-pointer overflow-hidden transition-opacity hover:opacity-90 rounded-none"
              onClick={() => handleOpen(photo)}
            >
              <img
                alt="nature"
                className="h-full w-full object-cover object-center"
                src={photo}
              />
            </Card>
            <Dialog size="xl" open={open} handler={() => setOpen(false)}>
              <img
                alt="nature"
                className="h-[40rem] w-full object-cover object-center"
                src={selectedImage}
              />
            </Dialog>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MediaBuzzMemoriesPhotos;
