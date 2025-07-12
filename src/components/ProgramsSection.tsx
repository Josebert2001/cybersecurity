
import { GraduationCap, BookOpen, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ProgramsSection = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "B.Sc. Cybersecurity",
      duration: "4 Years",
      level: "Undergraduate",
      description: "Comprehensive program covering network security, ethical hacking, and digital forensics.",
      highlights: ["Ethical Hacking", "Digital Forensics", "Network Security", "Incident Response"]
    },
    {
      icon: BookOpen,
      title: "Research Programs",
      duration: "Ongoing",
      level: "All Levels",
      description: "Active research in AI security, blockchain technology, and IoT security.",
      highlights: ["AI Security", "Blockchain", "IoT Protection", "Threat Intelligence"]
    },
    {
      icon: Award,
      title: "Certifications",
      duration: "Varies",
      level: "Professional",
      description: "Industry certification preparation including CISSP, CEH, and CompTIA Security+.",
      highlights: ["CISSP Prep", "CEH Training", "OSCP Labs", "CompTIA Security+"]
    }
  ];

  return (
    <section id="programs" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Academic <span className="text-cyber-gold">Programs</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive cybersecurity education designed to meet industry demands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="border-0 bg-card/50 h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-cyber-gold/10">
                    <program.icon className="h-6 w-6 text-cyber-gold" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {program.level}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{program.title}</CardTitle>
                <div className="text-sm text-muted-foreground">{program.duration}</div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {program.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {program.highlights.map((highlight, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs px-2 py-1">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
