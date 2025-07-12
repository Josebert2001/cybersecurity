import { Shield, Target, Users, Award, CheckCircle, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Students", color: "text-cyber-gold" },
    { icon: Award, number: "95%", label: "Employment", color: "text-cyber-blue" },
    { icon: Shield, number: "50+", label: "Partnerships", color: "text-cyber-gold" },
    { icon: Target, number: "10+", label: "Projects", color: "text-cyber-blue" },
  ];

  const features = [
    {
      icon: Shield,
      title: "Industry Training",
      description: "Real-world security tools and scenarios with hands-on experience"
    },
    {
      icon: Target,
      title: "Research Excellence",
      description: "AI security, blockchain, and IoT protection research initiatives"
    },
    {
      icon: Award,
      title: "Global Recognition",
      description: "International partnerships and industry certifications"
    },
    {
      icon: Zap,
      title: "Innovation Hub",
      description: "Cutting-edge labs and state-of-the-art cybersecurity infrastructure"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyber-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-cyber-gold/10 px-4 py-2 rounded-full mb-6">
            <Shield className="h-5 w-5 text-cyber-gold" />
            <span className="text-cyber-gold font-medium text-sm">About Our Department</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Nigeria's Premier <span className="gradient-cyber">Cybersecurity Hub</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Combining theoretical excellence with practical training to develop world-class 
            cybersecurity professionals who protect Nigeria's digital infrastructure.
          </p>
        </div>

        {/* Enhanced stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="group text-center border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-gold/20 to-cyber-blue/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative p-3 rounded-full bg-gradient-to-br from-cyber-gold/10 to-cyber-blue/10 border border-cyber-gold/20 w-fit mx-auto">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced mission section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To develop world-class cybersecurity professionals who can protect Nigeria's digital 
                infrastructure and contribute to global cybersecurity initiatives through innovative 
                research and practical training.
              </p>
            </div>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-card/50 transition-all duration-300">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyber-gold/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-300"></div>
                    <div className="relative p-3 rounded-lg bg-gradient-to-br from-cyber-gold/10 to-cyber-blue/10 border border-cyber-gold/20">
                      <feature.icon className="h-6 w-6 text-cyber-gold" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2 group-hover:text-cyber-gold transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced terminal mockup */}
          <div className="lg:pl-8">
            <Card className="border-cyber-gold/20 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm overflow-hidden group hover:shadow-2xl transition-all duration-500">
              {/* Terminal header */}
              <div className="bg-gradient-to-r from-cyber-gold/20 to-cyber-blue/20 p-4 border-b border-cyber-gold/20">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-muted-foreground ml-4">department_status.sh</div>
                </div>
              </div>
              
              <CardContent className="p-6 bg-black/5">
                <div className="font-mono text-sm space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-cyber-gold">$</span>
                    <span className="text-muted-foreground">./initialize_department.sh</span>
                  </div>
                  <div className="text-muted-foreground text-xs">Loading cybersecurity protocols...</div>
                  
                  <div className="space-y-2 ml-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-green-400">Ethical hacking modules</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-green-400">Network security framework</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-green-400">Digital forensics lab</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-green-400">Incident response team</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 pt-2">
                    <span className="text-cyber-gold">✓</span>
                    <span className="text-cyber-gold font-semibold">Department ready for operation.</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-cyber-gold">$</span>
                    <span className="animate-pulse">_</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};