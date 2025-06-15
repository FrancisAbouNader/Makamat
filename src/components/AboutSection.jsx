import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/backgroud_2.png)',
        }}
      />
      
      {/* Blue overlay to match the design */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/85 via-blue-600/85 to-blue-700/85" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* About Us Section - Text left, Image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6 text-white">About Us</h2>
            <p className="text-white/90 leading-relaxed text-lg">
              Makamat is a trusted provider of innovative technology and security solutions. We specialize in RFID systems and strategic tech services designed to meet the evolving needs of modern businesses and institutions.
            </p>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
              <img 
                src="/abous-us-1.png" 
                alt="About Us - Technology Solutions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mission Section - Image left, Text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
              <img 
                src="/abous-us-2.png" 
                alt="Mission - Innovation and Quality"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="text-white order-1 lg:order-2">
            <h2 className="text-4xl font-bold mb-6 text-white">Mission</h2>
            <p className="text-white/90 leading-relaxed text-lg">
              Our mission is to provide exceptional technological contracting services that exceed client expectations. We strive to be a leader in the industry by fostering innovation, ensuring quality, and building lasting partnerships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;