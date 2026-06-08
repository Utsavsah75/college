import React from "react";
import Link from "next/link";
import { ClockIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import type { CardProps } from "@/types";

interface CardLinkProps extends CardProps {
  href?: string;               
  downloadBtnText?: string; 
  pdfLink?: string;      
}

export const Card: React.FC<CardLinkProps> = ({
  image,
  durationLeft,
  durationRight,
  heading,
  description,
  href,
  downloadBtnText,
  pdfLink, 
}) => {
  const truncateText = (text: string, wordLimit = 30) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  const isLong = description.split(" ").length > 30;

  const cardContent = (
    <div className="flex flex-col justify-between p-4 lg:p-6 shadow-md rounded cursor-pointer hover:shadow-xl transition-shadow duration-200 bg-white h-full">
      {/* Image */}
      <img
        src={image}
        alt={heading}
        className="w-full h-40 sm:h-48 lg:h-52 object-cover rounded-md"
      />

      {/* Content */}
      <div className="flex-1 flex flex-col mt-3">
        {/* Duration */}
        {(durationLeft || durationRight) && (
          <div className="flex justify-between items-center text-gray-600 text-xs sm: lg: mb-2">
            {durationLeft && (
              <div className="flex items-center gap-1">
                <ClockIcon className="w-4 h-4 text-secondary-blue" />
                <span>{durationLeft}</span>
              </div>
            )}
            {durationRight && (
              <div className="flex items-center gap-1">
                <ClockIcon className="w-4 h-4 text-secondary-blue" />
                <span>{durationRight}</span>
              </div>
            )}
          </div>
        )}

        {/* Heading */}
        <h3 className="text-md sm:text-base lg:text-lg font-semibold text-gray-900">{heading}</h3>

        {/* Description */}
        <p className="mt-2 text-gray-700 text-xs sm: lg: flex-1 text-justify line-clamp-3">
          {truncateText(description)}{" "}
          {isLong && (
            <span className="text-primary-pink hover:underline cursor-pointer text-xs sm: lg:">
              Learn more
            </span>
          )}
        </p>

        {/* Download button */}
        {downloadBtnText && pdfLink && (
          <a
            href={pdfLink}
            download
            onClick={(e) => e.stopPropagation()}
            className="mt-4 w-full flex items-center justify-center gap-2 border border-primary-pink text-primary-pink py-2 rounded-lg hover:bg-primary-pink hover:text-white transition-colors text-xs sm: lg:"
          >
            <ArrowDownTrayIcon className="w-5 h-5" />
            {downloadBtnText}
          </a>
        )}
      </div>
    </div>
  );

  // Wrap in Link if href exists
  return href ? <Link href={href} className="block h-full">{cardContent}</Link> : cardContent;
};
