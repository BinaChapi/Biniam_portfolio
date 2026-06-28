import type { Metadata } from "next";
import ClientProjectsPage from "./ClientProjectsPage";

export const metadata: Metadata = {
  title: "Projects | Biniyam Mulugeta",
  description: "Explore projects by Biniyam Mulugeta, Full Stack Developer specializing in React, Next.js, Node.js, MongoDB, React Native, and Web3.",
};

export default function ProjectsPage() {
  return <ClientProjectsPage />;
}
