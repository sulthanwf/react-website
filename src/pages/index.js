import React from "react";
import { HomeOne, HomeTwo, HeroVideo, HeroContent } from "./PageStyle";
import Auckland from "../images/Auckland.jpg";
import video from "../videos/video.mp4";

const Home = () => {
  return (
    <>
      <HomeOne id="home">
        <HeroVideo autoPlay loop muted src={video} type="video/mp4" />
        <HeroContent>
          <h1>Hi, nice to meet you!</h1>
          <h2>
            Welcome to my humble website. I love creating website such as this
            as well as photography and videography that I do on the side.
          </h2>
        </HeroContent>
      </HomeOne>
      {/* <HomeTwo>
        <img src={Auckland} alt="logo" />
      </HomeTwo> */}
    </>
  );
};

export default Home;
