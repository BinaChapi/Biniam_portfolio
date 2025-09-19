import ProjectCard from "./ProjectCard";
import { projects } from "../constants/projects";
import Link from "next/link";

export default function ProjectList() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Featured Projects
        </h2>
        <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
          A showcase of selected projects that highlight design, performance, and
          modern development practices.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-14">
        <Link
          href="/projects"
          className="inline-block px-6 py-3 bg-black text-white font-semibold text-sm rounded-full shadow hover:bg-black/80 hover:shadow-lg transition-all duration-300"
        >
          View All Projects →
        </Link>
      </div>
    </section>
  );
}
