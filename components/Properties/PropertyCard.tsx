import Image from "next/image";
import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { BiBed, BiShapeTriangle } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { MdCompareArrows } from "react-icons/md";

interface propertyStruct {
  image: string;
  name: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  area: number;
}

function PropertyCard(propertyData: propertyStruct) {
  return (
    <div>
      <div className="flex flex-col gap-2 border border-card_border rounded-md">
        <Image
          src={propertyData.image}
          alt={propertyData.name}
          height={210}
          width={300}
        />
        <div className="px-3 py-2">
          <h3 className="text-center text-heading_text font-bold">
            {propertyData.name}
          </h3>
          <span className="text-center">
            <span className="flex gap-1 justify-center items-center text-light_text">
              <GrMapLocation className="text-light_text" />
              {propertyData.location}
            </span>
          </span>
          <div className="flex justify-between text-light_text">
            <span className="flex gap-1 items-center">
              <FaBath />
              <span>{propertyData.baths} Baths</span>
            </span>
            <span className="flex gap-1 items-center">
              <BiBed />
              <span>{propertyData.beds} Beds</span>
            </span>
            <span className="flex gap-1 items-center">
              <BiShapeTriangle />
              <span>{propertyData.area} sq ft</span>
            </span>
          </div>
          <div className="border-t border-card_border mt-4 py-2 flex justify-between items-center">
            <div>
              <span className="text-heading_text font-semibold">${propertyData.price}</span>
            </div>
            <div>
              <span className="flex gap-2 text-2xl text-light_text">
                <MdCompareArrows/>
                <BsShare />
                <AiOutlineHeart />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
