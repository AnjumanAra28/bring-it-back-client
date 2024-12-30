import React from "react";
import Carousel from "../components/Carousel";
import LatestItems from "../pages/LatestItems";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page - Bring It Back</title>
        <meta
          name="description"
          content="Welcome to the Home Page of My Website"
        />
        <meta name="keywords" content="React, Helmet, SEO, Example" />
      </Helmet>

      <Carousel></Carousel>
      <LatestItems></LatestItems>
    </div>
  );
};

export default Home;
