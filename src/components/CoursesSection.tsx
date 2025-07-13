import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Course {
  code: string;
  title: string;
  level: string;
  semester: string;
  units: number;
  description: string;
}

const courses: Course[] = [
  {
    code: "CSC 201",
    title: "Introduction to Cybersecurity",
    level: "200",
    semester: "First",
    units: 3,
    description: "Fundamentals of cybersecurity, basic security concepts, and introduction to cyber threats."
  },
  {
    code: "CSC 202",
    title: "Network Security",
    level: "200",
    semester: "Second",
    units: 3,
    description: "Network protocols, security measures, and defense mechanisms against network attacks."
  },
  {
    code: "CSC 301",
    title: "Cryptography",
    level: "300",
    semester: "First",
    units: 3,
    description: "Principles of cryptography, encryption algorithms, and cryptographic protocols."
  },
  {
    code: "CSC 302",
    title: "Digital Forensics",
    level: "300",
    semester: "Second",
    units: 3,
    description: "Digital evidence collection, analysis techniques, and forensic investigation procedures."
  },
  {
    code: "CSC 401",
    title: "Malware Analysis",
    level: "400",
    semester: "First",
    units: 3,
    description: "Analysis of malicious software, reverse engineering, and malware detection techniques."
  },
  {
    code: "CSC 402",
    title: "Ethical Hacking",
    level: "400",
    semester: "Second",
    units: 3,
    description: "Penetration testing, vulnerability assessment, and ethical hacking methodologies."
  }
];

export const CoursesSection = () => {
  return (
    <section id="courses" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Courses
        </h2>

        <div className="grid gap-6 max-w-6xl mx-auto">
          <ScrollArea className="h-[600px] rounded-lg p-4">
            <div className="grid gap-4">
              {courses.map((course, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{course.code}</h3>
                        <Badge variant="outline">{course.units} Units</Badge>
                      </div>
                      <h4 className="text-lg text-primary mb-2">{course.title}</h4>
                      <p className="text-muted-foreground">{course.description}</p>
                    </div>
                    <div className="flex gap-2 md:flex-col">
                      <Badge>{course.level} Level</Badge>
                      <Badge variant="secondary">{course.semester} Semester</Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};
