export type CourseItemContent = string | { heading: string; points: string[] };

export type CourseItem = {
  id: number;
  title: string;
  content: CourseItemContent[];
  iconName: string;
};

export type Course = {
  code: string;                   
  description: string[];          
  items: CourseItem[];            
};
