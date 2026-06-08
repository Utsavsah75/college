"use client";
import React, { useState, useEffect } from "react";
import { PrimaryBtn, SearchBar } from "@/components";
import {
  ChevronDownIcon,
  PhoneIcon,
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon
} from "@heroicons/react/24/outline";
import navData from "@/data/data.json";

interface NavChild {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href?: string;
  children?: NavChild[];
}

interface Course {
  slug: string;
  heading: string;
  description: string;
  category: string;
  image: string;
  durationLeft: string;
  durationRight: string;
  tag?: { primary: string; secondary: string };
  points?: { icon: string; text: string }[];
  button?: string;
}

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Course[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const navLinks: NavLink[] = navData.navLinks || [];
  const courses: Course[] = navData.courses || [];

  useEffect(() => {
    const handleScroll = () => {
      if (mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  const handleSearch = (value: string) => {
    setQuery(value);

    if (!value.trim()) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const results = courses.filter((course) =>
      course.heading.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(results.slice(0, 5));
    setShowSuggestions(true);
  };

  return (
    <>
      <div className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div>
          <div className="bg-secondary-blue">
            <div className="container text-white  flex items-center justify-between py-2">
              <div className="relative hidden sm:block">
                <SearchBar courses={courses} variant="glassy" className=" w-max md:w-64" />
              </div>


             <div className="flex items-end gap-4">
  <a href="/elearning" target="_blank" rel="noopener noreferrer" className="hover:underline">
    E-learning
  </a>
  <a href="/contact" target="_blank" rel="noopener noreferrer" className="hover:underline">
    Contact
  </a>
</div>

            </div>
          </div>

          <header className=" container flex flex-wrap xl:gap-12 items-center justify-between py-4 font-sans w-full">
            <a href="/" className="flex-shrink-0">
              <img
                src="/logo.svg"
                alt="Site Logo"
                className="w-24 sm:w-28 md:w-30 xl:w-36 2xl:w-40 h-auto"
              />
            </a>

            <nav className="hidden lg:flex flex-wrap flex-1 ml-5 2xl:ml-6">
              <ul className="flex flex-nowrap items-center gap-3 lg:gap-6 text-gray-700 font-bold uppercase text-xs 2xl:text-sm">
                {navLinks.map((link) =>
                  link.children ? (
                    <li key={link.label} className="relative group">
                      <a
                        href={link.href || "#"} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-secondary-blue"
                      >
                        {link.label} <ChevronDownIcon className="w-3 h-3" />
                      </a>
                      <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md rounded pt-2 z-20 w-max min-w-[150px]">
                        {link.children.map((child) => (
                          <li key={child.label} className="px-4 py-2 hover:bg-secondary-blue-500">
                            <a href={child.href} target="_blank" rel="noopener noreferrer">{child.label} </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-secondary-blue cursor-pointer">
                        {link.label}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>

            <div className="hidden lg:flex items-center gap-4 flex-shrink-0 ml-auto">
              <div className="flex items-center gap-2 lg:hidden xl:flex">
                <div className="flex items-center justify-center w-8 h-8 xl:w-10 xl:h-10 bg-primary-pink bg-opacity-10 rounded-full">
                  <PhoneIcon className="h-5 w-5 xl:h-6 xl:w-6 text-primary-pink" />
                </div>
                <div className="font-semibold text-xs">
                  <span className="block text-xs text-primary-pink">Call Support</span>
                  <a href="tel:0449904827" className=" text-gray-800 hover:text-secondary-blue">
                    0449 904 827
                  </a>
                </div>
              </div>
              <PrimaryBtn text="Enquire Now" href="/" />
            </div>

            <div className="flex items-center gap-2 md:gap-4 lg:hidden ml-auto">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 bg-primary-pink bg-opacity-10 rounded-full">
                  <PhoneIcon className="h-5 w-5 xl:h-6 xl:w-6 text-primary-pink" />
                </div>
                <div className="font-semibold">
                  <span className="block text-xs text-primary-pink">Call Support</span>
                  <a href="tel:0449904827" className=" text-gray-800 hover:text-secondary-blue">
                    0449 904 827
                  </a>
                </div>
              </div>

              <button
                className="md:flex lg:hidden p-2 text-gray-700 ml-auto relative z-50"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <XMarkIcon className="w-7 h-7 text-primary-pink" /> : <Bars3Icon className="w-7 h-7 text-gray-700" />}
              </button>
            </div>
          </header>
        </div>
      </div>

      <div
        className={`md:block lg:hidden fixed top-[110px] left-0 right-0 bg-white shadow-md overflow-hidden transition-all duration-200 ease-in-out z-40
          ${mobileOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="flex flex-col px-4 py-4 gap-4 text-gray-700 font-semibold uppercase ">
          {navLinks.map((link) =>
            link.children ? (
              <details key={link.label} className="group">
                <summary className="flex items-center justify-between cursor-pointer hover:text-secondary-blue list-none">
                  <span className="flex-1">{link.label}</span>
                  <ChevronDownIcon className="w-3 h-3" />
                </summary>

                <ul className="pl-4 mt-2 flex flex-col gap-2">
                  {link.href && (
                    <li>
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-secondary-blue block font-semibold">
                        {link.label} Overview
                      </a>
                    </li>
                  )}
                  {link.children.map((child) => (
                    <li key={child.label}>
                      <a href={child.href} target="_blank" rel="noopener noreferrer" className="hover:text-secondary-blue block">
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-secondary-blue cursor-pointer block"
              >
                {link.label}
              </a>
            )
          )}

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-primary-pink bg-opacity-10 rounded-full">
                <PhoneIcon className="w-6 h-6 text-primary-pink" />
              </div>
              <div className="font-semibold">
                <span className="block text-xs text-primary-pink">
                  Call Support
                </span>
                <a
                  href="tel:0449904827"
                  className=" text-gray-800 hover:text-primary-pink"
                >
                  0449 904 827
                </a>
              </div>
            </div>
            <PrimaryBtn text="Apply Now" href="/contact" />
          </div>
        </nav>
      </div>
    </>
  );
};
