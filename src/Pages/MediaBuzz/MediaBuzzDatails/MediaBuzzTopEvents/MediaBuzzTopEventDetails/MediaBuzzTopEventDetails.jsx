import React from "react";
import { useParams } from "react-router-dom";

const MediaBuzzTopEventDetails = () => {
  const { id, eventId } = useParams();

  return (
    <section className="bg-black">
      <div>
        {/* <img src="" alt="" className="w-full h-screen" /> */}
        <h1 className="text-white text-center text-2xl font-bold py-10">
          This is top event details section. Information will comming soon!!!
          Keep in touch...
        </h1>
      </div>
      <div className=" max-w-5xl "></div>
    </section>
  );
};

export default MediaBuzzTopEventDetails;
