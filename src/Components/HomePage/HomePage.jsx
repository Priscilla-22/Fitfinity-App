import   React from 'react';
import Hero from './Hero';
import Features from './Features';import Testimonials from './Testimonials';
import Footer from './Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Homepage;