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
    <div className="h-screen overflow-hidden bg-[url('/img/bg-img.jpg')] bg-cover bg-center bg-fixed">
      <div className="flex h-full flex-col bg-white/10 backdrop-blur-[20px] px-2 sm:px-6 py-2">
        <NavBar />
        <div className="flex-1 overflow-hidden px-2 sm:px-6">
          <div className="mx-auto flex h-full flex-col gap-6 rounded-lg bg-white/60 px-4 py-4 sm:px-8 sm:py-6 overflow-y-auto scrollbar-hide">
            <AboutSection skills={skills} />
            <ProjectsSection projects={projects} />
            <VisionSection />
            <HobbiesCarousel items={carouselItems} />
            <SocialLinks links={socialLinks} />
          </div>
        </div>
      </div>
    </div>
  );
}
