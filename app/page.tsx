import LiveStream from "@/components/LiveStream";
import { Button } from "@/components/ui/button";
import InfoModal from "@/components/InfoModal";
import { prisma } from "@/lib/prisma";
import { Suspense } from "react";
import PageSections from "@/components/page-sections";
import Wishes from "@/components/Wishes";

async function getInitialWishes() {
  const wishes = await prisma.wish.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
  });
  return wishes;
}

export default async function Home() {
  const initialWishes = await getInitialWishes();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 text-center">
        <h1 className="text-3xl font-semibold">Celebration of Life</h1>
        <h2 className="text-2xl mt-2">Elder David Okoobo Ovienria JP</h2>
        <p className="text-xl mt-1">1940 - 2024</p>
        <p className="mt-2">Age 84</p>
      </header>
      <main className="flex-grow flex flex-col md:flex-row p-4 gap-4">
        <div className="w-full md:w-2/3 space-y-4">
          <section>
            <h3 className="text-2xl font-semibold mb-4">Live Stream</h3>
            <LiveStream streamUrl="https://youtube.com/live/MVu0Yc6OlaU?feature=share" />
          </section>
          <section>
            <h3 className="text-2xl font-semibold mb-4">Event Details</h3>
            <p>
              <strong>Venue:</strong> The Great Room - 286 East 10th Street,
              Oakland, CA 94606
            </p>
            <p>
              <strong>Date and Time:</strong> NOVEMBER 16, 2024 @ 5PM - 11PM
            </p>
          </section>
          <PageSections />
        </div>
        <div className="w-full md:w-1/3 space-y-4">
          <Suspense fallback={<div>Loading wishes...</div>}>
            <Wishes initialWishes={initialWishes} />
          </Suspense>
          <section>
            <h3 className="text-2xl font-semibold mb-4">Hymns</h3>
            <div className="grid grid-cols-1 gap-2">
              <InfoModal
                trigger={
                  <Button variant="outline" className="w-full">
                    There's a Land That is Fairer Than Day
                  </Button>
                }
                title="There's a Land That is Fairer Than Day (Hymn 515)"
                content="[Hymn lyrics here]"
              />
              <InfoModal
                trigger={
                  <Button variant="outline" className="w-full">
                    When We All Get to Heaven
                  </Button>
                }
                title="When We All Get to Heaven (Hymn 514)"
                content="[Hymn lyrics here]"
              />
              <InfoModal
                trigger={
                  <Button variant="outline" className="w-full">
                    Abide with Me
                  </Button>
                }
                title="Abide with Me (Hymn 63)"
                content="[Hymn lyrics here]"
              />
              <InfoModal
                trigger={
                  <Button variant="outline" className="w-full">
                    It Is Well with My Soul
                  </Button>
                }
                title="It Is Well with My Soul (Hymn 410)"
                content="[Hymn lyrics here]"
              />
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>
          &copy; 2024 In Memory of Elder David Okoobo Ovienria JP. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
