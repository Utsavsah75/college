"use client"; 
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export const Breadcrumb = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean); 

  const paths = segments.map((segment, index) => ({
    name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
    href: "/" + segments.slice(0, index + 1).join("/"),
    isLast: index === segments.length - 1,
  }));

  return (
  <nav aria-label="Breadcrumb" className="w-full py-2 md:pt-8">
  <div>
    <ol className="flex items-center  text-white gap-2">
      <li>
        <Link href="/" className="hover:underline text-black">
          Home
        </Link>
      </li>

      {paths.map((path, index) => (
        <React.Fragment key={index}>
          <li>
            <ChevronRightIcon className="w-3 h-3 inline-block mx-1 text-black" />
          </li>
          <li>
            {path.isLast ? (
              <span className="text-primary-pink underline">{path.name}</span>
            ) : (
              <Link href={path.href} className="hover:underline text-black">
                {path.name}
              </Link>
            )}
          </li>
        </React.Fragment>
      ))}
    </ol>
  </div>
</nav>

  );
};