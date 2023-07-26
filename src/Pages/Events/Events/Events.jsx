import React, { useEffect } from "react";
import UpcomingEvent from "../UpcomingEvent/UpcomingEvent";
import PreviousEvent from "../PreviousEvent/PreviousEvent";
import useTitle from "../../../hooks/useTitle";

const Events = () => {
  useTitle("Events");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <UpcomingEvent></UpcomingEvent>
      <PreviousEvent></PreviousEvent>
    </section>
  );
};

export default Events;
