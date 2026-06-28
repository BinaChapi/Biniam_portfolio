import Link from "next/link";
import React from "react";

function WorkWithMe() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="bg-gradient-to-r from-black/90 to-black/60 text-white rounded-3xl p-10 text-center shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Looking for a React or MERN Developer?
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Let's build something amazing together! I'm passionate about creating
          clean, efficient, and user-friendly applications.
        </p>
        <Link
          href="/contact"
          className="inline-block px-10 py-4 bg-white text-gray-900 font-semibold text-base rounded-full hover:bg-black hover:text-white transition duration-300 shadow-lg"
        >
          Get in Touch →
        </Link>
      </div>
    </div>
  );
}

export default WorkWithMe;
