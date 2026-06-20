// Local Imports
import AwardsSection from "@/components/awards";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/about";
import NavbarSection from "@/components/navbar";
import ScrollToggleButton from "@/components/scroll-btn";
import TalksSection from "@/components/talks";
import ServicesSection from "@/components/services";
import CurrentFocusSection from "@/components/current-focus";
import ProjectsSection from "@/components/projects";
import ExperienceSection from "@/components/experience";
import BlogsSection from "@/components/blogs";

export default function HomePage() {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <TalksSection />
      <BlogsSection />
      <AwardsSection />
      <CurrentFocusSection />
      <FooterSection />
      <ScrollToggleButton />
    </>
  );
}
