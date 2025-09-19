import { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "CatchUp Agency Website",
    description:
      "A modern and responsive website built for a Marketing and Advertising Agency, designed to showcase their services, portfolio, and client success stories. The platform highlights branding, digital campaigns, and creative strategies while ensuring a user-friendly experience with clean layouts and intuitive navigation. The site is optimized for performance and SEO, making it easy for potential clients to discover the agency and engage with their offerings",
    excerpt:
      "Marketing & advertising agency website built with Next.js + Tailwind.",
    images: [
      "/images/catchup_1.png",
      "/images/catchup_2.png",
      "/images/catchup_3.png",
      "/images/catchup_4.png",
      "/images/catchup_5.png",
    ],
    thumbnail: "/images/catchup_1.png",
    tech: ["React", "Next.js", "Tailwind"],
    github: "https://github.com/BinaChapi/Catch_Up",
    type: "web",
    liveUrl: "https://catch-up-sandy.vercel.app/", // optional live site if hosted
    status: "live", // live | in-progress | prototype | archived
  },
  {
    title: "Currency Exchange App",
    description:
      "A mobile app that allows users to exchange both local and foreign currencies with real-time conversion rates and historical data tracking.",
    excerpt:
      "Mobile app for real-time currency conversion with history & maps.",
    images: [
      "/images/ExC.jpg",
      "/images/Ex1.jpg",
      "/images/Ex2.jpg",
      "/images/Ex3.jpg",
      "/images/Ex4.jpg",
      "/images/Ex5.jpg",
    ],
    thumbnail: "/images/ExC.jpg",
    tech: ["React Native", "Expo", "REST API", "Google Map"],
    github: "https://github.com/BinaChapi/BirrConvert",
    type: "mobile",
    status: "in-progress",
  },
  {
    title: "DareChain – Challenge, Prove, and Earn!",
    description:
      "DareChain is a fun and rewarding social app where users create daring challenges, accept them, and earn coins by proving they've completed them. Everything is moderated for fairness.",
    excerpt: "Social app to create, accept, and prove dares with rewards.",
    images: [
      "/images/photo_1.jpg",
      "/images/photo_2.jpg",
      "/images/photo_3.jpg",
      "/images/photo_4.jpg",
      "/images/photo_5.jpg",
      "/images/photo_6.jpg",
      "/images/photo_7.jpg",
      "/images/photo_8.jpg",
      "/images/photo_9.jpg",
      "/images/photo_10.jpg",
      "/images/photo_11.jpg",
      "/images/photo_12.jpg",
      "/images/photo_13.jpg",
      "/images/photo_14.jpg",
      "/images/photo_15.jpg",
      "/images/photo_17.jpg",
      "/images/photo_18.jpg",
    ],
    thumbnail: "/images/photo_1.jpg",
    tech: ["React Native", "Expo", "REST API", "Supabase"],
    github: "https://github.com/BinaChapi/DareApp",
    type: "mobile",
    status: "prototype",
  },
  {
    title: "Online Chat-based Gaming Platform",
    description:
      "A dynamic mobile app blending social interaction with casual gaming. Users can join chat rooms, play quick multiplayer games, and compete on leaderboards while chatting in real time.",
    excerpt: "Realtime chat gaming platform with multiplayer casual games.",
    images: [
      "/images/online_1.jpg",
      "/images/online_2.jpg",
      "/images/online_3.jpg",
      "/images/online_4.jpg",
      "/images/online_5.jpg",
      "/images/online_6.jpg",
      "/images/online_7.jpg",
      "/images/online_8.jpg",
      "/images/online_9.jpg",
      "/images/online_10.jpg",
      "/images/online_11.jpg",
    ],
    thumbnail: "/images/online_1.jpg",
    tech: ["React Native", "Expo", "REST API", "Supabase"],
    github: "https://github.com/BinaChapi/chewata_x",
    type: "mobile",
    status: "in-progress",
  },
];
