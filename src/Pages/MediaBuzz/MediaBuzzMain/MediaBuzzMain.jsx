import React, { useEffect } from "react";
import mediaBuzzBanner from "../../../assets/Media Buzz Banner.jpg";
import { ClockIcon, CalendarIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../components/Loading";

const MediaBuzzMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bgColors = ["#01AFA3", "#F7ABB4", "#61CE70", "#F5821F", "#7FC241"];

  const {
    data: allMediaBuzz = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allMediaBuzz"],
    queryFn: async () => {
      const res = await fetch("https://jmc-web-server.vercel.app/api/v1/mediaBuzz");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="bg-black">
      <div>
        <img src={mediaBuzzBanner} alt="" className="scale-110" />
      </div>
      <div className="relative -mt-16 bg-white max-w-5xl mx-auto p-6 rounded-lg">
        <h1 className="text-center text-4xl  font-bold">
          JMC Media Buzz : A Mega Event Of JMC
        </h1>
        <p className=" text-xl mt-6 bg-gray-50 text-justify p-6 shadow-md rounded-lg">
          JMC Media Buzz, organized by the Department of Journalism, Media, and
          Communication at Daffodil International University, is a biannual mega
          event. It offers a dynamic platform for branding, marketing, and
          communication enthusiasts. The event features a captivating photo
          exhibition, engaging Q&A sessions, live discussions, and a day-long
          program. Attendees gain valuable insights from industry leaders,
          professionals, and experienced speakers. JMC Media Buzz fosters
          connections, facilitates knowledge-sharing, and creates opportunities
          for collaboration in the ever-evolving media landscape. It serves as a
          catalyst for students, aspiring professionals, and experts to explore
          emerging trends, challenges, and growth prospects in journalism,
          media, and communication. This event plays a vital role in shaping the
          future of the industry.
        </p>
      </div>
      <div className=" max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center border-b">
        {allMediaBuzz?.map((mediaBuzz, index) => (
          <Link to={`/mediaBuzz/${mediaBuzz?._id}`}>
            <Card
              className="max-w-[24rem] rounded-none overflow-hidden my-12"
              style={{ backgroundColor: bgColors[index % bgColors.length] }}
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none hover:scale-110 transform ease-in-out duration-300"
              >
                <img
                  src={mediaBuzz?.bannerURL}
                  alt="ui/ux review check"
                  className="w-full h-52"
                />
              </CardHeader>
              <CardBody>
                <Typography className="text-2xl  text-black font-bold">
                  {mediaBuzz?.title}
                </Typography>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MediaBuzzMain;
