"use client";
import { Heading, PrimaryBtn } from "@/components";
import * as HeroIcons from "@heroicons/react/24/outline";
import React, { useState } from "react";
import data from "@/data/data.json";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  icon?: string;
}

interface FAQProps {
  courses?: boolean;
  className?: string;
}

export const FAQ: React.FC<FAQProps> = ({ courses, className }) => {
  const faqs: FaqItem[] = courses ? data.coursesFaqs : data.faqs;

  const [openItem, setOpenItem] = useState<number | null>(faqs[0]?.id ?? null);
  const toggleItem = (id: number) =>
    setOpenItem(openItem === id ? null : id);

  return (
    <section className={`pt-xl overflow-x-hidden ${className} `}>
      <Heading
        titleBlack="Frequently"
        titleBlue="Asked Questions"
        subTitle={
          courses
            ? "Everything you need to know about our courses: duration, delivery modes, career outcomes, and support services."
            : "Begin Your Nursing Career: Programs for Beginners, Career Changers, and First-Time Students Learn the fundamentals of nursing and gain the essential knowledge, skills, and clinical experience to enter the healthcare field with confidence"
        }
      />

<div
  className={
    courses
      ? "w-full my-6 space-y-3 sm:space-y-4" 
      : " my-6 space-y-3 sm:space-y-4 xl:w-2/3 min-w-0 mx-auto" 
  }
>
  {faqs.map((item) => {
    const Icon =
      (item.icon
        ? (HeroIcons[item.icon as keyof typeof HeroIcons] as React.ElementType)
        : HeroIcons.QuestionMarkCircleIcon) ?? HeroIcons.QuestionMarkCircleIcon;

    const isOpen = openItem === item.id;

    return (
      <div key={item.id} className="border rounded-lg overflow-hidden w-full">
        <button
          type="button"
          onClick={() => toggleItem(item.id)}
          className="w-full flex items-center justify-between p-3 sm:p-4 hover:bg-gray-100/50 focus:outline-none focus:ring-2 focus:ring-secondary-blue/0 min-w-0"
          aria-expanded={isOpen}
          aria-controls={`faq-content-${item.id}`}
        >
          <div className="flex items-top gap-3 pt-1 min-w-0 flex-1">
            <Icon
              className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 ${
                isOpen ? "text-secondary-blue" : "text-black"
              }`}
            />
            <span
              className={`font-medium text-left ${
                isOpen ? "text-secondary-blue" : "text-black"
              }`}
            >
              {item.question}
            </span>
          </div>
          {isOpen ? (
            <HeroIcons.MinusIcon className="w-5 h-5 text-secondary-blue flex-shrink-0" />
          ) : (
            <HeroIcons.PlusIcon className="w-5 h-5 text-black flex-shrink-0" />
          )}
        </button>

        {isOpen && (
          <div
            id={`faq-content-${item.id}`}
            className="p-3 sm:p-4 bg-white min-w-0 break-words w-full overflow-hidden text-black"
          >
            {item.answer}
          </div>
        )}
      </div>
    );
  })}
</div>



      <div className="bg-secondary-blue/10 py-8 flex flex-col items-center text-center container gap-4 md:my-3xl">
        <div className="flex justify-center items-center -space-x-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
            <img
              src="/images/testimonial2.jpg"
              alt="Avatar 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg z-10">
            <img
              src="/images/testimonial.jpg"
              alt="Avatar 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
            <img
              src="/images/testimonial3.jpg"
              alt="Avatar 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col items-center text-center mt-4">
          <span className="text-mdlg md:text-xl font-semibold text-gray-800 leading-none">
            Can’t find the answer you’re looking for?
          </span>
          <span className="text-gray-700 text-xs md:text-base leading-none max-w-md mt-1">
            Please chat to our friendly team.
          </span>
        </div>

        <PrimaryBtn
          text="Connect Directly to Counsellor"
          href="tel:0449904827"
          className="mt-4"
        />
      </div>
    </section>
  );
};
