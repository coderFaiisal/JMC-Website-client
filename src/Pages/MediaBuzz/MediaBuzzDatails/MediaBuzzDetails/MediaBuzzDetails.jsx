import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../../components/Loading";
import MediaBuzzTopGuests from "../MediaBuzzTopGuests/MediaBuzzTopGuests";
import MediaBuzzMeetTheGuests from "../MediaBuzzMeetTheGuests/MediaBuzzMeetTheGuests";
import MediaBuzzSponsors from "../MediaBuzzSponsors/MediaBuzzSponsors";
import MediaBuzzTopEvents from "../MediaBuzzTopEvents/MediaBuzzTopEvents/MediaBuzzTopEvents";
import MediaBuzzPhotoExhibition from "../MediaBuzzPhotoExhibition/MediaBuzzPhotoExhibition";
import MediaBuzzMemoriesPhotos from "../MediaBuzzMemories/MediaBuzzMemoriesPhotos";
import MediaBuzzMemoriesVideos from "../MediaBuzzMemories/MediaBuzzMemoriesVideos";
import MediaBuzzTestimonials from "../MediaBuzzTestimonials/MediaBuzzTestimonials";
import { AuthContext } from "../../../../Context/AuthProvider";
import useAdmin from "../../../../hooks/useAdmin";

const MediaBuzzDetails = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mediaBuzzId = useParams();
  const {
    data: mediaBuzz = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["mediaBuzz"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/api/v1/mediaBuzz/${mediaBuzzId?.id}`
      );
      const data = await res.json();
      return data;
    },
  });
  const {
    _id,
    title,
    bannerURL,
    guests,
    eventSessions,
    meetTheGuestVideos,
    memories,
    photoExhibition,
    sponsors,
    testimonials,
  } = mediaBuzz;
  console.log(mediaBuzz);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section className="bg-black pb-4">
      <div>
        <img src={bannerURL} alt="" className="w-full h-screen" />
        <h1 className="text-white text-center text-5xl font-bold my-6">
          {title}
        </h1>
      </div>

      <MediaBuzzTopGuests
        guests={guests}
        refetch={refetch}
        isAdmin={isAdmin}
        id={_id}
      ></MediaBuzzTopGuests>

      <MediaBuzzMeetTheGuests
        meetTheGuestVideos={meetTheGuestVideos}
        refetch={refetch}
        isAdmin={isAdmin}
        id={_id}
      ></MediaBuzzMeetTheGuests>

      <MediaBuzzSponsors
        sponsors={sponsors}
        refetch={refetch}
        isAdmin={isAdmin}
        id={_id}
      ></MediaBuzzSponsors>

      <MediaBuzzTopEvents
        eventSessions={eventSessions}
        refetch={refetch}
        isAdmin={isAdmin}
        id={_id}
      ></MediaBuzzTopEvents>

      <MediaBuzzPhotoExhibition
        photoExhibition={photoExhibition}
        refetch={refetch}
        isAdmin={isAdmin}
        id={_id}
      ></MediaBuzzPhotoExhibition>

      <MediaBuzzMemoriesPhotos
        memories={memories}
        refetch={refetch}
        isAdmin={isAdmin}
        id={_id}
      ></MediaBuzzMemoriesPhotos>

      <MediaBuzzMemoriesVideos
        memories={memories}
        refetch={refetch}
        isAdmin={isAdmin}
        id={_id}
      ></MediaBuzzMemoriesVideos>

      <MediaBuzzTestimonials
        testimonials={testimonials}
        refetch={refetch}
        isAdmin={isAdmin}
        id={_id}
      ></MediaBuzzTestimonials>
    </section>
  );
};

export default MediaBuzzDetails;
