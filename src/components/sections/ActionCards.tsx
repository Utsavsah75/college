"use client";

import { InformationCircleIcon, DocumentTextIcon, CameraIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function ActionCards() {
  const items = [
    {
      icon: InformationCircleIcon,
      label: "General Enquiry",
      href: "/contact",
    },
    {
      icon: DocumentTextIcon,
      label: "Apply Now",
      href: "/contact",
    },
    {
      icon: CameraIcon,
      label: "Book a Tour",
      href: "/contact",
    },
    {
      icon: PhoneIcon,
      label: "Call Support",
      href: "tel:0449904827",
    },
  ];

  return (
    <div className="container mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, index) => {
        const Icon = item.icon;
        const isInternal = item.href.startsWith("/");

        return isInternal ? (
          <Link
            key={index}
            href={item.href}
            className="flex flex-col items-center justify-center bg-gray-50 p-8 shadow-sm cursor-pointer hover:shadow-md hover:bg-gray-100 transition-all duration-300 w-full h-full text-center"
          >
            <Icon className="w-12 h-12 text-primary-pink mb-4" />
            <span className="text-lg font-semibold text-gray-800">{item.label}</span>
          </Link>
        ) : (
          <a
            key={index}
            href={item.href}
            className="flex flex-col items-center justify-center bg-gray-50 p-8 shadow-sm cursor-pointer hover:shadow-md hover:bg-gray-100 transition-all duration-300 w-full h-full text-center"
          >
            <Icon className="w-12 h-12 text-primary-pink mb-4" />
            <span className="text-lg font-semibold text-gray-800">{item.label}</span>
          </a>
        );
      })}
    </div>
  );
}
