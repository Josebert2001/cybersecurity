import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Admissions", href: "#" },
    { label: "Research", href: "#projects" },
    { label: "Student Life", href: "#students" },
    { label: "Alumni", href: "#" }
  ];

  const resources = [
    { label: "Academic Calendar", href: "#" },
    { label: "Course Catalog", href: "#" },
    { label: "Library Resources", href: "#" },
    { label: "Career Services", href: "#" },
    { label: "IT Support", href: "#" },
    { label: "Student Portal", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" }
  ];

  return (
    <footer id="contact" className="relative bg-gradient-to-br from-card via-background to-secondary/20 border-t border-border/50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-20"></div>
      <div className="absolute top-0 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-18 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-14 md:mb-16">
          {/* Department Info */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-500"></div>
                <div className="relative p-2 sm:p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 backdrop-blur-sm">
                  <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                </div>
              </div>
              <div className="text-xl sm:text-2xl font-bold">
                <span className="text-primary">Cyber</span>
                <span className="text-foreground">Security</span>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md text-base sm:text-lg">
              Department of Cybersecurity, Faculty of Computing, University of Uyo. 
              Leading cybersecurity education and research in Nigeria.
            </p>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div className="text-muted-foreground text-sm sm:text-base">
                  <div className="font-medium text-foreground">Faculty of Computing</div>
                  <div>University of Uyo</div>
                  <div>Akwa Ibom State, Nigeria</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div className="text-muted-foreground font-medium text-sm sm:text-base">+234 (0) 85 200 2345</div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div className="text-muted-foreground font-medium text-sm sm:text-base break-all">cybersecurity@uniuyo.edu.ng</div>
              </div>
            </div>
            
            <div className="flex space-x-2 sm:space-x-3 pt-2 sm:pt-4">
              {socialLinks.map((social, index) => (
                <Button 
                  key={index}
                  size="icon" 
                  variant="ghost" 
                  className="h-8 w-8 sm:h-10 sm:w-10 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center space-x-2">
              <span>Quick Links</span>
              <div className="w-6 sm:w-8 h-0.5 bg-primary rounded-full"></div>
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="group flex items-center space-x-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 text-sm sm:text-base"
                  >
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center space-x-2">
              <span>Resources</span>
              <div className="w-6 sm:w-8 h-0.5 bg-primary rounded-full"></div>
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href} 
                    className="group flex items-center space-x-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 text-sm sm:text-base"
                  >
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                    <span>{resource.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section with better mobile layout */}
        <div className="border-t border-border/50 pt-6 sm:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-muted-foreground text-xs sm:text-sm text-center lg:text-left">
              © 2024 Department of Cybersecurity, University of Uyo. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm">
              {["Privacy Policy", "Terms of Service", "Accessibility"].map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};