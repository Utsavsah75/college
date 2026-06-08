"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Breadcrumb, FAQ, Hero, OutlineBtn, PrimaryBtn } from "@/components";
import data from "@/data/data.json";
import * as HeroIcons from "@heroicons/react/24/outline";

interface Course {
  slug: string;
  heading: string;
  description: string;
  category: string;
  image: string;
  durationLeft: string;
  durationRight: string;
  tag?: {
    primary: string;
    secondary: string;
  };
  points?: { icon: string; text: string }[];
  button?: string;
  price?: string | number;
  rating?: number;
  author?: string;
  language?: string;
  level?: string;
  prerequisites?: string[];
}

const CoursesPage: React.FC = () => {
  const courses: Course[] = data.courses;

  const categories: string[] = [
    "All",
    ...Array.from(new Set(courses.map((c) => c.category))),
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses = useMemo(
    () =>
      courses.filter((course) => {
        const matchesCategory =
          selectedCategory === "All" || course.category === selectedCategory;
        const matchesSearch = course.heading
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
      }),
    [searchTerm, selectedCategory, courses]
  );

  return (
    <div>
      <Hero
        headingBlack="Study at your own pace with"
        headingBlue="verifiable Aged Care and Disability support"
        subHeading="Land a Care and Support Role in Australia within 2 months of course completion."
        heroImage="/hero/courses.svg"
        showSearchBar
      />

      <div className="container mx-auto py-12">
        {/* Category + Search */}
        <div className="flex gap-3 mb-6 overflow-x-auto flex-nowrap px-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-primary-pink text-white"
                  : "text-gray-700 hover:bg-primary-pink-500 hover:text-primary-pink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredCourses.map((course) => (
            <div
              key={course.slug}
              className="border rounded-xl p-6 flex flex-col gap-4 bg-white shadow-sm"
            >
              {/* Image */}
              <div className="w-full h-40 md:h-48 relative flex-shrink-0">
                <Image
                  src={course.image}
                  alt={course.heading}
                  fill
                  className="object-cover w-full h-full rounded"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold">{course.heading}</h3>

              {/* Tag (if exists) */}
              {course.tag && (
                <span className="inline-flex items-center gap-2 bg-primary-pink/10 px-2 py-1 rounded self-start ">
                  <span className="w-2 h-2 rounded-full bg-primary-pink inline-block"></span>
                  <span className="text-primary-pink">
                    {course.tag.primary}
                  </span>
                  <span className="text-primary-pink">|</span>
                  <span className="text-secondary-blue">
                    {course.tag.secondary}
                  </span>
                </span>
              )}

              {/* Description */}
              <p className=" text-gray-700">{course.description}</p>

              {/* Points (if exists) */}
              {course.points && course.points.length > 0 && (
                <ul className="space-y-2">
                  {course.points.map((point, pIdx) => {
                    const Icon =
                      HeroIcons[point.icon as keyof typeof HeroIcons];
                    return (
                      <li
                        key={pIdx}
                        className="flex items-start gap-2  text-primary-pink"
                      >
                        {Icon && (
                          <Icon className="flex-none w-4 h-4 shrink-0 mt-1" />
                        )}
                        <span>{point.text}</span>
                      </li>
                    );
                  })}
                </ul>
              )}

              {/* Buttons */}
              <div className="mt-auto flex gap-2">
                <OutlineBtn
                  text={course.button || "Enroll Now"}
                  href={`/courses/${course.slug}`}
                  className="flex-1 text-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <FAQ className="container" />
    </div>
  );
};

export default CoursesPage;
