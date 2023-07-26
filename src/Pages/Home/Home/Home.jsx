import React, { useEffect } from "react";
import HomeMediaBuzz from "../HomeMediaBuzz/HomeMediaBuzz";
import Banner from "../Banner/Banner";
import HomeShowreel from "../HomeShowreel/HomeShowreel";
import HomeEvents from "../HomeEvents/HomeEvents";
import HomeTalentHunt from "../HomeTalentHunt/HomeTalentHunt";
import HomeQuickLink from "../HomeQuickLink/HomeQuickLink";
import HomeCDSTF from "../HomeCDSTF/HomeCDSTF";
import StudyInfo from "../StudyInfo/StudyInfo";
import useTitle from "../../../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner></Banner>
      <HomeEvents></HomeEvents>
      <HomeTalentHunt></HomeTalentHunt>
      <HomeMediaBuzz></HomeMediaBuzz>
      <HomeCDSTF></HomeCDSTF>
      <HomeShowreel></HomeShowreel>
      <StudyInfo></StudyInfo>
      <HomeQuickLink></HomeQuickLink>
    </div>
  );
};

export default Home;
