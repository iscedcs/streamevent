"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { BentoImageGrid, BentoImageGridItem } from "./ui/bento-grids-image";
import { motion, AnimatePresence } from "framer-motion";

const photos = Array.from({ length: 128 }).map((_, index) => ({
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
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 21;

  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const totalPages = Math.ceil(photos.length / photosPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const openSlideshow = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeSlideshow = () => {
    setSelectedPhotoIndex(null);
  };

  const goToPrevious = () => {
    setSelectedPhotoIndex((prevIndex) =>
      prevIndex !== null
        ? (prevIndex - 1 + photos.length) % photos.length
        : null
    );
  };

  const goToNext = () => {
    setSelectedPhotoIndex((prevIndex) =>
      prevIndex !== null ? (prevIndex + 1) % photos.length : null
    );
  };

  const col2s = [
    0, 4, 8, 9, 13, 17, 18, 22, 26, 27, 31, 35, 36, 40, 44, 45, 49, 53, 54, 58,
    62, 63, 67, 71, 72, 76, 80, 81, 85, 89, 90, 94, 98, 99, 103, 107, 108, 112,
    116, 117, 121, 125, 126, 127,
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 pb-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <BentoImageGrid className="max-w-4xl mx-auto gap-4">
            {currentPhotos.map((photo, i) => (
              <BentoImageGridItem
                imageUrl={photo.src}
                key={i}
                title={photo.alt}
                className={`${
                  col2s.includes(i) ? "md:col-span-2" : ""
                } transition-transform duration-300 hover:scale-105 cursor-pointer`}
                onClick={() => openSlideshow(i + indexOfFirstPhoto)}
              />
            ))}
          </BentoImageGrid>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center items-center mt-8 space-x-4">
        <Button
          onClick={prevPage}
          disabled={currentPage === 1}
          variant="outline"
          className="p-2"
        >
          <ChevronLeft className="mr-0.5 h-4 w-4" /> Previous
        </Button>
        <span className="font-medium">
          {currentPage} of {totalPages}
        </span>
        <Button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          variant="outline"
          className="p-2"
        >
          Next <ChevronRight className="ml-0.5 h-4 w-4" />
        </Button>
      </div>

      <Dialog open={selectedPhotoIndex !== null} onOpenChange={closeSlideshow}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black">
          <DialogTitle hidden>Photo Slideshow</DialogTitle>
          <div className="relative h-[80vh]">
            <AnimatePresence mode="wait">
              {selectedPhotoIndex !== null && (
                <motion.div
                  key={selectedPhotoIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  // @ts-expect-error: `className` prop is not recognized by the `div` element
                  className="h-full"
                >
                  <Image
                    src={photos[selectedPhotoIndex].src}
                    alt={photos[selectedPhotoIndex].alt}
                    layout="fill"
                    objectFit="contain"
                  />
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    // @ts-expect-error: `className` prop is not recognized by the `p` element
                    className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 p-2 rounded"
                    aria-label="Photo description"
                  >
                    {photos[selectedPhotoIndex].alt}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-white hover:bg-white/20"
              onClick={closeSlideshow}
              aria-label="Close slideshow"
            >
              <X className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
              onClick={goToPrevious}
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
              onClick={goToNext}
              aria-label="Next photo"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
