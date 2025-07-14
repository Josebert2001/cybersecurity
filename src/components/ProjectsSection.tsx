import { Github, ExternalLink, Code, Trophy, Users, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "SecureBank Mobile App",
      description: "A comprehensive mobile banking security assessment project demonstrating advanced penetration testing techniques and secure development practices.",
      technologies: ["React Native", "Node.js", "OWASP", "Burp Suite"],
      type: "Security Assessment",
      team: "6 Students",
      status: "Completed",
      github: "#",
      demo: "#"
    }
  ];

  const competitions = [
    { name: "Nigerian Cyber Security Challenge", position: "2nd Place", year: "2024" },
    { name: "African CTF Championship", position: "Top 10", year: "2024" },
    { name: "TryHackMe Global Rankings", position: "Top 1%", year: "2024" },
    { name: "PicoCTF International", position: "Regional Winners", year: "2023" }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Student <span className="text-cyber-green">Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4 sm:px-0">
            Innovative cybersecurity projects developed by our students, showcasing practical 
            skills and cutting-edge research in information security.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-14 md:mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card/50 border-border hover-glow transition-all duration-300 h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg sm:text-xl font-bold mb-2 pr-2">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline" className="border-cyber-green text-cyber-green text-xs">
                        {project.type}
                      </Badge>
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="text-xs">
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <Code className="h-5 w-5 sm:h-6 sm:w-6 text-cyber-green flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-cyber-green/20 text-cyber-green px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4 flex-shrink-0" />
                      <span>{project.team}</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-white text-xs flex-1 sm:flex-none">
                        <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        Code
                      </Button>
                      <Button size="sm" variant="outline" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-white text-xs flex-1 sm:flex-none">
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cyber-green/10 to-cyber-blue/10 rounded-lg p-6 sm:p-8 border border-cyber-green/30">
          <div className="text-center mb-6 sm:mb-8">
            <Trophy className="h-10 w-10 sm:h-12 sm:w-12 text-cyber-green mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Competition Achievements</h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Our students consistently excel in national and international cybersecurity competitions, 
              showcasing their skills against the best in the field.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {competitions.map((comp, index) => (
              <div key={index} className="bg-card/30 border border-border rounded-lg p-3 sm:p-4 flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-foreground text-sm sm:text-base truncate">{comp.name}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{comp.year}</p>
                </div>
                <div className="text-right flex-shrink-0 ml-2">
                  <div className="text-cyber-green font-bold text-sm sm:text-base">{comp.position}</div>
                  <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-cyber-green ml-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};