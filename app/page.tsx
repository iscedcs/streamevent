import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Book, CalendarDays, Camera, Heart, MapPin, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container mx-auto">
      <Card className="max-w-4xl mx-auto bg-white bg-opacity-90 shadow-xl rounded-lg overflow-hidden">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-purple-800 mb-2">
              Celebrating the Life of
            </h1>
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Elder David Okoobo Ovienria JP
            </h2>
            <p className="text-2xl text-gray-600 mt-2">1940 - 2024</p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="relative w-64 h-64">
              <Image
                src="/square.jpg?height=300&width=300"
                alt="Elder David Okoobo Ovienria JP"
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-purple-200 shadow-lg"
              />
              <div className="absolute inset-0 rounded-full border-4 border-pink-300 opacity-75 animate-pulse"></div>
            </div>
          </div>

          <Separator className="my-8 bg-gradient-to-r from-purple-400 to-pink-500" />

          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              Elder David Okoobo Ovienria's vibrant spirit touched the lives of
              all who knew him. His journey on this earth may have ended, but
              his legacy of love, laughter, and kindness will forever resonate
              in our hearts.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center bg-purple-100 rounded-full px-4 py-2">
                <CalendarDays className="w-5 h-5 mr-2 text-purple-500" />
                Born: April 6, 1940
              </span>
              <span className="flex items-center bg-pink-100 rounded-full px-4 py-2">
                <CalendarDays className="w-5 h-5 mr-2 text-pink-500" />
                Passed: 2024
              </span>
              <span className="flex items-center bg-red-100 rounded-full px-4 py-2">
                <MapPin className="w-5 h-5 mr-2 text-red-500" />
                Hometown: Eguare Irrua, Edo State, Nigeria
              </span>
            </div>

            <Separator className="my-6 bg-gradient-to-r from-pink-400 to-purple-500" />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg shadow">
                <h3 className="text-2xl font-semibold mb-3 text-purple-700">
                  Life & Legacy
                </h3>
                <p className="mb-4">
                  Elder David Okoobo Ovienria was born on the 6 day of April,
                  1940 in Eguare Irrua, the current Esan Central Local
                  Government Area of Edo State, Nigeria to the family of Chief
                  Aarabhor Ovienria and Mrs. Iduaisili Ovienria nee Eigbe.
                </p>
                <Button variant="outline" className="mt-2" asChild>
                  <Link href="/biography">
                    <Book className="w-4 h-4 mr-2" />
                    Read Full Biography
                  </Link>
                </Button>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg shadow">
                <h3 className="text-2xl font-semibold mb-3 text-pink-700">
                  Family & Friends
                </h3>
                <p>
                  John's greatest masterpiece was his family. He is survived by
                  his loving wife Sarah, children Michael and Emily, and
                  grandchildren Emma, Jack, Olivia, and Noah. Each a brushstroke
                  in his beautiful life's painting.
                </p>
                <Button variant="outline" className="mt-2" asChild>
                  <Link href="/live-stream">
                    <Heart className="w-4 h-4 mr-2" />
                    Share a Memory
                  </Link>
                </Button>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg shadow mt-6">
              <h3 className="text-2xl font-semibold mb-3 text-red-700">
                Celebration of Life
              </h3>
              <p>
                Join us in honoring John's vibrant life on June 15, 2023, at
                2:00 PM at Springfield Community Garden. Let's come together to
                share stories, laughter, and the colorful memories that John has
                left in our hearts.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <Button>
                  <Video className="w-4 h-4 mr-2" />
                  Join Live Stream
                </Button>
                <Button variant="secondary">
                  <Camera className="w-4 h-4 mr-2" />
                  View Photo Gallery
                </Button>
              </div>
            </div>

            <Separator className="my-6 bg-gradient-to-r from-red-400 to-purple-500" />

            <div className="text-center">
              <p className="text-xl font-medium mb-4 text-purple-700">
                "The most beautiful things in the world cannot be seen or even
                touched. They must be felt with the heart." - Helen Keller
              </p>
              <Heart className="w-12 h-12 mx-auto text-pink-500 animate-pulse" />
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
