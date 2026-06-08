"use client";

import React, { useState, useEffect } from "react";
import { AcademicCapIcon, UsersIcon, BuildingLibraryIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { PrimaryBtn, OutlineBtn } from "@/components";

const blocks = [
  {
    icon: AcademicCapIcon,
    title: "Programs & Learning",
    subtitle: "Accredited Nursing Courses",
  },
  {
    icon: UsersIcon,
    title: "Student Support & Opportunities",
    subtitle: "Flexible Class Schedules",
  },
  {
    icon: BuildingLibraryIcon,
    title: "College Reputation & Trust",
    subtitle: "Modern Labs & Simulation Facilities",
  },
];

interface AutoScrollSliderProps {
  banner?: boolean;
  title?: string;
  dec?: string;
}

export const AutoScrollSlider: React.FC<AutoScrollSliderProps> = ({ banner = false, title, dec }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance only in default slider mode
  useEffect(() => {
    if (!banner) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % blocks.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [banner]);

  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + blocks.length) % blocks.length);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % blocks.length);

  // --- BANNER MODE ---
 if (banner) {
  return (
    <div className="bg-secondary-blue p-8 md:py-16 flex flex-col items-center text-center gap-6">
      <h2 className="text-2xl md:text-3xl font-bold text-white uppercase">
        {title || "Apply or find out more"}
      </h2>
      <p className="text-white max-w-3xl">
        {dec ||
          "Schedule a call with a Bayside Nursing College Course Advisor. Get answers about funding options, delivery modes, and whether full-time or part-time study best suits your schedule."}
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <PrimaryBtn text="Apply Now" href="/contact" className="hover:"/>
          <OutlineBtn
    text="Book a Call"
    href="tel:0449904827"
    className="text-white border-white"
  />
      </div>
    </div>
  );
}

  // --- DEFAULT SLIDER MODE ---
  return (
    <div className="container mx-auto relative">
      <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 text-center">
        {blocks.map((block, index) => (
          <div
            key={index}
            className={`flex-1 flex flex-col lg:flex-row lg:items-center gap-3 py-6
                        transition-all duration-500 ease-in-out
                        ${index === currentIndex ? "block lg:flex" : "hidden lg:flex"}`}
          >
            <block.icon className="w-10 h-10 md:w-12 md:h-12 text-secondary-blue mx-auto lg:mx-0" />
            <div className="flex flex-col items-center text-center xl:items-start xl:text-left">
              <span className="text-secondary-blue font-semibold text-sm md:text-base">{block.title}</span>
              <span className="text-pink-500 text-xs md:text-base">{block.subtitle}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Left/Right Arrows for Mobile */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full shadow-md lg:hidden"
      >
        <ChevronLeftIcon className="w-6 h-6 text-secondary-blue/70" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full shadow-md lg:hidden"
      >
        <ChevronRightIcon className="w-6 h-6 text-secondary-blue/70" />
      </button>
    </div>
  );
};
