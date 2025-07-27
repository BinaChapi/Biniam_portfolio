// lib/techIcons.tsx
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiStripe,
  SiReact,
  SiFirebase,
  SiExpo,
  SiSupabase,
  SiGooglemaps,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { JSX } from "react";

// 1. Define tech name types
export type TechName =
  | "Next.js"
  | "MongoDB"
  | "Tailwind"
  | "Stripe"
  | "React Native"
  | "Firebase"
  | "Expo"
  | "Supabase"
  | "Google Map"
  | "REST API";

// 2. Typed icon map
export const techIcons: Record<TechName, JSX.Element> = {
  "Next.js": <SiNextdotjs />,
  MongoDB: <SiMongodb className="text-green-600" />,
  Tailwind: <SiTailwindcss className="text-sky-500" />,
  Stripe: <SiStripe className="text-indigo-500" />,
  "React Native": <SiReact className="text-cyan-500" />,
  Firebase: <SiFirebase className="text-yellow-500" />,
  Expo: <SiExpo />,
  Supabase: <SiSupabase className="text-green-500" />,
  "Google Map": <SiGooglemaps className="text-green-500" />,
  "REST API": <TbApi className="text-blue-500" />,
};
