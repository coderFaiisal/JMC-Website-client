import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Typography,
  Dialog,
  Button,
  DialogHeader,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";

import { PlusIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const MediaBuzzTestimonials = ({ testimonials, refetch, isAdmin, id }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => setOpenDialog(!openDialog);

  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const handleTestimonialFormSubmit = (data) => {
    const testimonialInfo = {
      name: data.name,
      image: data.photoURL,
      message: data.message,
      designation: data.designation,
    };
    fetch(`http://localhost:5000/api/v1/mediaBuzz/addTestimonial/${id}`, {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(testimonialInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Testimonial added successfully");
        setOpenDialog(!openDialog);
        reset();
        refetch();
      });
  };

  return (
    <div className="max-w-5xl mx-auto my-6 text-white">
      <div className="flex items-center gap-2 my-6">
        <h1 className="text-3xl underline underline-offset-4">Testimonials</h1>
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
              onSubmit={handleSubmit(handleTestimonialFormSubmit)}
              className="p-4 grid gap-2"
            >
              <Input
                {...register("name", {
                  required: "Name is required",
                })}
                label="Name"
              />
              {errors?.name && (
                <p className="text-red-500 text-xs">{errors?.name?.message}</p>
              )}

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

              <Textarea
                {...register("message", {
                  required: "Message is required",
                })}
                label="Message"
              />
              {errors?.message && (
                <p className="text-red-500 text-xs">
                  {errors?.message?.message}
                </p>
              )}

              <Input
                {...register("designation", {
                  required: "Designation is required",
                })}
                label="Designation"
              />
              {errors?.designation && (
                <p className="text-red-500 text-xs">
                  {errors?.designation?.message}
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
        {testimonials?.map((testimonial) => (
          <Card color="white" shadow={false} className="w-full p-2">
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-4 pt-0 pb-8"
            >
              <Avatar
                size="lg"
                variant="circular"
                src={testimonial?.image}
                alt="avatar"
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <Typography variant="h5" color="blue-gray">
                    {testimonial?.name}
                  </Typography>
                </div>
                <Typography color="blue-gray">
                  {testimonial?.designation}
                </Typography>
              </div>
            </CardHeader>
            <CardBody className="mb-6 p-0">
              <Typography className="text-sm">
                {testimonial?.message}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MediaBuzzTestimonials;
