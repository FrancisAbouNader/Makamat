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
                            <AnimatedSection animation="fadeInRight" delay={300}>
                                <div className="absolute w-full md:w-1/2 -bottom-20 -translate-y-1/2 right-0 px-6 md:px-10 py-6 md:py-8 rounded-tl-[40px] md:rounded-tl-[60px]">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Digilink</h3>
                                    <p className="text-lg font-medium font-bold mb-3">
                                        Business Technology Solutions
                                    </p>
                                    <p className=" text-md leading-relaxed max-w-xl">
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
                                        Our mission is to empower businesses with cutting-edge technology solutions that drive growth and efficiency. We are committed to providing exceptional service and building long-term partnerships with our clients.
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
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center lg:text-left">Services
                            </h2>
                        </AnimatedSection>
                        <p className="text-gray-7300 leading-relaxed text-base mb-8 md:text-lg">
                            Digilink offers a wide range of services to address your business technology needs                        </p>

                        <div ref={servicesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {services.map((service, index) => (
                                <div 
                                    key={index}
                                    className={`relative text-center w-full  flex flex-col items-center transition-all duration-700 transform hover:scale-105 ${
                                        visibleServices.has(index) 
                                            ? 'opacity-100 translate-y-0' 
                                            : 'opacity-0 translate-y-8'
                                    }`}
                                >
                                    <img 
                                        className=" w-full h-auto object-contain"
                                        src={service.image} 
                                        alt={service.name}
                                    />
                                    <h3 className="text-sm md:text-base font-semibold text-gray-900 absolute top-[13%] left-1/2 transform -translate-x-1/2 w-full px-4">
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

                    <div className="max-w-8xl mx-auto relative z-10">
                        <div className="flex justify-center mx-auto">
                            <AnimatedSection className={'w-full justify-center '} animation="scaleIn" delay={200}>
                                <div className="bg-transparent backdrop-blur-xl mx-auto  rounded-[80px] md:rounded-[150px] px-6 md:px-24 py-8 md:py-12 shadow-xl max-w-4xl w-full">
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
<div className={'w-full flex items-center justify-center '}>
    <a target={'_blank'} href={'https://digilinkco.com'} className="bg-black hover:bg-blue-600 text-center left-1/2 text-white px-6 md:px-16 py-1 h-fit rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
        Learn More
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