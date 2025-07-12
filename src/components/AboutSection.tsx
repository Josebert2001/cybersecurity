
import { Shield, Target, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Students" },
    { icon: Award, number: "95%", label: "Employment" },
    { icon: Shield, number: "50+", label: "Partnerships" },
    { icon: Target, number: "10+", label: "Projects" },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Our <span className="text-cyber-gold">Department</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nigeria's premier cybersecurity education hub, combining theoretical excellence 
            with practical training.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 bg-card/50">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-cyber-gold mx-auto mb-3" />
                <div className="text-2xl font-bold text-cyber-gold mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To develop world-class cybersecurity professionals who can protect Nigeria's digital 
                infrastructure and contribute to global cybersecurity initiatives.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-lg bg-cyber-gold/10">
                  <Shield className="h-5 w-5 text-cyber-gold" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Industry Training</h4>
                  <p className="text-sm text-muted-foreground">Real-world security tools and scenarios</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-lg bg-cyber-gold/10">
                  <Target className="h-5 w-5 text-cyber-gold" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Research Excellence</h4>
                  <p className="text-sm text-muted-foreground">AI security, blockchain, and IoT protection</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-lg bg-cyber-gold/10">
                  <Award className="h-5 w-5 text-cyber-gold" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Global Recognition</h4>
                  <p className="text-sm text-muted-foreground">International partnerships and certifications</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <Card className="border-cyber-gold/20 bg-card/50">
              <CardContent className="p-6">
                <div className="font-mono text-xs text-cyber-gold space-y-1">
                  <div>$ initialize_department.sh</div>
                  <div className="text-muted-foreground">Loading protocols...</div>
                  <div>✓ Ethical hacking modules</div>
                  <div>✓ Network security framework</div>
                  <div>✓ Digital forensics lab</div>
                  <div>✓ Incident response team</div>
                  <div className="text-cyber-gold">Department ready.</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
