import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import {
  Music,
  Book,
  Users,
  MessageCircle,
  HandIcon as PrayingHands,
} from "lucide-react";
import Link from "next/link";

const serviceItems = [
  {
    icon: <PrayingHands className="w-6 h-6" />,
    title: "Words of Welcome-Invocation",
    details: "",
  },
  {
    icon: <Music className="w-6 h-6" />,
    title: "Hymn Of Assurance",
    details: '"There\'s a Land That is Fairer Than Day" (Hymn 515)',
  },
  {
    icon: <Book className="w-6 h-6" />,
    title: "Bible Reading",
    details: "1 Thessalonians 4: 13-18: Osahon Darius Odabi",
  },
  {
    icon: <Music className="w-6 h-6" />,
    title: "Hymn Of Affirmation",
    details: '"When We All Get to Heaven" (Hymn 514)',
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Biography",
    details: "Dickson Odabi",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Eulogy",
    details: "Ebehi Odabi",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Words of Tributes and Testimony",
    details: "(Family Members/Friends)",
  },
  {
    icon: <Music className="w-6 h-6" />,
    title: "Hymn of Providence",
    details: '"Abide with Me" (Hymn 63)',
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Words of Exhortation",
    details: "Dr. Kayode Ajimatanranje Sr. (Pastor)",
  },
  {
    icon: <Music className="w-6 h-6" />,
    title: "Hymn of Comfort",
    details: '"It Is Well with My Soul" (Hymn 410)',
  },
  {
    icon: <PrayingHands className="w-6 h-6" />,
    title: "Special Prayer for the Family",
    details: "",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Vote of Thanks",
    details: "Dr. Wilson Ovienria",
  },
  {
    icon: <PrayingHands className="w-6 h-6" />,
    title: "Prayer/Benediction",
    details: "",
  },
];

export default function OrderOfServicePage() {
  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-4xl mx-auto bg-white bg-opacity-90 shadow-xl rounded-lg overflow-hidden">
        <CardHeader className="text-center bg-gradient-to-r from-green-600 to-blue-600 text-white py-6">
          <CardTitle className="text-4xl font-bold">Order of Service</CardTitle>
          <p className="text-xl mt-2">
            In Memory of Elder David Okoobo Ovienria
          </p>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            {serviceItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-green-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.details}</p>
                </div>
              </div>
            ))}
          </div>

          <Separator className="my-8 bg-gradient-to-r from-green-400 to-blue-500" />

          <div className="text-center">
            <p className="text-gray-700 mb-6">
              We invite you to join us in celebrating the life and legacy of
              Elder David Okoobo Ovienria. May this service bring comfort and
              fond memories to all who knew him.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
            >
              <Link href={"/guestbook"}>Share Your Condolences</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
