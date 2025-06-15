import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';

const GBMSTeamMemberPage = () => {
    const { id } = useParams();

    const teamMembers = {
        'alia-al-ahmar': {
            name: "Alia'a Al Ahmar",
            title: "Operations Manager",
            image: "/human-1.png",
            education: "A Bachelor Degree holder in Medical Laboratory from the Jordan University of Science and Technology, with 12 years' experience in retail customer service and expertise in supply chain, procurement, inventory and cost reduction optimization.",
            skills: "Proven skills in warehouse management, supply chain logistics, and inventory management using the latest IT systems. Proficient in maintaining quality service, storage safety compliance, new item inclusion, software testing, business reporting, and developing corrective action and forecasting plans. Strong negotiation and interpersonal skills with ability to interact effectively with clients and internal teams."
        },
        'kassem-badran': {
            name: "Kassem Badran",
            title: "Sales Manager",
            image: "/human-4.png",
            education: "Holder of a Bachelor of Science in Biomedical Engineering from King Saud University and over 13 years of experience in the Saudi Arabian healthcare sector, specializing in respiratory and sleep therapy solutions.",
            skills: "Kassem has a proven track record of successfully building and maintaining long-term customer relationships, and consistently exceeding sales targets. His expertise spans across respiratory products such as CPAP, BiPAP, NIV, and various diagnostic tools. He possesses a deep understanding of the Saudi healthcare market and is committed to achieve continued success."
        },
        'ahmed-hassan': {
            name: "Dr. Ahmed Hassan",
            title: "Medical Director",
            image: "/human-2.png",
            education: "Medical Doctor specializing in Pulmonology with over 15 years of clinical experience in respiratory medicine and sleep disorders treatment.",
            skills: "Expert in respiratory medicine, sleep disorder diagnosis and treatment, medical device evaluation, and clinical research. Provides medical oversight for product selection and clinical applications."
        },
        'sarah-al-rashid': {
            name: "Sarah Al-Rashid",
            title: "Technical Support Lead",
            image: "/human-3.png",
            education: "Biomedical Technology degree with specialized training in medical device maintenance and repair, with 8+ years of experience in technical support.",
            skills: "Expert in medical device troubleshooting, preventive maintenance, customer technical training, and field service support. Proficient in various respiratory and sleep therapy equipment."
        }
    };

    const member = teamMembers[id];

    if (!member) {
        return (
            <>
                <Header />
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">Team Member Not Found</h1>
                        <Link to="/gbms" className="text-blue-600 hover:text-blue-800">
                            Back to GBMS
                        </Link>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
                {/* Main Content Container */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Profile Section */}
                    <AnimatedSection animation="fadeInUp" delay={200}>
                        <div className="text-center mb-8 md:mb-12">
                            {/* Profile Image */}
                            <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-6 md:mb-8 overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover rounded-[25px] md:rounded-[50px]"
                                />
                            </div>

                            {/* Name and Title */}
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                {member.name}, <span className="font-normal">{member.title}</span>
                            </h1>

                            {/* Blue Progress Bar */}
                            <div className="w-3/4 blur-sm mt-5 mx-auto bg-gray-200 rounded-full h-3 mb-6 md:mb-8">
                                <div className="bg-blue-500 h-3 rounded-full"></div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 max-w-5xl mx-auto space-y-6">
                        {/* Education */}
                        <AnimatedSection animation="fadeInLeft" delay={400}>
                            <div className="space-y-6">
                                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                    {member.education}
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Skills */}
                        <AnimatedSection animation="fadeInRight" delay={600}>
                            <div className="space-y-6">
                                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                    {member.skills}
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Back Navigation */}
                    <AnimatedSection animation="fadeInUp" delay={800}>
                        <div className="text-center mt-12 md:mt-16">
                            <Link
                                to="/gbms"
                                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-base md:text-lg transition-colors duration-300"
                            >
                                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to GBMS Team
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default GBMSTeamMemberPage;