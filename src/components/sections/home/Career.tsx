'use client';

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import * as HeroIcons from "@heroicons/react/24/outline";
import { OutlineBtn, PrimaryBtn, Heading } from "@/components";
import data from "@/data/data.json";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export const Career = () => {
  const categories = [
    { id: "new-starters", label: "New Starters", icon: "UserPlusIcon" },
    { id: "experienced-learners", label: "Experienced Learners", icon: "UserGroupIcon" },
    { id: "career-growth", label: "Career Growth", icon: "ClockIcon" },
  ];

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const selectedCategory = categories[selectedCategoryIndex];
  const selectedCategoryData = data.career.find(
    (item) => item.category === selectedCategory.id
  );

  const courses = selectedCategoryData?.courses || [];

  // Scroll to center the active category
  const scrollToCategory = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const child = container.children[index] as HTMLElement;
    if (!child) return;

    // Calculate scroll offset so the element is centered
    const containerWidth = container.offsetWidth;
    const childWidth = child.offsetWidth;
    const childOffsetLeft = child.offsetLeft;
    const scrollPosition = childOffsetLeft - containerWidth / 2 + childWidth / 2;

    container.scrollTo({ left: scrollPosition, behavior: "smooth" });
  };

  const handlePrev = () => {
    const newIndex = selectedCategoryIndex === 0 ? categories.length - 1 : selectedCategoryIndex - 1;
    setSelectedCategoryIndex(newIndex);
    scrollToCategory(newIndex);
  };

  const handleNext = () => {
    const newIndex = selectedCategoryIndex === categories.length - 1 ? 0 : selectedCategoryIndex + 1;
    setSelectedCategoryIndex(newIndex);
    scrollToCategory(newIndex);
  };

  useEffect(() => {
    scrollToCategory(selectedCategoryIndex);
  }, [selectedCategoryIndex]);

  return (
    <section className="container md:py-8 md:pt-24 py-24">
      <Heading
        titleBlack="Nursing Pathways for Every Stage of"
        titleBlue="Your Career"
        subTitle="Begin Your Nursing Career: Programs for Beginners, Career Changers, and First-Time Students and gain the essential knowledge, skills, and clinical experience to enter the healthcare field with confidence"
      />

      {/* Mobile: Scrollable Categories with Chevrons */}
      <div className="flex items-center justify-center gap-4 my-10 md:hidden">
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
                className={`inline-flex items-center gap-2 pb-2 ${isSelected
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
      <div className="hidden md:flex justify-center gap-8 my-10">
        {categories.map((cat, idx) => {
          const Icon = HeroIcons[cat.icon as keyof typeof HeroIcons];
          const isSelected = idx === selectedCategoryIndex;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategoryIndex(idx)}
              className={`inline-flex items-center gap-2 pb-2 ${isSelected
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

      {/* Career Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="border rounded-xl p-6 flex flex-col gap-4 bg-white shadow-sm"
          >
            <div className="w-full h-40 md:h-48 relative flex-shrink-0">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover w-full h-full rounded"
              />
            </div>

            <h3 className="text-lg font-bold">{course.title}</h3>

            <span className="inline-flex items-center gap-2 bg-primary-pink/10 px-2 py-1 rounded self-start ">
              <span className="w-2 h-2 rounded-full bg-primary-pink inline-block"></span>
              <span className="text-primary-pink">{course.tag.primary}</span>
              <span className="text-primary-pink">|</span>
              <span className="text-secondary-blue">{course.tag.secondary}</span>
            </span>

            <p className=" text-gray-700">{course.description}</p>

            <ul className="space-y-2">
              {course.points.map((point, idx) => {
                const Icon = HeroIcons[point.icon as keyof typeof HeroIcons];
                return (
                  <li
                    key={idx}
                    className="flex items-start gap-2  text-primary-pink "
                  >
                    {Icon && <Icon className="flex-none w-4 h-4 shrink-0 mt-1" />}
                    <span>{point.text}</span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto">
              <OutlineBtn
                text={course.button}
                href="/courses"
                className="block w-full text-center"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <PrimaryBtn text="View all Courses" href="/courses" />
      </div>
    </section>
  );
};
