import React from "react";
import { Breadcrumb, PrimaryBtn, OutlineBtn, SearchBar } from "@/components";
import { HeroProps } from "@/types";
import Image from "next/image";
import { courses } from "@/data/data.json";

interface HeroExtendedProps extends HeroProps {
  buttonType?: "primary" | "outline";
  buttonText?: string;
  hideBreadcrumb?: boolean;
  hideImage?: boolean;
  buttonHref?: string;
  buttonPair?: {
    primaryText: string;
    primaryHref: string;
    outlineText: string;
    outlineHref: string;
  };
  showSearchBar?: boolean; 
}

export const Hero: React.FC<HeroExtendedProps> = ({
  headingBlack,
  headingBlue,
  subHeading,
  heroImage,
  buttonType = "primary",
  buttonText = "Apply Now",
  buttonHref = "/contact",
  buttonPair,
  hideBreadcrumb,
  hideImage,
  showSearchBar = false,
}) => {
  const RenderButton = buttonType === "primary" ? PrimaryBtn : OutlineBtn;

  const renderButtons = () => {
if (showSearchBar) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 mt-4">
      {/* Search input */}
     <SearchBar courses={courses} variant="solid" className="w-full md:w-64" />

      
      {/* OR text */}
      <span className="font-semibold text-gray-700 hidden md:inline-block">OR</span>
      
      {/* Primary button */}
      <PrimaryBtn text="View Resources" href="/resources" className="w-full md:w-auto" />
    </div>
  );
}


    if (buttonPair) {
      return (
        <div className="flex flex-col md:flex-row gap-2">
          <OutlineBtn text={buttonPair.outlineText} href={buttonPair.outlineHref} />
          <PrimaryBtn text={buttonPair.primaryText} href={buttonPair.primaryHref} />
        </div>
      );
    }
    return <RenderButton text={buttonText} href={buttonHref} className="w-full md:w-auto" />;
  };

  return (
    <section className="relative bg-secondary-blue-500">
      <div className="container">
        {!hideBreadcrumb && <Breadcrumb />}

        <div className="flex flex-col-reverse lg:flex-row gap-2 md:gap-12 xl:gap-24 pt-0 relative z-10">
          {!hideImage && (
            <div className="xl:w-1/3 lg:w-1/2 w-full relative flex justify-center items-end">
              <Image
                src="/hero/bg.svg"
                alt="Hero BG"
                fill
                className="z-0"
                style={{ objectFit: "contain", objectPosition: "bottom center" }}
              />
              <div className="relative z-10 w-[75%] flex justify-center">
                <Image
                  src={heroImage}
                  alt="Hero Image"
                  width={600}
                  height={600}
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
          )}

          <div className="lg:w-2/3 flex flex-col gap-6 py-6 xl:py-16 relative z-10">
            <h1 className="lg:text-4xl text-2xl font-bold">
              <span className="text-black">{headingBlack}</span>
              <br />
              <span className="text-secondary-blue">{headingBlue}</span>
            </h1>
            <p className="text-gray-800  lg:text-md">{subHeading}</p>

            <div className="mt-4 w-full md:w-auto">{renderButtons()}</div>

            {!hideImage && (
              <div className="flex justify-center lg:justify-start items-center gap-6 mt-6">
                <Image src="/images/aql.svg" alt="AQL Logo" width={100} height={100} />
                <Image src="/images/nrt.svg" alt="NRT Logo" width={100} height={100} />
              </div>
            )}
          </div>
        </div>

        <Image
          src="/hero/circle.svg"
          alt="circle background"
          fill
          className="absolute top-0 right-0 w-auto h-full opacity-60 pointer-events-none select-none"
          style={{ objectFit: "contain", objectPosition: "right center" }}
        />
      </div>
    </section>
  );
};
