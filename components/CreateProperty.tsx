import React, { useState } from "react";

function CreateProperty() {
  interface propertyFeatureStruct{
    name: string;
    value: string;
    id: string;
    checked: boolean;
  }
  interface propertyLocationStruct{
    address : string;
    city: string;
    state: string;
    country: string;
  }
  interface propertyDetailStruct{
    title: string;
    desc: string;
    status: string;
    type: string;
    rooms: number;
    price : number | undefined;
    area: number | undefined
  }
  const [propertyFeatureList, setPropertyFeatureList] = useState<propertyFeatureStruct[]>([
    {
      name: "Air Conditioning",
      value: "air_conditioning",
      id: "air_conditioning",
      checked: false,
    },
    {
      name: "Swimming Pool",
      value: "swimming_pool",
      id: "swimming_pool",
      checked: false,
    },
    {
      name: "Central Heating",
      value: "central_heating",
      id: "central_heating",
      checked: false,
    },
    {
      name: "Laundry Room",
      value: "laundry_room",
      id: "laundry_room",
      checked: false,
    },
    {
      name: "Gym",
      value: "gym",
      id: "gym",
      checked: false,
    },
    {
      name: "Alarm",
      value: "alarm",
      id: "alarm",
      checked: false,
    },
    {
      name: "Window Covering",
      value: "window_covering",
      id: "window_covering",
      checked: false,
    },
    {
      name: "Refrigerator",
      value: "refrigerator",
      id: "refrigerator",
      checked: false,
    },
    {
      name: "TV Cable & WIFI",
      value: "tv_cable_wifi",
      id: "tv_cable_wifi",
      checked: false,
    },
    {
      name: "Microwave",
      value: "microwave",
      id: "microwave",
      checked: false,
    },
  ]);

  const [propertyLocation, setPropertyLocation] = useState<propertyLocationStruct>({
    address: "",
    city: "",
    state: "",
    country: "",
  });

  const [propertyDetail, setPropertyDetail] = useState<propertyDetailStruct>({
    "title": "",
    "desc": "",
    status: "sale",
    type: "house",
    rooms: 1,
    price: undefined,
    area: undefined,
  })

  const onChangeProperty = (e: any) => {
    console.log(e.currentTarget);
  };

  return (
    <div>
      <div className="container px-10">
        <div className="flex flex-col">
          <div className="flex flex-col bg-white p-10 mt-5">
            <h1 className="input_heading">Property Description And Price</h1>
            <div className="flex flex-col gap-2 mt-5">
              <div className="flex flex-col gap-3">
                <label className="input_label">Property Title</label>
                <input
                  type={"text"}
                  className="input_border"
                  placeholder="Enter your property title"
                  onChange={(e) =>
                    setPropertyDetail({
                      ...propertyDetail,
                      title: e.currentTarget.value,
                    })
                  }
                  value={propertyDetail.title}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="input_label">Property Description</label>
                <textarea
                  className="input_textarea"
                  rows={4}
                  placeholder="Describe about your property"
                  onChange={(e) =>
                    setPropertyDetail({
                      ...propertyDetail,
                      desc: e.currentTarget.value,
                    })
                  }
                  value={propertyDetail.desc}
                />
              </div>
              <div className="flex gap-3">
                <select
                  className="input_border bg-transparent mt-3"
                  placeholder="Select Status"
                  onChange={(e) =>
                    setPropertyDetail({
                      ...propertyDetail,
                      status: e.currentTarget.value,
                    })
                  }
                  value={propertyDetail.status}
                >
                  <option value={"rent"}>Rent</option>
                  <option value={"sale"}>Sale</option>
                </select>
                <select
                  className="input_border bg-transparent mt-3"
                  placeholder="rooms"
                  onChange={(e) =>
                    setPropertyDetail({
                      ...propertyDetail,
                      rooms: parseInt(e.currentTarget.value),
                    })
                  }
                  value={propertyDetail.rooms}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <select
                  className="input_border bg-transparent mt-3"
                  placeholder="Type"
                  onChange={(e) =>
                    setPropertyDetail({
                      ...propertyDetail,
                      type: e.currentTarget.value,
                    })
                  }
                  value={propertyDetail.type}
                >
                  <option>House</option>
                  <option>Commercial</option>
                  <option>Apartment</option>
                  <option>Lot</option>
                  <option>Garage</option>
                </select>
              </div>
              <div className="flex gap-3">
                <div className="flex flex-col gap-3 w-full">
                  <label className="input_label">Price</label>
                  <input
                    type={"number"}
                    className="input_border"
                    placeholder="USD"
                    onChange={(e) =>
                      setPropertyDetail({
                        ...propertyDetail,
                        price: parseInt(e.currentTarget.value),
                      })
                    }
                    value={propertyDetail.price}
                  />
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <label className="input_label">Area</label>
                  <input
                    type={"number"}
                    className="input_border"
                    placeholder="Sqft"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white p-10 mt-5">
            <h1 className="input_heading">Property Location</h1>
            <div className="flex flex-col gap-2 mt-5">
              <div className="flex gap-8">
                <div className="flex flex-col gap-3 w-full">
                  <label className="input_label">Address</label>
                  <input
                    type={"text"}
                    onChange={(e) =>
                      setPropertyLocation({
                        ...propertyLocation,
                        address: e.currentTarget.value,
                      })
                    }
                    value={propertyLocation.address}
                    className="input_border"
                    placeholder="Enter your Address"
                  />
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <label className="input_label">City</label>
                  <input
                    type={"text"}
                    className="input_border"
                    placeholder="Enter your City"
                    onChange={(e) =>
                      setPropertyLocation({
                        ...propertyLocation,
                        city: e.currentTarget.value,
                      })
                    }
                    value={propertyLocation.city}
                  />
                </div>
              </div>
              <div className="flex gap-8">
                <div className="flex flex-col gap-3 w-full">
                  <label className="input_label">State</label>
                  <input
                    type={"text"}
                    className="input_border"
                    placeholder="Enter your State"
                    onChange={(e) =>
                      setPropertyLocation({
                        ...propertyLocation,
                        state: e.currentTarget.value,
                      })
                    }
                    value={propertyLocation.state}
                  />
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <label className="input_label">Country</label>
                  <input
                    type={"text"}
                    id=""
                    className="input_border"
                    placeholder="Enter your Country"
                    onChange={(e) =>
                      setPropertyLocation({
                        ...propertyLocation,
                        country: e.currentTarget.value,
                      })
                    }
                    value={propertyLocation.country}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white p-10 mt-5">
            <h1 className="input_heading">Property Features</h1>
            <div className="flex flex-col gap-2 mt-5">
              <div className="grid grid-cols-4 space-y-3 mt-3">
                {propertyFeatureList &&
                  propertyFeatureList.map((propertyFeatureData: any) => {
                    return (
                      <div className="flex gap-3">
                        <input
                          type={"checkbox"}
                          id={propertyFeatureData.id}
                          className=""
                          name="propertfeature"
                          onChange={(e) =>
                            (propertyFeatureData.checked =
                              e.currentTarget.checked)
                          }
                        />
                        <label
                          htmlFor={propertyFeatureData.id}
                          className="text-light_text"
                        >
                          {propertyFeatureData.name}
                        </label>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProperty;
