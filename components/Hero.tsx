"use client";
import Image from "next/image";
import Link from "next/link";
import { userData } from "../lib/utils";

export default function Hero() {
  return (
    <section className="relative max-w-4xl mx-auto px-4 pt-20 pb-16 flex flex-col items-center">
      {/* Animated glassy background banner */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-44 backdrop-blur-lg rounded-3xl shadow-lg z-0 animate-gradient"
        style={{
          background: `linear-gradient(
            270deg,
            rgba(108, 94, 255, 0.3),
            rgba(255, 246, 113, 0.3),
            rgba(94, 255, 175, 0.3),
            rgba(113, 255, 127, 0.3),
            rgba(201, 113, 255, 0.3),
            rgba(113, 255, 231, 0.3)
          )`,
          backgroundSize: "1200% 1200%",
        }}
      />
      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="flex flex-col md:flex-row items-center w-full gap-8 mt-8">
          {/* Left: Name, subtitle, and CTA */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-3 text-center md:text-left tracking-tight">
              {userData.fname} {userData.lname}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 text-center md:text-left leading-relaxed">
              Full Stack Developer building scalable web, mobile, and Web3/Blockchain applications with React, Next.js, React Native, Node.js, and Solidity. Experienced in Ethereum ecosystem development.
            </p>

            {/* Numerical Achievements */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 w-full max-w-md">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <span className="text-2xl font-bold text-gray-900">8+</span>
                <p className="text-sm text-gray-600">Projects</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <span className="text-2xl font-bold text-gray-900">3+</span>
                <p className="text-sm text-gray-600">Years Learning</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <span className="text-2xl font-bold text-gray-900">500+</span>
                <p className="text-sm text-gray-600">Commits</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <span className="text-2xl font-bold text-gray-900">1000+</span>
                <p className="text-sm text-gray-600">Hours Coding</p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-full shadow hover:bg-black/80 hover:shadow-lg transition-all duration-300 text-base"
            >
              Let's Build Something Together →
            </Link>
          </div>

          {/* Right: Profile image */}
          <div className="flex-shrink-0 mt-4 md:mt-0">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-gray-100 flex items-center justify-center">
              <Image
                src={userData.profile}
                alt={`${userData.fname} ${userData.lname}'s Profile Picture`}
                width={224}
                height={224}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind CSS animation keyframes */}
      <style jsx>{`
        @keyframes gradientBG {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          animation: gradientBG 20s ease infinite;
        }
      `}</style>
    </section>
  );
}
