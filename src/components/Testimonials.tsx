import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  relation: string;
  content: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jennifer P.",
    relation: "Mother of piano student, age 8",
    content: "Suzanne has been teaching my daughter for over a year now, and the progress has been remarkable. She has a gift for connecting with children and making complex musical concepts accessible. My daughter looks forward to her lessons every week!",
    stars: 5
  },
  {
    id: 2,
    name: "Michael T.",
    relation: "Father of voice student, age 12",
    content: "We tried several voice teachers before finding Suzanne, and the difference is night and day. Her background as a professional opera singer brings an unmatched level of expertise. She's patient yet demanding, knowing exactly when to push and when to encourage.",
    stars: 5
  },
  {
    id: 3,
    name: "Sarah R.",
    relation: "Mother of piano and voice student, age 10",
    content: "Suzanne's dual expertise in both piano and voice has been invaluable for my daughter. The techniques complement each other beautifully, and Suzanne seamlessly integrates both instruments. Her recitals are always beautifully organized and showcase her students' progress.",
    stars: 5
  },
  {
    id: 4,
    name: "David L.",
    relation: "Father of piano student, age 7",
    content: "What impresses me most about Suzanne is how she tailors her teaching to each child's personality. My son is high-energy and struggles to focus, but she structures lessons to harness his enthusiasm while building discipline. The transformation has been amazing.",
    stars: 5
  },
  {
    id: 5,
    name: "Amanda W.",
    relation: "Mother of voice student, age 15",
    content: "Suzanne's connections in the music world have opened doors for my daughter that we never imagined possible. Beyond the excellent vocal training, she's provided performance opportunities and guidance about music schools. She truly invests in her students' futures.",
    stars: 5
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-navy/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">What Parents Say</h2>
          <p className="text-lg text-navy/70 max-w-3xl mx-auto">
            Hear from the families whose children have flourished under Suzanne's guidance
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
                      <div className="flex mb-4">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-gold fill-gold" />
                        ))}
                      </div>
                      <blockquote className="text-navy/80 italic text-lg mb-6">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="text-right">
                        <p className="text-navy font-medium">{testimonial.name}</p>
                        <p className="text-navy/60 text-sm">{testimonial.relation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={handlePrev}
              className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-navy hover:text-gold focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNext}
              className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-navy hover:text-gold focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setActiveIndex(index);
                }}
                className={`w-3 h-3 mx-1 rounded-full transition-colors duration-300 ${
                  activeIndex === index ? 'bg-gold' : 'bg-navy/20'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

