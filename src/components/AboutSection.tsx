import { Shield, Target, Users, Award, CheckCircle, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  const stats = [
    { icon: Users, number: "180+", label: "Students", color: "text-cyber-gold" },
    { icon: Target, number: "1", label: "Project", color: "text-cyber-blue" },
  ];

  const features = [
    {
      icon: Shield,
      title: "Threat Prevention",
      description: "Equipping students with knowledge and skills to minimize and prevent cybersecurity threats"
    },
    {
      icon: Target,
      title: "Digital Forensics",
      description: "Training in gathering, analyzing, and presenting cybersecurity evidence professionally"
    },
    {
      icon: Award,
      title: "Business Impact",
      description: "Understanding cybercrime's impact on business and implementing security practices"
    },
    {
      icon: Zap,
      title: "Global Perspective",
      description: "Safeguarding business transactions and cyber operations nationally and globally"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-cyber-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-cyber-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced header with better mobile spacing */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-18 md:mb-20">
          <div className="inline-flex items-center space-x-2 bg-cyber-gold/10 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
            <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-cyber-gold" />
            <span className="text-cyber-gold font-medium text-xs sm:text-sm">Department of Cybersecurity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            Securing the <span className="gradient-cyber">Digital Future</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4 sm:px-0">
            Recent developments in computing, network technologies, internet, and cloud technologies have generated 
            the need for reliable and secure exchange of digital information vital to human activities.
          </p>
        </div>

        {/* Enhanced stats grid with better mobile layout */}
        <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto mb-16 sm:mb-18 md:mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="group text-center border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="relative mb-3 sm:mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-gold/20 to-cyber-blue/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative p-2 sm:p-3 rounded-full bg-gradient-to-br from-cyber-gold/10 to-cyber-blue/10 border border-cyber-gold/20 w-fit mx-auto">
                    <stat.icon className={`h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 ${stat.color}`} />
                  </div>
                </div>
                <div className={`text-xl sm:text-2xl md:text-3xl font-bold ${stat.color} mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-12 sm:space-y-16">
          {/* Philosophy section */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 sm:space-y-6 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Philosophy</h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Our philosophy is to build capacity and develop human capital in the field of cybersecurity, 
                to safeguard business transactions, corporate assets, critical infrastructure and all cyber 
                operations in cyberspace, nationally and globally.
              </p>
            </div>
          </div>
            
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="group flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-card/50 transition-all duration-300">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-cyber-gold/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-300"></div>
                  <div className="relative p-2 sm:p-3 rounded-lg bg-gradient-to-br from-cyber-gold/10 to-cyber-blue/10 border border-cyber-gold/20">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-cyber-gold" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm sm:text-base font-semibold mb-1">{feature.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};