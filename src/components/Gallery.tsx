import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  alt: string;
  thumbnail?: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: 'image',
    src: '/images/gallery/piano-lesson-1.jpg',
    alt: 'Piano lesson with young student',
  },
  {
    id: 2,
    type: 'image',
    src: '/images/gallery/youth-choir.jpg',
    alt: 'Conducting a youth choir',
  },
  {
    id: 3,
    type: 'video',
    src: '/videos/student-recital-1.mov',
    alt: 'Student recital performance',
  },
  {
    id: 4,
    type: 'video',
    src: '/videos/student-recital-2.mov',
    alt: 'Student recital performance',
  },
  {
    id: 5,
    type: 'video',
    src: '/videos/student-recital-3.mov',
    alt: 'Student recital performance',
  },
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  };

  const currentItem = mediaItems[currentIndex];

  return (
    <>
      <style>
        {`
          @keyframes slowZoom {
            from {
              transform: scale(1);
            }
            to {
              transform: scale(1.05);
            }
          }
        `}
      </style>
      <section id="gallery" className="py-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">Gallery</h2>
            <p className="text-lg text-navy/70 max-w-3xl mx-auto">
              Glimpses of musical moments from lessons, performances, and student recitals
            </p>
            <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-navy/5 rounded-lg overflow-hidden">
              {currentItem.type === 'image' ? (
                <img
                  key={animationKey}
                  src={currentItem.src}
                  alt={currentItem.alt}
                  className="w-full h-full object-cover"
                  onClick={() => setShowFullscreen(true)}
                  style={{
                    animation: 'slowZoom 8s ease-in forwards'
                  }}
                />
              ) : (
                <video
                  src={currentItem.src}
                  poster={currentItem.thumbnail}
                  controls
                  className="w-full h-full object-cover"
                />
              )}

              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="h-6 w-6 text-navy" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="h-6 w-6 text-navy" />
              </button>
            </div>
          </div>

          {/* Fullscreen Modal */}
          {showFullscreen && currentItem.type === 'image' && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
              <button
                onClick={() => setShowFullscreen(false)}
                className="absolute top-4 right-4 text-white hover:text-gold"
                aria-label="Close"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                key={animationKey}
                src={currentItem.src}
                alt={currentItem.alt}
                className="max-w-full max-h-[90vh] object-contain"
                style={{
                  animation: 'slowZoom 8s ease-in forwards'
                }}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Gallery;