import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';

const SubsidiariesPage = () => {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
                {/* Hero Section with Background Image */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: 'url(/background_4.png)',
                        }}
                    />

                    {/* Content */}
                    <div className="md:absolute -right-20 top-36 z-10 max-w-4xl text-black px-4 sm:px-6 lg:px-8 mb-44 text-center lg:text-left lg:ml-auto">
                        <AnimatedSection animation="fadeInUp" delay={200}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16">
                                Subsidiaries
                            </h1>
                        </AnimatedSection>
                        <AnimatedSection animation="fadeInUp" delay={400}>
                            <p className="text-base md:text-lg leading-relaxed max-w-3xl">
                                Makamat operates through a group of specialized subsidiaries that deliver
                                targeted solutions across key sectors, including healthcare and business
                                technology. Each subsidiary functions independently while aligning with
                                Makamat's overarching commitment to quality, innovation, and service
                                excellence.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* The Value of Each Partnership Section */}
                <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-6xl mx-auto">
                        {/* Section Header */}
                        <AnimatedSection animation="fadeInUp" delay={200}>
                            <div className="text-center mb-12 md:mb-16">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                    The Value of Each Partnership
                                </h2>
                                <p className="text-base md:text-lg text-gray-700 font-bold leading-relaxed max-w-4xl mx-auto">
                                    Partnering with Makamat means gaining access to a network of specialized
                                    subsidiaries, each bringing measurable value to the table
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Value Propositions Container */}
                        <AnimatedSection animation="scaleIn" delay={400}>
                            <div className="relative max-w-4xl mx-auto">
                                {/* Rounded Rectangle Background with Gradient Border */}
                                <div className="relative bg-white rounded-[40px] md:rounded-[60px] p-8 md:p-12 shadow-lg">
                                    {/* Gradient Border Effect */}
                                    <div className="absolute inset-0 rounded-[40px] md:rounded-[60px] p-2 blur-sm bg-gradient-to-r from-teal-300 via-blue-300 to-teal-300">
                                        <div className="bg-white rounded-[36px] md:rounded-[56px] h-full w-full"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 space-y-6 md:space-y-8">
                                        <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                                            <div className="flex-shrink-0">
                                             <img alt="image-1" src='/background_28.png' className='w-[75px]' />
                                            </div>
                                            <div>
                                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Expertise that Delivers</h3>
                                                <p className="text-sm font-bold  leading-relaxed">
                                                    Our subsidiaries lead in their fields, offering advanced healthcare and business tech tailored to market needs.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Strong Regional Reach */}
                                        <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                                            <div className="flex-shrink-0">
                                                <img alt="image-1" src='/background_27.png' className='w-[75px]' />
                                            </div>
                                            <div>
                                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Strong Regional Reach</h3>
                                                <p className="text-sm  font-bold  leading-relaxed">
                                                    Active across Saudi Arabia, Bahrain, and the GCC, we provide direct access to key markets.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Trusted Operations */}
                                        <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                                            <div className="flex-shrink-0">
                                                <img alt="image-1" src='/background_26.png' className='w-[75px]' />
                                            </div>
                                            <div>
                                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Trusted Operations</h3>
                                                <p className="text-sm  font-bold  leading-relaxed">
                                                    Supported by Makamat's infrastructure, our companies ensure reliable service, compliance, and support.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Tech-Focused Innovation */}
                                        <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                                            <div className="flex-shrink-0">
                                                <img alt="image-1" src='/background_25.png' className='w-[75px]' />
                                            </div>
                                            <div>
                                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Tech-Focused Innovation</h3>
                                                <p className="text-sm font-bold  leading-relaxed">
                                                    We embed technology and innovation into everything we do, delivering scalable, future-ready solutions.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Ecosystem for Growth */}
                                        <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                                            <div className="flex-shrink-0">
                                                <img alt="image-1" src='/background_24.png' className='w-[75px]' />
                                            </div>
                                            <div>
                                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Ecosystem for Growth</h3>
                                                <p className="text-sm font-bold  leading-relaxed">
                                                    Partnering with us means tapping into a connected network designed for long-term growth and collaboration.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Sustainable Partnerships Section */}
                <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
                    <div className="max-w-6xl mx-auto">
                        {/* Section Header */}
                        <AnimatedSection animation="fadeInUp" delay={200}>
                            <div className="mb-8 md:mb-12">
                                <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold  mb-4">
                                    Sustainable Partnerships
                                </h2>
                                <p className="text-base md:text-lg font-bold">
                                    "We believe in building long-term relationships, rooted in trust, collaboration, and mutual success."
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                            {/* Left: Image */}
                            <AnimatedSection animation="fadeInLeft" delay={400}>
                                <div className="order-2 lg:order-1">
                                    <div className="rounded-2xl overflow-hidden shadow-lg">
                                        <img
                                            src="/background_5.png"
                                            alt="Sustainable green buildings with modern architecture"
                                            className="w-full h-60 md:h-80 object-cover"
                                        />
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Right: Content */}
                            <AnimatedSection animation="fadeInRight" delay={600}>
                                <div className="order-1 lg:order-2 space-y-6">
                                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                        Our subsidiaries are a direct reflection of this commitment — each one selected for its unique strengths, strategic fit, and potential to drive collective advancement. Together, they form an integrated network that empowers Makamat to deliver specialized, future-forward solutions across diverse industries.
                                    </p>

                                    {/* Subsidiary Buttons */}
                                    <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-end">
                                        <a href="/gbms" className="bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                            GBMS
                                        </a>
                                        <a href="/digilink" className="bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                            DIGILINK
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

export default SubsidiariesPage;