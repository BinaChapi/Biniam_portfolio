import { ReactElement } from "react";

export interface Skill {
  name: string;
  rating: number;
  icon: string | ReactElement; // Icon can be a string or a React element
}