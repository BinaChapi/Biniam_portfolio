import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import ProjectList from "../../components/ProjectList";
import AboutSection from "../../components/AboutSection";
import Skills from "../../components/Skills";
import Footer from "../../components/Footer";
import CurrentlyWorkingOn from "../../components/CurrentlyWorkingOn";

import WorkWithMe from "../../components/WorkWithMe";

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <Skills />
      {/* <CurrentlyWorkingOn /> */}
      <ProjectList />
      <WorkWithMe />

      <Footer />
    </div>
  );
}
