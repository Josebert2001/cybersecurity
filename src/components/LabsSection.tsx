import { Server, Wifi, Bug, Shield, Terminal, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const LabsSection = () => {
  const labs = [
    {
      title: "Penetration Testing Lab",
      description: "Isolated networks for ethical hacking practice and vulnerability assessments.",
      tools: ["Kali Linux", "Metasploit", "Nessus", "OpenVAS"],
      capacity: "30 Workstations"
    },
    {
      title: "Digital Forensics Lab",
      description: "Specialized hardware and software for digital evidence analysis.",
      tools: ["EnCase", "FTK", "Autopsy", "Volatility"],
      capacity: "20 Workstations"
    },
    {
      title: "Network Security Lab",
      description: "Infrastructure for testing firewalls, IDS/IPS systems, and monitoring tools.",
      tools: ["pfSense", "Snort", "Wireshark", "Nagios"],
      capacity: "25 Workstations"
    }
  ];

  const tools = [
    { name: "Kali Linux", icon: Terminal },
    { name: "Wireshark", icon: Wifi },
    { name: "Metasploit", icon: Bug },
    { name: "Nmap", icon: Server },
    { name: "Burp Suite", icon: Shield },
    { name: "Splunk", icon: Database },
  ];

  return (
    <section id="labs" className="py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Advanced <span className="text-cyber-gold">Laboratories</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-4 sm:px-0">
            Industry-standard facilities for hands-on cybersecurity training and research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-14 md:mb-16">
          {labs.map((lab, index) => (
            <Card key={index} className="border-0 bg-card/50 h-full">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-base sm:text-lg text-cyber-gold">{lab.title}</CardTitle>
                <div className="text-xs sm:text-sm text-muted-foreground">{lab.capacity}</div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  {lab.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Key Tools:</h4>
                  <div className="flex flex-wrap gap-1">
                    {lab.tools.map((tool, idx) => (
                      <span key={idx} className="bg-cyber-gold/10 text-cyber-gold px-2 py-1 rounded text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6 sm:space-y-8">
          <h3 className="text-lg sm:text-xl font-bold text-center">
            Industry-Standard <span className="text-cyber-gold">Tools</span>
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {tools.map((tool, index) => (
              <Card key={index} className="border-0 bg-card/50 text-center p-3 sm:p-4">
                <tool.icon className="h-5 w-5 sm:h-6 sm:w-6 text-cyber-gold mx-auto mb-2" />
                <h4 className="text-xs font-medium">{tool.name}</h4>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};