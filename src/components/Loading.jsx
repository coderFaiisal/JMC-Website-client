import { Spinner } from "@material-tailwind/react";
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center my-20">
      <div className="flex flex-col items-center">
        <Spinner color="blue" />
        <p className="text-blue-600 text-2xl"> Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
