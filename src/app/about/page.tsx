"use client";
import {
  Hero,
  AboutSection,
  Breadcrumb,
  RealFact,
  Testimonial,
  MissionVisionValues,
  Confidence,
  FAQ
} from "@/components";

const page = () => {
  return (
    <div>
<Hero
  headingBlack="Shaping the Future of "
  headingBlue="Care and Community Services"
  subHeading="At Bayside Nursing College, we provide nationally recognised training that equips students with the knowledge, skills, and confidence to excel in aged care, disability support, and community services."
  heroImage="/hero/about.svg"
/>
      <AboutSection
        heading={{
          titleBlack: "About",
          titleBlue: "Bayside Nursing College",
        }}
        paragraphs={[
          "Welcome to Bayside Nursing College, founded on the belief that a single, well-trained professional can change countless lives, we have created a vibrant and supportive learning environment that champions both cutting-edge knowledge and timeless compassion."
        ]}
      
      />
      <MissionVisionValues />
      <Confidence/>
      <FAQ className="container"/>
    </div>
  );
};

export default page;
