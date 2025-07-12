
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
    },
    {
      title: "AI-Powered Malware Detection",
      description: "Machine learning system for real-time malware detection using behavioral analysis and neural network classification.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Docker"],
      type: "Research Project",
      team: "4 Students",
      status: "Ongoing",
      github: "#",
      demo: "#"
    },
    {
      title: "Blockchain Security Framework",
      description: "Comprehensive security framework for blockchain applications, including smart contract auditing tools and vulnerability scanners.",
      technologies: ["Solidity", "Web3.js", "Truffle", "Mythril"],
      type: "Final Year Project",
      team: "5 Students",
      status: "Completed",
      github: "#",
      demo: "#"
    },
    {
      title: "IoT Security Monitor",
      description: "Real-time monitoring system for IoT device security, featuring anomaly detection and automated threat response capabilities.",
      technologies: ["Python", "MQTT", "InfluxDB", "Grafana"],
      type: "Research Project",
      team: "3 Students",
      status: "Ongoing",
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
    <section id="projects" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Student <span className="text-cyber-green">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Innovative cybersecurity projects developed by our students, showcasing practical 
            skills and cutting-edge research in information security.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card/50 border-border hover-glow transition-all duration-300 h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold mb-2">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline" className="border-cyber-green text-cyber-green">
                        {project.type}
                      </Badge>
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <Code className="h-6 w-6 text-cyber-green flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-cyber-green/20 text-cyber-green px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{project.team}</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-white">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                      <Button size="sm" variant="outline" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-white">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cyber-green/10 to-cyber-blue/10 rounded-lg p-8 border border-cyber-green/30">
          <div className="text-center mb-8">
            <Trophy className="h-12 w-12 text-cyber-green mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Competition Achievements</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our students consistently excel in national and international cybersecurity competitions, 
              showcasing their skills against the best in the field.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {competitions.map((comp, index) => (
              <div key={index} className="bg-card/30 border border-border rounded-lg p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-foreground">{comp.name}</h4>
                  <p className="text-sm text-muted-foreground">{comp.year}</p>
                </div>
                <div className="text-right">
                  <div className="text-cyber-green font-bold">{comp.position}</div>
                  <Zap className="h-4 w-4 text-cyber-green ml-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
