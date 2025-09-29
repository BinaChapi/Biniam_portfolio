import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { userData } from "../../../lib/utils";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="py-12 px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-br from-purple-300 via-blue-200 to-pink-200 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-700"></div>

          <div className="relative bg-white/50 backdrop-blur-lg rounded-3xl border border-white/10 p-8 shadow-lg overflow-hidden">
            <p className="text-xl font-semibold text-black/90 mb-4">{userData.fname} {userData.lname}</p>
            <div className="space-y-4 text-gray-800">
              <p>
                I’m a 23-year-old Computer Science student with a deep passion for software development, especially in the field of mobile app web app development.
              </p>
              <p>
                My journey began with interest and quickly evolved into a mission to build high-performance applications that improve people’s lives. I enjoy designing and coding user-centric solutions, and I’m always exploring new technologies and frameworks.
              </p>
              <p>
                I’m currently focused on sharpen my skills in full-stack development, mobile-first design, and scalable architecture. I believe in continuous learning, clean code, and impactful digital products.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
