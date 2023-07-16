import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import {
  Dialog,
  Button,
  DialogHeader,
  DialogFooter,
  Input,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const MediaBuzzTopGuests = ({ guests, refetch, isAdmin, id }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => setOpenDialog(!openDialog);

  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const handleGuestForm = (data) => {
    const guestData = {
      name: data.guestName,
      imgURL: data.imgURL,
      designation: data.guestDesignation,
    };
    fetch(`https://jmc-web-server.vercel.app/api/v1/mediaBuzz/addGuest/${id}`, {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(guestData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Guest added successfully");
          setOpenDialog(!openDialog);
          reset();
          refetch();
        }
      });
  };

  return (
    <div className=" max-w-5xl mx-auto my-6 text-white">
      <div className="flex items-center gap-2 my-6">
        <h1 className="text-3xl underline underline-offset-4">Top Guests</h1>
        <div>
          {isAdmin && (
            <PlusIcon
              onClick={handleOpenDialog}
              className=" opacity-50 border w-6"
            />
          )}

          <Dialog open={openDialog} handler={handleOpenDialog}>
            <DialogHeader>Add Guest</DialogHeader>
            <form
              onSubmit={handleSubmit(handleGuestForm)}
              className="p-4 grid gap-2"
            >
              <Input
                {...register("guestName", {
                  required: "Name is required",
                })}
                label="Guest Name"
              />
              {errors?.guestName && (
                <p className="text-red-500 text-xs">
                  {errors?.guestName?.message}
                </p>
              )}
              <Input
                {...register("imgURL", {
                  required: "Image url is required",
                })}
                label="Image URL"
              />
              {errors?.imgURL && (
                <p className="text-red-500 text-xs">
                  {errors?.imgURL?.message}
                </p>
              )}
              <Input
                {...register("guestDesignation", {
                  required: "Designation is required",
                })}
                label="Designation"
              />
              {errors?.guestDesignation && (
                <p className="text-red-500 text-xs">
                  {errors?.guestDesignation?.message}
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
      <div className="grid grid-cols-3 gap-6 justify-items-center my-4">
        {guests.map((guest) => (
          <div
            key={guest?._id}
            className="flex items-center gap-4 border shadow-md shadow-white p-4 rounded-lg"
          >
            <Avatar
              src={guest?.imgURL}
              alt="avatar"
              size="xxl"
              className="shadow-lg shadow-red-500"
            />
            <div>
              <Typography variant="h6">{guest?.name}</Typography>
              <Typography variant="small" className="font-normal">
                {guest?.designation}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaBuzzTopGuests;
