"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { projects } from "../../../constants/projects";
import { Project } from "../../../types/project";
import { techIcons } from "../../../lib/techIcons";

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
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none rounded-3xl" />
              <div className="flex-1 z-10">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {project.title}
                </h2>
                <p className="text-gray-700 mt-2">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-sm px-3 py-1 rounded-full text-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="px-4 py-2 bg-gray-200 text-black text-sm rounded-3xl transition cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>

              <img
                src={project.images[0]}
                alt={project.title}
                className="w-60 h-40 rounded-xl object-cover shadow-md z-10"
              />
            </div>
          ))}
        </div>
      </main>

      <Footer />

      {activeProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center backdrop-blur-sm overflow-y-auto py-10 px-4">
          <div className="bg-white w-full max-w-4xl rounded-3xl p-8 shadow-xl relative animate-fadeInUp mt-50">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-5 right-6 text-2xl font-bold text-gray-500 hover:text-black"
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold mb-2 text-gray-800">
              Project: {activeProject.title}
            </h2>
            <p className="text-gray-600 mb-4 max-w-2xl">
              {activeProject.description}
            </p>

            {/* Technologies */}
            <div className="mt-4">
              <h4 className="font-semibold text-gray-800 mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-800"
                  >
                    {techIcons[tech as keyof typeof techIcons]} {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub Button */}
            <div className="mt-6">
              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-900 text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition"
              >
                View on GitHub →
              </a>
            </div>

            {/* Image Carousel */}
            <div className="relative mt-6">
            <button
              onClick={() => scroll("left")}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 shadow-md p-2 rounded-full z-10 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

              <div
                ref={scrollRef}
                className="flex flex-row gap-4 max-w-full overflow-x-auto py-4 px-6 scrollbar-hide scroll-smooth"
              >
                {activeProject.images.map((src, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-center min-w-[250px] h-96 rounded-2xl shadow-md overflow-hidden p-4 transition-all duration-300 ${
                      index % 2 === 0 ? "bg-green-100" : "bg-gray-100"
                    }`}
                  >
                    <img
                      src={src}
                      alt={`Screenshot ${index}`}
                      className="max-h-full object-contain rounded-xl"
                    />
                  </div>
                ))}
              </div>

                <button
                  onClick={() => scroll("right")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 shadow-md p-2 rounded-full z-10 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
            </div>
          </div>
        </div>
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
