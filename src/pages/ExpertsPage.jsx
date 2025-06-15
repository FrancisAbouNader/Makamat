import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ExpertsPage = () => {
    const experts = [
        {
            id: 'wassim-karanouh',
            name: 'Eng. Wassim Karanouh',
            title: 'CEO / CFO',
            image: '/background_18.png',
            expertise: 'RFID & Automation, Strategic Finance',
            description: 'A visionary building engineer with extensive experience in RFID and construction technology, Wassim leads Makamat\'s strategic direction, financial operations, and innovation agenda. His educational background includes a Master’s in Construction Engineering & Management from Concordia University and executive education from London Business School.\n'
        },
        {
            id: 'mohammad-baroum',
            name: 'Mohammad Alawi Baroum',
            title: 'Co-Founder',
            image: '/background_22.png',
            expertise: 'Strategic Management & Investment',
            description: 'An accomplished business strategist, Baroum brings over a decade of leadership in business development and corporate governance. He is CEO of BTC, a board member in several companies, and a shareholder across Makamat’s affiliated entities.\n'
        },

    ];
    const team = [
        {
            id: 'zeina-attar',
            name: 'Zeina Attar',
            title: 'Chief Legal & HR Advisor',
            image: '/3.png',
            expertise: 'Legal Advisory & HR Compliance',
            description: 'Holding a Master’s in Islamic Finance and over 13 years of legal expertise, Zeina provides strategic legal and regulatory counsel and ensures HR and compliance practices are aligned with Saudi labor laws and best practices.\n'
        },
        {
            id: 'jose-mateos',
            name: 'Jose Mateos',
            title: 'Chief Accountant Officer',
            image: '/4.png',
            expertise: 'Financial Control & Tax Compliance',
            description: 'A CPA with over 20 years of experience, Jose ensures financial stability through rigorous accounting practices and KSA VAT compliance. His expertise spans banking, IT, pharmaceuticals, and medical technology sectors.\n'
        },
        {
            id: 'carlson-lam',
            name: 'Carlson Lam',
            title: 'Chief Technology Officer',
            image: '/background_20.png',
            expertise: 'Software Development & Innovation',
            description: 'Carlson leads all technological development at Makamat. With degrees in Electrical and Electronics Engineering, he brings global experience in software development, product marketing, and embedded systems.'
        },
        {
            id: 'abdelmajeed-fayyad',
            name: 'Abdelmajeed Fayyad',
            title: 'IT Systems Delivery Manager',
            image: '/background_19.png',
            expertise: 'IT Integration & Project Delivery',
            description: 'With over two decades in IT and systems integration, AbdelMajeed ensures smooth delivery of Makamat’s technical services, leading projects from planning through execution.\n'
        }
    ]

    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section
                    className="py-20 relative bg-no-repeat bg-bottom bg-contain mb-60"
                >
                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="text-left">
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                                Our Experts
                            </h1>
                            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                                Team Member Profiles
                            </h2>
                            <p className="text-lg text-gray-600 max-w-4xl leading-relaxed">
                                Get to know the passionate minds driving our success. Each team member brings unique skills, insights, and creativity to the table.
                            </p>
                        </div>
                    </div>
                    <img
                        src="/background_17.png"
                        alt="Flowing lines background"
                        className="w-full h-[1000px] absolute top-20 "
                    />
                </section>


                {/* Leadership Description Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-3xl mb-8 font-bold">Leadership Team Overview</p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Makamat's leadership brings together deep expertise in engineering, technology, finance, legal advisory, and
                            strategic management. Since its founding in 2014 by Eng. Wassim Karanouh and Mohammad Alawi Baroum,
                            Makamat has evolved into a trusted holding company with a legacy of delivering high-impact solutions across
                            diverse sectors in Saudi Arabia and the region.
                        </p>
                    </div>
                </section>

                {/* Experts Grid Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-12 items-center justify-items-center">
                            {experts.map((expert, index) => (
                                <div
                                    key={index}
                                    className="bg-white w-3/4 rounded-2xl overflow-hidden flex flex-col  text-start p-6"
                                >
                                    <div className="w-full aspect-[4/3] overflow-hidden rounded-xl mb-6">
                                        <img
                                            src={expert.image || '/human-4.png'}
                                            alt={expert.name || 'Team Member'}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                        {expert.name || 'Kassem Badran'} - <span className="font-normal">{expert.title}</span>
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {expert.description}
                                    </p>
                                    <Link
                                        to={ `/experts/${expert.id}`}
                                        className="text-blue-600 text-sm font-medium hover:text-blue-800"
                                    >
                                        Learn More →
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <p className="text-3xl text-center my-8 font-bold">MTC Management Team</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 items-center justify-items-center ">
                            {team.map((expert, index) => (
                                <div
                                    key={index}
                                    className="bg-white w-3/4 rounded-2xl overflow-hidden flex flex-col  text-start p-6"
                                >
                                    <div className="w-full aspect-[4/3] overflow-hidden rounded-xl mb-6">
                                        <img
                                            src={expert.image || '/human-4.png'}
                                            alt={expert.name || 'Team Member'}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                        {expert.name || 'Kassem Badran'} - <span className="font-normal">{expert.title}</span>
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {expert.description}
                                    </p>
                                    <Link
                                        to={`/experts/${expert.id}`}
                                        className="text-blue-600 text-sm font-medium hover:text-blue-800"
                                    >
                                        Learn More →
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default ExpertsPage;