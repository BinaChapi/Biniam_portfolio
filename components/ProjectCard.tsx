import Link from "next/link";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
      <div className="overflow-hidden">
        <img
          src={project.thumbnail || project.images[0]}
          alt={project.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-700 mb-4 line-clamp-2">
          {project.excerpt || project.description}
        </p>
        <Link
          href="/projects"
          className="text-black font-semibold hover:text-black/50 transition"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
