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
  Button,
} from "@material-tailwind/react";
import useToken from "../../hooks/useToken";

const SignIn = () => {
  const { signInUser, signInWithGoogle, resetPassword } =
    useContext(AuthContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //signin with email & pass
  const handleSignInForm = (data) => {
    const { email, password } = data;

    signInUser(email, password)
      .then((result) => {
        setLoginUserEmail(email);
      })
      .catch((err) => console.log(err));
  };

  //signin with google
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
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
            <p
              onClick={handleOpen}
              className="text-xs hover:link text-blue-600 hover:underline underline-offset-2 cursor-pointer inline w-2/5"
            >
              Forget password?
            </p>
          </div>
          <input
            type="submit"
            className="mt-6 bg-blue-700 block w-full hover:bg-blue-600 cursor-pointer text-white py-2 rounded-lg "
            value="Sign In"
          />
          <Typography color="gray" className="mt-4 text-center font-normal">
            Haven't an account?
            <Link
              to="/signup"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              {" "}
              Sign Up
            </Link>
          </Typography>
        </form>
        <button
          onClick={handleGoogleSignIn}
          size="md"
          className=" outline outline-1 hover:bg-green-600 hover:outline-none hover:text-white p-2 rounded-lg outline-black flex justify-center items-center gap-3 w-2/3 mx-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            {" "}
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />{" "}
          </svg>
          Continue with Google
        </button>
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
