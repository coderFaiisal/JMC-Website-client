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

const MediaBuzzSponsors = ({ sponsors, refetch, isAdmin, id }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => setOpenDialog(!openDialog);

  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const handleSponsorsImageForm = (data) => {
    const payloadData = {
      imgURL: data.imgURL,
    };
    fetch(`https://jmc-web-server.vercel.app/api/v1/mediaBuzz/addSponsors/${id}`, {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(payloadData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Image added successfully");
          setOpenDialog(!openDialog);
          reset();
          refetch();
        }
      });
  };

  return (
    <div className="max-w-5xl mx-auto my-6 text-white">
      <div className="flex gap-2 items-center">
        <h1 className="text-3xl underline underline-offset-4">Sponsors</h1>
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
              onSubmit={handleSubmit(handleSponsorsImageForm)}
              className="p-4"
            >
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

      <div className="grid grid-cols-3 gap-4">
        {sponsors?.map((sponsor) => (
          <img
            src={sponsor?.imgURL}
            alt=""
            className="w-full h-56 rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default MediaBuzzSponsors;
