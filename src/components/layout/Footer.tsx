"use client";

import React, { useState } from "react";
import Image from "next/image";
import navData from "@/data/data.json";
import { AutoScrollSlider } from "@/components";
import Link from "next/link";

interface FooterSectionProps {
  title: string;
  links: { label: string; href: string }[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full sm:w-auto">
      <button
        className="flex w-full sm:w-auto justify-between items-center  font-semibold uppercase mb-2 sm:mb-4"
        onClick={() => setOpen(!open)}
        type="button"
      >
        <span className="text-left">{title}</span>
        <span className="sm:hidden">{open ? "-" : "+"}</span>
      </button>

      <ul
        className={` space-y-2 transition-all duration-300 ease-in-out overflow-hidden sm:overflow-visible ${open ? "max-h-96" : "max-h-0 sm:max-h-full"
          }`}
      >
        {links.map((link, index) => (
          <li key={`${link.href ?? "link"}-${index}`}>
            <a href={link.href ?? "#"} className="hover:text-primary-pink">
              {link.label ?? "Unnamed link"}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Footer = () => {
  const aboutLinks = navData.navLinks.filter((item) => item.label === "About");
  const courses =
    navData.navLinks.find((item) => item.label === "Courses")?.children || [];
  const studentResources =
    navData.navLinks.find((item) => item.label === "Student Resources")
      ?.children || [];
  const eLearningLink = navData.navLinks.find(
    (item) => item.label === "E-learning"
  );

  const about = eLearningLink
    ? [...aboutLinks, { label: eLearningLink.label, href: eLearningLink.href }]
    : aboutLinks;

  const usefulLinks = [
    { label: "USI Creation", href: "#" },
    { label: "Create Police Report", href: "#" },
    { label: "NDIS Check", href: "#" },
  ];

  return (
    <footer className="font-nunito bg-secondary-blue/15 text-gray-900">

      <AutoScrollSlider />

      <div className="bg-secondary-blue-500">
        <div className="container mx-auto py-6 md:py-8 pt-12">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-4 text-center md:text-left">

            <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
              <div className="flex items-center justify-center md:justify-start gap-12 mb-4 md:mb-8 flex-wrap">
                <a href="/">
                  <Image src="/logo.svg" alt="Site Logo" width={130} height={40} />
                </a>

                <div className="flex items-center gap-3 md:hidden">
                  <Image
                    src="/images/aql.svg"
                    alt="AQL Logo"
                    width={80}
                    height={80}
                    className="w-24 h-auto object-contain"
                  />
                  <Image
                    src="/images/nrt.svg"
                    alt="NRT Logo"
                    width={80}
                    height={80}
                    className="w-24 h-auto object-contain"
                  />
                </div>
              </div>

              <p className="text-xs md: text-gray-700 text-center md:text-left">
                Empowering your well-being through compassionate care (BNC)
                <br />
                <span className="text-primary-pink font-semibold whitespace-nowrap">
                  RTO: 45929 | ABN: 90 653 258 765
                </span>
              </p>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <Image
                src="/images/aql.svg"
                alt="AQL Logo"
                width={150}
                height={150}
                className="h-auto object-contain"
              />
              <Image
                src="/images/nrt.svg"
                alt="NRT Logo"
                width={150}
                height={150}
                className="h-auto object-contain"
              />
            </div>
          </div>

          {/* === Second Row: Social + Links === */}
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 border-y py-2 text-center">

            {/* Social Icons */}
            <div className="flex justify-center gap-2">
              <Image src="/icons/linked.svg"  alt="LinkedIn" width={24} height={24} className="hover:opacity-80 opacity-50" />
              <Image src="/icons/facebook.svg"  alt="Facebook" width={28} height={28} className="hover:opacity-80 opacity-50" />
              <Image src="/icons/instagram.svg"  alt="Instagram" width={24} height={24} className="hover:opacity-80 opacity-50" />
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap gap-0.5 md:gap-1 justify-center text-secondary-blue text-[0.6rem] md:text-xs">
              <a href="/privacy-policy" target="_blank__" className="hover:text-primary-pink">Privacy Policy</a>
              <span>|</span>
              <a href="/" target="_blank__" className="hover:text-primary-pink">Compliance Policy</a>
              <span>|</span>
              <a href="/" target="_blank__" className="hover:text-primary-pink">Refund & Cancellation Policy</a>
              <span>|</span>
              <a href="/terms-and-conditions" target="_blank__" className="hover:text-primary-pink">Terms & Conditions</a>
            </div>
          </div>

          {/* === Third Row: Custodians Acknowledgment + Marketed By === */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 mt-6 text-center md:text-left">

            {/* Custodians Section */}
            <div className="flex flex-col md:flex-row md:gap-6 items-center md:items-start w-full text-gray-700 ">
              {/* Logos */}
              <div className="flex gap-2 justify-center md:justify-start mb-2 md:mb-0">
                <Image
                  src="/icons/abo.png"
                  alt="Aboriginal Logo"
                  width={40}
                  height={32}
                  className="w-10 md:w-[25px] h-auto object-contain"
                />
                <Image
                  src="/icons/tor.png"
                  alt="Torrens Logo"
                  width={40}
                  height={32}
                  className="w-10 md:w-[25px] h-auto object-contain"
                />
              </div>

              {/* Paragraph */}
              <p className="text-[0.7rem] md:text-[0.8rem] leading-relaxed w-full">
                <strong>BAYSIDE NURSING COLLEGE PTY LTD</strong> acknowledges the Traditional Custodians and their Elders, past and present, and their enduring culture.
              </p>
            </div>

            {/* Marketed By */}
            <div className="flex items-center md:items-end gap-2">
              <span className="text-primary-pink text-[0.7rem] font-semibold whitespace-nowrap">
                Digital Marketing Agency:
              </span>
              <Link href="https://tekgro.com.au/" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/tekgro.svg" alt="TekGro Logo" width={80} height={40} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
