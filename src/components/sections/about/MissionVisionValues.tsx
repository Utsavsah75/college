import { PinkOutlineCard, Heading, OutlineBtn, PrimaryBtn } from "@/components";
import missionDataJson from "@/data/data.json";
import type { MissionCardProps } from "@/types";

interface MissionDataJSON {
  missionData: MissionCardProps[];
}

const missionData: MissionCardProps[] = (missionDataJson as MissionDataJSON).missionData;

export const MissionVisionValues: React.FC = () => {
  return (
    <div id="mission" className="container mx-auto py-xl">
      <Heading
        titleBlack="Our Commitment to "
        titleBlue="Excellence in Care Education"
        subTitle="Providing high-quality vocational training in aged care, disability support, and community services to prepare students for meaningful work and successful careers."
        className="text-center lg:px-3xl"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {missionData.map((card, index) => (
          <PinkOutlineCard
            key={index}
            icon={card.icon}
            heading={card.heading}
            text={card.text}
            points={card.points}
            variant="three-row" leftAlign
          />
        ))}
      </div>

<div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-xl">
  <OutlineBtn
    text="View All Courses"
    href="/courses"
  />
  <PrimaryBtn
    text="Make an enquiry"
    href="tel:0449904827"
    className="w-full md:w-auto"
  />
</div>
    </div>
  );
};
