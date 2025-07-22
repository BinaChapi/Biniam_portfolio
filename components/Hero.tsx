"use client";
import Image from "next/image";
import { userData } from "../lib/utils";

export default function Hero() {
  return (
    <section className="relative max-w-4xl mx-auto px-4 pt-16 pb-10 flex flex-col items-center">
      {/* Glassy background banner */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-44 bg-amber-200/50 backdrop-blur-lg rounded-3xl shadow-lg z-0" />
      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="flex flex-col md:flex-row items-center w-full gap-8 mt-8">
          {/* Left: Name and subtitle */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 text-center md:text-left tracking-tight">
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
    </section>
  );
}