"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { userData } from "../lib/utils";

// ✅ Lucide imports
import { Github, Linkedin, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <header className="w-full bg-white/60 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-4xl mx-auto flex items-center justify-between py-4 px-4">
        <Link
          href="/"
          className="text-lg font-semibold text-gray-900 tracking-tight"
          onClick={() => {
            setLoading(true);
            setIsOpen(false);
          }}
        >
          <span className="font-semibold">{userData.fname}'s Portfolio</span>
        </Link>

        <div className="flex items-center gap-1">
          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-2 items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => {
                    setLoading(true);
                    router.push(link.href);
                  }}
                  className={`relative px-3 py-2 rounded-md font-semibold transition-all duration-200 cursor-pointer ${
                    pathname === link.href
                      ? "text-black bg-blue-100"
                      : "text-gray-500 hover:text-black hover:bg-blue-50"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* ✅ Social Icons with Lucide */}
          <div className="hidden md:flex items-center gap-3 ml-4">
            <a
              href={userData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-500 hover:text-black transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={userData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-black transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* ✅ Mobile Menu Toggle with Lucide */}
          <div className="md:hidden ml-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100 transition"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow px-4 overflow-hidden transition-all duration-300 ease-in-out max-h-96 py-4 opacity-100">
          <ul className="flex flex-col gap-2 mb-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setLoading(true);
                    router.push(link.href);
                  }}
                  className="block w-full text-left px-4 py-2 rounded-lg font-semibold text-gray-600 hover:text-black hover:bg-blue-50 transition"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* ✅ Mobile Social Icons */}
          <div className="flex justify-center gap-6 text-gray-500">
            <a
              href={userData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-black transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={userData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-black transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}

      {/* Progress Bar */}
      {loading && (
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-4xl h-2 bg-transparent overflow-hidden">
            <div className="absolute h-full w-[200%] animate-liquid-glass bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-70 blur-sm saturate-150" />
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes liquid-glass {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-liquid-glass {
          animation: liquid-glass 1.2s linear infinite;
        }
      `}</style>
    </header>
  );
}
