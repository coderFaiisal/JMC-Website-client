import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  Card,
  Input,
  Checkbox,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { AuthContext } from "../../../Context/AuthProvider";

const EventRegistration = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //create user with email & pass
  const handleSignUpForm = (data) => {
    const { name, email, password } = data;
    const userInfo = {
      displayName: name,
    };
  };

  return (
    <div className="grid justify-items-center place-items-center py-4 lg:py-20">
      <Card className="p-6">
        <Typography className="text-3xl font-semibold text-center">
          Event Registration Form
        </Typography>
        <form
          onSubmit={handleSubmit(handleSignUpForm)}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              defaultValue={"Workshop on TV Journalism"}
              disabled
              type="text"
              size="lg"
            />
            <Input defaultValue={"50 tk"} disabled type="text" size="lg" />
            <Input
              {...register("name", {
                required: "Name is required",
              })}
              type="text"
              size="lg"
              label="Your Name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name.message}</p>
            )}
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email type",
                },
              })}
              type="email"
              size="lg"
              label="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
            <Input
              {...register("phone", {
                required: "Phone number is required",
              })}
              type="phone"
              size="lg"
              label="Phone"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs">{errors.phone.message}</p>
            )}
            <Select label="Payment">
              <Option>bKash</Option>
              <Option>Nagad</Option>
            </Select>
          </div>

          <input
            type="submit"
            className="mt-6 bg-blue-700 block w-full text-white py-2 rounded-lg "
            value="Register"
          />
        </form>
      </Card>
    </div>
  );
};

export default EventRegistration;
