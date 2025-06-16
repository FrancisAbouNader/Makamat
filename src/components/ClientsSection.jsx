import React from 'react';
import AnimatedSection from './AnimatedSection';

const ClientsSection = () => {
  const clients = [
    { name: "The Clorox Company", logo: "/company-1.png" },
    { name: "Friesland Campina", logo: "/company-2.png" },
    { name: "Tetra Pak", logo: "/company-3.png" },
    { name: "Saudi Airlines Catering", logo: "/company-4.png" }
  ];

  // Duplicate the clients array to create seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp" delay={200}>
          <div className="text-center mb-12">
            {/* Moving tape container */}
            <div className="overflow-hidden relative">
              <div className="flex animate-scroll space-x-16 hover:animation-pause">
                {duplicatedClients.map((client, index) => (
                  <div key={index} className="flex items-center justify-center flex-shrink-0 transform hover:scale-110 transition-transform duration-300">
                    <div className="h-16 flex items-center justify-center min-w-[120px]">
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="max-h-16 w-auto object-contain filter hover:brightness-110 transition-all duration-300"
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