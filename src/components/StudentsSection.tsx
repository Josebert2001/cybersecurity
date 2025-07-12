
import { User, Award, TrendingUp, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const StudentsSection = () => {
  const achievements = [
    {
      title: "TryHackMe Rankings",
      description: "Multiple students in top 1% globally",
      icon: TrendingUp,
      metric: "Top 1%"
    },
    {
      title: "CTF Competitions",
      description: "Regular participation in international events",
      icon: Award,
      metric: "15+ CTFs"
    },
    {
      title: "Industry Internships",
      description: "Partnerships with leading tech companies",
      icon: Globe,
      metric: "50+ Placements"
    }
  ];

  const topStudents = [
    {
      name: "Alex Johnson",
      level: "400 Level",
      specialization: "Penetration Testing",
      achievement: "TryHackMe Top 500 Global",
      initials: "AJ"
    },
    {
      name: "Sarah Williams",
      level: "300 Level", 
      specialization: "Digital Forensics",
      achievement: "CTF Champion 2024",
      initials: "SW"
    },
    {
      name: "Michael Chen",
      level: "400 Level",
      specialization: "Malware Analysis",
      achievement: "Security Research Published",
      initials: "MC"
    },
    {
      name: "Fatima Ahmed",
      level: "200 Level",
      specialization: "Network Security",
      achievement: "Cisco Cybersecurity Scholarship",
      initials: "FA"
    }
  ];

  return (
    <section id="students" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-cyber-green">Students</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Meet the brilliant minds shaping the future of cybersecurity. Our students consistently 
            excel in competitions, internships, and research projects worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-card/50 border-border hover-glow transition-all duration-300 text-center">
              <CardHeader>
                <achievement.icon className="h-12 w-12 text-cyber-green mx-auto mb-4" />
                <CardTitle className="text-xl font-bold">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-cyber-green mb-2">{achievement.metric}</div>
                <p className="text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-secondary/20 rounded-lg p-8 border border-border">
          <h3 className="text-2xl font-bold text-center mb-8">
            Featured <span className="text-cyber-green">Student Profiles</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topStudents.map((student, index) => (
              <Card key={index} className="bg-card/50 border-border hover-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12 border-2 border-cyber-green">
                      <AvatarFallback className="bg-cyber-green/20 text-cyber-green font-bold">
                        {student.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground text-lg">{student.name}</h4>
                      <p className="text-muted-foreground text-sm mb-1">{student.level} • {student.specialization}</p>
                      <div className="bg-cyber-green/20 text-cyber-green px-2 py-1 rounded text-xs inline-block">
                        {student.achievement}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-cyber-green/10 to-cyber-blue/10 rounded-lg p-8 border border-cyber-green/30">
          <div className="text-center">
            <User className="h-12 w-12 text-cyber-green mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Join Our Community</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Become part of Nigeria's most dynamic cybersecurity community. Network with peers, 
              participate in competitions, and build lasting professional relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
