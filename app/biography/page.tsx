import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Award,
  Book,
  Briefcase,
  Church,
  GraduationCap,
  Heart,
  Plane,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BiographyPage() {
  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-4xl mx-auto bg-white bg-opacity-90 shadow-xl rounded-lg overflow-hidden">
        <CardHeader className="text-center bg-gradient-to-r from-green-600 to-blue-600 text-white py-6">
          <CardTitle className="text-4xl font-bold">
            The Life of Elder David Okoobo Ovienria
          </CardTitle>
          <p className="text-xl mt-2">April 6, 1940 - 2023</p>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
            <Image
              src="/square.jpg"
              alt="Elder David Okoobo Ovienria"
              width={300}
              height={300}
              className="rounded-full border-4 border-green-200 shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                A Life of Service and Integrity
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Elder David Okoobo Ovienria was born on April 6, 1940, in Eguare
                Irrua, Esan Central Local Government Area of Edo State, Nigeria.
                His life was marked by dedication to education, agriculture, and
                public service, leaving an indelible mark on his community and
                beyond.
              </p>
            </div>
          </div>

          <Separator className="my-8 bg-gradient-to-r from-green-400 to-blue-500" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-green-50">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-green-700 flex items-center mb-3">
                  <Book className="w-5 h-5 mr-2" />
                  Early Life & Education
                </h3>
                <p className="text-gray-700">
                  Born to Chief Aarabhor Ovienria and Mrs. Iduaisili Ovienria
                  nee Eigbe, David attended Eguare Primary School, Irrua
                  (1946-1954) and Annunciation Catholic College, Irrua
                  (1954-1959). He later studied at More Plantation Ibadan, an
                  affiliate of Oxford University London, on a fully funded
                  government scholarship.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-blue-700 flex items-center mb-3">
                  <Briefcase className="w-5 h-5 mr-2" />
                  Career & Achievements
                </h3>
                <p className="text-gray-700">
                  Elder Ovienria's career in agriculture spanned decades. He
                  played a crucial role in upgrading the Irrua Government Farms
                  to a Mechanized Farming System. His honesty and dedication
                  earned him the nickname "One Honest Nigerian," opening doors
                  for generations to come. He retired as a Director of Works at
                  the University of Benin after 35 years of service.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-purple-50">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-purple-700 flex items-center mb-3">
                  <Heart className="w-5 h-5 mr-2" />
                  Family & Personal Life
                </h3>
                <p className="text-gray-700">
                  David met his wife Christiana nee Oshiobugie at Elele
                  Government Farms. Their love story led to marriage within a
                  year. Together, they raised six children, all of whom became
                  graduates. His family life was as rich and fulfilling as his
                  professional career.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-yellow-50">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-yellow-700 flex items-center mb-3">
                  <Church className="w-5 h-5 mr-2" />
                  Faith & Community
                </h3>
                <p className="text-gray-700">
                  Elder Ovienria was a devout Christian of the Pentecostal
                  faith. His strong beliefs guided his actions and interactions
                  throughout his life, contributing to his reputation for
                  honesty and integrity in both his professional and personal
                  life.
                </p>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-8 bg-gradient-to-r from-blue-400 to-purple-500" />

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-green-800 flex items-center">
              <Award className="w-6 h-6 mr-2" />
              Interests & Experiences
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center bg-red-50 p-4 rounded-lg">
                <Plane className="w-8 h-8 text-red-600 mr-4" />
                <div>
                  <h4 className="font-semibold text-red-700">World Traveler</h4>
                  <p className="text-gray-600">
                    Elder Ovienria's travels took him to countries across nearly
                    all continents, broadening his perspectives and experiences.
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-indigo-50 p-4 rounded-lg">
                <GraduationCap className="w-8 h-8 text-indigo-600 mr-4" />
                <div>
                  <h4 className="font-semibold text-indigo-700">
                    Lifelong Learner
                  </h4>
                  <p className="text-gray-600">
                    He pursued numerous technical and academic trainings
                    throughout his career, both in Nigeria and abroad.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gradient-to-r from-green-400 to-blue-500" />

          <div className="text-center">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">
              Legacy
            </h3>
            <p className="text-gray-700 mb-6">
              Elder David Okoobo Ovienria's legacy lives on through his family,
              his contributions to agriculture in Nigeria, and the countless
              lives he touched with his integrity and dedication. His nickname,
              "One Honest Nigerian," continues to open doors for his children
              and grandchildren, a testament to the power of a life well-lived.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
            >
              <Link href={"/live-stream"}>Share Your Memory</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
