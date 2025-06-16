import React from 'react';
import AnimatedSection from './AnimatedSection';

const AffiliatesSection = () => {
  return (
    <section className="relative py-20">
      {/* Vector image positioned at bottom right */}
      <img 
        src="/Vector_4.png" 
        alt="Background decoration"
        className="absolute"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fadeInUp" delay={200}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Affiliates</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Makamat operates through a group of specialized subsidiaries that deliver targeted solutions across key sectors, including healthcare and business technology. Each subsidiary functions independently while aligning with Makamat's overarching commitment to quality, innovation, and service excellence.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp" delay={400}>
          <div className="flex justify-center">
            <a href="/subsidiaries" className="bg-blue-500 text-white px-6 py-1 rounded-full font-medium text-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Take Me There
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AffiliatesSection;