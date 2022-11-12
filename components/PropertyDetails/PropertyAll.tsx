import React from "react";

function PropertyAll() {
  return (
    <div className="details_card">
      <h3 className="m-0 p-0 font-bold text-2xl">Property Details</h3>
      <div className="grid grid-cols-3 gap-4 mt-5">
        <div className="flex gap-2">
          <span className="text-[#555] font-semibold">Property ID: </span>
          <span className="text-light_text">V254680</span>
        </div>
        <div className="flex gap-2">
          <span className="text-[#555] font-semibold">Property Type: </span>
          <span className="text-light_text">House</span>
        </div>
        <div className="flex gap-2">
          <span className="text-[#555] font-semibold">Property status: </span>
          <span className="text-light_text">For Sale</span>
        </div>
        <div className="flex gap-2">
          <span className="text-[#555] font-semibold">Property Price: </span>
          <span className="text-light_text">$230,000</span>
        </div>
        <div className="flex gap-2">
          <span className="text-[#555] font-semibold">Rooms: </span>
          <span className="text-light_text">6</span>
        </div>
        <div className="flex gap-2">
          <span className="text-[#555] font-semibold">Bedrooms: </span>
          <span className="text-light_text">7</span>
        </div>
        <div className="flex gap-2">
          <span className="text-[#555] font-semibold">Bath: </span>
          <span className="text-light_text">4</span>
        </div>
        <div className="flex gap-2">
          <span className="text-[#555] font-semibold">Garages: </span>
          <span className="text-light_text">2</span>
        </div>
        <div className="flex gap-2">
          <span className="text-[#555] font-semibold">Year Built: </span>
          <span className="text-light_text">10/6/2020</span>
        </div>
      </div>
    </div>
  );
}

export default PropertyAll;
