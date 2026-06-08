import { Heading, OutlineBtn, PrimaryBtn } from "@/components";
import React from "react";

export const CustomSoftware = () => {
  return (
    <div>
      <div className="two-col-container">
        <div>
          <Heading
            titleBlack="Develop your Own"
            titleBlue="Custom Software"
            desc="We navigate digital solutions to make your work smooth and faster to compete in this highly competitive world. Beyond providing IT and digital marketing services, we create enduring alliances that help your company grow to new heights. "
            leftAlign
            breakLine
          />

          <div className="flex gap-sm">
            <PrimaryBtn
              text="Start Your Custom Project"
              href="/"
              external
            />
            <OutlineBtn
              text="Explore Our Tech Stack"
              href="/"
              external
            />
          </div>
        </div>
      </div>
    </div>
  );
};
