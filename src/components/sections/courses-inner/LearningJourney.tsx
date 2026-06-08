import { PinkOutlineCard, Heading } from "@/components";
import data from "@/data/data.json";
import React from "react";

interface JourneyCard {
  icon: string;
  heading: string;
  text: string;
}

interface LearningJourneyProps {
  course: {
    description: string;
  };
  journeyCards: JourneyCard[];
}

export const LearningJourney: React.FC<LearningJourneyProps> = ({
  course,
  journeyCards = [],
}) => {
  return (
    <section className="p-6 md:p-0">
      <Heading
        titleBlack="Your"
        titleBlue="Learning Journey"
        align="left"
        hideLeftIcon
        bgSvgSize="small"
      />

      <section
        aria-labelledby="journey-description"
        className="mt-6 text-gray-700 leading-relaxed space-y-4 w-2/3 md:w-full"
      >
        <h2 id="journey-description" className="sr-only">
          Qualification Overview
        </h2>
        <p>{course.description}</p>
      </section>

      <section
        aria-labelledby="journey-cards"
        className="grid gap-4 mt-6 grid-cols-1 lg:grid-cols-3 overflow-x-hidden"
      >
        <h2 id="journey-cards" className="sr-only">
          Learning Journey Steps
        </h2>

        {journeyCards.length ? (
          journeyCards.map((card) => (
            <div key={card.heading} className="w-2/3 md:w-full">
              <PinkOutlineCard
                icon={card.icon}
                heading={card.heading}
                text={card.text} leftAlign
              />
            </div>
          ))
        ) : (
          <p className="text-gray-500 ">
            No learning journey items available.
          </p>
        )}
      </section>
    </section>
  );
};
