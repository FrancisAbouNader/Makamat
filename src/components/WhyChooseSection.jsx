import React from 'react';
import AnimatedSection from './AnimatedSection';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

const WhyChooseSection = () => {
  const features = [
    {
      title: "Expertise",
      description: "Our team of experienced professionals possesses deep knowledge and expertise in cutting-edge technologies."
    },
    {
      title: "Innovation", 
      description: "We are dedicated to staying at the forefront of technological advancements, providing innovative solutions to our clients."
    },
    {
      title: "Reliability",
      description: "We are committed to delivering reliable and robust solutions, ensuring reliability and client satisfaction."
    },
    {
      title: "Client Focus",
      description: "We prioritize our clients' needs and work closely with them to understand their requirements."
    }
  ];

  const [containerRef, visibleItems] = useStaggeredAnimation(features.length, 150);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp" delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Makamat?
            </h2>
          </div>
        </AnimatedSection>
        
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                visibleItems.has(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                backgroundImage: 'url(/backgroud_2.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Blue overlay to match Figma design */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/90 via-blue-600/90 to-blue-700/90" />
              
              <div className="relative z-10 p-6 text-white h-full flex flex-col">
                {/* Orange gradient button */}
                <div className="mb-6">
                  <div className="inline-block bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold transform hover:scale-105 transition-transform duration-300">
                    {feature.title}
                  </div>
                </div>
                
                {/* Description text */}
                <p className="text-white/90 min-h-[220px] leading-relaxed text-sm flex-grow">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;