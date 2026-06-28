import { userData } from "../lib/utils";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">About Me</h2>
      <div className="relative bg-white/50 backdrop-blur-lg rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden p-8 md:p-10">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl"></div>
        
        <div className="relative z-10 space-y-6">
          <p className="text-lg text-gray-700">
            Hi, I'm {userData.fname} {userData.lname}, a {userData.age}-year-old full-stack developer based in {userData.location} with a passion for building modern, user-friendly applications.
          </p>
          <p className="text-lg text-gray-700">
            My journey started with curiosity about how websites and apps work, and quickly evolved into a deep love for coding. I enjoy solving real-world problems and turning ideas into functional products.
          </p>
          <p className="text-lg text-gray-700">
            I specialize in React, Next.js, and React Native, with experience in both web and mobile development. I'm always eager to learn new technologies and constantly improve my skills.
          </p>
        </div>
      </div>
    </section>
  );
}
