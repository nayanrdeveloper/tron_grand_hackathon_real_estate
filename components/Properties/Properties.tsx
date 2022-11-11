import React from "react";
import PropertyCard from "./PropertyCard";

function Properties() {
  interface propertyStruct {
    image: string;
    name: string;
    location: string;
    price: number;
    beds: number;
    baths: number;
    area: number;
  }
  const propertyList: propertyStruct[] = [
    {
      image: "/b-11.jpg",
      name: "Real House Luxury Villa",
      location: "Est St, 77 - Central Park South, NYC",
      price: 12,
      beds: 3,
      baths: 1,
      area: 7200,
    },
    {
      image: "/b-1.jpg",
      name: "Real House Luxury Villa",
      location: "Est St, 77 - Central Park South, NYC",
      price: 12,
      beds: 3,
      baths: 1,
      area: 7200,
    },
    {
      image: "/fp-11.jpg",
      name: "Real House Luxury Villa",
      location: "Est St, 77 - Central Park South, NYC",
      price: 12,
      beds: 3,
      baths: 1,
      area: 7200,
    },
    {
      image: "/b-12.jpg",
      name: "Real House Luxury Villa",
      location: "Est St, 77 - Central Park South, NYC",
      price: 12,
      beds: 3,
      baths: 1,
      area: 7200,
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
        <div className="flex gap-4 mt-7">
          {propertyList.map((propertyData: propertyStruct, index: number) => {
            return <PropertyCard key={index} {...propertyData} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Properties;
