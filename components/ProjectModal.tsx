"use client";
import { ChevronLeft, ChevronRight, Rocket } from "lucide-react";
import { useRef } from "react";
import { Project } from "../types/project";
import { techIcons } from "../lib/techIcons";

interface ProjectModalProps {
  activeProject: Project | null;
  onClose: () => void;
}

export default function ProjectModal({
  activeProject,
  onClose,
}: ProjectModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  if (!activeProject) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm overflow-y-auto">
      <div className="min-h-full px-4 py-10 flex justify-center items-start">
        <div className="bg-white w-full max-w-4xl rounded-3xl shadow-xl relative animate-fadeInUp overflow-hidden">
          <div className="p-8">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-6 text-2xl font-bold text-gray-500 hover:text-black px-1 py-1 cursor-pointer bg-gray-200 rounded-full z-20"
            >
              &times;
            </button>

            {/* Title + Status */}
            <div className="flex items-center justify-between mb-4 pr-16">
              <h2 className="text-3xl font-bold text-gray-800">
                {activeProject.title}
              </h2>

              {activeProject.status && (
                <span
                  className={`ml-4 px-3 py-1 text-xs font-medium rounded-full border ${
                    {
                      live: "bg-green-100 text-green-800 border-green-300",
                      "in-progress":
                        "bg-yellow-100 text-yellow-800 border-yellow-300",
                      prototype:
                        "bg-purple-100 text-purple-800 border-purple-300",
                      archived: "bg-gray-100 text-gray-700 border-gray-300",
                    }[activeProject.status]
                  }`}
                >
                  {activeProject.status}
                </span>
              )}
            </div>

            {/* Project Storytelling */}
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Problem</h3>
                <p className="text-gray-700">{activeProject.problem}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">My Role</h3>
                <p className="text-gray-700">{activeProject.role}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Biggest Challenge
                </h3>
                <p className="text-gray-700">{activeProject.challenge}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6 max-w-2xl">
              {activeProject.description}
            </p>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 bg-gray-100 px-3 py-1.5 rounded-full text-sm text-gray-800 shadow-sm hover:bg-gray-200 transition"
                  >
                    {techIcons[tech as keyof typeof techIcons]} {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub + Live URL */}
            <div className="mb-8 flex gap-4 flex-wrap">
              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition"
              >
                View on GitHub →
              </a>

              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full text-sm hover:bg-blue-500 transition"
                >
                  <Rocket className="w-4 h-4" /> Live Demo
                </a>
              )}
            </div>

            {/* Image Carousel */}
            <div className="relative">
              {/* Left Scroll */}
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
                    className={
                      activeProject.type === "mobile"
                        ? "flex items-center justify-center min-w-[250px] h-96 rounded-2xl shadow-md overflow-hidden p-4 bg-gray-100 transition-all duration-300"
                        : "flex items-center justify-center min-w-full rounded-2xl shadow-md overflow-hidden"
                    }
                  >
                    <img
                      src={src}
                      alt={`Screenshot ${index}`}
                      className={
                        activeProject.type === "mobile"
                          ? "max-h-full object-contain rounded-xl"
                          : "w-full h-auto rounded-xl object-cover"
                      }
                    />
                  </div>
                ))}
              </div>

              {/* Right Scroll */}
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
      </div>

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
