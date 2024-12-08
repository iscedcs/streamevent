import Image from "next/image";

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <div key={i} className="aspect-square relative">
          <Image
            src={`/placeholder.svg?height=300&width=300&text=Photo ${i}`}
            alt={`Memory ${i}`}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      ))}
    </div>
  );
}
