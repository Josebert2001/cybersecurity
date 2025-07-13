import { Card } from "@/components/ui/card";

interface StaffMember {
  name: string;
  title: string;
  image: string;
  specialization: string;
}

const staffMembers: StaffMember[] = [
  {
    name: "Prof. John Smith",
    title: "Head of Department",
    image: "/placeholder.svg",
    specialization: "Network Security"
  },
  {
    name: "Dr. Sarah Johnson",
    title: "Senior Lecturer",
    image: "/placeholder.svg",
    specialization: "Cryptography"
  },
  {
    name: "Dr. Michael Chen",
    title: "Associate Professor",
    image: "/placeholder.svg",
    specialization: "Digital Forensics"
  },
  {
    name: "Dr. Emily Brown",
    title: "Assistant Professor",
    image: "/placeholder.svg",
    specialization: "Malware Analysis"
  },
  {
    name: "Dr. David Wilson",
    title: "Lecturer",
    image: "/placeholder.svg",
    specialization: "Cloud Security"
  },
  {
    name: "Dr. Lisa Anderson",
    title: "Lecturer",
    image: "/placeholder.svg",
    specialization: "Web Security"
  }
];

export const StaffsSection = () => {
  return (
    <section id="staffs" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Faculty
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {staffMembers.map((staff, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square relative">
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{staff.name}</h3>
                <p className="text-primary font-medium mb-1">{staff.title}</p>
                <p className="text-muted-foreground">{staff.specialization}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
