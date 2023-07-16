import { Dialog, Typography, Card } from "@material-tailwind/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Loading";

const PreviousEventDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const eventId = useParams();
  const { data: previousEvent = [], isLoading } = useQuery({
    queryKey: ["previousEvent"],
    queryFn: async () => {
      const res = await fetch(
        `https://jmc-web-server.vercel.app/api/v1/previousEvent/${eventId?.id}`
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(previousEvent);

  const {
    _id,
    title,
    photoURL,
    description,
    organizer,
    videos,
    photos,
    testimonials,
    date,
    speakers,
  } = previousEvent;

  const handleEventRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.resetEmail.value;
  };
  const bgColors = ["#01AFA3", "#F7ABB4", "#61CE70", "#F5821F", "#7FC241"];

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="bg-black py-12">
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <div className="w-full h-[400px] object-contain">
            <img
              src={photoURL}
              alt="image"
              className="w-full mx-auto h-full object-cover"
            />
          </div>
          <div className="relative top-[-80px] flex w-2/3 border border-white flex-col rounded-lg bg-black p-4 mx-auto justify-center">
            <Typography variant="h3" className="mb-2 text-white">
              {title}
            </Typography>
            <Typography variant="h5" color="blue" className="mb-4">
              Speaker : {speakers}
            </Typography>
            <Typography className="font-normal text-white">
              Organized by : {organizer}
            </Typography>
            <Typography className="font-normal text-white">
              Overview : {description}
            </Typography>
            <Typography className="font-normal text-white">
              Date : {date}
            </Typography>
          </div>
        </div>
      </div>
      <div className="grid gap-4 max-w-4xl mx-auto mb-12">
        <h1 className="text-white  text-4xl underline underline-offset-4">
          Video Content
        </h1>
        {videos.map((v) => (
          <iframe
            width="100%"
            height="400px"
            src={v}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ))}
      </div>
      <div className="grid gap-4 max-w-4xl mx-auto my-12">
        <h1 className="text-white  text-4xl underline underline-offset-4">
          Memories
        </h1>
        <div className="grid grid-cols-3">
          {photos.map((photo, idx) => (
            <React.Fragment>
              <Card
                className="cursor-pointer overflow-hidden transition-opacity hover:opacity-90 rounded-none"
                onClick={() => handleOpen(photo)}
              >
                <img
                  alt="nature"
                  className="h-full w-full object-cover object-center"
                  src={photo}
                />
              </Card>
              <Dialog size="xl" open={open} handler={() => setOpen(false)}>
                <img
                  alt="nature"
                  className="h-[40rem] w-full object-cover object-center"
                  src={selectedImage}
                />
              </Dialog>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="grid gap-4 max-w-4xl mx-auto my-4">
        <h1 className="text-white  text-4xl underline underline-offset-4">
          Testimonials
        </h1>
        <div className="grid grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="text-white w-72 my-6 rounded-lg"
              style={{ backgroundColor: bgColors[index % bgColors.length] }}
            >
              <div className="flex justify-center">
                {testimonial?.image ? (
                  <img src={testimonial?.image} alt="" />
                ) : (
                  <UserCircleIcon className="w-24 mt-[-30px] text-white bg-black rounded-full" />
                )}
              </div>

              <p className="p-2 mb-2 text-center">{testimonial?.message}</p>
              <div className="flex justify-between p-2">
                <h1>{testimonial?.name}</h1>
                <p>{testimonial?.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousEventDetails;
