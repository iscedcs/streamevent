import { PhotoGallery } from "@/components/PhotoGallery";

export default function GalleryPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Photo Gallery</h1>
      <PhotoGallery />
    </div>
  );
}
