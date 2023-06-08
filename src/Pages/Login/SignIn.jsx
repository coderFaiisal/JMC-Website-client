import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-hot-toast";
import {
  Card,
  Input,
  Typography,
  Dialog,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

const SignIn = () => {
  const { loginUser, loginWithGoogle, resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  //login with email & pass
  const handleSignInForm = (data) => {
    const { email, password } = data;

    loginUser(email, password)
      .then((result) => {
        console.log(result.user)
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  //login with google
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result);
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.resetEmail.value;
    console.log(email);
    

    resetPassword(email)
      .then(() => {
        toast.success(
          "Password reset email send your email address, Pls, check"
        );
        form.reset();
      })
      .catch((err) => toast.error(`${err.message}`));
  };

  return (
    <div className="grid justify-items-center place-items-center py-4 lg:py-20">
      <Card className="p-6">
        <Typography className="text-3xl font-semibold text-center">
          Sign In
        </Typography>
        <form
          onSubmit={handleSubmit(handleSignInForm)}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
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
             <p onClick={handleOpen} className="text-xs hover:link text-blue-600 hover:underline underline-offset-2 cursor-pointer inline w-2/5">Forget password?</p>
          </div>
          <input
            type="submit"
            className="mt-6 bg-blue-700 block w-full text-white py-2 rounded-lg "
            value="Sign In"
          />
          <Typography color="gray" className="mt-4 text-center font-normal">
            Haven't an account?
            <Link
              to="/register"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              {" "}
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>

      {/* Modal section */}
        <Dialog
          size="xs"
          open={open}
          handler={handleOpen}
          className="bg-transparent shadow-none"
        >
          <Card className="mx-auto w-full max-w-[24rem]">
            <Typography className="mt-4 ml-4">Password Reset Email</Typography>

            <form onSubmit={handlePasswordReset}>
              <CardBody className="flex flex-col gap-4">
                <Input required label="Email" name="resetEmail" size="lg" />
              </CardBody>
              <CardFooter className="pt-0 text-center">
                <input
                  className="bg-blue-700 px-6 py-1 text-white rounded-xl "
                  onClick={handleOpen}
                  type="submit"
                  value="Send"
                />
              </CardFooter>
            </form>
          </Card>
        </Dialog>
      
    </div>
  );
};

export default SignIn;
