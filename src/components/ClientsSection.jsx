import React from 'react';
import AnimatedSection from './AnimatedSection';

const ClientsSection = () => {
  const logoFiles = [
    'Fries Land.png',
    'Frito Lay.png',
    'JC.png',
    'Johns Hopkins.png',
    'Obeikan.png',
    'Pepsico.png',
    'PnG.png',
    'Saudi Airlines Catering.png',
    'Tahakom.png',
    'Tetra Pak.png',
    'The Clorox Company.png',
    'Unilever.png'
  ];

  const clients = logoFiles.map((file) => ({
    name: file.replace('.png', ''),
    logo: `/Makamat Client List Logo/${file}`
  }));

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp" delay={200}>
          <div className="text-center mb-12">
            {/* Moving tape container */}
            <div className="overflow-hidden relative">
              <div className="flex animate-scroll space-x-16 hover:animation-pause">
                {clients.map((client, index) => (
                  <div key={index} className="flex items-center justify-center flex-shrink-0 transform hover:scale-110 transition-transform duration-300">
                    <div className="flex items-center justify-center ">
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className=" w-44 h-44 object-contain filter hover:brightness-110 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ClientsSection;