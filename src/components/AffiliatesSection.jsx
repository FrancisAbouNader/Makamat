import React from 'react';

const AffiliatesSection = () => {
  return (
    <section className="relative">
      {/* Vector image positioned at bottom right */}
        <img 
        src="/Vector_4.png" 
        alt="Background decoration"
        className="absolute"
      />
      
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Affiliates</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Makamat operates through a group of specialized subsidiaries that deliver targeted solutions across key sectors, including healthcare and business technology. Each subsidiary functions independently while aligning with Makamat's overarching commitment to quality, innovation, and service excellence.
          </p>
        </div>

        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-6 py-1 rounded-full font-medium text-lg hover:bg-blue-600 transition duration-200">
            Take Me There
          </button>
        </div>
      </div>
    </section>
  );
};

export default AffiliatesSection;