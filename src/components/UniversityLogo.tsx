export const UniversityLogo = () => {
  return (
    <div className="flex flex-col items-center justify-center group">
      <div className="relative overflow-hidden rounded-xl shadow-xl">
        {/* Logo Image */}
        <img 
          src="/loginImg.png" 
          alt="University of Uyo Logo" 
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain transform group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Glowing effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* University name with enhanced typography */}
      <div className="mt-0.5 text-center transform group-hover:scale-105 transition-transform duration-500">
        <h1 className="text-sm sm:text-base md:text-lg font-semibold text-primary tracking-wider uppercase">
          University of Uyo
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 tracking-wide font-medium">
          Excellence in Education
        </p>
      </div>
    </div>
  );
};