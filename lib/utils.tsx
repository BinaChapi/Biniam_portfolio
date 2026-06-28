import { Skill, SkillCategory } from "../types/Skill";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
  FaJava,
  FaDocker,
  FaGithub,
  FaEthereum,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVercel,
  SiPostgresql,
  SiSolidity,
  SiNextdotjs,
  SiNestjs,
} from "react-icons/si";
import { UserProfile } from "../types/UserProfile";

// Image path
const profileImg = "/images/Biniam.png";

// Skills array
const skills: Skill[] = [
  {
    name: "JavaScript",
    rating: 3,
    icon: <FaJs className="text-yellow-400 text-3xl" />,
  },
  {
    name: "React",
    rating: 3,
    icon: <FaReact className="text-blue-500 text-3xl" />,
  },
  {
    name: "Node.js",
    rating: 2,
    icon: <FaNodeJs className="text-green-600 text-3xl" />,
  },
  {
    name: "React Native",
    rating: 3,
    icon: <FaReact className="text-blue-500 text-3xl" />,
  },
  {
    name: "Python",
    rating: 2,
    icon: <FaPython className="text-blue-600 text-3xl" />,
  },
  {
    name: "C++",
    rating: 2,
    icon: <SiCplusplus className="text-indigo-600 text-3xl" />,
  },
  {
    name: "Express",
    rating: 2.5,
    icon: <SiExpress className="text-amber-500 text-3xl" />,
  },
  {
    name: "Java",
    rating: 2.5,
    icon: <FaJava className="text-red-600 text-3xl" />,
  },
  {
    name: "MySQL",
    rating: 2.5,
    icon: <SiMysql className="text-blue-600 text-3xl" />,
  },
  {
    name: "MongoDB",
    rating: 2,
    icon: <SiMongodb className="text-green-600 text-3xl" />,
  },
  {
    name: "Docker",
    rating: 2.5,
    icon: <FaDocker className="text-blue-600 text-3xl" />,
  },
  {
    name: "Git && Github",
    rating: 2.5,
    icon: <FaGithub className="text-black text-3xl" />,
  },
];

// Skill Categories
const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      {
        name: "React",
        rating: 3,
        icon: <FaReact className="text-blue-500 text-3xl" />,
      },
      {
        name: "Next.js",
        rating: 3,
        icon: <SiNextdotjs className="text-black text-3xl" />,
      },
      {
        name: "JavaScript",
        rating: 3,
        icon: <FaJs className="text-yellow-400 text-3xl" />,
      },
      {
        name: "Tailwind",
        rating: 3,
        icon: <FaJs className="text-sky-500 text-3xl" />,
      },
      {
        name: "React Native",
        rating: 3,
        icon: <FaReact className="text-blue-500 text-3xl" />,
      },
    ],
  },
  {
    name: "Backend",
    skills: [
      {
        name: "Node.js",
        rating: 2.5,
        icon: <FaNodeJs className="text-green-600 text-3xl" />,
      },
      {
        name: "Express",
        rating: 2.5,
        icon: <SiExpress className="text-amber-500 text-3xl" />,
      },
      {
        name: "Python",
        rating: 2,
        icon: <FaPython className="text-blue-600 text-3xl" />,
      },
      {
        name: "Java",
        rating: 2.5,
        icon: <FaJava className="text-red-600 text-3xl" />,
      },
      {
        name: "Nest.Js",
        rating: 2.5,
        icon: <SiNestjs className="text-red-600 text-3xl" />,
      },
    ],
  },
  {
    name: "Database",
    skills: [
      {
        name: "MongoDB",
        rating: 2,
        icon: <SiMongodb className="text-green-600 text-3xl" />,
      },
      {
        name: "MySQL",
        rating: 2.5,
        icon: <SiMysql className="text-blue-600 text-3xl" />,
      },
      {
        name: "PostgreSQL",
        rating: 2.5,
        icon: <SiPostgresql className="text-blue-700 text-3xl" />,
      },
      {
        name: "Supabase",
        rating: 2,
        icon: <SiMongodb className="text-green-500 text-3xl" />,
      },
    ],
  },
  {
    name: "Web3 & Blockchain",
    skills: [
      {
        name: "Solidity",
        rating: 2.5,
        icon: <SiSolidity className="text-purple-600 text-3xl" />,
      },
      {
        name: "Ethereum",
        rating: 2.5,
        icon: <FaEthereum className="text-blue-600 text-3xl" />,
      },
    ],
  },
  {
    name: "Tools",
    skills: [
      {
        name: "Git & GitHub",
        rating: 2.5,
        icon: <FaGithub className="text-black text-3xl" />,
      },
      {
        name: "Docker",
        rating: 2.5,
        icon: <FaDocker className="text-blue-600 text-3xl" />,
      },
      {
        name: "Postman",
        rating: 2,
        icon: <SiPostman className="text-orange-500 text-3xl" />,
      },
      {
        name: "Vercel",
        rating: 2,
        icon: <SiVercel className="text-black text-3xl" />,
      },
    ],
  },
];

// Combined export
export const userData: UserProfile = {
  fname: "Biniam",
  lname: "Mulugeta",
  age: 24,
  profile: profileImg,
  linkedin: "https://www.linkedin.com/in/binachapi",
  github: "https://github.com/BinaChapi",
  x: "https://twitter.com/BinaChapi",
  phoneNo: "+251 939 69 1485",
  telegram: "https://t.me/BinaChapi",
  email: "bmulugeta452@gmail.com",
  location: "Addis Ababa, Ethiopia",
  skills,
  skillCategories,
  currentlyWorkingOn: "AI Resume Builder using React + Node.js + OpenAI",
};
