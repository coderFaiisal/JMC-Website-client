import React from "react";
import useTitle from "../../hooks/useTitle";

const NotFound = () => {
  useTitle("Not Found");
  return (
    <div className="my-20">
      <h1 className="text-center text-3xl text-green-600">
        Resources will be coming soon... Keep in touch.
      </h1>
    </div>
  );
};

export default NotFound;
