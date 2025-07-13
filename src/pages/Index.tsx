
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { StaffsSection } from "@/components/StaffsSection";
import { CoursesSection } from "@/components/CoursesSection";
import { StudentsSection } from "@/components/StudentsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <StaffsSection />
      <CoursesSection />
      <StudentsSection />
      <Footer />
    </div>
  );
};

export default Index;
