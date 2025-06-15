import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

const DigilinkPage = () => {
    const services = [
        { name: 'Cloud Services', image: '/background_14.png' },
        { name: 'Software Development', image: '/background_15.png' },
        { name: 'Network Solutions', image: '/background_12.png' },
        { name: 'IT Consulting', image: '/background_13.png' },
        { name: 'Cyber Security', image: '/background_11.png' }
    ];

    const [servicesRef, visibleServices] = useStaggeredAnimation(services.length, 100);

    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                    <div className="max-w-6xl mx-auto">
                        {/* Image + Overlay: Hidden on mobile */}
                        <div className="relative h-[60vh] md:h-[calc(100vh-80px)] overflow-hidden hidden md:block">
                            {/* Background Image */}
                            <AnimatedSection animation="scaleIn" delay={200}>
                                <img
                                    src="/background_9.png"
                                    alt="Digital technology solutions"
                                    className="w-full h-full object-contain"
                                />
                            </AnimatedSection>

                            {/* Overlay Text Inside Image */}
                            <AnimatedSection animation="fadeInRight" delay={600}>
                                <div className="absolute w-full md:w-1/2 top-[65%] -translate-y-1/2 right-0 px-6 md:px-10 py-6 md:py-8 rounded-tl-[40px] md:rounded-tl-[60px]">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Digilink</h3>
                                    <p className="text-sm md:text-base font-medium text-gray-700 mb-3">
                                        Business Technology Solutions
                                    </p>
                                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-xl">
                                        Digilink is a leading provider of business technology solutions based in Bahrain.
                                        Specializing in innovative and reliable technology services, Digilink helps
                                        businesses thrive in today's ever-evolving digital landscape.
                                    </p>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Text-only: Visible on mobile only */}
                        <AnimatedSection animation="fadeInUp" delay={200}>
                            <div className="block md:hidden space-y-4 mt-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Digilink</h3>
                                <p className="text-base font-medium text-gray-700">Business Technology Solutions</p>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Digilink is a leading provider of business technology solutions based in Bahrain.
                                    Specializing in innovative and reliable technology services, Digilink helps
                                    businesses thrive in today's ever-evolving digital landscape.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                            {/* Left: Content */}
                            <AnimatedSection animation="fadeInLeft" delay={200}>
                                <div className="space-y-6">
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                                        Mission
                                    </h2>

                                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                        Our mission is to empower businesses with cutting-edge technology solutions that drive
                                        growth, efficiency, and innovation. We are committed to delivering exceptional service
                                        and building lasting partnerships with our clients across the region.
                                    </p>
                                </div>
                            </AnimatedSection>

                            {/* Right: Image */}
                            <AnimatedSection animation="fadeInRight" delay={400}>
                                <div className="order-2 lg:order-1">
                                    <div className="relative flex justify-center lg:justify-end">
                                        <img
                                            src="/background_10.png"
                                            alt="Business mission and vision"
                                            className="w-3/4 h-60 md:h-80 object-contain rounded-[20px] md:rounded-[40px]"
                                        />
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* Core Services Section */}
                <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <AnimatedSection animation="fadeInUp" delay={200}>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center lg:text-left">
                                Core Services
                            </h2>
                        </AnimatedSection>

                        <div ref={servicesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
                            {services.map((service, index) => (
                                <div 
                                    key={index}
                                    className={`relative text-center flex flex-col items-center transition-all duration-700 transform hover:scale-105 hover:shadow-lg ${
                                        visibleServices.has(index) 
                                            ? 'opacity-100 translate-y-0' 
                                            : 'opacity-0 translate-y-8'
                                    }`}
                                >
                                    <img 
                                        className="w-full max-w-[280px] h-auto object-contain" 
                                        src={service.image} 
                                        alt={service.name}
                                    />
                                    <h3 className="text-sm md:text-base font-semibold text-gray-900 absolute top-[10%] left-1/2 transform -translate-x-1/2 w-full px-4">
                                        {service.name}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-blue-50 relative overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src="/background_16.png"
                            alt="Technology background"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="flex justify-center">
                            <AnimatedSection animation="scaleIn" delay={200}>
                                <div className="bg-transparent backdrop-blur-xl rounded-[80px] md:rounded-[150px] px-6 md:px-10 py-8 md:py-12 shadow-xl max-w-4xl w-full">
                                    <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8 md:mb-12">
                                        Contact Us
                                    </h2>

                                    {/* Bahrain Office */}
                                    <div className="mb-8 md:mb-10">
                                        <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-4 mb-3">
                                            <svg className="w-5 h-5 md:w-6 md:h-6 text-black flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <div>
                                                <h3 className="font-bold text-black text-base md:text-lg">Bahrain</h3>
                                                <p className="text-black text-sm leading-6">
                                                    Building 123, Road 456, Block 789<br />
                                                    Manama, Kingdom of Bahrain
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-black text-sm ml-0 sm:ml-10 space-x-4">
                                            <span>📞 +973 1234 5678</span>
                                            <span className="font-bold">Ext. 101</span>
                                        </div>
                                        <div className="ml-0 sm:ml-10 mt-2 text-sm text-black">📧 info@digilink.bh</div>
                                        <div className="ml-0 sm:ml-10 mt-2 text-sm text-black">📧 <a target="_blank" href="https://digilinkco.com" className="hover:underline">https://digilinkco.com</a></div>
                                    </div>

                                    {/* Social Icons */}
                                    <div className="flex justify-center sm:justify-end space-x-4 mt-6">
                                        <a href="#" className="text-gray-600 hover:text-purple-500 transition-colors duration-300">
                                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="white" viewBox="0 0 24 24">
                                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                            </svg>
                                        </a>
                                        <a href="#" className="text-gray-600 hover:text-purple-500 transition-colors duration-300">
                                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="white" viewBox="0 0 24 24">
                                                <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM7.1 20.5H3.5v-11h3.6v11zM5.3 8.3c-1.1 0-1.9-.8-1.9-1.9S4.2 4.5 5.3 4.5c1.1 0 1.9.8 1.9 1.9s-.9 1.9-1.9 1.9zm15.2 12.2h-3.6v-5.6c0-1.3-.5-2.2-1.6-2.2-1 0-1.5.7-1.7 1.3-.1.2-.1.5-.1.8v5.7H9.9v-11h3.5v1.5c.5-.7 1.3-1.7 3.2-1.7 2.3 0 4 1.5 4 4.6v6.6z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default DigilinkPage;