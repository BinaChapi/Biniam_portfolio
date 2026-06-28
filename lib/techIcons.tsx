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
  SiPostgresql,
  SiSolidity,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaEthereum } from "react-icons/fa";
import { JSX } from "react";

// 1. Define tech name types
export type TechName =
  | "Next.js"
  | "MongoDB"
  | "Tailwind"
  | "Stripe"
  | "React"
  | "React Native"
  | "Firebase"
  | "Expo"
  | "Supabase"
  | "Google Map"
  | "REST API"
  | "PostgreSQL"
  | "Solidity"
  | "Ethereum";

// 2. Typed icon map
export const techIcons: Record<TechName, JSX.Element> = {
  "Next.js": <SiNextdotjs />,
  MongoDB: <SiMongodb className="text-green-600" />,
  Tailwind: <SiTailwindcss className="text-sky-500" />,
  Stripe: <SiStripe className="text-indigo-500" />,
  React: <SiReact className="text-cyan-500" />,
  "React Native": <SiReact className="text-cyan-500" />,
  Firebase: <SiFirebase className="text-yellow-500" />,
  Expo: <SiExpo />,
  Supabase: <SiSupabase className="text-green-500" />,
  "Google Map": <SiGooglemaps className="text-green-500" />,
  "REST API": <TbApi className="text-blue-500" />,
  PostgreSQL: <SiPostgresql className="text-blue-700" />,
  Solidity: <SiSolidity className="text-purple-600" />,
  Ethereum: <FaEthereum className="text-blue-600" />,
};

// 3. Optional: fallback if an unknown tech is passed
export const getTechIcon = (tech: string): JSX.Element => {
  return (techIcons as any)[tech] || <span className="text-gray-400">⚙️</span>;
};
