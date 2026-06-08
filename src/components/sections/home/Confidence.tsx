"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import * as HeroIcons from "@heroicons/react/24/outline";
import { Heading, OutlineBtn, PrimaryBtn } from "@/components";
import data from "@/data/data.json";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export const Confidence = () => {
  const categories = [
    {
      id: "affordable-study",
      label: "Affordable Study",
      icon: "CurrencyDollarIcon",
    },
    { id: "flexible-learning", label: "Flexible Learning", icon: "ClockIcon" },
    {
      id: "workplace-commitment",
      label: "Workplace Commitment",
      icon: "BriefcaseIcon",
    },
    {
      id: "nationally-recognized",
      label: "Nationally Recognized",
      icon: "AcademicCapIcon",
    },
  ];

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const selectedCategory = categories[selectedCategoryIndex];
  const selectedData = data.confidence.find(
    (cat) => cat.category === selectedCategory.id
  );
  if (!selectedData) return null;

  const handlePrev = () => {
    const newIndex =
      selectedCategoryIndex === 0
        ? categories.length - 1
        : selectedCategoryIndex - 1;
    setSelectedCategoryIndex(newIndex);
    scrollToCategory(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      selectedCategoryIndex === categories.length - 1
        ? 0
        : selectedCategoryIndex + 1;
    setSelectedCategoryIndex(newIndex);
    scrollToCategory(newIndex);
  };

  const scrollToCategory = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const child = container.children[index] as HTMLElement;
    if (!child) return;
    const offset =
      child.offsetLeft - container.offsetWidth / 2 + child.offsetWidth / 2;
    container.scrollTo({ left: offset, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToCategory(selectedCategoryIndex);
  }, [selectedCategoryIndex]);

  return (
    <section className="container md:py-16 pt-0">
      <Heading
        titleBlack="Study with "
        titleBlue="Confidence"
        subTitle="Empowering your well-being through compassionate care—because every tomorrow deserves health and happiness. Join LifeCare today for expert health services and care."
        className="text-center xl:px-3xl lg:py-xl py-lg"
      />

      {/* Mobile: Scrollable Categories with Chevrons */}
      <div className="flex items-center justify-center gap-4 mb-10 md:hidden">
        <button
          onClick={handlePrev}
          className="flex items-center justify-center pb-2"
        >
          <ChevronLeftIcon className="w-4 h-4 text-gray-700" />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto whitespace-nowrap px-2 scrollbar-hide"
        >
          {categories.map((cat, idx) => {
            const Icon = HeroIcons[cat.icon as keyof typeof HeroIcons];
            const isSelected = idx === selectedCategoryIndex;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryIndex(idx)}
                className={`inline-flex items-center gap-2 pb-2 ${
                  isSelected
                    ? "border-b-2 border-primary-pink text-primary-pink"
                    : "text-gray-600 hover:text-primary-pink border-b-2 border-gray-200"
                } transition`}
              >
                {Icon && <Icon className="w-5 h-5" />}
                <span className=" font-medium">{cat.label}</span>
              </button>
            );
          })}
        </div>

        <button
          onClick={handleNext}
          className="flex items-center justify-center pb-2"
        >
          <ChevronRightIcon className="w-4 h-4 text-gray-700" />
        </button>
      </div>

      {/* Desktop: Static Horizontal Categories */}
      <div className="hidden md:flex justify-center gap-6 lg:gap-8 mb-10">
        {categories.map((cat, idx) => {
          const Icon = HeroIcons[cat.icon as keyof typeof HeroIcons];
          const isSelected = idx === selectedCategoryIndex;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategoryIndex(idx)}
              className={`inline-flex items-center gap-2 pb-2 ${
                isSelected
                  ? "border-b-2 border-primary-pink text-primary-pink"
                  : "text-gray-600 hover:text-primary-pink border-b-2 border-gray-200"
              } transition`}
            >
              {Icon && <Icon className="w-5 h-5" />}
              <span className=" font-medium text-sm">{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Images */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          {selectedData.leftType === "image" && (
            <div className="w-full md:w-[80%] aspect-video relative rounded-lg overflow-hidden shadow-lg z-10">
              <Image
                src={
                  selectedData.images.find((img) => img.type === "rectangle")
                    ?.src || ""
                }
                alt="Rectangle Image"
                fill
                className="object-cover"
              />
            </div>
          )}

          {selectedData.leftType === "card" && <ConfidenceCard />}
        </div>

        {/* Right: Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5 md:gap-8">
          <h2 className="text-2xl font-bold leading-snug">
            <span className="text-black">Study with </span>
            <span className="text-primary-pink">{selectedData.title}</span>
          </h2>

          <p className="text-gray-700 text-base leading-relaxed">
            {selectedData.paragraph}
          </p>

          <ul className="flex flex-col gap-4 text-base">
            {selectedData.points.map((point, idx) => {
              const Icon = HeroIcons[point.icon as keyof typeof HeroIcons];
              return (
                <li key={idx} className="flex items-center gap-3 text-gray-800">
                  {Icon && <Icon className="w-6 h-6 text-primary-pink" />}
                  <span>{point.text}</span>
                </li>
              );
            })}
          </ul>

          {selectedData.ctaText && (
            <PrimaryBtn text={selectedData.ctaText} href="/courses" />
          )}
        </div>
      </div>
    </section>
  );
};

const ConfidenceCard = () => {
  const SHARE_URL = "https://bayside.edu.au";

  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      // Mobile native share
      if (navigator.share) {
        await navigator.share({
          title: "Bayside Nursing College",
          text: "Quality Education Within Reach",
          url: SHARE_URL,
        });
        return;
      }

      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(SHARE_URL);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Share failed:", error);
    }
  };
  return (
    <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl p-6 border my-[2rem]">
      {/* Floating Images */}
      <div className="">
        <Image
          src="/images/as-1.png"
          alt="User"
          width={70}
          height={70}
          className="rounded-full object-cover absolute -top-[3rem] left-0"
        />
        <Image
          src="/images/as-2.png"
          alt="User"
          width={95}
          height={95}
          className="rounded-full object-cover absolute top-[40%] -left-[5rem] hidden xl:block"
        />
        <Image
          src="/images/as-3.png"
          alt="User"
          width={70}
          height={70}
          className="rounded-full object-cover absolute -bottom-[3.5rem] left-[3rem]"
        />
      </div>

      {/* Header */}
      <div className="mb-4">
        <p className="text-sm text-secondary-blue font-medium">
          Affordable Study
        </p>
        <h3 className="text-lg font-semibold text-gray-900">
          Quality Education Within Reach
        </h3>
      </div>

      {/* Members */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex -space-x-2">
          {[
            "/images/as-4.png",
            "/images/as-5.png",
            "/images/as-6.png",
            "/images/as-7.png",
          ].map((src, i) => (
            <Image
              key={i}
              src={src}
              alt="Member"
              width={32}
              height={32}
              className="rounded-full border-2 border-white"
            />
          ))}
        </div>
        <span className="text-sm text-gray-500">See eligible members</span>
      </div>

      <p className="text-sm text-gray-500 mb-4">
        Everyone on the project has access to all files.
      </p>

      {/* Email */}
      <div className="flex items-center gap-2 mb-4">
        <input
          placeholder="student@email.com"
          className="flex-1 border rounded-lg outline-none px-3 py-2 text-sm text-gray-500"
        />
        <PrimaryBtn text="Apply Now" href="/contact" className="px-4 py-2 text-sm" />
      </div>

      {/* Share */}
      <div>
        <p className="text-sm text-gray-500 mb-1 font-semibold">
          Link to share
        </p>
        <div className="flex gap-2 items-center">
          <input
            readOnly
            value={SHARE_URL}
            className="flex-1 border rounded-lg px-3 py-2 text-sm text-gray-500 outline-none ring-0"
          />

          <button
            onClick={handleShare}
            className="bg-primary-pink text-white px-3 py-2 rounded hover:bg-white font-semibold hover:text-primary-pink border border-primary-pink text-sm flex items-center gap-2 transition"
          >
            <HeroIcons.LinkIcon className="w-4 h-4" />
            {copied ? "Copied!" : "Share"}
          </button>
        </div>
      </div>
    </div>
  );
};
