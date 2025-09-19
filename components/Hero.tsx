"use client";
import Image from "next/image";
import { userData } from "../lib/utils";

export default function Hero() {
  return (
    <section className="relative max-w-4xl mx-auto px-4 pt-16 pb-10 flex flex-col items-center">
      {/* Animated glassy background banner */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-44 backdrop-blur-lg rounded-3xl shadow-lg z-0 animate-gradient"
        style={{
          background: `linear-gradient(
            270deg,
            rgba(255, 94, 98, 0.3),
            rgba(255, 195, 113, 0.3),
            rgba(94, 255, 175, 0.3),
            rgba(113, 168, 255, 0.3),
            rgba(201, 113, 255, 0.3),
            rgba(255, 113, 179, 0.3)
          )`,
          backgroundSize: "1200% 1200%",
        }}
      />
      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="flex flex-col md:flex-row items-center w-full gap-8 mt-8">
          {/* Left: Name and subtitle */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-2 text-center md:text-left tracking-tight">
              {userData.fname} {userData.lname}
            </h1>
            <p className="text-2xl md:text-1xl text-gray-600 mb-4 text-center md:text-left">
              Web & Mobile App Developer
            </p>
          </div>
          {/* Right: Profile image */}
          <div className="flex-shrink-0 mt-4 md:mt-0">
            <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-gray-100 flex items-center justify-center">
              <Image
                src={userData.profile}
                alt={`${userData.fname} ${userData.lname}'s Profile Picture`}
                width={180}
                height={180}
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
