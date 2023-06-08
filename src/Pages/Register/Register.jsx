import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Card, Input, Checkbox, Typography } from "@material-tailwind/react";
import { AuthContext } from "../../Context/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //create user with email & pass
  const handleRegisterForm = (data) => {
    const { name, email, password } = data;
    const userInfo = {
      displayName: name,
    };

    createUser(email, password)
      .then((result) => {
        const user = result;

        updateUserProfile(userInfo)
          .then(() => {
            toast.success("User Created Successfully");
            navigate("/");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="grid justify-items-center place-items-center py-4 lg:py-20">
      <Card className="p-6">
        <Typography className="text-3xl font-semibold text-center">
          Sign Up
        </Typography>
        <form
          onSubmit={handleSubmit(handleRegisterForm)}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
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
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "at least 6 characters long",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\W).*$/,
                  message: "at least one uppercase and a special character",
                },
              })}
              type="password"
              size="lg"
              label="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>
          <Checkbox
            {...register("checked", {
              required: "Agree terms & conditions",
            })}
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <Link className="font-medium transition-colors hover:text-blue-500">
                  &nbsp;Terms and Conditions
                </Link>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          {errors.checked && (
            <p className="text-red-500 text-xs">{errors.checked.message}</p>
          )}
          <input
            type="submit"
            className="mt-6 bg-blue-700 block w-full text-white py-2 rounded-lg "
            value="Register"
          />
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Register;
