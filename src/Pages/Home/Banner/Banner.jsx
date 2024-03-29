import React from "react";
import promo from "../../../assets/JMC Promo.mp4";

const Banner = () => {
  return (
    <div className="relative w-2xl after:contents-[''] after:absolute after:top-0 after:left-0 after:w-full lg:after:h-full after:bg-gradient-to-r from-black to-transparent ">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full lg:h-full object-cover "
      >
        <source src={promo}></source>
        {/* <source src="https://player.vimeo.com/progressive_redirect/playback/833365091/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=82e19aafca81d7888203e19255ddbe4a4a8c5b7d9aa6b5f55b6c2f01437c75bd" type="video/mp4" /> */}
      </video>
      <div className="relative z-10 min-h-fit lg:min-h-screen top-16  flex justify-center items-center text-white text-xl md:text-3xl lg:text-4xl font-bold text-center ">
        Department <br />
        of <br />
        Journalism Media & Communication
      </div>
    </div>
  );
};

export default Banner;
