"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { projects } from "../../../constants/projects";
import { Project } from "../../../types/project";
import { techIcons } from "../../../lib/techIcons";
import ProjectModal from "../../../components/ProjectModal";

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <main className="max-w-5xl mx-auto py-12 px-4">
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row items-center bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out gap-6 relative overflow-hidden"
            >
              <div className="flex-1 z-10">
                {/* Title + Status Badge */}
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {project.title}
                  </h2>

                  {project.status && (
                    <span
                      className={`ml-4 px-3 py-1 text-xs font-medium rounded-full border capitalize ${
                        {
                          live: "bg-green-100 text-green-800 border-green-300",
                          "in-progress":
                            "bg-yellow-100 text-yellow-800 border-yellow-300",
                          prototype:
                            "bg-purple-100 text-purple-800 border-purple-300",
                          archived:
                            "bg-gray-100 text-gray-700 border-gray-300",
                        }[project.status]
                      }`}
                    >
                      {project.status.replace("-", " ")}
                    </span>
                  )}
                </div>

                <p className="text-gray-700 mt-2">
                  {project.excerpt ?? project.description}
                </p>

                {/* Technologies */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 bg-gray-100 px-3 py-1.5 rounded-full text-sm text-gray-800 shadow-sm hover:bg-gray-200 transition"
                    >
                      {techIcons[tech as keyof typeof techIcons]}{" "}
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="px-5 py-2.5 bg-gray-900 text-white text-sm rounded-full shadow hover:bg-gray-800 transition cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>

              <img
                src={project.thumbnail ?? project.images[0]}
                alt={project.title}
                className="w-60 h-40 rounded-xl object-cover shadow-md z-10"
              />
            </div>
          ))}
        </div>
      </main>

      <Footer />

      {/* Modal */}
      {activeProject && (
        <ProjectModal
          activeProject={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}

      {/* Tailwind animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
