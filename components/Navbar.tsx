"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { userData } from "../lib/utils";
import { usePathname, useRouter } from "next/navigation";

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
      const timeout = setTimeout(() => setLoading(false), 600); // or 800ms
      return () => clearTimeout(timeout);
    }, [pathname]);


  return (
    <header className="w-full bg-white/60 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-4xl mx-auto flex items-center justify-between py-4 px-4">
        <Link
          href="/"
          className="text-lg font-semibold text-gray-900 tracking-tight"
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
                  className={`relative px-3 py-2 rounded-md font-semibold transition-all duration-200 ${
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

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-3 ml-4">
            <a
              href={userData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              {/* GitHub Icon */}
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.421-.012 2.751 0 .267.18.577.688.479C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"
                />
              </svg>
            </a>
            <a
              href={userData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-black transition-colors"
            >
              {/* LinkedIn Icon */}
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"
                />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden ml-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100 transition"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <span className="text-2xl font-bold text-black">
                {isOpen ? "✕" : "☰"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div
          className={`md:hidden bg-white border-t border-gray-100 shadow px-4 overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-60 py-3 opacity-100" : "max-h-0 py-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-2 transition-opacity duration-300">
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
