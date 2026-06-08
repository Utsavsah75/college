import React from "react";
import { notFound } from "next/navigation";
import data from "@/data/data.json";
import { Hero, CourseOverview, PrimaryBtn, FAQ, AutoScrollSlider } from "@/components";
import { courses } from "@/data/courseItems";
import Image from "next/image";
import {
  ClockIcon,
  CalendarDaysIcon,
  IdentificationIcon
} from "@heroicons/react/24/outline";

export async function generateStaticParams() {
  return data.courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const courseIndex = data.courses.findIndex((c) => c.slug === slug);
  if (courseIndex === -1) return notFound();

  const course = data.courses[courseIndex];
  const courseDetails = courses[courseIndex];

  return (
    <div className="w-full overflow-x-hidden">
      <Hero
        headingBlack={course.heading}
        headingBlue=""
        subHeading="Gain practical skills and nationally recognised qualifications to launch your career in Australia."
        heroImage={course.image}
        hideImage
      />

      <div className="container mx-auto mt-4 xl:py-xl">
        <div className="flex flex-col lg:flex-row items-start">
          {/* Left Column */}
          <div className=" w-full lg:w-[70%] space-y-6 pb-6 lg:pb-0 lg:pe-8">
            <CourseOverview
              course={{
                heading: course.heading,
                description: Array.isArray(course.description)
                  ? course.description
                  : [course.description],
                durationLeft: courseDetails.duration || "8 weeks",
                durationRight: "2 months job support",
              }}
              courseItems={courseDetails?.courseItems ?? []}
            />
            <FAQ courses />
          </div>

          {/* Right Column: Sticky Cards */}
          <div className="w-full lg:w-[30%] flex-shrink-0 h-full">
            <div className="md:sticky md:top-24 self-start space-y-6">
              {/* Card 1: Key Info */}
              <div className="bg-white rounded-lg shadow p-4 md:p-6 space-y-4">
                {[
                  { icon: ClockIcon, label: "Duration", value: courseDetails.duration || "-" },
                  { icon: CalendarDaysIcon, label: "Next Intake", value: courseDetails.intake || "-" },
                  { icon: CalendarDaysIcon, label: "Delivery Mode", value: "Online, Blended, On-Campus)" },
                  

                ].map(({ icon: Icon, label, value }, i) => (
                  <div key={i} className="flex items-start gap-3 md:gap-4 border-b border-black-50 pb-4">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-secondary-blue flex-shrink-0" />
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="text-secondary-blue font-semibold  md:text-base">
                        {label}
                      </span>
                      <span className="text-gray-700 font-bold  md:text-base">
                        {value}
                      </span>
                    </div>
                  </div>
                ))}

                <PrimaryBtn
                  text="Enroll Now"
                  href="/contact"
                  className="w-full justify-center !inline-flex"
                />


              </div>

              {/* Card 2: Course Fees */}
              <div className="bg-white rounded-lg shadow p-4 md:p-6 space-y-4">
                <h3 className="text-gray-800 font-semibold text-base md:text-lg">Course <span className="text-secondary-blue">Fees</span></h3>
                {[
                  { label: "Tuition Fee", value: courseDetails.fees || "AU$18,750" },
                ].map((fee, i) => (
                  <div key={i} className="flex justify-between  md:text-base ">
                    <span className="text-gray-700 font-semibold">{fee.label}</span>
                    <span className="font-bold">{fee.value}</span>
                  </div>
                ))}
              </div>

              {/* Card 3: Share this course */}
              <div className="bg-white rounded-lg shadow p-4 md:p-6 space-y-4">
                <h3 className="text-gray-800 font-semibold text-base md:text-lg">
                  Share  <span className="text-secondary-blue">this course</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  <div className="flex justify-center gap-2">
                    <Image
                      src="/icons/facebook.svg"
                      alt="Facebook"
                      width={28}
                      height={28}
                      className="hover:opacity-80 opacity-50"
                    />
                    <Image
                      src="/icons/google.svg"
                      alt="Google"
                      width={24}
                      height={24}
                      className="hover:opacity-80 opacity-50"
                    />
                    <Image
                      src="/icons/twitter-x.svg"
                      alt="Twitter"
                      width={24}
                      height={24}
                      className="hover:opacity-80 opacity-50"
                    />
                    <Image
                      src="/icons/linked.svg"
                      alt="LinkedIn"
                      width={24}
                      height={24}
                      className="hover:opacity-80 opacity-50"
                    />
                    <Image
                      src="/icons/instagram.svg"
                      alt="Instagram"
                      width={24}
                      height={24}
                      className="hover:opacity-80 opacity-50"
                    />
                    <Image
                      src="/icons/youtube.svg"
                      alt="YouTube"
                      width={24}
                      height={24}
                      className="hover:opacity-80 opacity-50"
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

<AutoScrollSlider banner title="Apply or find out more" dec="Schedule a call with a Bayside Nursing College Course Advisor. Get answers about funding options, delivery modes, and whether full-time or part-time study best suits your schedule." />

    </div>
  );
}
