import Image from "next/image";
import React from "react";

interface popularCities {
  city: string;
  totalProperties: number;
  image: string;
}

function PlacesCard(cityData: popularCities) {
  return (
    <div>
      <div className="relative z-10">
        <Image
          src={cityData.image}
          alt={cityData.city}
          height={250}
          width={250}
          className=""
        />
        <div className="absolute top-[50%] items-center justify-center mx-auto left-[20%] z-20 text-white flex flex-col text-center">
          <span className="font-semibold text-2xl">{cityData.city}</span>
          <span>{cityData.totalProperties} Properties</span>
        </div>
      </div>
    </div>
  );
}

export default PlacesCard;
