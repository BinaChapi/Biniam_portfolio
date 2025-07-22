import { userData } from "../lib/utils";

export default function Footer() {
  return (
    <footer className=" mt-10 py-8 text-gray-900 text-sm bg-white">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} {userData.fname} {userData.lname}. All rights reserved.</p>

        <div className="flex gap-4">
          <a
            href={userData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            GitHub
          </a>
          <a
            href={userData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            LinkedIn
          </a>
          <a
            href={userData.email}
            className="hover:text-gray-900 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
