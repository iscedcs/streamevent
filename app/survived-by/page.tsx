import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

interface FamilyMember {
  name: string;
  relation: string;
  image: string;
}

const familyMembers: FamilyMember[] = [
  {
    name: "Mrs. Elizabeth Ovienria",
    relation: "Wife",
    image: "/square.jpg",
  },
  {
    name: "Dr. Wilson Abhuluime Ovienria",
    relation: "Son",
    image: "/square.jpg",
  },
  {
    name: "Dickson Odabi",
    relation: "Son",
    image: "/square.jpg",
  },
  {
    name: "Ebehi Odabi",
    relation: "Daughter",
    image: "/square.jpg",
  },
  {
    name: "Osahon Darius Odabi",
    relation: "Grandson",
    image: "/square.jpg",
  },
];

export default function SurvivedByPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Survived By</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {familyMembers.map((member) => (
          <Card key={member.name} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="aspect-square relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4 text-center">
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-muted-foreground">{member.relation}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
