import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import bannerImg from '../assets/bannerImg.jpg'
import bannerImg1 from '../assets/bannerImg1.jpg'
import bannerImg2 from '../assets/bannerImg2.jpg'

import Slide from "./Slide";

const Carousel = () => {
  return (
    <div className="pt-[68px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={bannerImg}
            text="A Community Dedicated to Reconnecting Belongings"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bannerImg1}
            text="Helping You Locate What You Value Most"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bannerImg2}
            text="Together, Let’s Solve Lost and Found Cases"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
