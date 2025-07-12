import { GraduationCap, BookOpen, Award, Clock, Users, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const ProgramsSection = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "B.Sc. Cybersecurity",
      duration: "4 Years",
      level: "Undergraduate",
      students: "300+",
      rating: "4.9",
      description: "Comprehensive program covering network security, ethical hacking, digital forensics, and incident response with hands-on laboratory experience.",
      highlights: ["Ethical Hacking", "Digital Forensics", "Network Security", "Incident Response"],
      color: "from-cyber-gold/20 to-cyber-gold/5"
    },
    {
      icon: BookOpen,
      title: "Research Programs",
      duration: "Ongoing",
      level: "All Levels",
      students: "150+",
      rating: "4.8",
      description: "Active research in AI security, blockchain technology, IoT security, and emerging cybersecurity threats with industry partnerships.",
      highlights: ["AI Security", "Blockchain", "IoT Protection", "Threat Intelligence"],
      color: "from-cyber-blue/20 to-cyber-blue/5"
    },
    {
      icon: Award,
      title: "Certifications",
      duration: "Varies",
      level: "Professional",
      students: "200+",
      rating: "4.9",
      description: "Industry certification preparation including CISSP, CEH, OSCP, and CompTIA Security+ with expert-led training sessions.",
      highlights: ["CISSP Prep", "CEH Training", "OSCP Labs", "CompTIA Security+"],
      color: "from-purple-500/20 to-purple-500/5"
    }
  ];

  return (
    <section id="programs" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyber-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyber-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-cyber-blue/10 px-4 py-2 rounded-full mb-6">
            <GraduationCap className="h-5 w-5 text-cyber-blue" />
            <span className="text-cyber-blue font-medium text-sm">Academic Excellence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Academic <span className="gradient-cyber">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive cybersecurity education designed to meet industry demands 
            and prepare students for successful careers in digital security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="group border-0 bg-card/50 backdrop-blur-sm h-full hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
              {/* Card header with gradient */}
              <div className={`bg-gradient-to-br ${program.color} p-6 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                      <program.icon className="h-8 w-8 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xs border-white/30 text-white bg-white/10">
                      {program.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-white mb-2">{program.title}</CardTitle>
                  
                  {/* Program stats */}
                  <div className="flex items-center space-x-4 text-white/80 text-sm">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{program.students}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span>{program.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  {program.description}
                </p>
                
                {/* Highlights */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm text-foreground">Key Areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.highlights.map((highlight, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-xs px-3 py-1 bg-muted/50 hover:bg-muted transition-colors duration-200"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <Button 
                    className="w-full mt-6 bg-gradient-to-r from-cyber-gold to-cyber-gold/80 hover:from-cyber-gold/90 hover:to-cyber-gold text-black border-0 font-semibold group-hover:shadow-lg transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="px-8 py-3 bg-gradient-to-r from-cyber-blue to-cyber-blue/80 hover:from-cyber-blue/90 hover:to-cyber-blue text-white border-0 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Apply Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-3 border-2 border-cyber-gold/50 text-cyber-gold hover:bg-cyber-gold hover:text-black transition-all duration-300"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};