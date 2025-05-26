import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-b from-cream to-white flex items-center relative">
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy mb-6 leading-tight animate-fade-in">
            Elevate Your Child's Musical Journey
          </h1>
          <p className="text-xl md:text-2xl text-navy/80 mb-8 leading-relaxed animate-fade-in-delay">
            Piano & Voice Lessons in Palm Beach and Jupiter, Florida
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mb-8 animate-fade-in-delay"></div>
          <p className="text-lg text-navy/70 mb-12 animate-fade-in-delay-2">
            Experience the artistry of piano and voice through the guidance of Suzanne Kellow, 
            a retired opera singer and conductor, and lifelong music educator dedicated to nurturing young talent.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-navy text-cream px-8 py-3 rounded-md text-lg font-medium transform transition duration-300 hover:scale-105 hover:bg-navy/90 animate-fade-in-delay-2"
          >
            Schedule a Lesson
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-navy/50 hover:text-navy">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero
