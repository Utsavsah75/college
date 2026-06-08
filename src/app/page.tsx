import { Hero, Confidence, AboutSection, Resources, RealFact, FAQ, Career } from "@/components";

import "swiper/css";
import "swiper/css/navigation";

export default function Home() {
  return (
    <main>
      <Hero
        headingBlack="Real Skills. Real Jobs."
        headingBlue=" Real Impact."
        subHeading="Train with experienced professionals who guide you from the classroom to the workplace. Bayside Nursing College gives you the knowledge, confidence, and credibility to start a purposeful career in care."
        heroImage="/images/doctor.svg"
        hideBreadcrumb
        buttonPair={{
          primaryText: "Learn More About Our Courses",
          primaryHref: "/courses",
          outlineText: "Book a Consultation",
          outlineHref: "/contact"
        }}
      />
      <Career />
      <Confidence />
      <AboutSection />
      <RealFact />
      <Resources />
      <FAQ className=" container" />
    </main>
  );
}
