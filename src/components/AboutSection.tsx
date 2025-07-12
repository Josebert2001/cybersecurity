
import { Shield, Target, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Students Enrolled" },
    { icon: Award, number: "95%", label: "Graduate Employment" },
    { icon: Shield, number: "50+", label: "Industry Partnerships" },
    { icon: Target, number: "10+", label: "Research Projects" },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Our <span className="text-cyber-green">Department</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Established as Nigeria's premier cybersecurity education hub, we combine theoretical 
            excellence with hands-on practical training to produce world-class cybersecurity professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card/50 border-border hover-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-12 w-12 text-cyber-green mx-auto mb-4" />
                <div className="text-3xl font-bold text-cyber-green mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To develop world-class cybersecurity professionals who can protect Nigeria's digital 
              infrastructure and contribute to global cybersecurity initiatives. We focus on practical 
              skills, ethical hacking, and innovative security solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-cyber-green mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Industry-Ready Training</h4>
                  <p className="text-muted-foreground">Hands-on experience with real-world security tools and scenarios</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Target className="h-6 w-6 text-cyber-green mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Research Excellence</h4>
                  <p className="text-muted-foreground">Cutting-edge research in AI security, blockchain, and IoT protection</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="h-6 w-6 text-cyber-green mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Global Recognition</h4>
                  <p className="text-muted-foreground">Partnerships with international cybersecurity organizations</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20 rounded-lg p-8 backdrop-blur-sm border border-cyber-green/30">
              <div className="font-mono text-terminal-green text-sm space-y-2">
                <div>$ sudo ./initialize_department.sh</div>
                <div>Loading cybersecurity protocols...</div>
                <div>✓ Ethical hacking modules loaded</div>
                <div>✓ Network security framework active</div>
                <div>✓ Digital forensics lab online</div>
                <div>✓ Incident response team ready</div>
                <div className="text-cyber-green">Department initialized successfully!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
