import image from "../assets/test.png";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const TestData = [
  {
    id: 1,
    title: "All India test",
    subTitle: "Boost your Exam preparation",
    description:
      "Enhance your exam preparation with the All India Test Series. Achieve your academic goals and secure top ranks!",
    button: "Join Today",
  },
  {
    id: 2,
    title: "Writo Mentorship",
    subTitle: "Chart your course to success with personalized mentorsh",
    description: "Fuel your growth with the power of mentorship|",
    button: "Connect Now",
  },
  {
    id: 3,
    title: "Writo Student Community",
    subTitle: "Connect with like-minded individuals",
    description:
      "Connect with individuals who are as excited about 6-10 Class Exam as you are, fostering an environment of collaboration and mutual growth.",
    button: "Connect and collabrate",
  },
];

const Test = () => {
  return (
    <div className="w-full">
      <section
        className="relative py-12"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(34, 34, 34,0.70)" }}
        ></div>

        <Swiper
          style={{
            "--swiper-navigation-color": "#488B80",
            "--swiper-pagination-color": "#488B80",
          }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            enabled: true,
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {TestData.map((item, idx) => (
            <SwiperSlide>
              <div className="relative z-10 mx-auto flex h-full w-full flex-shrink-0 items-center justify-center p-6 md:p-2">
                <div className="flex w-full flex-col items-center lg:w-1/2">
                  <h1 className="mb-1 text-center text-3xl font-bold text-[#85E8C5] md:mb-2 lg:mb-4">
                    {item.title}
                  </h1>
                  <h2 className="mb-1 text-center text-2xl text-[#85E8C5] md:mb-2 lg:mb-4">
                    {item.subTitle}
                  </h2>
                  <p className="mb-1 px-8 text-center text-white md:px-24 lg:mb-2">
                    {item.description}
                  </p>
                  <a href="/jee-test-series" className="mt-4">
                    <button className="rounded bg-[#488B80] px-4 py-2 font-semibold text-white hover:bg-[#e5e7eb] hover:text-black">
                      {item.button}
                    </button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Test;
