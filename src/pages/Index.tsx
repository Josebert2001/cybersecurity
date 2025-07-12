
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { LabsSection } from "@/components/LabsSection";
import { StudentsSection } from "@/components/StudentsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <LabsSection />
      <StudentsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Index;
