import React from "react";

const MediaBuzzDetails = () => {
  return (
    <section>
      <div>
        <h1 className="text-4xl text-blue-600 text-center underline underline-offset-4 my-4">
          Overview
        </h1>
        <p className="w-3/4 mx-auto text-xl text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae dolor,
          eveniet dicta aspernatur sed consectetur, rerum similique alias odio
          repellendus distinctio nisi exercitationem, excepturi et laboriosam
          cupiditate iste maiores ducimus?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quis magnam quae est natus? Obcaecati minus libero
          magnam. Earum, blanditiis? Ducimus cumque velit vero ut, quos tenetur
          repellendus molestiae vel porro.
        </p>
      </div>
      <div>
        <h1 className="my-4 text-3xl text-blue-600 ml-6">Photos</h1>
        <div className="grid grid-cols-3 gap-4 justify-items-center">
        <img
      className="h-full w-full rounded-lg"
      src="https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="image"
    />
        <img
      className="h-full w-full rounded-lg"
      src="https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="image"
    />
        <img
      className="h-full w-full rounded-lg"
      src="https://images.pexels.com/photos/3321791/pexels-photo-3321791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="image"
    />
        </div>
      </div>

      <h1 className="my-4 text-3xl text-blue-600 ml-6">Video Contents</h1>
      <div className="grid grid-cols-2 gap-5 justify-items-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dLOq5vRWYXU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/beB1m4AmvLk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default MediaBuzzDetails;
