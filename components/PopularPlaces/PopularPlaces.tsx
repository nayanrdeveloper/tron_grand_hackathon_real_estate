import React from "react";
import PlacesCard from "./PlacesCard";

function PopularPlaces() {
  interface popularCities {
    city: string;
    totalProperties: number;
    image: string
  }
  const popularPlaces: popularCities[] = [
    {
      city: "New York",
      totalProperties: 230,
      image: "/place_2.jpg",
    },
    {
      city: "Los Angles",
      totalProperties: 127,
      image: "/place_1.jpg",
    },
    {
      city: "Miami",
      totalProperties: 453,
      image: "/place_3.jpg",
    },
    {
      city: "Chicago",
      totalProperties: 124,
      image: "/place_4.jpg",
    },
  ];
  return (
    <div className="flex flex-col gap-3 container bg-wave_pattern">
      <div className="flex flex-col gap-2 text-center mt-10">
        <h2 className="text-3xl text-heading_text">Properties For Sale</h2>
        <p className="text-2xl text-light_text">
          We provide full service at every step.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-4 mt-7">
          {popularPlaces.map((cityData: popularCities, index: number) => {
            return <PlacesCard key={index} {...cityData} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default PopularPlaces;
