import Image from "next/image";
import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { BiBed, BiShapeTriangle } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { MdCompareArrows, MdGarage } from "react-icons/md";

function listings() {
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
    <div>
      <div className="container px-10">
        <div className="mt-5">
          <h3 className="text-2xl font-semibold text-heading_text">Listings</h3>
          <div className="grid grid-cols-3 gap-3 mt-4">
            {propertyList.map((propertyData) => {
              return (
                <div className="border card_border rounded-md relative z-10">
                  <Image
                    src={propertyData.image}
                    alt={propertyData.name}
                    height={300}
                    width={390}
                  />
                  <div className="absolute left-4 top-4 bg-tag rounded-md p-2 text-white">For Sale</div>
                  <div className="px-3">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold text-2xl text-heading_text">{propertyData.name}</h3>
                      <span className="flex gap-2 items-center text-light_text">
                        <GrMapLocation />
                        <span>{propertyData.location}</span>
                      </span>
                    </div>
                    <div className="flex gap-3 text-light_text mt-2">
                      <div className="flex gap-3 items-center">
                        <BiBed />
                        <span>{propertyData.beds} Bedrooms</span>
                      </div>
                      <div className="flex gap-3 items-center">
                        <FaBath />
                        <span>{propertyData.beds} Bathrooms</span>
                      </div>
                    </div>
                    <div className="flex gap-3 text-light_text mt-2">
                      <div className="flex gap-3 items-center">
                        <BiShapeTriangle />
                        <span>{propertyData.area} sq ft</span>
                      </div>
                      <div className="flex gap-3 items-center">
                        <MdGarage />
                        <span>{propertyData.area} Garages</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default listings;
