import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GBMSPage = () => {
    const clients = [
        {  logo: "/company-9.png" },
        { logo: "/company-10.png" },
        {  logo: "/company-11.png" },
        { logo: "/company-12.png" }
    ];

    // Duplicate the clients array to create seamless loop
    const duplicatedClients = [...clients, ...clients];

    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left: Image */}
                            <div className="order-2 lg:order-1">
                                <div className="relative">
                                        <img
                                            src="/background_6.png"
                                            alt="Medical professionals in surgery"
                                            className="w-full h-100 object-cover rounded-[40px]"
                                        />
                                </div>
                            </div>

                            {/* Right: Content */}
                            <div className="order-1 lg:order-2 space-y-6">
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                                    Global Bases Medical Supplies
                                </h1>

                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Global Bases Medical Supplies, founded in 2011, is a leading provider of cutting-edge healthcare technology solutions in Saudi Arabia. We collaborate with healthcare professionals to optimize therapies that address unmet medical needs and improve patient outcomes. Acquired by Makamat in 2017, the company has since reshaped its structure to serve the growing needs of healthcare institutions across the Kingdom.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Mission Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left: Content */}
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                    Our Mission
                                </h2>

                                <p className="text-gray-700 leading-relaxed text-lg">
                                    To enhance patient experiences by delivering innovative healthcare technologies and exceptional support throughout the customer journey. At our core, our solutions are patient-first, and second—making a meaningful impact on the healthcare revolution.
                                </p>
                            </div>

                            {/* Right: Image */}
                            <div className="order-2 lg:order-1">
                                <div className="relative">
                                    <img
                                        src="/background_7.png"
                                        alt="Medical professionals in surgery"
                                        className="w-3/4 h-1/2 object-cover rounded-[40px] ml-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-12 ">
                            Core Values
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="text-center  flex items-center gap-x-10">
                                <div
                                    style={{
                                        background: 'linear-gradient(-143.1deg, #38C2DB 0%, #3D6F8E 100%)',
                                    }}
                                    className="h-16 min-w-[65px] rounded-full"
                                ></div>                                <h3 className="text-lg font-semibold text-gray-900">
                                    Customer-Centric Approach
                                </h3>
                            </div>

                            <div className="text-center flex items-center gap-x-10 ">
                                <div
                                    style={{
                                        background: 'linear-gradient(-143.1deg, #38C2DB 0%, #3D6F8E 100%)',
                                    }}
                                    className="h-16 min-w-[65px] rounded-full"
                                ></div>                                <h3 className="text-lg font-semibold text-gray-900">
                                    Commitment to Improving Patient Health
                                </h3>
                            </div>

                            <div  className="text-center flex items-center gap-x-10">
                                <div
                                    style={{
                                        background: 'linear-gradient(-143.1deg, #38C2DB 0%, #3D6F8E 100%)',
                                    }}
                                    className="h-16 min-w-[65px] rounded-full"
                                ></div>                                <h3 className="text-lg font-semibold text-gray-900">
                                    Trust and Reliability
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Unique Value Added Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Unique Value Added
                            </h2>
                            <p className="text-lg text-gray-700">
                                Global Bases specializes in medical technology for conditions like COPD and Sleep Apnea.
                            </p>
                        </div>

                        {/* Medical Devices */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            {/* NIV Therapy */}
                            <div className="flex items-center space-x-6">
                                <div className="flex-shrink-0">
                                    <img
                                        src="/item-1.png"
                                        alt="NIV Therapy Device"
                                        className="w-50 h-50 object-cover rounded-lg"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">NIV Therapy</h3>
                                    <p className="text-gray-700">
                                        Simplified home setup, pressure customization, and oxygen therapy integration.
                                    </p>
                                </div>
                            </div>

                            {/* VPAP COPD Systems */}
                            <div className="flex items-start space-x-6">
                                <div className="flex-shrink-0">
                                    <img
                                        src="/item-2.png"
                                        alt="VPAP COPD System"
                                        className="w-50 h-50 object-cover rounded-lg"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">VPAP COPD Systems</h3>
                                    <p className="text-gray-700">
                                        Designed for comfort, climate control, and compatibility with different stages of COPD.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partnership Values Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">
                                Building long-term partnerships with healthcare providers through
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* Technological Innovation */}
                            <div className="flex flex-col text-center items-center justify-center">
                                <div className="flex-shrink-0">
                                    <img
                                        src="/icon-1.png"
                                        alt="item-1"
                                        className="w-3/4"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    Technological Innovation
                                </h3>
                            </div>

                            {/* Exceptional Service */}
                            <div className="flex flex-col text-center items-center justify-center">
                                <div className="flex-shrink-0">
                                    <img
                                        src="/icon-2.png"
                                        alt="item-1"
                                        className="w-3/4"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    Exceptional pre- and post-sale service
                                </h3>
                            </div>

                            {/* Targeted Solutions */}
                            <div className="flex flex-col text-center items-center justify-center">
                                <div className="flex-shrink-0">
                                    <img
                                        src="/icon-3.png"
                                        alt="item-1"
                                        className="w-3/4"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    Targeted solutions for respiratory and sleep-related conditions
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Management Team Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Management Team
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
                                Makamat's leadership is shaped by experience, vision, and a shared commitment to excellence. Each member of the team contributes unique insight and expertise, working together to drive innovation, ensure operational integrity, and support the company's long-term growth.
                            </p>
                        </div>

                        {/* Team Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Alia'a Al Ahmar */}
                            <div className=" rounded-2xl p-8">
                                <div className="flex flex-col items-center text-center">
                                        <img
                                            src="/human-1.png"
                                            alt="Alia'a Al Ahmar"
                                            className="w-full h-full object-cover"
                                        />
                                    <h3 className="text-xl text-gray-900 mb-2">
                                       <span className="font-bold">Alia'a Al Ahmar </span> , Operations Manager
                                    </h3>
                                    <p className="text-gray-600 text-start text-sm leading-relaxed mb-4">
                                        Expert in supply chain, inventory optimization, and compliance with over 12 years in customer service and logistics.
                                    </p>
                                    <Link
                                        to="/gbms/team/alia-al-ahmar"
                                        className="text-blue-600 text-sm font-medium hover:text-blue-800"
                                    >
                                        Learn More →
                                    </Link>
                                </div>
                            </div>

                            {/* Kassem Badran */}
                            <div className="rounded-2xl p-8">
                                <div className="flex flex-col items-center text-center">
                                        <img
                                            src="/human-4.png"
                                            alt="Kassem Badran"
                                            className="w-full h-full object-cover"
                                        />
                                    <h3 className="text-xl text-gray-900 mb-2">
                                        <span className="font-bold"> Kassem Badran</span> , Sales Manager
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        Biomedical Engineer with 13+ years in respiratory and sleep therapy sales in the Saudi market.
                                    </p>
                                    <Link
                                        to="/gbms/team/kassem-badran"
                                        className="text-blue-600 text-sm font-medium hover:text-blue-800"
                                    >
                                        Learn More →
                                    </Link>
                                </div>
                            </div>

                            {/* Additional Team Member 1 */}
                            <div className=" rounded-2xl p-8">
                                <div className="flex flex-col items-center text-center">
                                        <img
                                            src="/human-2.png"
                                            alt="Team Member"
                                            className="w-full h-full object-cover"
                                        />
                                    <h3 className="text-xl text-gray-900 mb-2">
                                      <span className="font-bold">  Dr. Ahmed Hassan </span> , Medical Director
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        Pulmonologist with 15+ years of experience in respiratory medicine and sleep disorders treatment.
                                    </p>
                                    <Link
                                        to="/gbms/team/ahmed-hassan"
                                        className="text-blue-600 text-sm font-medium hover:text-blue-800"
                                    >
                                        Learn More →
                                    </Link>
                                </div>
                            </div>

                            {/* Additional Team Member 2 */}
                            <div className=" rounded-2xl p-8">
                                <div className="flex flex-col items-center text-center">
                                        <img
                                            src="/human-3.png"
                                            alt="Team Member"
                                            className="w-full h-full object-cover"
                                        />
                                    <h3 className="text-xl text-gray-900 mb-2">
                                        <span className={"font-bold"}> Sarah Al-Rashid </span>, Technical Support Lead
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        Biomedical technician specializing in medical device maintenance and customer technical support.
                                    </p>
                                    <Link
                                        to="/gbms/team/sarah-al-rashid"
                                        className="text-blue-600 text-sm font-medium hover:text-blue-800"
                                    >
                                        Learn More →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Client Partners Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            {/* Moving tape container */}
                            <div className="overflow-hidden relative">
                                <div className="flex animate-scroll space-x-16">
                                    {duplicatedClients.map((client, index) => (
                                        <div key={index} className="flex items-center justify-center flex-shrink-0">
                                            <div className="h-16 flex items-center justify-center min-w-[120px]">
                                                <img
                                                    src={client.logo}
                                                    className="max-h-16 w-auto object-contain"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Contact Us Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-teal-50 relative overflow-hidden">
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
                            <div className="bg-transparent backdrop-blur-xl rounded-[150px] px-10 py-12 shadow-xl max-w-4xl w-full">
                                <h2 className="text-4xl font-bold text-center text-black mb-12">
                                    Contact Us
                                </h2>

                                {/* Riyadh Office */}
                                <div className="mb-10">
                                    <div className="flex items-start space-x-4 mb-3">
                                            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        <div>
                                            <h3 className="font-bold text-black text-lg">Riyadh</h3>
                                            <p className="text-gray-700 text-sm leading-6">
                                                6122 Western Ring Branch Rd, Floor 2 5178 As Suwaidi<br />
                                                Al Gharabi Riyadh 12994, Kingdom of Saudi Arabia
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-gray-700 text-sm ml-10 space-x-4">
                                        <span>📞 +966 (12) 663-1957</span>
                                        <span className="font-bold">Ext. 101</span>
                                    </div>
                                </div>

                                {/* Jeddah Office */}
                                <div className="mb-6">
                                    <div className="flex items-start space-x-4 mb-3">
                                        <svg className="w-6 h-6 text-black mt-1 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div>
                                            <h3 className="font-bold text-black text-lg">Jeddah</h3>
                                            <p className="text-gray-700 text-sm leading-6">
                                                Al Nakheel Center, Clinics Building, Al Madinah Rd, Al<br />
                                                Hamra Dist., Office 101, Jeddah, Kingdom of Saudi Arabia
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-gray-700 text-sm ml-10 space-x-4">
                                        <span>📞 +966 (12) 663-1957</span>
                                        <span className="font-bold">Ext. 101</span>
                                    </div>
                                    <div className="ml-10 mt-2 text-sm text-gray-700">📱 0598209921</div>
                                </div>

                                {/* Social Icons */}
                                <div className="flex justify-end mr-10 space-x-4 mt-6 ml-9">
                                    <a href="#" className="text-gray-600 hover:text-teal-500">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-teal-500">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM7.1 20.5H3.5v-11h3.6v11zM5.3 8.3c-1.1 0-1.9-.8-1.9-1.9S4.2 4.5 5.3 4.5c1.1 0 1.9.8 1.9 1.9s-.9 1.9-1.9 1.9zm15.2 12.2h-3.6v-5.6c0-1.3-.5-2.2-1.6-2.2-1 0-1.5.7-1.7 1.3-.1.2-.1.5-.1.8v5.7H9.9v-11h3.5v1.5c.5-.7 1.3-1.7 3.2-1.7 2.3 0 4 1.5 4 4.6v6.6z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 sm:px-6 lg:px-40 relative overflow-hidden">

                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Explore More
                        </h3>
                        <div className="flex">
                            <p className="text-gray-700 mb-6">
                                Explore GBMS products crafted to support better care.
                            </p>
                            <button className="bg-blue-500 ml-auto hover:bg-blue-600 text-white px-8 py-1 h-fit rounded-full font-medium transition-colors duration-200">
                                Learn More
                            </button>
                        </div>

                    </div>

                </section>
            </main>
            <Footer />
        </>
    );
};

export default GBMSPage;