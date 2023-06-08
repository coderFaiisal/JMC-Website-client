import React, { useEffect } from "react";
import HomeMediaBuzz from "../HomeMediaBuzz/HomeMediaBuzz";
import Banner from "../Banner/Banner";
import HomeShowreel from "../HomeShowreel/HomeShowreel";
import HomeEvents from "../HomeEvents/HomeEvents";
import HomeTalentHunt from "../HomeTalentHunt/HomeTalentHunt";
import HomeQuickLink from "../HomeQuickLink/HomeQuickLink";
import HomeOnlineCourse from "../HomeOnlineCourse/HomeOnlineCourse";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner></Banner>
      <HomeEvents></HomeEvents>
      <HomeMediaBuzz></HomeMediaBuzz>
      <HomeShowreel></HomeShowreel>
      <HomeTalentHunt></HomeTalentHunt>
      <HomeQuickLink></HomeQuickLink>
      <HomeOnlineCourse></HomeOnlineCourse>
    </div>
  );
};

export default Home;
