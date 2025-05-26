import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Suzanne Kellow | Piano & Voice Lessons | Palm Beach & Jupiter, FL";
    
    // Add custom colors to Tailwind through CSS variables
    document.documentElement.style.setProperty('--color-navy', '#1A365D');
    document.documentElement.style.setProperty('--color-gold', '#D4AF37');
    document.documentElement.style.setProperty('--color-cream', '#F9F6EE');
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App

