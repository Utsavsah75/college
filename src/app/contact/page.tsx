import { FAQ, SocialCards, ActionCards, Hero, PrimaryBtn, AutoScrollSlider } from '@/components'
import { BuildingOfficeIcon, CheckIcon, DocumentTextIcon, UserIcon } from '@heroicons/react/24/outline';
import { PhoneIcon, InformationCircleIcon, MapPinIcon, EnvelopeIcon, ClockIcon, BriefcaseIcon, CameraIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline'
import React from 'react'

const ContactPage = () => {

  return (
    <div>
      <Hero
        headingBlack="Shaping Compassionate Professionals for a"
        headingBlue="Healthier Tomorrow"
         subHeading="Complete your qualification at your own pace and prepare for a rewarding care and support career in Australia."
        hideImage
        heroImage={''}
      />
      <ActionCards />
      <div className="container mx-auto flex flex-col lg:flex-row items-stretch gap-24 md:gap-8 mt-12">
        {/* Left Side: Two Cards */}
        <div className="flex-1 flex flex-col gap-12 md:gap-6">
          {/* Card 1: Contacts */}
          <div className="bg-secondary-blue text-white p-6 rounded-lg shadow-md flex flex-col gap-6 w-full">
            <span className="bg-white/20 text-white px-3 py-1 rounded-md w-fit text-xs font-medium tracking-wide uppercase">
              Contacts
            </span>

            <div className="flex items-start gap-4">
              <BuildingOfficeIcon className="w-8 h-8 text-white mt-1 flex-shrink-0" />
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-semibold">Bayside Nursing College</h3>
                <p className=" leading-relaxed">
                  16 / 8-10 King Street Rockdale NSW 2216 Australia
                </p>

                <ul className="mt-4 space-y-1 ">
                  <li className="flex items-center gap-2">
                    Telephone: <b>0449 904 827</b>
                  </li>
                  <li className="flex items-center gap-2">
                    Email: <b>admin@bnc.edu.au</b>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: How It Works */}
          <div className="bg-secondary-blue/5 p-6 rounded-lg shadow-md">
            <span className="inline-block bg-secondary-blue/5 text-secondary-blue px-3 py-1 rounded-md mb-4 ">
              Information
            </span>
            <h3 className="text-xl font-semibold mb-4 text-secondary-blue">How It Works?</h3>

            <div className="relative flex flex-col gap-6">
              {/* Vertical line */}
              <div className="absolute left-[1.125rem] md:left-[1.125rem] top-0 bottom-0 w-[2px] bg-secondary-blue" />

              {[
                "Schedule a free consultation",
                "Attend an intake session ",
                "Submit required documentation",
                "Begin your program with guidance ",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 relative pl-12">
                  {/* Circle icon perfectly centered */}
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 bg-secondary-blue text-white w-8 h-8 rounded-full flex items-center justify-center z-10 shadow-md">
                    <CheckIcon className="w-4 h-4" />
                  </span>

                  {/* Step text */}
                  <p className="text-gray-700 leading-relaxed">
                    <b>Step {i + 1}: </b> {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Right Side: Map with overlay card */}
        <div className="flex-1 relative">
          {/* Overlay Card */}
          <div className="absolute top-4 left-4 lg:left-4 z-10 bg-white p-4 rounded-lg shadow-lg w-full max-w-[280px]  sm:w-3/4 sm:max-w-xs">
            <h3 className="text-lg font-semibold mb-2">Bayside Nursing College</h3>

            <div className="flex items-start gap-2 mb-1">
              <MapPinIcon className="w-5 h-5 text-primary-pink flex-shrink-0 self-start" />
              <span>16 / 8-10 King Street Rockdale NSW 2216 Australia</span>
            </div>

            <div className="flex items-start gap-2 mb-1">
              <PhoneIcon className="w-5 h-5 text-primary-pink flex-shrink-0 self-start" />
              <span>493 628 890, 0493 628 890</span>
            </div>

            <div className="flex items-start gap-2 mb-1">
              <EnvelopeIcon className="w-5 h-5 text-primary-pink flex-shrink-0 self-start" />
              <span>admin@bnc.edu.au </span>
            </div>

            <PrimaryBtn text="Get Directions" href="" className='mt-4' />
          </div>

          {/* Map */}
          <div className="relative w-full h-full min-h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.2183318204998!2d146.32654817668296!3d-38.663701183091504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b2bd12e84282795%3A0xa176fbf6e6624b83!2sWelshpool%20Rd%2C%20Toora%20VIC%203962%2C%20Australia!5e1!3m2!1sen!2snp!4v1762502981687!5m2!1sen!2snp"
              className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            />
          </div>



        </div>
      </div>
      <SocialCards />
      <FAQ />
      <AutoScrollSlider banner title="Apply or find out more" dec="Schedule a call with a Bayside Nursing College Course Advisor. Get answers about funding options, delivery modes, and whether full-time or part-time study best suits your schedule." />

    </div>
  );
}

export default ContactPage
