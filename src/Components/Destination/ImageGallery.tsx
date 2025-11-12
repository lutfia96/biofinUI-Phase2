import { useState } from "react";
import type { ImageResponse } from "../../types/AttractionType";

interface ImageGalleryProps {
  images: ImageResponse[];
  title: string;
}

const ImageGallery = ({ images, title }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image: ImageResponse, index: number) => {
    setSelectedImage(typeof image === "string" ? image : image.url);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(
      typeof images[nextIndex] === "string"
        ? images[nextIndex]
        : images[nextIndex].url
    );
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(
      typeof images[prevIndex] === "string"
        ? images[prevIndex]
        : images[prevIndex].url
    );
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm p-6 min-h-[50%]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => {
            const imageUrl = typeof image === "string" ? image : image.url;
            return (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                onClick={() => openModal(image, index)}
              >
                <img
                  src={imageUrl}
                  alt={`${title} - Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <span className="fa fa-magnifying-glass-plus w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-10 right-4 text-white hover:text-gray-300 z-10"
            >
              <span className="fa fa-close text-2xl w-8 h-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <span className="fa fa-chevron-left text-2xl w-8 h-8" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <span className="fa fa-chevron-right text-2xl w-8 h-8" />
            </button>

            <img
              src={selectedImage}
              alt={`${title} - Full size`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
