import React from 'react';
import { Music, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">About Suzanne Kellow</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="w-full aspect-[3/4] rounded-lg shadow-lg mb-6 overflow-hidden">
              <img
                src="/images/suzanne-headshot.jpg"
                alt="Suzanne Kellow - Professional headshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:w-2/3">
            <p className="text-lg text-navy/80 mb-6 leading-relaxed">
              With over 20 years of experience in music education, Suzanne Kellow brings her classroom expertise directly to your home. As a dedicated music educator specializing in piano and vocal instruction, she has nurtured young musical talent across Florida and New Jersey, creating engaging and inclusive learning environments for students from Pre-K through high school.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Music className="h-6 w-6 text-gold" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-serif font-medium text-navy mb-2">Experienced Piano & Voice Instructor</h3>
                  <p className="text-navy/70">Skilled in piano accompaniment and vocal coaching, with extensive experience teaching music fundamentals, technique, and musicality to students of all ages and skill levels.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Award className="h-6 w-6 text-gold" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-serif font-medium text-navy mb-2">Proven Music Educator</h3>
                  <p className="text-navy/70">Former music teacher at Saint Luke's Catholic School and South Olive Elementary, with a track record of preparing students for performances and fostering a genuine love for music in young learners.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <BookOpen className="h-6 w-6 text-gold" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-serif font-medium text-navy mb-2">Qualified Professional</h3>
                  <p className="text-navy/70">Holds a Master of Music Education from Columbia University Teachers College with music education certifications in Florida and New Jersey, plus ongoing training in choral techniques and vocal instruction methods.</p>
                </div>
              </div>
            </div>

            <p className="text-navy/80 italic border-l-4 border-gold pl-4">
              "My greatest joy is witnessing the transformation that occurs when a child discovers their musical voice. Through patient guidance and personalized instruction, I help young musicians build confidence, develop discipline, and experience the profound joy of musical expression."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About

