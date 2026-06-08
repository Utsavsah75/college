import React from "react";
import * as HeroIcons from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";
import type { PinkOutlineCardProps } from "@/types";

interface PinkOutlineCardPropsExtended extends PinkOutlineCardProps {
  leftAlign?: boolean;
}

export const PinkOutlineCard: React.FC<PinkOutlineCardPropsExtended> = ({
  icon,
  heading,
  text,
  points,
  variant = "default",
  leftAlign = false,
}) => {
  const IconComponent = icon ? HeroIcons[icon as keyof typeof HeroIcons] : null;
  const textAlignment = leftAlign ? "text-left" : "text-center";

  if (variant === "three-row") {
    return (
      <div className={`  flex flex-col border border-primary-pink rounded-2xl p-4 shadow-sm bg-white gap-3 w-full overflow-hidden ${textAlignment}`}>
        <div className="flex items-center gap-2 min-w-0">
          <div className="relative flex items-center justify-center lg:w-12 lg:h-12 w-9 h-9 rounded-xl shrink-0">
            <img
              src="/icons/bg-dots.svg"
              alt=""
              className="absolute inset-0 w-full h-full object-contain"
            />
            {IconComponent && (
              <IconComponent className="lg:w-8 lg:h-8 w-5 h-5 text-primary-pink relative z-10" />
            )}
          </div>
          <h3 className="font-semibold text-primary-pink text-lg">{heading}</h3>
        </div>

        {text && <p className="text-gray-600 text-md">{text}</p>}

        {points && points.length > 0 && (
          <ul className="flex flex-col gap-1 mt-2">
            {points.map((point, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-gray-800"
              >
                <div className="w-4 h-4 rounded-full bg-primary-pink flex items-center justify-center">
                  <CheckIcon className="w-3 h-3 text-white" />
                </div>
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  // Default variant
  return (
    <div className={` h-full flex items-start gap-2 sm:gap-4 border border-primary-pink bg-white rounded-2xl p-3 sm:p-4 shadow-sm w-full overflow-hidden ${textAlignment}`}>
      <div className="relative flex items-center justify-center lg:w-12 lg:h-12 w-10 h-10 rounded-xl shrink-0">
        <img
          src="/icons/bg-dots.svg"
          alt=""
          className="absolute inset-0 w-full h-full object-contain"
        />
        {IconComponent && (
          <IconComponent className="lg:w-8 lg:h-8 w-5 h-5 text-primary-pink relative z-10 pt-1" />
        )}
      </div>

      <div className={`flex-1 flex flex-col gap-1 min-w-0 break-words ${textAlignment}`}>
        <h3 className="font-semibold text-primary-pink">{heading}</h3>
        {text && <p className="text-gray-600 text-md">{text}</p>}
        {points && points.length > 0 && (
          <ul className="flex flex-col gap-1 mt-1">
            {points.map((point, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-gray-800 text-md"
              >
                <div className="w-4 h-4 rounded-full bg-primary-pink flex items-center justify-center">
                  <CheckIcon className="w-3 h-3 text-white" />
                </div>
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
