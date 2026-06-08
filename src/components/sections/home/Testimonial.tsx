"use client";

import React from "react";
import { Heading, OutlineBtn, PrimaryBtn } from "@/components";
import { StarIcon } from "@heroicons/react/24/solid";
import data from "@/data/data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export const Testimonial = () => {
  return (
    <div className="flex flex-col py-md px-6 lg:px-24 gap-4">
      <Heading
        titleBlack="What Our  "
        titleBlue="Students Say"
        subTitle="Hear from graduates and learners who have completed our aged care, disability support, and community services courses. Their experiences reflect practical training, workplace placement, and career-ready skills provided by Bayside Nursing College."
        className="text-center lg:px-3xl lg:py-xl py-lg"
      />

      <div className="flex flex-col lg:flex-row lg:gap-12 gap-6">
        <div className="lg:w-1/5 w-full flex flex-col lg:items-center items-start gap-2 border rounded-lg p-2 xl:p-6">
          <div className="lg:flex-col flex items-center gap-2 w-full">
            <img src="/icons/google.svg" alt="Google" className="w-8 xl:w-12" />
            <span className="font-semibold text-base xl:text-lg">5.0</span>
            <p className="flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-3 h-3 xl:w-4 xl:h-4" />
              ))}
            </p>
          </div>

          <span className="text-gray-600  xl:text-base ml-0 xl:ml-2 lg:text-center">
            (Based on 5 reviews)
          </span>

          <p className="text-gray-700 font-medium  xl:text-base lg:text-center">
            Hear Genuine Experiences from Our Students
          </p>
        </div>

        <div className="lg:w-4/5 w-full gap-6">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            slidesPerGroup={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={800}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10, slidesPerGroup: 1 },
              768: { slidesPerView: 2, spaceBetween: 20, slidesPerGroup: 1 },
              1024: { slidesPerView: 3, spaceBetween: 30, slidesPerGroup: 1 },
            }}
            modules={[Autoplay, Pagination]}
          >
            {data.testimonialData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="border rounded-xl p-6 shadow-sm bg-white h-full">
                  <div className="flex items-center gap-4">
                    <div className="p-1 rounded-full border-2 border-gray flex items-center justify-center">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="lg:w-12 lg:h-12 w-9 h-9 rounded-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-gray-800 lg:text-md ">{item.name}</h4>
                        <span className="text-gray-500  lg:text-md text-xs">({item.date})</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1 text-yellow-400">
                        {[...Array(item.stars)].map((_, i) => (
                          <StarIcon key={i} className="w-4 h-4" />
                        ))}
                      </div>
                    </div>

                    <img
                      src="/icons/apostrophe.svg"
                      alt="Quote"
                      className="lg:w-8 lg:h-8 w-6 h-6"
                    />
                  </div>
                  <p className="mt-2 text-gray-700 lg:text-md ">{item.review}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>


          <div className="flex gap-6 justify-center md:justify-start mt-6">
            <OutlineBtn text="View All Courses" href="/courses"/>
            <PrimaryBtn text="Make an enquiry" href="tel:0449904827"/>
          </div>
        </div>
      </div>
    </div>
  );
};
