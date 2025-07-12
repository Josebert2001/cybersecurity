import { ChevronDown, Shield, Lock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
export const HeroSection = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-secondary/20 transition-colors duration-300">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDEwIDAgTCAwIDAgMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJoc2woMjE1IDMyJSAxNyUpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-10 dark:opacity-20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="flex justify-center space-x-4 mb-8">
            <Shield className="h-16 w-16 text-cyber-yellow animate-pulse" />
            <Lock className="h-16 w-16 text-cyber-blue animate-pulse delay-300" />
            <Globe className="h-16 w-16 text-cyber-yellow animate-pulse delay-600" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block text-foreground mb-2 text-5xl">Department of</span>
            <span className="block gradient-cyber text-6xl md:text-8xl lg:text-9xl font-extrabold">
              CyberSecurity
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            <p className="typewriter">
              Faculty of Computing, University of Uyo
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Pioneering cybersecurity education in Nigeria. Training the next generation of 
            digital defenders with cutting-edge technology and world-class expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="bg-cyber-yellow hover:bg-cyber-yellow/80 text-cyber-black px-8 py-3 text-lg font-semibold hover-glow transition-all duration-300">
              Explore Programs
            </Button>
            <Button variant="outline" size="lg" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-cyber-light px-8 py-3 text-lg font-semibold transition-all duration-300">
              Virtual Tour
            </Button>
          </div>
          
          <div className="pt-12">
            <ChevronDown className="h-8 w-8 text-cyber-yellow mx-auto animate-bounce" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>;
};