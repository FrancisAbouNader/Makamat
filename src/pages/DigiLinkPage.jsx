import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DigilinkPage = () => {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        {/* Image + Overlay: Hidden on mobile */}
                        <div className="relative h-[calc(100vh-80px)]  overflow-hidden hidden md:block">
                            {/* Background Image */}
                            <img
                                src="/background_9.png"
                                alt="Digital technology solutions"
                                className="w-full h-full object-contain"
                            />

                            {/* Overlay Text Inside Image */}
                            <div className="absolute w-1/2 top-[65%] -translate-y-1/2 right-0 px-10 py-8 rounded-tl-[60px]">
                                <h3 className="text-3xl font-bold text-gray-900 mb-2">Digilink</h3>
                                <p className="text-base font-medium text-gray-700 mb-3">
                                    Business Technology Solutions
                                </p>
                                <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
                                    Digilink is a leading provider of business technology solutions based in Bahrain.
                                    Specializing in innovative and reliable technology services, Digilink helps
                                    businesses thrive in today's ever-evolving digital landscape.
                                </p>
                            </div>
                        </div>

                        {/* Text-only: Visible on mobile only */}
                        <div className="block md:hidden space-y-4 mt-10">
                            <h3 className="text-3xl font-bold text-gray-900">Digilink</h3>
                            <p className="text-base font-medium text-gray-700">Business Technology Solutions</p>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Digilink is a leading provider of business technology solutions based in Bahrain.
                                Specializing in innovative and reliable technology services, Digilink helps
                                businesses thrive in today's ever-evolving digital landscape.
                            </p>
                        </div>
                    </div>
                </section>




                {/* Mission Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left: Content */}
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                    Mission
                                </h2>

                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Our mission is to empower businesses with cutting-edge technology solutions that drive
                                    growth, efficiency, and innovation. We are committed to delivering exceptional service
                                    and building lasting partnerships with our clients across the region.
                                </p>
                            </div>

                            {/* Right: Image */}
                            <div className="order-2 lg:order-1">
                                <div className="relative">
                                    <img
                                        src="/background_10.png"
                                        alt="Business mission and vision"
                                        className="w-3/4 h-80 object-contain rounded-[40px] ml-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Services Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-12">
                            Core Services
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
                            <div className=" relative text-center flex items-center gap-x-6">
                               <img className="min-w-[280px]" src="/background_14.png" />
                                <h3 className="text-md absolute top-[13%] left-[35%] font-semibold text-gray-900">
                                    Cloud Services
                                </h3>
                            </div>
                            <div className=" relative text-center flex items-center gap-x-6">
                                <img className="min-w-[280px]" src="/background_15.png" />
                                <h3 className="text-[15px] absolute top-[10.5%] left-[20%] font-semibold text-gray-900">
                                    Software Development
                                </h3>
                            </div>
                            <div className=" relative text-center flex items-center gap-x-6">
                                <img className="min-w-[280px]" src="/background_12.png" />
                                <h3 className="absolute w-[300px] top-[13%] absolute -left-5 font-semibold text-gray-900">
                                    Network Solutions
                                </h3>
                            </div>
                            <div className=" relative text-center flex items-center gap-x-6">
                                <img className="min-w-[280px]" src="/background_13.png" />
                                <h3 className="text-md absolute top-[13%] left-[30%] font-semibold text-gray-900">
                                    IT Consulting
                                </h3>
                            </div>
                            <div className=" relative text-center flex items-center gap-x-6">
                                <img className="min-w-[280px]" src="/background_11.png" />
                                <h3 className="text-md absolute top-[13%] left-[30%] font-semibold text-gray-900">
                                    Cyber Security
                                </h3>
                            </div>


                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-blue-50 relative overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src={"/background_16.png"}
                            alt="Technology background"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="flex justify-center">
                            <div className="bg-transparent backdrop-blur-xl rounded-[150px] px-10 py-12 shadow-xl max-w-4xl w-full">
                                <h2 className="text-4xl font-bold text-center text-black mb-12">
                                    Contact Us
                                </h2>

                                {/* Bahrain Office */}
                                <div className="mb-10">
                                    <div className="flex items-start space-x-4 mb-3">
                                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div>
                                            <h3 className="font-bold text-black text-lg">Bahrain</h3>
                                            <p className="text-black text-sm leading-6">
                                                Building 123, Road 456, Block 789<br />
                                                Manama, Kingdom of Bahrain
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-black text-sm ml-10 space-x-4">
                                        <span>📞 +973 1234 5678</span>
                                        <span className="font-bold">Ext. 101</span>
                                    </div>
                                    <div className="ml-10 mt-2 text-sm text-black">📧 info@digilink.bh</div>
                                    <div className="ml-10 mt-2 text-sm text-black">📧 <a target={"_blank"} href={'https://digilinkco.com'}>https://digilinkco.com</a></div>

                                </div>


                                {/* Social Icons */}
                                <div className="flex justify-end mr-10 space-x-4 mt-6 ml-9">
                                    <a href="#" className="text-gray-600 hover:text-purple-500">
                                        <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-purple-500">
                                        <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                                            <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM7.1 20.5H3.5v-11h3.6v11zM5.3 8.3c-1.1 0-1.9-.8-1.9-1.9S4.2 4.5 5.3 4.5c1.1 0 1.9.8 1.9 1.9s-.9 1.9-1.9 1.9zm15.2 12.2h-3.6v-5.6c0-1.3-.5-2.2-1.6-2.2-1 0-1.5.7-1.7 1.3-.1.2-.1.5-.1.8v5.7H9.9v-11h3.5v1.5c.5-.7 1.3-1.7 3.2-1.7 2.3 0 4 1.5 4 4.6v6.6z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
};

export default DigilinkPage;