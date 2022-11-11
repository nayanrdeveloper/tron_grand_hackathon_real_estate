import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import Image from "next/image";

function Slider() {
  const slideImageList: string[] = ["/slide-1.jpg", "/slide-2.jpg","/slide-1.jpg", "/slide-2.jpg"];
  return (
    <div className="">
      <div className="">
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={2}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {slideImageList.map((NFTImage, index) => {
            return (
              <SwiperSlide key={index}>
                <Image src={NFTImage} alt="design2" width={"1500"} height="550"/>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
