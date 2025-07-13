import { useState, useEffect } from "react";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
    { href: "#staffs", label: "Staffs" },
    { href: "#courses", label: "Courses" },
    { href: "#students", label: "Students" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 py-0">
          {/* Logo with enhanced design */}
          <div className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-300"></div>
              <div className="relative p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
            </div>
            <div className="text-lg sm:text-xl font-bold">
              <span className="text-primary">Cyber</span>
              <span className="text-foreground">Security</span>
            </div>
          </div>

          {/* Desktop Navigation with enhanced styling */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-baseline space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative group text-muted-foreground hover:text-primary px-3 lg:px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-primary/10"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
                </a>
              ))}
            </div>
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button with enhanced design */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="relative text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 h-8 w-8 sm:h-10 sm:w-10"
            >
              <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                <Menu className={`absolute inset-0 transition-all duration-300 ${
                  isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                }`} />
                <X className={`absolute inset-0 transition-all duration-300 ${
                  isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                }`} />
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <div className={`md:hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="px-4 py-2 space-y-1 bg-background/95 backdrop-blur-lg border-t border-border">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-muted-foreground hover:text-primary px-3 sm:px-4 py-2 sm:py-3 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-primary/10 transform hover:translate-x-2"
              onClick={() => setIsOpen(false)}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};