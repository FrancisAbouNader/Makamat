import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

const GBMSPage = () => {
    const gbmsLogoFiles = [
        '19.png',
        '20.png',
        '21.png',
        'Creative Medical.png',
        'IMC.png',
        'MIR.png',
        'Nocaacare.png',
        'Nutricia.png',
        'Philips Respironics.png',
        'Posthorax.png',
        'Tracoe.png'
    ];

    const gbmsClients = gbmsLogoFiles.map((file) => ({
        name: file.replace('.png', '').replace(/-/g, ' '),
        logo: `/GBMS Clients Logo/${file}`
    }));
    const teamMembers = [
        { id: 'alia-al-ahmar', name: "Alia'a Al Ahmar", title: 'Operations Manager', image: '/human-1.png' },
        { id: 'kassem-badran', name: 'Kassem Badran', title: 'Sales Manager', image: '/human-4.png' },
        { id: 'ahmed-hassan', name: 'Meraj Uddin Ahmed', title: ' Credit Control and Receivables Manager', image: '/human-2.png' },
        { id: 'sarah-al-rashid', name: 'Bashayer Al Otaibi', title: 'HR Operations Senior Specialist', image: '/human-3.png' }
    ];

    const [teamRef, visibleTeam] = useStaggeredAnimation(teamMembers.length, 150);

    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="py-16 md:py-40 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                            {/* Left: Image */}
                            <AnimatedSection animation="fadeInLeft" delay={200}>
                                <div className="order-2 lg:order-1">
                                    <div className="relative">
                                        <img
                                            src="/background_6.png"
                                            alt="Medical professionals in surgery"
                                            className="w-full h-[650px] object-cover rounded-[20px] md:rounded-[40px]"
                                        />
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Right: Content */}
                            <AnimatedSection animation="fadeInRight" delay={400}>
                                <div className="order-1 lg:order-2 space-y-6">
                                    <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900">
                                        Global Bases Medical Supplies
                                    </h1>

                                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                        Global Bases Medical Supplies, founded in 2011, is a leading provider of cutting-edge healthcare technology solutions in Saudi Arabia. We collaborate with healthcare professionals to optimize therapies that address unmet medical needs and improve patient outcomes. Acquired by Makamat in 2017, the company has since reshaped its structure to serve the growing needs of healthcare institutions across the Kingdom.
                                    </p>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* Our Mission Section */}
                <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                            {/* Left: Content */}
                            <AnimatedSection animation="fadeInLeft" delay={200}>
                                <div className="space-y-6">
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                                        Our Mission
                                    </h2>

                                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                        To enhance patient experiences by delivering innovative healthcare technologies and exceptional support throughout the customer journey. With compassion at our core, our solutions are already transforming two lives every second—marking the beginning of a broader healthcare revolution.                                    </p>
                                </div>
                            </AnimatedSection>

                            {/* Right: Image */}
                            <AnimatedSection animation="fadeInRight" delay={400}>
                                <div className="order-2 lg:order-1">
                                    <div className="relative flex justify-center lg:justify-end">
                                        <img
                                            src="/background_7.png"
                                            alt="Medical professionals in surgery"
                                            className="bject-contain rounded-[20px] md:rounded-[40px]"
                                        />
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* Core Values Section */}
                <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <AnimatedSection animation="fadeInUp" delay={200}>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center lg:text-left">
                                Core Values
                            </h2>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            <AnimatedSection animation="fadeInUp" delay={300}>
                                <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-4 md:gap-6">
                                    <div
                                        style={{
                                            background: 'linear-gradient(-143.1deg, #38C2DB 0%, #3D6F8E 100%)',
                                        }}
                                        className="h-12 w-12 md:h-16 md:w-16 rounded-full flex-shrink-0"
                                    ></div>
                                    <h3 className="text-base md:text-lg font-semibold text-gray-900">
                                        Customer-Centric Approach
                                    </h3>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection animation="fadeInUp" delay={450}>
                                <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-4 md:gap-6">
                                    <div
                                        style={{
                                            background: 'linear-gradient(-143.1deg, #38C2DB 0%, #3D6F8E 100%)',
                                        }}
                                        className="h-12 w-12 md:h-16 md:w-16 rounded-full flex-shrink-0"
                                    ></div>
                                    <h3 className="text-base md:text-lg font-semibold text-gray-900">
                                        Commitment to Improving Patient Health
                                    </h3>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection animation="fadeInUp" delay={600}>
                                <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-4 md:gap-6">
                                    <div
                                        style={{
                                            background: 'linear-gradient(-143.1deg, #38C2DB 0%, #3D6F8E 100%)',
                                        }}
                                        className="h-12 w-12 md:h-16 md:w-16 rounded-full flex-shrink-0"
                                    ></div>
                                    <h3 className="text-base md:text-lg font-semibold text-gray-900">
                                        Trust and Reliability
                                    </h3>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* Unique Value Added Section */}
                <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <AnimatedSection animation="fadeInUp" delay={200}>
                            <div className="mb-8 md:mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Unique Value Added
                                </h2>
                                <p className="text-base md:text-lg text-gray-700">
                                    Global Bases specializes in medical technology for conditions like COPD and Sleep Apnea.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Medical Devices */}
                        <div className=" items-center grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
                            {/* NIV Therapy */}
                            <AnimatedSection animation="fadeInLeft" delay={400}>
                                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                                    <div className="flex-shrink-0">
                                        <img
                                            src="/item-1.png"
                                            alt="NIV Therapy Device"
                                            className="w-60 h-32 md:h-60 object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">NIV Therapy</h3>
                                        <p className="text-sm md:text-base text-gray-700">
                                            Simplified home setup, pressure customization, and oxygen therapy integration.
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* VPAP COPD Systems */}
                            <AnimatedSection animation="fadeInRight" delay={600}>
                                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                                    <div className="flex-shrink-0">
                                        <img
                                            src="/item-2.png"
                                            alt="VPAP COPD System"
                                            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">VPAP COPD Systems</h3>
                                        <p className="text-sm md:text-base text-gray-700">
                                            Designed for comfort, climate control, and compatibility with different stages of COPD.
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* Partnership Values Section */}
                <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <AnimatedSection animation="fadeInUp" delay={200}>
                            <div className="text-center mb-12 md:mb-16">
                                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                                    Building long-term partnerships with healthcare providers through
                                </h2>
                            </div>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            {/* Technological Innovation */}
                            <AnimatedSection animation="fadeInUp" delay={300}>
                                <div className="flex flex-col text-center items-center justify-center">
                                    <div className="flex-shrink-0 mb-4">
                                        <img
                                            src="/icon-1.png"
                                            alt="Technological Innovation"
                                            className="w-3/4 mx-auto max-w-[200px]"
                                        />
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                                        Technological Innovation
                                    </h3>
                                </div>
                            </AnimatedSection>

                            {/* Exceptional Service */}
                            <AnimatedSection animation="fadeInUp" delay={450}>
                                <div className="flex flex-col text-center items-center justify-center">
                                    <div className="flex-shrink-0 mb-4">
                                        <img
                                            src="/icon-2.png"
                                            alt="Exceptional Service"
                                            className="w-3/4 mx-auto max-w-[200px]"
                                        />
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                                        Exceptional pre- and post-sale service
                                    </h3>
                                </div>
                            </AnimatedSection>

                            {/* Targeted Solutions */}
                            <AnimatedSection animation="fadeInUp" delay={600}>
                                <div className="flex flex-col text-center items-center justify-center">
                                    <div className="flex-shrink-0 mb-4">
                                        <img
                                            src="/icon-3.png"
                                            alt="Targeted Solutions"
                                            className="w-3/4 mx-auto max-w-[200px]"
                                        />
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                                        Targeted solutions for respiratory and sleep-related conditions
                                    </h3>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* Management Team Section */}
                <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <AnimatedSection animation="fadeInUp" delay={200}>
                            <div className="mb-8 md:mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    Management Team
                                </h2>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed ">
                                    Makamat's leadership is shaped by experience, vision, and a shared commitment to excellence. Each member of the team contributes unique insight and expertise, working together to drive innovation, ensure operational integrity, and support the company's long-term growth.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Team Grid */}
                        <div ref={teamRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {teamMembers.map((member, index) => (
                                <div 
                                    key={index}
                                    className={`rounded-2xl p-6 md:p-8 ${
                                        visibleTeam.has(index) 
                                            ? 'opacity-100 translate-y-0' 
                                            : 'opacity-0 translate-y-8'
                                    }`}
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full  object-cover rounded-lg mb-4"
                                        />
                                        <h3 className="text-lg md:text-xl text-gray-900 mb-2">
                                            <span className="font-bold">{member.name}</span>, {member.title}
                                        </h3>
                                        <p className="text-gray-600 text-start text-sm leading-relaxed mb-4">
                                            {index === 0 && "Expert in supply chain, inventory optimization, and compliance with over 12 years in customer service and logistics."}
                                            {index === 1 && "Biomedical Engineer with 13+ years in respiratory and sleep therapy sales in the Saudi market."}
                                            {index === 2 && "Pulmonologist with 15+ years of experience in respiratory medicine and sleep disorders treatment."}
                                            {index === 3 && "Biomedical technician specializing in medical device maintenance and customer technical support."}
                                        </p>
                                        <Link
                                            to={`/gbms/team/${member.id}`}
                                            className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors duration-300"
                                        >
                                            Learn More →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Client Partners Section */}
                <section className="py-12 md:py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedSection animation="fadeInUp" delay={200}>
                            <div className="text-center mb-8 md:mb-12">
                                {/* Moving tape container */}
                                <div className="overflow-hidden relative">
                                    <div className="flex animate-scroll space-x-8 md:space-x-16">
                                        {gbmsClients.map((client, index) => (
                                            <div key={index} className="flex items-center justify-center flex-shrink-0 transform hover:scale-110 transition-transform duration-300">
                                                <div className=" flex items-center justify-center w-32">
                                                    <img
                                                        src={client.logo}
                                                        className="h-30 w-30  object-contain filter hover:brightness-110 transition-all duration-300"
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

                {/* Contact Us Section */}
                <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-teal-50 relative overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src="/background_8.png"
                            alt="Medical background"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="flex justify-center">
                            <AnimatedSection className={'w-full'} animation="scaleIn" delay={200}>
                                <div className="bg-transparent backdrop-blur-xl rounded-[80px] md:rounded-[150px] px-6 md:px-10 py-8 md:py-12 shadow-xl max-w-4xl w-full mx-auto">
                                    <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8 md:mb-12">
                                        Contact Us
                                    </h2>

                                    {/* Riyadh Office */}
                                    <div className="mb-8 md:mb-10">
                                        <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-4 mb-3">
                                            <svg className="w-5 h-5 md:w-6 md:h-6 text-black flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <div>
                                                <h3 className="font-bold text-black text-base md:text-lg">Riyadh</h3>
                                                <p className="text-gray-700 text-sm leading-6">
                                                    6122 Western Ring Branch Rd, Floor 2 5178 As Suwaidi<br />
                                                    Al Gharabi Riyadh 12994, Kingdom of Saudi Arabia
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-gray-700 text-sm ml-0 sm:ml-10 space-x-4">
                                            <span>📞 +966 (12) 663-1957</span>
                                            <span className="font-bold">Ext. 101</span>
                                        </div>
                                    </div>

                                    {/* Jeddah Office */}
                                    <div className="mb-6">
                                        <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-4 mb-3">
                                            <svg className="w-5 h-5 md:w-6 md:h-6 text-black flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <div>
                                                <h3 className="font-bold text-black text-base md:text-lg">Jeddah</h3>
                                                <p className="text-gray-700 text-sm leading-6">
                                                    Al Nakheel Center, Clinics Building, Al Madinah Rd, Al<br />
                                                    Hamra Dist., Office 101, Jeddah, Kingdom of Saudi Arabia
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-gray-700 text-sm ml-0 sm:ml-10 space-x-4">
                                            <span>📞 +966 (12) 663-1957</span>
                                            <span className="font-bold">Ext. 101</span>
                                        </div>
                                        <div className="ml-0 sm:ml-10 mt-2 text-sm text-gray-700">📱 0598209921</div>
                                    </div>

                                    {/* Social Icons */}
                                    <div className="flex justify-center sm:justify-end space-x-4 mr-9 mt-6">
                                        <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors duration-300" aria-label="Instagram">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                                     className="bi bi-instagram" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                                </svg>
                                        </a>
                                        <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors duration-300">
                                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM7.1 20.5H3.5v-11h3.6v11zM5.3 8.3c-1.1 0-1.9-.8-1.9-1.9S4.2 4.5 5.3 4.5c1.1 0 1.9.8 1.9 1.9s-.9 1.9-1.9 1.9zm15.2 12.2h-3.6v-5.6c0-1.3-.5-2.2-1.6-2.2-1 0-1.5.7-1.7 1.3-.1.2-.1.5-.1.8v5.7H9.9v-11h3.5v1.5c.5-.7 1.3-1.7 3.2-1.7 2.3 0 4 1.5 4 4.6v6.6z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-40 relative overflow-hidden">
                    <AnimatedSection animation="fadeInUp" delay={200}>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                                Explore More
                            </h3>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <p className="text-gray-700 mb-4 sm:mb-6 flex-1">
                                    Explore GBMS products crafted to support better care.
                                </p>
                                <a target={'_blank'} href={'https://medicalsupplies.sa'} className="bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-1 h-fit rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default GBMSPage;