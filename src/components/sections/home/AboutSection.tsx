"use client";

import { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";
import { Heading, PrimaryBtn } from "@/components";
import { motion, AnimatePresence } from "framer-motion";

export const AboutSection = ({
  reverse = false,
  galleryImages = [
    "/gallery/gallery1.jpg",
    "/images/courses/cpr.png",
    "/gallery/gallery3.jpg",
    "/images/courses/33021.png",
    "/gallery/gallery2.jpg",
    "/images/courses/43015.png",
    "/images/courses/43121.png",
    "/images/courses/first-aid.png",
  ],
  heading = {
    titleBlack: "Discover Your Future at ",
    titleBlue: "Bayside Nursing College",
  },

  paragraphs = [
    "Bayside Nursing College equips aspiring healthcare professionals with the knowledge, skills, and confidence needed to excel in dynamic healthcare environments. Our programs combine rigorous academic study with immersive practical training, ensuring graduates are job-ready from day one.",
  ],

  points = [
    "ASQA-registered RTO delivering nationally recognised qualifications aligned with industry standards",
    "Hands-on, practical training through mandatory clinical placements in diverse healthcare settings",
    "Experienced trainers and mentors providing real-world insights and professional guidance",
    "Small class sizes ensuring personalised attention and a supportive learning environment",
    "Access to career services, internships, and industry networking opportunities for seamless workforce integration",
  ],

  btnText = "Discover Our Mission",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = galleryImages.length;

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  const nextImage = () =>
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <section className="py-xl bg-white">
      <div
        className={`container mx-auto flex flex-col justify-between xl:gap-12 py-12 xl:py-24 ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-stretch`}
      >
        {/* Right Side: Text */}
        <div
          className={`lg:w-1/2 flex flex-col lg:gap-6 gap-2 ${
            reverse ? "lg:pe-0" : "lg:ps-0"
          }`}
        >
          <Heading
            titleBlack={heading.titleBlack}
            titleBlue={heading.titleBlue}
            align="left"
            hideLeftIcon
            largeSubtitle
            className="mt-xs mb-xs pb-0 pt-0"
          />

          {paragraphs.map((text, idx) => (
            <p key={idx} className="text-gray-700 ">
              {text}
            </p>
          ))}

          <ul className="flex flex-col gap-2">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-800 ">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-pink flex items-center justify-center mt-0.5">
                  <CheckIcon className="w-3 h-3 text-white" />
                </div>
                <span className="flex-1">{point}</span>
              </li>
            ))}
          </ul>

          <PrimaryBtn
            className="self-start md:mt-0 mt-4"
            text={btnText}
            href="/about#mission"
          />
        </div>
        {/* Left Side: Animated Gallery */}
        <div className="lg:w-1/2 w-full relative flex justify-center items-center">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 w-full relative">
            {/* LEFT SIDE CARD */}
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentIndex - 1}
                initial={{ opacity: 0, x: -40, rotate: -10 }}
                animate={{ opacity: 1, x: 0, rotate: -6 }}
                exit={{ opacity: 0, x: -40, rotate: -10 }}
                transition={{ duration: 0.45 }}
                className="hidden lg:flex h-60 w-36 bg-white rounded-lg shadow-xl overflow-hidden p-2 pb-6 absolute left-28 z-0"
              >
                <img
                  src={galleryImages[(currentIndex - 1 + total) % total]}
                  className="w-full h-full object-cover rounded"
                />
              </motion.div>
            </AnimatePresence>

            {/* CENTER IMAGE (FOREGROUND POLAROID) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.45 }}
                className="relative z-10 flex justify-center items-center w-64 sm:w-72 h-64 sm:h-80 bg-white p-2 pb-6 rounded-lg shadow-xl"
              >
                <img
                  src={galleryImages[currentIndex]}
                  className="w-full h-full object-cover rounded"
                />
              </motion.div>
            </AnimatePresence>

            {/* RIGHT SIDE CARD */}
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentIndex + 1}
                initial={{ opacity: 0, x: 40, rotate: 10 }}
                animate={{ opacity: 1, x: 0, rotate: 6 }}
                exit={{ opacity: 0, x: 40, rotate: 10 }}
                transition={{ duration: 0.45 }}
                className="hidden lg:flex h-60 w-36 bg-white rounded-lg shadow-xl overflow-hidden p-2 pb-6 absolute right-28 z-0"
              >
                <img
                  src={galleryImages[(currentIndex + 1) % total]}
                  className="w-full h-full object-cover rounded"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 h-16 w-16 sm:h-24 sm:w-24 flex justify-center items-center z-20"
            >
              <div className="bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-100">
                <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </div>
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 h-16 w-16 sm:h-24 sm:w-24 flex justify-center items-center z-20"
            >
              <div className="bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-100">
                <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
