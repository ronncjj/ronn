import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import HeroSection from "@/components/sections/hero-section"
import SkillsSection from "@/components/sections/skills-section"
import WorkExperienceSection from "@/components/sections/work-experience-section"
import EducationSection from "@/components/sections/education-section"
import ProjectsSection from "@/components/sections/projects-section"
import ContactSection from "@/components/sections/contact-section"
import CustomCursor from "@/components/custom-cursor"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <CustomCursor />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SkillsSection />
        <WorkExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

