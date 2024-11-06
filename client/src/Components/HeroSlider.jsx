import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function HeroSlider({ items }) {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#488B80",
        "--swiper-pagination-color": "#488B80",
        "--swiper-pagination-bullet-size": "12px",
      }}
      autoplay={true}
      pagination={{
        clickable: true,
      }}
      loop={true}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper h-full w-full"
    >
      {items.map((item, idx) => (
        <SwiperSlide key={idx} className="group h-full w-full pb-8">
          <img
            src={item}
            alt={`Slider ${idx}`}
            className="h-full w-full object-cover object-center transition-all duration-700 ease-in-out group-hover:scale-[1.2]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSlider;
