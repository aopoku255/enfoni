import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "../review.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ReviewCard from "./ReviewCard";

export default function ReviewCarousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-144 h-96"
      >
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard
            image="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max"
            name="Adino"
            position="Photographer"
            heading="Nice working For Enfoni"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, tempore!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
