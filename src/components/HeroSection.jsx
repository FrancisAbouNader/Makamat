import React from 'react';
import AnimatedSection from './AnimatedSection';

const HeroSection = () => {
  return (
    <section className="relative bg-white min-h-[700px] md:min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute md:block hidden inset-0 scale-100 md:-right-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero-section.webp)',
        }}
      />
      
      {/* Overlay to ensure text readability if needed */}
      <div className="absolute inset-0 bg-white bg-opacity-10" />

      <div className="absolute lg:bottom-0 lg:left-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <AnimatedSection animation="fadeInUp" delay={200}>
              <h1 className="text-4xl md:text-2xl lg:text-2.5xl font-bold text-gray-900 leading-tight">
                Supporting public and private sectors through advanced AIDC, healthcare, and digital infrastructure solutions.
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInUp" delay={400}>
              <p className="text-lg text-gray-600 max-w-lg">
                Your Next Solution Starts Here
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInUp" delay={600}>
              <a href='/contact' className="bg-gray-800 text-white px-16 py-1 h-fit rounded-full hover:bg-gray-700 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg">
                Contact Us
              </a>
            </AnimatedSection>
          </div>

          {/* Right side space for the background image graphics */}
          <div className="relative">
            {/* This space is covered by the background image */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;