import { Button } from "@/components/ui/button";
import InfoModal from "@/components/InfoModal";
import Appreciation from "@/components/Appreciation";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">
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
      <section>
        <h3 className="text-2xl font-semibold mb-4">Hymns</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
      <section>
        <h3 className="text-2xl font-semibold mb-4">Sections</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <Button variant="outline" className="w-full" asChild>
            <Link href="/biography">Biography</Link>
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/order-of-service">Order of Service</Link>
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/gallery">Photo Gallery</Link>
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/survived-by">Survived By</Link>
          </Button>
          <InfoModal
            trigger={
              <Button variant="outline" className="w-full">
                Appreciation
              </Button>
            }
            title="Appreciation"
            content={<Appreciation />}
          />
        </div>
      </section>
    </div>
  );
}
