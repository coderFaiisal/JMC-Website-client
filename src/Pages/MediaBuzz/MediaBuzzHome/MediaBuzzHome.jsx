import React, { useEffect } from "react";
import MediaBuzz from "../MediaBuzz/MediaBuzz";

const MediaBuzzHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <MediaBuzz></MediaBuzz>
    </div>
  );
};

export default MediaBuzzHome;
