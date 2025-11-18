"use client";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import VisionSection from "./components/VisionSection";
import HobbiesCarousel from "./components/HobbiesCarousel";
import SocialLinks from "./components/SocialLinks";
import { skills, projects, socialLinks, carouselItems } from "./data/siteData";
export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-[url('/img/bg-img.jpg')] bg-cover bg-center bg-fixed">
      <div className="flex h-full w-full flex-col bg-white/10 backdrop-blur-[20px] py-2">
        <NavBar />
        <div className="w-[95%] mx-auto flex flex-col rounded-lg bg-white/60 p4 md:px-8 md:py-6 overflow-y-auto scrollbar-hide gap-4 md:gap-8">
          <AboutSection skills={skills} />
          <hr className="h-2 border-gray-400" />
          <ProjectsSection projects={projects} />
          <VisionSection />
          <HobbiesCarousel items={carouselItems} />
          <SocialLinks links={socialLinks} />
        </div>
      </div>
    </div>
  );
}
