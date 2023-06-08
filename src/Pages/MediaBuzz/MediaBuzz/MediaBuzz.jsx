import React from "react";
import mediaBuzzBanner from "../../../assets/Media buzz banner.png";
import { ClockIcon, CalendarIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const MediaBuzz = () => {
  return (
    <section>
      <div>
        <img src={mediaBuzzBanner} alt="" />
      </div>
      <div className="my-16">
        <h1 className="text-center text-4xl font-serif">
          JMC Media Buzz : A Mega Event Of JMC
        </h1>
        <p className="font-mono text-xl mt-6 bg-gray-200 p-6 mx-12 shadow-md rounded-lg">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        <Link to={`/mediaBuzz/${1}`}>
          <Card className="max-w-[24rem] rounded-none overflow-hidden my-12">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none hover:scale-110 transform ease-in-out duration-300"
            >
              <img
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="ui/ux review check"
              />
            </CardHeader>
            <CardBody>
              <Typography className="text-2xl font-serif text-yellow-800 hover:underline underline-offset-4">
                Spring 2023
              </Typography>
            </CardBody>
          </Card>
        </Link>
        <Link to={`/mediaBuzz/${2}`}>
          <Card className="max-w-[24rem] rounded-none overflow-hidden my-12">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none hover:scale-110 transform ease-in-out duration-300"
            >
              <img
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="ui/ux review check"
              />
            </CardHeader>
            <CardBody>
              <Typography className="text-2xl font-serif text-yellow-800 hover:underline underline-offset-4">
                Spring 2023
              </Typography>
            </CardBody>
          </Card>
        </Link>
        <Link to={`/mediaBuzz/${3}`}>
          <Card className="max-w-[24rem] rounded-none overflow-hidden my-12">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none hover:scale-110 transform ease-in-out duration-300"
            >
              <img
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="ui/ux review check"
              />
            </CardHeader>
            <CardBody>
              <Typography className="text-2xl font-serif text-yellow-800 hover:underline underline-offset-4">
                Spring 2023
              </Typography>
            </CardBody>
          </Card>
        </Link>
      </div>
    </section>
  );
};

export default MediaBuzz;
