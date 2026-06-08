"use client";

import React from 'react';
import { Heading } from '@/components';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaShare } from 'react-icons/fa';

const socialProfiles = [
  {
    name: "Facebook",
    username: "@BaysideNursing",
    link: "https://www.facebook.com/BaysideNursing",
    icon: <FaFacebookF className="w-4 h-4" />
  },
  {
    name: "Instagram",
    username: "@BaysideNursing",
    link: "https://www.instagram.com/BaysideNursing/",
    icon: <FaInstagram className="w-4 h-4" />
  },
  {
    name: "LinkedIn",
    username: "@BaysideNursingCollege",
    link: "https://www.linkedin.com/company/bayside-nursing-college/",
    icon: <FaLinkedinIn className="w-4 h-4" />
  }
];

export const SocialCards = () => {
  const copyToClipboard = (link: string) => {
    navigator.clipboard.writeText(link)
      .then(() => alert('Link copied to clipboard!'))
      .catch(() => alert('Failed to copy link'));
  };

  return (
    <div className="md:my-20 my-16">
      <Heading
        titleBlack="Connect With Us"
        titleBlue=""
        subTitle="Follow our social media profiles to stay updated and engage with our community."
        className='pb-12'
      />
      <div className="mx-auto max-w-6xl flex flex-wrap gap-6 justify-center px-4">
        {socialProfiles.map((profile) => (
          <div
            key={profile.link}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between w-full sm:w-[300px]"
          >
            {/* Top: Profile info */}
            <div className="flex items-center gap-4 mb-4">
              {/* Use react-icons for LinkedIn instead of image */}
              <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
                {profile.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-800 break-words leading-snug">
                  {profile.name}
                </h3>
                <p className="text-gray-500 truncate">{profile.username}</p>
              </div>
            </div>

            {/* Bottom: Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-2 mt-auto">
              <button
                onClick={() => copyToClipboard(profile.link)}
                className="flex-1 flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition whitespace-nowrap"
              >
                <FaShare className="w-4 h-4 flex-shrink-0" />
                <span className="text-center flex-1">Share Link</span>
              </button>
              <a
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition whitespace-nowrap"
              >
                {profile.icon} <span className="flex-1 text-center">Follow</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
