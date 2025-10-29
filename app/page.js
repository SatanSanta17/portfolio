import NavBarDesktop from "./components/NavBarDesktop";
import NavBarMobile from "./components/NavBarMobile";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import VisionSection from "./components/VisionSection";
import HobbiesCarousel from "./components/HobbiesCarousel";
import SocialLinks from "./components/SocialLinks";
import { skills, projects, socialLinks, carouselItems } from "./data/siteData";

export default function Home() {
  return (
    <>
      <NavBarDesktop />
      <NavBarMobile />
      <main
        id="home"
        className="main"
        data-bs-spy="scroll"
        data-bs-target="#navBarDesktop"
      >
        <AboutSection skills={skills} />
        <ProjectsSection projects={projects} />
        <VisionSection />
        <HobbiesCarousel items={carouselItems} />
        <SocialLinks links={socialLinks} />
      </main>
    </>
  );
}
