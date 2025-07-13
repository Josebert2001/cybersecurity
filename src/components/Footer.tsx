
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
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Department Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-500"></div>
                <div className="relative p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 backdrop-blur-sm">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
              </div>
              <div className="text-2xl font-bold">
                <span className="text-primary">Cyber</span>
                <span className="text-foreground">Security</span>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md text-lg">
              Department of Cybersecurity, Faculty of Computing, University of Uyo. 
              Leading cybersecurity education and research in Nigeria.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                </div>
                <div className="text-muted-foreground">
                  <div className="font-medium text-foreground">Faculty of Computing</div>
                  <div>University of Uyo</div>
                  <div>Akwa Ibom State, Nigeria</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                </div>
                <div className="text-muted-foreground font-medium">+234 (0) 85 200 2345</div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                </div>
                <div className="text-muted-foreground font-medium">cybersecurity@uniuyo.edu.ng</div>
              </div>
            </div>
            
            <div className="flex space-x-3 pt-4">
              {socialLinks.map((social, index) => (
                <Button 
                  key={index}
                  size="icon" 
                  variant="ghost" 
                  className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground flex items-center space-x-2">
              <span>Quick Links</span>
              <div className="w-8 h-0.5 bg-primary rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="group flex items-center space-x-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                  >
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground flex items-center space-x-2">
              <span>Resources</span>
              <div className="w-8 h-0.5 bg-primary rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href} 
                    className="group flex items-center space-x-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                  >
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{resource.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 Department of Cybersecurity, University of Uyo. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end space-x-8 text-sm">
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
