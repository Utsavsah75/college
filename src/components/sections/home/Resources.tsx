"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Heading, PrimaryBtn, Card } from "@/components";
import resourcesData from "@/data/data.json";

export const Resources = () => {
  const { resources } = resourcesData;
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className=" container lg:py-3xl lg:pb-24 py-8">
      <Heading
        titleBlack="Student"
        titleBlue="Resources"
        subTitle="Empowering your well-being through compassionate care—because every tomorrow deserves health and happiness. Join LifeCare today for expert health services and care."
        className="text-center lg:px-3xl mt-xl lg:py-xl py-lg"
      />

      <div className="relative max-w-7xl mx-auto hidden lg:block">
        <button
          ref={prevRef}
          className="absolute top-1/2 -left-12 transform -translate-y-1/2 z-20 w-8 h-8 bg-gray-100 text-white rounded-full flex justify-center items-center hover:opacity-90 transition"
        >
          <ChevronLeftIcon className="w-4 h-4 text-gray-500" />
        </button>
        <button
          ref={nextRef}
          className="absolute top-1/2 -right-12 transform -translate-y-1/2 z-20 w-8 h-8 bg-gray-100 text-white rounded-full flex justify-center items-center hover:opacity-90 transition"
        >
          <ChevronRightIcon className="w-4 h-4 text-gray-500" />
        </button>

        <Swiper
          modules={[Navigation, Autoplay]}
          onBeforeInit={(swiper) => {
            if (prevRef.current && nextRef.current) {
              const navigation = swiper.params.navigation;
              if (navigation && typeof navigation !== "boolean") {
                navigation.prevEl = prevRef.current;
                navigation.nextEl = nextRef.current;
              }
              if (swiper.navigation) {
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }
          }}
          spaceBetween={24}
          slidesPerView={3}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop
          breakpoints={{
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="!h-auto"
        >
          {resources.map((resource, i) => (
            <SwiperSlide key={i} className="h-full flex pb-8 px-2">
              <Card {...resource} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="lg:hidden mx-auto lg:mt-10">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={"auto"}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop
          centeredSlides={true}
          breakpoints={{
            320: { slidesPerView: 1.1 },
            480: { slidesPerView: 1.3 },
            640: { slidesPerView: 2 },
          }}
          className="!h-auto"
        >
          {resources.map((resource, i) => (
            <SwiperSlide
              key={i}
              // Give the slide an explicit / responsive width so centeredSlides works
              className="h-full flex justify-center items-center pb-8 w-[80%] sm:w-[72%] md:w-[60%]"
            >
              <Card {...resource} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center gap-6">
        <PrimaryBtn text="View All" href="/resources" />
      </div>
    </section>
  );
};
