"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const photos = Array.from({ length: 34 }).map((_, index) => ({
  src: `/whatsapp/(${index + 1}).jpg`,
  alt: `Memory ${index + 1}`,
  size:
    index % 5 === 0
      ? "large"
      : index % 7 === 0
      ? "wide"
      : index % 11 === 0
      ? "tall"
      : "normal",
}));

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={cn(
              "relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer",
              {
                "col-span-2 row-span-2": photo.size === "large",
                "col-span-2": photo.size === "wide",
                "row-span-2": photo.size === "tall",
              }
            )}
            onClick={() => setSelectedPhoto(photo.src)}
          >
            <div
              className={cn("relative w-full", {
                "aspect-square":
                  photo.size === "normal" || photo.size === "large",
                "aspect-video": photo.size === "wide",
                "aspect-[3/4]": photo.size === "tall",
              })}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={800}
                className="transition-transform duration-300 hover:scale-110 h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 hover:bg-opacity-30" />
          </div>
        ))}
      </div>

      <Dialog
        open={!!selectedPhoto}
        onOpenChange={() => setSelectedPhoto(null)}
      >
        <DialogContent className="max-w-3xl">
          {selectedPhoto && (
            <div className="relative aspect-[4/3]">
              <Image
                src={selectedPhoto}
                alt="Selected photo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
