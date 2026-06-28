import { Skill, SkillCategory } from "./Skill";

export interface UserProfile {
  fname: string;
  lname: string;
  age: number;
  profile: string;
  linkedin: string;
  github: string;
  x: string;
  phoneNo: string;
  telegram: string;
  email: string;
  location: string;
  skills: Skill[]; // keep for backward compatibility
  skillCategories: SkillCategory[];
  currentlyWorkingOn?: string;
}
