import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'teaching' | 'performance' | 'recital';
}

const images: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/4709822/pexels-photo-4709822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Piano lesson with young student",
    category: 'teaching'
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/7520957/pexels-photo-7520957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Voice lesson with student",
    category: 'teaching'
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/4709828/pexels-photo-4709828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Piano recital preparation",
    category: 'recital'
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/7520930/pexels-photo-7520930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Opera performance",
    category: 'performance'
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/4709826/pexels-photo-4709826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Group piano lesson",
    category: 'teaching'
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/4709825/pexels-photo-4709825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Student recital",
    category: 'recital'
  },
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(image => image.category === filter);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">Gallery</h2>
          <p className="text-lg text-navy/70 max-w-3xl mx-auto">
            Glimpses of musical moments from lessons, performances, and student recitals
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2">
            {['all', 'teaching', 'performance', 'recital'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition duration-300 ${
                  filter === category
                    ? 'bg-gold text-white'
                    : 'bg-cream text-navy hover:bg-gold/20'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer transform transition duration-300 hover:shadow-xl hover:scale-105"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition duration-300 hover:opacity-90"
              />
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full">
              <button
                className="absolute top-2 right-2 text-white hover:text-gold bg-black/50 rounded-full p-1"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded"
              />
              <p className="text-white text-center mt-4">{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;