import Image from "next/image";
import React from "react";
import { GrMapLocation } from "react-icons/gr";
import PropertyAll from "./PropertyAll";

function PropertyDetails() {
  return (
    <div className="py-10 bg-bg-light-800">
      <div className="bg-property_background">
        <div className="flex justify-between px-10">
          <div className="flex flex-col gap-2">
            <span className="flex gap-4 items-center">
              <h3 className="font-bold text-2xl">Luxury Villa House</h3>
              <div className="category_tag">For Sale</div>
            </span>
            <div className="flex gap-2 text-light_text">
              <GrMapLocation />
              <span className="text-light_text">
                77 - Central Park South, NYC
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl text-tag font-bold">$ 230,000</span>
            <span className="text-[#333]">$ 1,200 / sq ft</span>
          </div>
        </div>
      </div>
      <div className="px-10 flex gap-2 mt-5">
        <div className="details_card flex flex-col gap-3">
          <h3 className="m-0 p-0 font-bold text-2xl">Gallery</h3>
          <Image src={"/b-12.jpg"} alt={"logo"} width={500} height={400} />
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <div>
              <PropertyAll />
            </div>
            <div>
              <button className="category_tag">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 flex gap-2 mt-7">
        <div className="details_card">
          <h3 className="m-0 p-0 font-bold text-2xl before:border-b-2 border-black">Description</h3>
          <p className="text-light_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quidem molestias veniam sapiente, consequatur laborum
            eius nesciunt. Fugit neque perferendis, nobis laudantium provident
            numquam voluptates voluptas ipsum dolor delectus harum ut recusandae
            necessitatibus fugiat ipsa ab molestias illum nihil porro inventore
            unde cupiditate? Voluptate quam illo cupiditate nihil voluptatem
            ipsa?
          </p>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
