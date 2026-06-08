"use client";
import { Heading } from "@/components";
import { CourseItem } from "@/data/courseItems";
import * as HeroIcons from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";
import React, { useState, useRef, JSX } from "react";

export interface CourseOverviewProps {
  course: {
    heading: string;
    description: string[];
    durationLeft: string;
    durationRight: string;
  };
  courseItems: CourseItem[];
}


export const CourseOverview: React.FC<CourseOverviewProps> = ({ course, courseItems }) => {
  const [selectedCategory, setSelectedCategory] = useState<number>(
    courseItems.length > 0 ? courseItems[0].id : 0
  );

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToCategory = (index: number) => {
    const container = scrollContainerRef.current;
    const btn = container?.children[index] as HTMLElement;
    if (container && btn) {
      const scrollTo = btn.offsetLeft - container.offsetWidth / 2 + btn.offsetWidth / 2;
      container.scrollTo({ left: scrollTo, behavior: "smooth" });
      setSelectedCategory(courseItems[index].id);
    }
  };

  const scrollLeft = () => {
    const currentIndex = courseItems.findIndex(item => item.id === selectedCategory);
    const prevIndex = (currentIndex - 1 + courseItems.length) % courseItems.length;
    scrollToCategory(prevIndex);
  };

  const scrollRight = () => {
    const currentIndex = courseItems.findIndex(item => item.id === selectedCategory);
    const nextIndex = (currentIndex + 1) % courseItems.length;
    scrollToCategory(nextIndex);
  };


  const selectedItem = courseItems.find((item) => item.id === selectedCategory);

  return (
    <section className="py-xl w-full overflow-x-hidden">
      <Heading
        titleBlack="Course"
        titleBlue="Overview"
        align="left"
        hideLeftIcon
        bgSvgSize="small"
      />

      {/* Render multiple paragraphs */}
      <div className="mt-4 space-y-4">
        {course.description.map((paragraph, idx) => (
          <p key={idx} className="text-gray-700 leading-relaxed">{paragraph}</p>
        ))}
      </div>

      {/* Category selector */}
      <div className="relative mt-6 bg-gray-200/50 rounded-lg py-2">
        <button
          type="button"
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-white/80 hover:bg-white rounded-full shadow-md flex items-center justify-center"
        >
          <HeroIcons.ChevronLeftIcon className="w-4 h-4 text-gray-700" />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-2 px-10 scrollbar-none"
          style={{ scrollbarWidth: "none" }}
        >
          {courseItems.map((item) => {
            const Icon = (HeroIcons as any)[item.iconName] ?? HeroIcons.QuestionMarkCircleIcon;
            const isSelected = selectedCategory === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={(e) => {
                  setSelectedCategory(item.id);
                  const btn = e.currentTarget;
                  const container = scrollContainerRef.current;
                  if (container && btn) {
                    const scrollTo = btn.offsetLeft - container.offsetWidth / 2 + btn.offsetWidth / 2;
                    container.scrollTo({ left: scrollTo, behavior: "smooth" });
                  }
                }}
                className={`flex items-center gap-2 px-4 py-2 transition-colors duration-200 rounded-lg whitespace-nowrap font-semibold
  ${isSelected ? "bg-primary-pink text-white" : "text-gray-800 hover:bg-gray-100"}`}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-white/80 hover:bg-white rounded-full shadow-md flex items-center justify-center"
        >
          <HeroIcons.ChevronRightIcon className="w-4 h-4 text-gray-700" />
        </button>
      </div>

      {/* DETAILS PANEL */}
     <div className="mt-4 min-w-0 ps-4 md:ps-12">
  {selectedItem ? (
    <>
      {Array.isArray(selectedItem.content) &&
        selectedItem.content.map((item, idx) => (
          <div key={idx} className="mb-4">
            {/* If the item is a string, show as paragraph */}
            {typeof item === "string" ? (
              <p className="text-gray-700 break-words md:text-md leading-relaxed">
                {item}
              </p>
            ) : "heading" in item ? (
              <div className="break-words">
                <h4 className="font-semibold text-gray-800 mb-2">{item.heading}</h4>
                {item.paragraph && (
                  <p className="text-gray-700 mb-2 leading-relaxed">{item.paragraph}</p>
                )}
                {item.points && item.points.length > 0 && (
                  <ul className="list-disc ml-5 mt-1 space-y-1"> {item.points.map((point, i) => ( <li key={i} className="text-gray-700">{point}</li> ))} </ul>
                )}
              </div>
            ) : (
              <p className="text-gray-700">No content available</p>
            )}
          </div>
        ))}
    </>
  ) : (
    <p className="text-gray-500">Select a category to see details</p>
  )}
</div>


    </section>
  );
};
