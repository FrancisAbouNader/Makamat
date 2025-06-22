import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

const SolutionsPage = () => {
  const solutionCards = [
    {
      title: "Asset Tracking",
      description: "Real-time monitoring of assets to prevent loss, streamline maintenance, and optimize utilization."
    },
    {
      title: "Supply Chain Management",
      description: "Enhancing visibility and control throughout the supply chain, from procurement to delivery."
    },
    {
      title: "Healthcare",
      description: "Improving patient safety, inventory management, and equipment tracking within healthcare facilities."
    },
    {
      title: "Retail",
      description: "Boosting inventory accuracy, reducing shrinkage, and enhancing customer experience through efficient stock management."
    },
    {
      title: "Industrial Safety",
      description: "Implementing RFID systems to monitor equipment, ensure compliance, and enhance workplace safety."
    },
    {
      title: "Food Safety",
      description: "Tracking perishable goods to maintain quality and compliance with health standards."
    }
  ];

  const processSteps = [
    {
      title: "Consultation",
      description: "Understanding your operational challenges and requirements."
    },
    {
      title: "Design",
      description: "Crafting a customized RFID solution tailored to your needs."
    },
    {
      title: "Installation",
      description: "Deploying the solution with minimal disruption to your operations."
    },
    {
      title: "Training",
      description: "Educating your team to effectively utilize the new system."
    },
    {
      title: "Support & Maintenance",
      description: "Providing ongoing assistance to ensure optimal performance."
    }
  ];

  const [cardsRef, visibleCards] = useStaggeredAnimation(solutionCards.length, 100);
  const [stepsRef, visibleSteps] = useStaggeredAnimation(processSteps.length, 150);

  return (
      <>
        <Header />
        <main className="min-h-screen bg-white pt-16">
          {/* Hero Section */}
          <section className="relative pt-20">
            {/* Text Content */}
            <div className="relative z-10 text-center mb-16">
              <AnimatedSection className={'mb-10'} animation="fadeInUp" delay={200}>
                <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold text-gray-900 mb-8">
                  RFID Solutions by Makamat
                </h1>
              </AnimatedSection>
              <AnimatedSection animation="fadeInUp" delay={400}>
                <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  Makamat offers cutting-edge Radio Frequency Identification (RFID) technology solutions designed to enhance
                  operational efficiency, security, and asset management across various industries in Saudi Arabia.
                </p>
              </AnimatedSection>
            </div>

            {/* Globe Image */}
            <AnimatedSection animation="scaleIn" delay={600}>
              <div className="flex justify-center relative">
                <img
                    className="w-auto object-contain z-0 transform hover:scale-105 transition-transform duration-700"
                    src="/globe.png"
                    alt="Global RFID Solutions"
                />
              </div>
            </AnimatedSection>
          </section>

          <AnimatedSection animation="fadeInUp" delay={200}>
            <section className="relative py-20 px-4 sm:px-6 lg:px-8">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500"></div>

              {/* Content */}
              <div className="relative z-10 max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-8">
                  What is RFID?
                </h2>
                <p className="text-lg md:text-xl text-white leading-relaxed max-w-5xl mx-auto">
                  RFID utilizes radio waves to automatically identify and track tags attached to objects. These tags contain
                  electronically stored information, enabling seamless data capture without the need for line-of-sight scanning.
                </p>
              </div>
            </section>
          </AnimatedSection>

          <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our RFID Solutions
                </h2>
                <p className="text-gray-600 mb-12">
                  Makamat provides a comprehensive suite of RFID solutions tailored to meet the unique needs of different sectors:
                </p>
              </AnimatedSection>

              <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {solutionCards.map((card, idx) => (
                    <div
                        key={idx}
                        className={`rounded-xl min-h-[400px]  p-6 bg-gradient-to-br from-yellow-200 via-orange-300 to-red-200 shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                          visibleCards.has(idx) 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-8'
                        }`}
                    >
                      <h3  style={{
                        backgroundImage: 'url(/background_0.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                           className="text-md mx-auto text-start px-6 py-1 rounded-full  text-white mb-4 inline-block">
                        {card.title}
                      </h3>
                      <p className="text-gray-800 text-md text-start leading-relaxed">{card.description}</p>
                    </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Process Section */}
          <section className="px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
              {/* Quotation */}
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="text-center mb-16 py-20">
                  <blockquote className="text-lg md:text-xl italic text-gray-800 font-medium">
                    "Through technological innovation, what was once impossible is now within reach"
                  </blockquote>
                </div>
              </AnimatedSection>

              {/* Heading */}
              <AnimatedSection animation="fadeInLeft" delay={400}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-left">
                  Our Process
                </h2>
              </AnimatedSection>

              {/* Process Steps with Single Continuous Gradient Line */}
              <div className="relative">
                {/* Single Continuous Gradient Line */}
                <div className="hidden md:block absolute left-[calc(33.333%-2px)] top-0 w-10 h-full bg-[#E49D23] rounded-full blur-md" />

                <div ref={stepsRef} className="space-y-12">
                  {processSteps.map((step, index) => (
                      <div 
                        key={index} 
                        className={`flex flex-col md:flex-row items-start gap-8 relative transition-all duration-700 ${
                          visibleSteps.has(index) 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-0 translate-x-8'
                        }`}
                      >
                        {/* Left column (Title) */}
                        <div className="w-1/3 min-w-[200px]">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                            {step.title}
                          </h3>
                        </div>

                        {/* Right column (Description) */}
                        <div className="flex-1 text-end">
                          <p className="text-start ml-0 md:ml-40 md:text-lg text-gray-700 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                  ))}
                </div>
              </div>

              {/* Get Started Section */}
              <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="mt-40 text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Get Started
                  </h3>
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-base md:text-lg text-center text-gray-700">
                      Explore how Makamat's RFID solutions can transform your operations
                    </p>
                    <a target={'_blank'} href={'https://rfid.sa '} className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-1 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                      Learn More
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        </main>
        <Footer />
      </>
  );
};

export default SolutionsPage;