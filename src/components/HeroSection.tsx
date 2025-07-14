import { Shield, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UniversityLogo } from "./UniversityLogo";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden pt-14 sm:pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-gradient-to-r from-primary/3 to-secondary/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12 fade-in-up">
          {/* University Logo */}
          <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 mb-6 md:mb-8">
            <UniversityLogo />
          </div>
          
          {/* Enhanced typography with better mobile scaling */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <p className="text-cyber-gold font-mono text-xs sm:text-sm md:text-base tracking-wider uppercase opacity-90">
                DEPARTMENT OF
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold leading-tight">
                <span className="block gradient-cyber font-extrabold tracking-tight">
                  CyberSecurity
                </span>
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground">
                <div className="h-px w-8 sm:w-12 bg-cyber-gold"></div>
                <p className="text-center px-2">Faculty of Computing, University of Uyo</p>
                <div className="h-px w-8 sm:w-12 bg-cyber-gold"></div>
              </div>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Training the next generation of digital defenders with cutting-edge technology, 
              world-class expertise, and hands-on experience in cybersecurity.
            </p>
          </div>
          
          {/* Enhanced CTA buttons with better mobile layout */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 md:pt-8 px-4 sm:px-0">
            <Button size="lg" className="w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold bg-gradient-to-r from-cyber-gold to-cyber-gold/80 hover:from-cyber-gold/90 hover:to-cyber-gold text-black border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Explore Programs
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button variant="outline" size="lg" className="w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold border-2 border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue hover:text-white transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </Button>
          </div>
          
          {/* Stats preview with improved mobile layout */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-12 md:pt-16 max-w-2xl mx-auto px-4 sm:px-0">
            <div className="text-center group">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-cyber-gold mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Students</div>
            </div>
            <div className="text-center group">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-cyber-gold mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Employment</div>
            </div>
            <div className="text-center group">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-cyber-gold mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Partnerships</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - hidden on very small screens */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-cyber-gold/50 rounded-full flex justify-center">
          <div className="w-1 h-2 md:h-3 bg-cyber-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};