"use client";

import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const FeedbackForm = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="space-y-6 lg:my-lg"
      aria-label="Student Feedback Form"
    >
      {/* Row 1: Full Name + Student ID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block  font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-blue focus:ring-primary-blue sm:"
          />
        </div>

        <div>
          <label
            htmlFor="studentId"
            className="block  font-medium text-gray-700"
          >
            Student ID <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            required
            placeholder="e.g., NC12345"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-blue focus:ring-primary-blue sm:"
          />
        </div>
      </div>

      {/* Row 2: Department + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="department"
            className="block  font-medium text-gray-700"
          >
            Department / Program
          </label>
          <select
            id="department"
            name="department"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-primary-blue focus:ring-primary-blue sm:"
          >
            <option value="">Select</option>
            <option value="nursing">Nursing</option>
            <option value="midwifery">Midwifery</option>
            <option value="public-health">Public Health</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block  font-medium text-gray-700"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="your@email.com"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-blue focus:ring-primary-blue sm:"
          />
        </div>
      </div>

      {/* Row 3: Feedback Type + Course / Program Code */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="feedbackType"
            className="block  font-medium text-gray-700"
          >
            Feedback Type
          </label>
          <select
            id="feedbackType"
            name="feedbackType"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-primary-blue focus:ring-primary-blue sm:"
          >
            <option value="complaint">Complaint</option>
            <option value="suggestion">Suggestion</option>
            <option value="general">General Feedback</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="courseCode"
            className="block  font-medium text-gray-700"
          >
            Course / Program Code
          </label>
          <input
            type="text"
            id="courseCode"
            name="courseCode"
            placeholder="e.g., NUR101"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-blue focus:ring-primary-blue sm:"
          />
        </div>
      </div>

      {/* Row 4: Feedback Message */}
      <div>
        <label
          htmlFor="message"
          className="block  font-medium text-gray-700"
        >
          Your Feedback <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Write your feedback here..."
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-blue focus:ring-primary-blue sm:"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div>
  <button
    type="submit"
    className="group inline-flex w-full bg-primary-pink border border-primary-pink rounded items-center justify-center gap-2
               text-white px-md py-1.5 font-semibold  xl:text-md
               hover:bg-white hover:text-primary-pink transition-colors duration-200
               focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-pink focus-visible:ring-offset-2"
  >
    Submit
    <ArrowRightIcon className="w-4 h-4 text-white group-hover:text-primary-pink transition-colors duration-200" />
  </button>
</div>

    </form>
  );
};
