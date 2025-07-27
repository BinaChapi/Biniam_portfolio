import Link from "next/link";

export default function ProjectCard({ project }:any) {  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md transition hover:shadow-lg">
      <img
        src={project.images[0]}
        alt={project.title}
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-sm text-gray-900">
          {project.description.length > 90 ? project.description.substring(0, 100) + "..." : project.description}
          {project.description.length > 90 && (
          <Link
          href="/projects"
        >
          <span className="text-gray-500 cursor-pointer">seemore</span>
        </Link>
          )}
        </p>
      </div>
    </div>
  );
}
