
import { Server, Wifi, Bug, Shield, Terminal, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const LabsSection = () => {
  const tools = [
    { name: "Kali Linux", icon: Terminal, category: "Penetration Testing" },
    { name: "Wireshark", icon: Wifi, category: "Network Analysis" },
    { name: "Metasploit", icon: Bug, category: "Exploitation Framework" },
    { name: "Nmap", icon: Server, category: "Network Discovery" },
    { name: "Burp Suite", icon: Shield, category: "Web Security" },
    { name: "Splunk", icon: Database, category: "SIEM & Analytics" },
  ];

  const labs = [
    {
      title: "Penetration Testing Lab",
      description: "State-of-the-art lab equipped with isolated networks for ethical hacking practice and vulnerability assessments.",
      tools: ["Kali Linux", "Metasploit", "Nessus", "OpenVAS"],
      capacity: "30 Workstations"
    },
    {
      title: "Digital Forensics Lab",
      description: "Advanced forensics laboratory with specialized hardware and software for digital evidence analysis and recovery.",
      tools: ["EnCase", "FTK", "Autopsy", "Volatility"],
      capacity: "20 Workstations"
    },
    {
      title: "Network Security Lab",
      description: "Comprehensive network infrastructure for testing firewalls, IDS/IPS systems, and network monitoring tools.",
      tools: ["pfSense", "Snort", "Wireshark", "Nagios"],
      capacity: "25 Workstations"
    }
  ];

  return (
    <section id="labs" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced <span className="text-cyber-green">Laboratories</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            World-class facilities equipped with industry-standard tools and technologies 
            for hands-on cybersecurity training and research.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {labs.map((lab, index) => (
            <Card key={index} className="bg-card/50 border-border hover-glow transition-all duration-300 h-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-cyber-green">{lab.title}</CardTitle>
                <div className="text-sm text-muted-foreground">{lab.capacity}</div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {lab.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Key Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {lab.tools.map((tool, idx) => (
                      <span key={idx} className="bg-cyber-green/20 text-cyber-green px-2 py-1 rounded text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cyber-green/10 to-cyber-blue/10 rounded-lg p-8 border border-cyber-green/30">
          <h3 className="text-2xl font-bold text-center mb-8">
            Industry-Standard <span className="text-cyber-green">Tools & Technologies</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="text-center group">
                <div className="bg-card/50 border border-border rounded-lg p-6 hover:border-cyber-green/50 transition-all duration-300 hover:scale-105">
                  <tool.icon className="h-8 w-8 text-cyber-green mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-foreground text-sm mb-1">{tool.name}</h4>
                  <p className="text-xs text-muted-foreground">{tool.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-card/30 border border-border rounded-lg p-8 max-w-3xl mx-auto">
            <div className="font-mono text-terminal-green text-sm space-y-2 text-left">
              <div>$ nmap -sS -O target_network</div>
              <div>Starting Nmap scan...</div>
              <div>Host is up (0.012s latency)</div>
              <div>PORT     STATE    SERVICE</div>
              <div>22/tcp   open     ssh</div>
              <div>80/tcp   open     http</div>
              <div>443/tcp  open     https</div>
              <div className="text-cyber-green">Scan complete. Ready for penetration testing.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
