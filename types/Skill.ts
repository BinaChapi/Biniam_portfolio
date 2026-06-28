import { ReactElement } from "react";

export interface Skill {
  name: string;
  rating: number;
  icon: string | ReactElement;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}
