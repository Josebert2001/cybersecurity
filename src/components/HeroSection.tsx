import { Shield, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-gold/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-blue/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyber-gold/3 to-cyber-blue/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-12 fade-in-up">
          {/* Logo with enhanced animation */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-cyber-gold/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative p-6 rounded-full bg-gradient-to-br from-cyber-gold/10 to-cyber-blue/10 border border-cyber-gold/20 backdrop-blur-sm hover:scale-110 transition-all duration-500">
                <Shield className="h-20 w-20 text-cyber-gold drop-shadow-lg" />
              </div>
            </div>
          </div>
          
          {/* Enhanced typography */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-cyber-gold font-mono text-sm md:text-base tracking-wider uppercase opacity-90">
                Department of
              </p>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight">
                <span className="block gradient-cyber font-extrabold tracking-tight">
                  CyberSecurity
                </span>
              </h1>
              <div className="flex items-center justify-center space-x-2 text-lg md:text-xl text-muted-foreground">
                <div className="h-px w-12 bg-cyber-gold"></div>
                <p>Faculty of Computing, University of Uyo</p>
                <div className="h-px w-12 bg-cyber-gold"></div>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Training the next generation of digital defenders with cutting-edge technology, 
              world-class expertise, and hands-on experience in cybersecurity.
            </p>
          </div>
          
          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="group px-8 py-4 text-base font-semibold bg-gradient-to-r from-cyber-gold to-cyber-gold/80 hover:from-cyber-gold/90 hover:to-cyber-gold text-black border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Explore Programs
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group px-8 py-4 text-base font-semibold border-2 border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue hover:text-white transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </Button>
          </div>
          
          {/* Stats preview */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-cyber-gold mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-sm text-muted-foreground">Students</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-cyber-gold mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
              <div className="text-sm text-muted-foreground">Employment</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-cyber-gold mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-sm text-muted-foreground">Partnerships</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyber-gold/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyber-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};