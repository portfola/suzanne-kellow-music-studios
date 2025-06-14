import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">Contact Suzanne</h2>
          <p className="text-lg text-navy/70 max-w-3xl mx-auto">
            Get in touch to discuss lesson availability and scheduling
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-cream rounded-lg shadow-lg p-8">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-gold/10 rounded-full p-3 mr-4">
                  <Phone className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-navy mb-1">Please text Suzanne at</h4>
                  <p className="text-navy/70"><a href="sms:+12018883778" className="sms-link">💬201-888-3778</a></p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gold/10 rounded-full p-3 mr-4">
                  <Mail className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-navy mb-1">or email her at</h4>
                  <p className="text-navy/70"><a href="mailto:skellow@gmail.com">skellow@gmail.com</a></p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gold/10 rounded-full p-3 mr-4">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-navy mb-1">Home Service</h4>
                  <div className="space-y-2">
                    <p className="text-navy/70">Lessons will take place in your home, using your own piano or keyboard.</p>
                    <p className="text-navy/70">Serving the areas of:</p>
                      <ul className="ml-6">
                        <li>Palm Beach</li>
                        <li>Jupiter</li>
                        <li>West Palm Beach</li>
                        <li>Palm Beach Gardens</li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact
