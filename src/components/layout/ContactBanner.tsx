"use client";
import React from "react";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { PrimaryBtn } from "@/components";

export const ContactBanner = () => {
  return (
    <div className="w-full bg-primary-pink-500 py-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-white px-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center md:text-left">
          <span className="flex gap-2 items-center font-bold text-lg text-black">
            <PhoneIcon className="w-6 h-6 text-primary-pink" />
            Call now to find out more:
          </span>
          <div className="flex gap-4 items-center">
            <a
              href="tel:0449904827"
              className="block mt-1 text-lg font-semibold hover:underline text-primary-pink"
            >
              0449 904 827
            </a>
            <span className="block font-bold text-lg text-black mt-1 sm:mt-0">
              OR
            </span>
            <PrimaryBtn text="Apply Now" href="/contact"/>
          </div>
        </div>
      </div>
    </div>
  );
};
