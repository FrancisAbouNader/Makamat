import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

const CaseStudiesPage = () => {
    const caseStudies = [
        {
            id: 'clorox',
            company: "The Clorox Company",
            logo: "/company-1.png",
            title: "Solution: RFID-Enabled Forklift Safety System to Prevent Warehouse Accidents",
            description: "Makamat implemented an advanced RFID forklift safety system to prevent accidents in Clorox warehouses, significantly reducing workplace incidents.",
            category: "Industrial Safety"
        },
        {
            id: 'tahakom',
            company: "Tahakom",
            logo: "/company-2.png",
            title: "Solution: RFID-Based Asset Tracking System Integrated with SAP for Operational Accuracy",
            description: "Makamat developed a comprehensive RFID asset tracking system integrated with SAP to enhance operational accuracy and improve visibility across all facilities.",
            category: "Asset Management"
        },
        {
            id: 'friesland',
            company: "Friesland Campina",
            logo: "/company-3.png",
            title: "Solution: RFID-Driven Forklift Safety System for Secure Warehouse Operations",
            description: "To reduce the risk of forklift-related incidents at Friesland facilities, Makamat implemented an RFID safety system focused on security, visibility, and efficient transfers.",
            category: "Safety & Logistics"
        },
        {
            id: 'unilever',
            company: "Unilever",
            logo: "/company-4.png",
            title: "Solution: RFID Forklift Safety System for Collision Prevention and Operational Efficiency",
            description: "To mitigate risks of forklift-related accidents, Makamat deployed an RFID collision avoidance safety solution to protect workers and improve operational safety.",
            category: "Collision Safety"
        },
        {
            id: 'tetra-pak',
            company: "Tetra Pak",
            logo: "/company-3.png",
            title: "Solution: RFID-Enabled Forklift Safety System to Enhance Warehouse Safety and Throughput",
            description: "Makamat implemented an RFID-based forklift safety solution in Tetra Pak warehouses to boost forklift safety during material handling operations.",
            category: "Warehouse Safety"
        },
        {
            id: 'pg',
            company: "P&G",
            logo: "/company-4.png",
            title: "Solution: RFID Capital Assets Tagging for Real-Time Spare Parts and Equipment Monitoring",
            description: "Makamat implemented a comprehensive RFID tagging system for P&G warehouses to manage spare parts and production line components in real time.",
            category: "Asset Monitoring"
        },
        {
            id: 'saudi-airlines',
            company: "Saudi Airlines Catering",
            logo: "/company-4.png",
            title: "Solution: Smart Automated Food Safety Tracking System",
            description: "Makamat deployed a smart RFID food safety solution to automate compliance and traceability within Saudi Airlines Catering operations.",
            category: "Food Safety"
        },
        {
            id: 'jac',
            company: "JAC",
            logo: "/company-2.png",
            title: "Solution: Scalable RFID Access Control and Time-Attendance System for Enhanced Operational Visibility",
            description: "Makamat delivered a robust RFID access control and attendance system across multiple JAC locations, improving labor management and operational tracking.",
            category: "Access Control"
        }
    ];

    const [studiesRef, visibleStudies] = useStaggeredAnimation(caseStudies.length, 100);

    return (
        <>
            <Header/>
            <main className="min-h-screen overflow-hidden relative pt-16">
                {/* Half Circle Background with Custom Gradient - positioned to show only left half */}
                <div
                    className="absolute top-24 -right-[350px] w-[650px] h-[650px] blur-md rounded-full pointer-events-none"
                    style={{
                        background: 'linear-gradient(135deg, #007A94 0%, #00262E 100%)'
                    }}
                />

                {/* Content */}
                <section className="relative mt-[200px] z-10 py-28 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto text-left">
                        <AnimatedSection animation="fadeInUp" delay={200}>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Case Studies
                            </h1>
                        </AnimatedSection>
                        <AnimatedSection animation="fadeInUp" delay={400}>
                            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                                Explore how we brought Makamat's digital presence to life through a tailored web experience
                                that reflects its corporate identity and innovation-driven vision.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Case Studies Grid */}
                <section className="relative mt-20 z-10 py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div ref={studiesRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {caseStudies.map((study, index) => (
                                <div 
                                    key={index} 
                                    className={`p-8 transform transition-all duration-700 hover:scale-105 hover:shadow-lg ${
                                        visibleStudies.has(index) 
                                            ? 'opacity-100 translate-y-0' 
                                            : 'opacity-0 translate-y-8'
                                    }`}
                                >
                                    {/* Company Logo and Category */}
                                    <div className="flex items-start gap-x-5">
                                        <img
                                            src={study.logo}
                                            alt={study.company}
                                            className="w-16 h-16 object-contain flex-shrink-0 transform hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="flex-1">
                                            {/* Case Study Title */}
                                            <h4 className="text-xl font-semibold text-gray-900 mb-4 leading-tight hover:text-blue-600 transition-colors duration-300">
                                                {study.title}
                                            </h4>

                                            {/* Description */}
                                            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                                                {study.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-end items-center">
                                        <Link
                                            to={`/case-studies/${study.id}`}
                                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-1 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default CaseStudiesPage;