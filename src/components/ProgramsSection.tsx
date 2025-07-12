
import { GraduationCap, BookOpen, Award, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ProgramsSection = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "B.Sc. Cybersecurity",
      duration: "4 Years",
      level: "Undergraduate",
      description: "Comprehensive cybersecurity program covering network security, ethical hacking, digital forensics, and risk management.",
      highlights: ["Ethical Hacking", "Digital Forensics", "Network Security", "Incident Response"]
    },
    {
      icon: BookOpen,
      title: "Research Programs",
      duration: "Ongoing",
      level: "All Levels",
      description: "Active research in AI security, blockchain technology, IoT security, and advanced persistent threats.",
      highlights: ["AI Security", "Blockchain", "IoT Protection", "Threat Intelligence"]
    },
    {
      icon: Award,
      title: "Professional Certifications",
      duration: "Varies",
      level: "Professional",
      description: "Preparation for industry certifications like CISSP, CEH, OSCP, and CompTIA Security+.",
      highlights: ["CISSP Prep", "CEH Training", "OSCP Labs", "CompTIA Security+"]
    }
  ];

  const certifications = [
    "Certified Ethical Hacker (CEH)",
    "CompTIA Security+",
    "CISSP Preparation",
    "OSCP Training",
    "GCIH (GIAC Certified Incident Handler)",
    "CHFI (Computer Hacking Forensic Investigator)"
  ];

  return (
    <section id="programs" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Academic <span className="text-cyber-green">Programs</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Comprehensive cybersecurity education designed to meet industry demands and 
            prepare students for successful careers in information security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card key={index} className="bg-card/50 border-border hover-glow transition-all duration-300 h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <program.icon className="h-8 w-8 text-cyber-green" />
                  <Badge variant="outline" className="border-cyber-green text-cyber-green">
                    {program.level}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold">{program.title}</CardTitle>
                <div className="text-muted-foreground">{program.duration}</div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {program.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Key Areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-secondary/20 rounded-lg p-8 border border-border">
          <div className="text-center mb-8">
            <Trophy className="h-12 w-12 text-cyber-green mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Industry Certifications</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We prepare our students for the most respected cybersecurity certifications in the industry, 
              ensuring they graduate with credentials that employers value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="bg-card/30 border border-border rounded-lg p-4 text-center hover:border-cyber-green/50 transition-colors duration-300"
              >
                <div className="text-foreground font-medium">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
