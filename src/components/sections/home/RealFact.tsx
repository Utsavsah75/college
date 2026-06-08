import React from "react";
import { PinkOutlineCard, Heading, PrimaryBtn } from "@/components";
import data from "@/data/data.json";

interface RealFactProps {
  className?: string;
  colView?: boolean;
  noPadding?: boolean;
  noGap?: boolean;
}

export const RealFact: React.FC<RealFactProps> = ({
  className = "",
  colView = false,
  noPadding = false,
  noGap = false,
}) => {
  return (
    <div className="bg-secondary-blue-500">
      <div
        className={` flex ${colView ? "flex-col" : "xl:flex-row flex-col"} 
        items-center container mx-auto
        ${noPadding ? "" : colView ? "p-3" : " xl:py-xl  py-6"}
        ${noGap ? "gap-8 p-6" : colView ? "gap-8" : "gap-6"}
        ${noPadding ? "" : ""}
        ${className}`}
      >
        <div className={` flex flex-col ${colView ? "w-full" : "xl:w-2/5"}`}>
          <Heading
            titleBlack="Real Fact about "
            titleBlue="Bayside Nursing College"
            subTitle=""
            align="left"
            hideLeftIcon
            hideRightIcon
            hideBgSvg
            className={colView ? "mt-0 mb-0 py-0" : "mt-1 mb-1 sm:py-0"}
          />
          <p className={` w-full ${noGap ? "m-0" : "lg:mb-lg mb-md"}`}>
            Bayside Nursing College is a nationally recognised training
            provider, preparing students for meaningful work in aged care,
            disability support, and community services. Our courses combine
            accredited qualifications, practical training, and workplace
            placements to ensure graduates are job-ready.
          </p>
          <PrimaryBtn
            className="lg:mt-4 inline-flex self-start"
            text="Get in Touch"
            href="/contact"
          />
        </div>

        <div
          className={`
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-4 sm:gap-6
            items-stretch auto-rows-fr
            ${colView ? "w-full" : "xl:w-2/3"}
          `}
        >
          {data.facts.map((item) => (
            <div key={item.id} className={`${noGap ? "p-0 m-0" : ""} h-full`}>
              <PinkOutlineCard
                icon={item.icon}
                heading={item.heading}
                text={item.text}
                leftAlign
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
