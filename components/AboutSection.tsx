import { userData } from "../lib/utils";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto py-4">
      <h2 className="text-3xl font-bold mb-4 text-black">
        About Me
      </h2>
      {/* Glass morphism container with 4-direction shadow */}
      <div className="relative bg-white/50 backdrop-blur-lg rounded-3xl border border-white/10 
                     shadow-[0_0_15px_rgba(0,0,0,0.1),0_0_30px_rgba(0,0,0,0.08),0_0_45px_rgba(0,0,0,0.06),0_0_60px_rgba(0,0,0,0.04)]
                     hover:shadow-[0_0_20px_rgba(0,0,0,0.12),0_0_40px_rgba(0,0,0,0.1),0_0_60px_rgba(0,0,0,0.08),0_0_80px_rgba(0,0,0,0.06)]
                     transition-shadow duration-300 overflow-hidden p-8 md:p-10">
        
        {/* Multi-directional glow effect */}
        <div className="absolute inset-0 rounded-3xl 
                      shadow-[inset_0_10px_20px_rgba(255,255,255,0.3),inset_0_-10px_20px_rgba(255,255,255,0.3),
                              inset_10px_0_20px_rgba(255,255,255,0.3),inset_-10px_0_20px_rgba(255,255,255,0.3)]" />
        
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400/10 rounded-full filter blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-400/10 rounded-full filter blur-3xl" />
        {/* Content */}
        <div className="relative z-10">
          <p className="text-xl font-semibold mb-6 text-black/90">
            {userData.fname} {userData.lname}, {userData.age} years old
          </p>
          
          <div className="space-y-4 text-black/80">
            <p>
              I'm a passionate full-stack developer specializing in creating responsive web and mobile applications. 
              My work focuses on delivering seamless user experiences through modern technologies and thoughtful design.
            </p>
            <p>
              With expertise in JavaScript frameworks, cloud architecture, and UI/UX principles, I build solutions that 
              are both beautiful and functional. My projects range from e-commerce platforms to enterprise SaaS applications.
            </p>
            <p>
              I believe in clean code, performance optimization, and creating maintainable systems that stand the test of time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}