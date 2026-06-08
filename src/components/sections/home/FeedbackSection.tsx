import React from "react";
import { Heading, FeedbackForm, Breadcrumb} from "@/components";

export const FeedbackSection = () => {
  return (
    <section className="container my-lg">
      <Breadcrumb />
      <div className="grid grid-cols-1 lg:grid-cols-2 border overflow-hidden">
        <div className="relative text-white flex flex-col justify-start p-8 lg:p-12 overflow-hidden">
          {/* Background SVG */}
          <img
            src="/images/form-bg.svg"
            alt="Feedback Background"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />


          {/* Content */}
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 relative z-10">
            Have some complaint or feedback?
          </h2>
          <p className=" lg:text-base opacity-90 relative z-10">
            We value your input. Share your thoughts and help us improve our
            services for you and others.
          </p>
        </div>
        <div className="px-8 lg:py-0 py-6">
          <Heading
            titleBlack="What Our "
            titleBlue="Clients Say"
            subTitle="Join LifeCare today for expert health services and care."
            align="left"
            hideLeftIcon
            hideBgSvg={true}
            smallTitle={true}
            className="mt-md mb-xs pb-0 pt-0"
          />
          <FeedbackForm />
        </div>
      </div>
    </section>
  );
};
