import React from 'react';
import { Piano, Mic, Clock, Users, Star, MapPin } from 'lucide-react';

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}> = ({ icon, title, description, features }) => {
  return (
    <div className="bg-cream rounded-lg shadow-lg p-8 transition duration-300 hover:shadow-xl hover:transform hover:scale-105">
      <div className="text-gold mb-6">{icon}</div>
      <h3 className="text-2xl font-serif font-bold text-navy mb-4">{title}</h3>
      <p className="text-navy/70 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Star className="h-4 w-4 text-gold mr-2 flex-shrink-0" />
            <span className="text-navy/80 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-navy/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">Services Offered</h2>
          <p className="text-lg text-navy/70 max-w-3xl mx-auto">
            Personalized music lessons tailored to your child's unique abilities and interests
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <ServiceCard
            icon={<Piano className="h-12 w-12" />}
            title="Piano Lessons"
            description="Comprehensive piano instruction for children ages 5-18, from beginners to advanced students."
            features={[
              "Technique development focusing on proper hand position and posture",
              "Music theory and sight-reading skills",
              "Classical repertoire and contemporary pieces",
              "Performance preparation and recital opportunities",
              "Customized practice plans for consistent progress"
            ]}
          />

          <ServiceCard
            icon={<Mic className="h-12 w-12" />}
            title="Voice Lessons"
            description="Expert vocal training for children ages 8-18, nurturing healthy technique and expressive singing."
            features={[
              "Proper breathing techniques and vocal warm-ups",
              "Pitch accuracy and tone development",
              "Diction and language coaching for classical repertoire",
              "Performance skills and stage presence",
              "Age-appropriate repertoire from classical to musical theater"
            ]}
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-serif font-bold text-navy mb-4">Lesson Details</h3>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-gold" />
              </div>
              <h4 className="text-xl font-serif font-medium text-navy mb-2">Duration & Frequency</h4>
              <p className="text-navy/70">
                30- or 60-minute lessons available weekly or bi-weekly to accommodate your child's schedule and attention span
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-gold" />
              </div>
              <h4 className="text-xl font-serif font-medium text-navy mb-2">Student Experience</h4>
              <p className="text-navy/70">
                Welcoming students of all levels, from complete beginners to advanced musicians seeking to refine their skills
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-gold" />
              </div>
              <h4 className="text-xl font-serif font-medium text-navy mb-2">Making House Calls</h4>
              <p className="text-navy/70">
                Lessons offered in the comfort of your own home
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mt-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-serif font-bold text-navy mb-4">Pricing</h3>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center p-6 bg-cream rounded-lg">
              <h4 className="text-xl font-serif font-medium text-navy mb-2">30-Minute Lesson</h4>
              <p className="text-3xl font-bold text-gold mb-2">$50</p>
              <p className="text-navy/70">Perfect for beginners and younger students</p>
            </div>

            <div className="text-center p-6 bg-cream rounded-lg">
              <h4 className="text-xl font-serif font-medium text-navy mb-2">1-Hour Lesson</h4>
              <p className="text-3xl font-bold text-gold mb-2">$90</p>
              <p className="text-navy/70">Ideal for intermediate and advanced students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;