import React from "react";
import HomeShowreelVideo from "./HomeShowreelVideo";

const HomeShowreel = () => {
  return (
    <section className="my-4 lg:mt-40 ">
      <div className="px-6">
        <h1 className="text-6xl  font-bold ">Showreel</h1>
        <p className=" text-3xl my-2 lg:my-8 pb-6 mx-auto ">
          Meet our students exceptional works
        </p>
      </div>
      <HomeShowreelVideo></HomeShowreelVideo>
    </section>
  );
};

export default HomeShowreel;
