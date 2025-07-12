
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-background">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-12 fade-in-up">
          <div className="flex justify-center mb-8">
            <div className="p-4 rounded-full bg-cyber-gold/10 border border-cyber-gold/20">
              <Shield className="h-16 w-16 text-cyber-gold" />
            </div>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block text-muted-foreground mb-2 text-xl md:text-2xl font-normal">
                Department of
              </span>
              <span className="block gradient-cyber font-bold">
                CyberSecurity
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Faculty of Computing, University of Uyo
            </p>
          </div>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Training the next generation of digital defenders with cutting-edge technology and world-class expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="px-8 py-3 text-base font-medium">
              Explore Programs
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-base font-medium">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
