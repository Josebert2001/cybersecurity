import { Shield, BookOpen, GraduationCap } from "lucide-react";

export const UniversityLogo = () => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-cyber-gold/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      <div className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-cyber-gold/10 to-cyber-blue/10 rounded-full border-2 border-cyber-gold/30 backdrop-blur-sm">
        {/* University emblem design */}
        <div className="relative">
          {/* Central shield */}
          <Shield className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-cyber-gold" />
          
          {/* Academic symbols */}
          <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1">
            <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-cyber-blue" />
          </div>
          <div className="absolute -bottom-0.5 -left-0.5 sm:-bottom-1 sm:-left-1">
            <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-cyber-blue" />
          </div>
        </div>
        
        {/* University text ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full rounded-full border border-cyber-gold/20"></div>
        </div>
      </div>
      
      {/* University name with better mobile scaling */}
      <div className="mt-3 sm:mt-4 text-center">
        <div className="text-xs sm:text-sm md:text-sm font-mono text-cyber-gold tracking-wider uppercase">
          University of Uyo
        </div>
        <div className="text-xs text-muted-foreground mt-1">
          Excellence in Education
        </div>
      </div>
    </div>
  );
};