import ProjectCard from "./ProjectCard";
import { projects } from "../constants/projects";
import Link from "next/link";

export default function ProjectList() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link
          href="/projects"
          className="px-6 py-2  bg-white text-black hover:bg-gray-100 transition font-bold"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
}
