import React from 'react';
import AnimatedSection from './AnimatedSection';

const TestimonialsSection = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp" delay={200}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-gray-600">Trusted by industry leaders who value innovation, reliability, and long-term collaboration</p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection animation="scaleIn" delay={400}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 transition-all duration-500 transform hover:scale-105">
              <div className="flex flex-col md:flex-row items-start gap-x-10 md:space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    <img 
                      src="/testimonial-1.png"
                      alt="Kidana Development Company"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <img src="/Icon.png" className="mb-4 transform hover:scale-110 transition-transform duration-300" />
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    I want to thank you and the Makamat team for the dedication and professionalism you showed during this project. Makamat proved to be the right partner for this.
                  </p>
                  <div className="md:text-right">
                    <p className="font-semibold text-gray-900">- Kidana Development Company</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;