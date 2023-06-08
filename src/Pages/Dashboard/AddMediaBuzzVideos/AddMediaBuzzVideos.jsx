import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  Card,
  Input,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { AuthContext } from "../../../Context/AuthProvider";

const AddMediaBuzzVideos = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddMediaBuzzVideoForm = (data) => {
    const { name, email, password } = data;
    const userInfo = {
      displayName: name,
    };
  };
  return (
    <div className=" flex justify-center lg:justify-start lg:ml-40 py-4 lg:py-10">
      <Card className="p-6">
        <Typography className="text-3xl font-semibold">
          Add Media Buzz Videos
        </Typography>
        <form
          onSubmit={handleSubmit(handleAddMediaBuzzVideoForm)}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              {...register("name", {
                required: "Media Buzz name is required",
              })}
              type="text"
              size="lg"
              label="Media Buzz"
            />
            {errors?.name && (
              <p className="text-red-500 text-xs">{errors?.name?.message}</p>
            )}
            <Input
              {...register("link1", {
                required: "link is required",
              })}
              type="text"
              size="lg"
              label="video link 01"
            />
            {errors.link1 && (
              <p className="text-red-500 text-xs">{errors.link1.message}</p>
            )}
            <Input
              {...register("link2", {
                required: "link is required",
              })}
              type="text"
              size="lg"
              label="video link 02"
            />
            {errors.link2 && (
              <p className="text-red-500 text-xs">{errors.link2.message}</p>
            )}
            <Input
              {...register("link3", {
                required: "link is required",
              })}
              type="email"
              size="lg"
              label="video link 03"
            />
            {errors.link3 && (
              <p className="text-red-500 text-xs">{errors.link3.message}</p>
            )}
          </div>

          <input
            type="submit"
            className="mt-6 bg-blue-700 block w-1/2 mx-auto text-white py-2 rounded-lg "
            value="Add"
          />
        </form>
      </Card>
    </div>
  );
};

export default AddMediaBuzzVideos;
