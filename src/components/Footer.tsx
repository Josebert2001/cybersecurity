
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Programs", href: "#programs" },
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

  return (
    <footer id="contact" className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Department Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-cyber-green" />
              <div className="text-xl font-bold">
                <span className="text-cyber-green">Cyber</span>Security
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Department of Cybersecurity, Faculty of Computing, University of Uyo. 
              Leading cybersecurity education in Nigeria.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-cyber-green">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-cyber-green">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-cyber-green">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-cyber-green">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-cyber-green transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href} 
                    className="text-muted-foreground hover:text-cyber-green transition-colors duration-200"
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-cyber-green mt-1 flex-shrink-0" />
                <div className="text-muted-foreground">
                  Faculty of Computing<br />
                  University of Uyo<br />
                  Akwa Ibom State, Nigeria
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cyber-green flex-shrink-0" />
                <div className="text-muted-foreground">+234 (0) 85 200 2345</div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyber-green flex-shrink-0" />
                <div className="text-muted-foreground">cybersecurity@uniuyo.edu.ng</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground text-sm">
              © 2024 Department of Cybersecurity, University of Uyo. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground mt-4 md:mt-0">
              <a href="#" className="hover:text-cyber-green transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-cyber-green transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-cyber-green transition-colors duration-200">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
