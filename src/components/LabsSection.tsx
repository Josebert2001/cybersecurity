
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
    <section id="labs" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Advanced <span className="text-cyber-gold">Laboratories</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Industry-standard facilities for hands-on cybersecurity training and research.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {labs.map((lab, index) => (
            <Card key={index} className="border-0 bg-card/50 h-full">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-cyber-gold">{lab.title}</CardTitle>
                <div className="text-sm text-muted-foreground">{lab.capacity}</div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
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

        <div className="space-y-8">
          <h3 className="text-xl font-bold text-center">
            Industry-Standard <span className="text-cyber-gold">Tools</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <Card key={index} className="border-0 bg-card/50 text-center p-4">
                <tool.icon className="h-6 w-6 text-cyber-gold mx-auto mb-2" />
                <h4 className="text-xs font-medium">{tool.name}</h4>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
