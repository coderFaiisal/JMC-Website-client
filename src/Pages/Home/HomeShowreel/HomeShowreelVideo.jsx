import { CardBody, Typography } from "@material-tailwind/react";
import React from "react";

const HomeShowreelVideo = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
        <div>
          <div className="border-b-4 border-black pb-6 ">
            <video className="h-full w-full" controls>
              <source src="https://player.vimeo.com/external/322525169.sd.mp4?s=8d29a6e803f8c2aa5e2caccead18ca3eca3f585d&profile_id=164&oauth2_token_id=57447761" />
            </video>
          </div>
          <div className="flex items-center justify-between my-2 ">
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              Documentation on Bangladesh Victory Day!
            </Typography>
          </div>
        </div>
        <div>
          <div className="border-b-4 border-black pb-6 ">
            <video className="h-full w-full" controls>
              <source src="https://player.vimeo.com/external/336135451.sd.mp4?s=783abd93081138eed5cb67b83703db6e10dd6ecd&profile_id=164&oauth2_token_id=57447761" />
            </video>
          </div>
          <div className="flex items-center justify-between mb-2">
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              Documentation on Bangladesh Victory Day!
            </Typography>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div>
          <div className="border-b-4 border-black pb-6 ">
            <video className="h-full w-full" controls>
              <source src="https://player.vimeo.com/external/428235917.sd.mp4?s=22f2b4862a08f5b6e5ff397d9bd41e5b49311438&profile_id=164&oauth2_token_id=57447761" />
            </video>
          </div>
          <div className="mb-2">
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              Documentation on Bangladesh Victory Day!
            </Typography>
          </div>
        </div>
        <div>
          <div className="border-b-4 border-black pb-6 ">
            <video className="h-full w-full" controls>
              <source src="https://player.vimeo.com/external/423126565.sd.mp4?s=c86e78954491d94a298c5e0d9d648496a6d0bbcf&profile_id=164&oauth2_token_id=57447761" />
            </video>
          </div>
          <div className="mb-2">
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              Documentation on Bangladesh Victory Day!
            </Typography>
          </div>
        </div>
        <div>
          <div className="border-b-4 border-black pb-6 ">
            <video className="h-full w-full" controls>
              <source src="https://player.vimeo.com/external/491866257.sd.mp4?s=ec67951203ccf97f9ed2445e3c92fd6a4ce35d81&profile_id=164&oauth2_token_id=57447761" />
            </video>
          </div>
          <div className="mb-2">
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              Documentation on Bangladesh Victory Day!
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeShowreelVideo;
