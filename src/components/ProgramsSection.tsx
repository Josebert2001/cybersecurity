import { GraduationCap, BookOpen, Award, Clock, Users, Star, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const ProgramsSection = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "4 Year B.Sc. Program",
      duration: "4 Years",
      level: "Undergraduate",
      requirements: "UTME + O'Level",
      description: "For UTME candidates with five SSC-credit passes including English Language, Mathematics, Physics and other relevant Science subjects in not more than two sittings.",
      highlights: [
        "English Language",
        "Mathematics",
        "Physics",
        "Science Subjects"
      ],
      color: "from-cyber-gold/20 to-cyber-gold/5"
    },
    {
      icon: BookOpen,
      title: "3 Year B.Sc. Program",
      duration: "3 Years",
      level: "Direct Entry",
      requirements: "Direct Entry",
      description: "For candidates with University/National Diploma or NCE with five SSC credit passes in relevant Science subjects including English Language, Mathematics, Physics.",
      highlights: [
        "University Diploma",
        "National Diploma",
        "NCE",
        "O'Level Credits"
      ],
      color: "from-cyber-blue/20 to-cyber-blue/5"
    }
  ];

  const objectives = [
    "Detect and prevent cyber-fraud through foundational knowledge and skills",
    "Analyze cybersecurity threats and develop detective codes",
    "Master cryptography and digital forensic techniques",
    "Develop critical thinking for cyber intelligence security",
    "Prepare for cybersecurity careers and self-employment"
  ];

  return (
    <section id="programs" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background"></div>
      <div className="absolute top-1/4 right-0 w-48 h-48 md:w-96 md:h-96 bg-cyber-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-48 h-48 md:w-96 md:h-96 bg-cyber-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced header with better mobile spacing */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-18 md:mb-20">
          <div className="inline-flex items-center space-x-2 bg-cyber-blue/10 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
            <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-cyber-blue" />
            <span className="text-cyber-blue font-medium text-xs sm:text-sm">Program Objectives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            Academic <span className="gradient-cyber">Programs</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4 sm:px-0">
            Our program equips students with comprehensive knowledge and skills to address 
            the growing challenges in cybersecurity.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {programs.map((program, index) => (
            <Card key={index} className="group border-0 bg-card/50 backdrop-blur-sm h-full hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
              {/* Card header with gradient */}
              <div className={`bg-gradient-to-br ${program.color} p-4 sm:p-6 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-white/5 rounded-full -translate-y-8 sm:-translate-y-16 translate-x-8 sm:translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                      <program.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xs border-white/30 text-white bg-white/10">
                      {program.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg sm:text-xl md:text-2xl text-white mb-2">{program.title}</CardTitle>
                  
                  {/* Program stats */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-white/80 text-xs sm:text-sm">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{program.requirements}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card content */}
              <CardContent className="p-4 sm:p-6">
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  {program.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {program.highlights.map((highlight, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Objectives Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Program Objectives</h3>
          <div className="grid gap-4">
            {objectives.map((objective, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm">
                <CheckCircle className="h-5 w-5 text-cyber-gold flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-muted-foreground">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};