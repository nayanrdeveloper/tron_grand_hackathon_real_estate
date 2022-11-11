import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import PopularPlaces from "../components/PopularPlaces/PopularPlaces";
import Properties from "../components/Properties/Properties";
import Slider from "../components/Slider/Slider";

const Home: NextPage = () => {
  return (
    <div>
      <Slider />
      <Properties />
      <PopularPlaces />
    </div>
  );
};

export default Home;
