"use client";
import React, { useState, useEffect, useRef } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface Course {
  slug: string;
  heading: string;
}

interface SearchBarProps {
  courses: Course[];
  placeholder?: string;
  variant?: "glassy" | "solid";
  className?: string;
  onSelect?: (course: Course) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  courses,
  placeholder = "Search Courses",
  variant = "solid",
  className,
  onSelect
}) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Course[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (!value.trim()) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const results = courses.filter((c) =>
      c.heading.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(results.slice(0, 5));
    setShowSuggestions(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Conditional classes for glassy or solid style
  const inputWrapperClasses =
    variant === "glassy"
      ? "flex items-center gap-2 bg-white/20 text-white placeholder-white rounded-md px-3 py-1 focus-within:ring-2 focus-within:ring-secondary-blue"
      : "flex items-center gap-2 bg-white border border-gray-300 text-gray-700 placeholder-gray-400 rounded-md px-3 py-1 focus-within:ring-2 focus-within:ring-secondary-blue";

  const inputClasses =
    variant === "glassy"
      ? "flex-1 text-white placeholder-white bg-transparent focus:outline-none"
      : "flex-1 text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none";

  const iconClasses = variant === "glassy" ? "w-5 h-5 text-white" : "w-5 h-5 text-gray-500";

  return (
    <div ref={containerRef} className={`relative ${className || ""}`}>
      <div className={inputWrapperClasses}>
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder={placeholder}
          className={inputClasses}
          onFocus={() => query && setShowSuggestions(true)}
        />
        <MagnifyingGlassIcon className={iconClasses} />
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute top-full left-0 right-0 bg-white text-gray-800 shadow-md rounded mt-1 z-30 max-h-60 overflow-auto">
          {suggestions.map((item) => (
            <li key={item.slug}>
              <a
                href={`/courses/${item.slug}`}
                onClick={() => onSelect?.(item)}
                className="block px-3 py-2 hover:bg-gray-100 "
              >
                {item.heading}
              </a>
            </li>
          ))}
        </ul>
      )}

      {showSuggestions && suggestions.length === 0 && query.trim() !== "" && (
        <div className="absolute top-full left-0 right-0 bg-white text-gray-800 shadow-md rounded mt-1 px-3 py-2 ">
          No results found
        </div>
      )}
    </div>
  );
};
