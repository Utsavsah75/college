export type BtnProps = {
  text: string;
  className?: string;
}

export type HeadingProps = {
  titleBlack: string;
  titleBlue: string;
  subTitle?: string;
  className?: string;
  bgSvgSize?: "small";
}

export type CardProps = {
  image: string;
  heading: string;
  description: string;
  durationLeft?: string;   
  durationRight?: string; 
}

export type PinkOutlineCardProps = {
  icon: React.ReactNode;
  heading: string;
  text?: string;
  points?: string[];
  variant?: "default" | "three-row"; 
  className?: string;
}

export type MissionCardProps = {
  icon: string;
  heading: string;
  text: string;
  points?: string[];
}

export type HeroProps = {
  headingBlack: string;
  headingBlue: string;
  subHeading: string;
  heroImage: string;
};

export type Resource = {
  image: string;
  heading: string;
  description: string;
}