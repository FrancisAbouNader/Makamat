import React from 'react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/background_0.png)',
        }}
      />
      
      {/* Blue overlay to match the design */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/85 via-blue-600/85 to-blue-700/85" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 relative z-20">
        {/* About Us Section - Text left, Image right */}
        <div className="grid grid-cols-1 !text-black lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection animation="fadeInLeft" delay={200}>
            <div className="">
              <h2 className="text-4xl font-bold mb-6 ">About Us</h2>
              <p className=" leading-relaxed text-lg">
                Makamat is a trusted provider of innovative technology and security solutions. We specialize in RFID systems and strategic tech services designed to meet the evolving needs of modern businesses and institutions.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeInRight" delay={400}>
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-[500px] rounded-full overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="/abous-us-1.png" 
                  alt="About Us - Technology Solutions"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Mission Section - Image left, Text right */}
        <div className="grid grid-cols-1 mb-24 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fadeInLeft" delay={200}>
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="w-80 h-[500px] rounded-full overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="/abous-us-2.png" 
                  alt="Mission - Innovation and Quality"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeInRight" delay={400}>
            <div className="text-black order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6 ">Mission</h2>
              <p className=" leading-relaxed text-lg">
                Our mission is to provide exceptional technological contracting services that exceed client expectations. We strive to be a leader in the industry by fostering innovation, ensuring quality, and building lasting partnerships.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;