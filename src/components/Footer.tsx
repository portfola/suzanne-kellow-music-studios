import React from 'react';
import { Music, Mail, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center mb-4">
              <Music className="h-8 w-8 text-gold" />
              <span className="ml-2 text-xl font-serif font-medium">Suzanne Kellow</span>
            </div>
            <p className="text-cream/70 mb-6">
              Cultivating musical excellence in young pianists and vocalists throughout Palm Beach County since 2018.
            </p>
            <div className="flex space-x-4">
              <a target="_blank" href="https://www.facebook.com/suzanne.kellow.3" className="text-cream/70 hover:text-gold transition duration-300">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a target="_blank" href="https://www.instagram.com/suzannekellow/" className="text-cream/70 hover:text-gold transition duration-300">
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-gold mr-3" />
                <span className="text-cream/70">(201) 888-3778</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-gold mr-3" />
                <span className="text-cream/70">skellow@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-cream/70 hover:text-gold transition duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 text-center">
          <p className="text-cream/50">
            &copy; {new Date().getFullYear()} Suzanne Kellow Music Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




