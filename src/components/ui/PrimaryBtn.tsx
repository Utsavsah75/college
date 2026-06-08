import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import type { BtnProps } from "@/types";

interface PrimaryBtnProps extends BtnProps {
  href?: string; 
  onClick?: () => void;
}

export const PrimaryBtn = ({ text, href, className, onClick }: PrimaryBtnProps) => {
  const baseClasses = `group flex justify-center md:justify-start items-center gap-2
    text-white px-4 py-1.5 font-semibold text-xs md:text-sm 2xl:text-md
    bg-primary-pink border border-primary-pink rounded
    hover:bg-white hover:text-primary-pink transition-colors duration-200
    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-pink focus-visible:ring-offset-2
    w-full md:w-fit
    ${className || ""}`;

  if (href) {
    const isTelOrMail = href.startsWith("tel:") || href.startsWith("mailto:");

    if (isTelOrMail) {
      // tel: or mailto: links open normally
      return (
        <a href={href} className={baseClasses}>
          {text}
          <ArrowRightIcon className="w-4 h-4 text-white group-hover:text-primary-pink transition-colors duration-200" />
        </a>
      );
    }

    // All other links (internal or external) open in a new tab
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {text}
        <ArrowRightIcon className="w-4 h-4 text-white group-hover:text-primary-pink transition-colors duration-200" />
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses}>
      {text}
      <ArrowRightIcon className="w-4 h-4 text-white group-hover:text-primary-pink transition-colors duration-200" />
    </button>
  );
};
