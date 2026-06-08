"use client";
import React, { useState, useMemo } from "react";
import { Breadcrumb, Hero, Card, ContactBanner, PrimaryBtn } from "@/components";
import data from "@/data/data.json";
import { ClockIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const ResourcesPage: React.FC = () => {
  const resources = data.resources;

  const categories: string[] = [
    "All",
    ...Array.from(new Set(resources.map((r) => r.category))),
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesCategory =
        selectedCategory === "All" || resource.category === selectedCategory;
      const matchesSearch = resource.category
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory, resources]);

  return (
    <div>
      <Hero
        headingBlack="Study at your own pace with"
        headingBlue="verifiable Aged Care and Disability support"
        subHeading="Gain verifiable skills in Aged Care and Disability Support and start your career in Australia at your own pace."
        heroImage="/hero/resources.svg"
      />

      <div className="container mx-auto px-4 py-xl">
        <div className="flex mb-6 gap-2 overflow-x-auto flex-nowrap justify-start md:justify-center px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex-shrink-0 px-3 py-1 rounded-lg transition-colors whitespace-nowrap ${selectedCategory === cat
                ? "bg-primary-pink text-white"
                : "text-gray-700 hover:bg-primary-pink-500 hover:text-primary-pink"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <Card key={index} {...resource} downloadBtnText="Download" pdfLink={resource.pdfLink} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
<a
  href="/pdf/demo.zip"
  download
  onClick={(e) => e.stopPropagation()}
  className="group mt-4 w-full md:w-auto flex items-center justify-center gap-2 
             bg-primary-pink text-white py-2 px-4 rounded-lg border border-transparent 
             hover:bg-white hover:text-primary-pink hover:border-primary-pink transition-colors duration-200"
>
  <ArrowDownTrayIcon className="w-5 h-5 text-white group-hover:text-primary-pink transition-colors duration-200" />
  Download All (ZIP)
</a>

        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
