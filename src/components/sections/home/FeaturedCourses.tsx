"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Heading, PrimaryBtn, OutlineBtn, Card } from "@/components";
import coursesData from "@/data/data.json";

export const FeaturedCourses = () => {
  const { courses } = coursesData;
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="xl:px-12 px-6 py-3xl">
      <Heading
        titleBlack="Featured"
        titleBlue="Courses"
        subTitle="Begin Your Nursing Career: Programs for Beginners, Career Changers, and First-Time Students Learn the fundamentals of nursing and gain the essential knowledge, skills, and clinical experience to enter the healthcare field with confidence."
        className="text-center xl:px-3xl lg:py-xl py-lg"
      />

      {/* Desktop Swiper */}
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
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          className="!h-auto"
        >
          {courses.map((course, i) => (
            <SwiperSlide key={i} className="h-full flex pb-8 px-2">
              <Card {...course} href={`/courses/${course.slug}`}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile Swiper */}
      <div className="relative max-w-md mx-auto block lg:hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1.1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop
          breakpoints={{
            320: { slidesPerView: 1.05 },
            480: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
          }}
          className="!h-auto"
        >
          {courses.map((course, i) => (
            <SwiperSlide key={i} className="h-full flex pb-6 px-2">
              <Card {...course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center gap-6">
        <OutlineBtn text="View All Courses" href="/courses"/>
        <PrimaryBtn text="Make an enquiry" href="tel:0449904827"/>
      </div>
    </section>
  );
};
