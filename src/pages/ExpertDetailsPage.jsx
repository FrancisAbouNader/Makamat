import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';

const ExpertDetailPage = () => {
    const { id } = useParams();

    const experts = {
        "wassim-karanouh": {
            id: "wassim-karanouh",
            name: "Eng. Wassim Karanouh",
            title: "CEO / CFO",
            image: "/background_18.png",
            education: `​​Dedicated and results-oriented building engineer with a passion for leveraging technological advancements - such as AIDC, RFID, and BIM - to deliver optimal ROI. Entrepreneurial innovator with a proven track record of providing unique and valuable solutions across diverse sectors including public safety, construction, corporate, Healthcare and retail supply chain. Extensive technical knowledge and expertise in RFID technology and a deep understanding of the Saudi market enables the creation of exceptional and innovative solutions`,
            experience: `His professional experience includes roles at Concordia University, Montreal Technical College, EBC Inc. and Kabbani Construction Group. Wassim holds a bachelor's and master's degree in construction engineering and management from the University of Concordia, and completed the Innovating in the Digital World in Business Administration, Management and Operations program at London Business School in 2020.`,
        },
        "mohammad-baroum": {
            id: "mohammad-baroum",
            name: "Mohammad Alawi Baroum",
            title: "Co-Founder",
            image: "/background_22.png",
            education: `An entrepreneur and a dynamic business management professional, having rich experience with an outstanding record of achievements. Setting strategic directions to the business and managing the performing team with outstanding leadership qualities are a few of his core strengths.`,
            experience: `Our leadership is experienced in planning for growth and analyzing all aspects of the business overall strategy, which can include inorganic growth. With experience in M&A, they are the heart of that challenge, in guiding the team through every stage of their transaction lifecycle, be it acquisitions, disposals, management buy-outs, buy-ins, fundraising, initial public offerings, takeovers, mergers and strategic reviews.`,
            achievements: [
                'Joined BTC in 2016 CEO of BTC',
                'Board Member of several companies locally and internationally',
                'Shareholder of BTC and its affiliate companies in the region',
            ]
        },
        "zeina-attar": {
            id: "zeina-attar",
            name: "Zeina Attar",
            title: "Chief Legal & HR Advisor",
            image: "/3.png",
            education: `Chief Legal & HR Advisor - With over 13 years of expertise in providing regulatory guidance and advice to individuals and organizations. Holding a Master's Degree in Islamic Finance. Supported by a wealth of experience in solving legal issues affecting business operations and transactions. Successfully published the master's thesis in the Islamic Bank's library. Adept at managing the legal departments' employees to ensure following the best legal practices.`
        },
        "jose-mateos": {
            id: "jose-mateos",
            name: "Jose Mateos",
            title: "Chief Accountant Officer",
            image: "/4.png",
            education: `Jose Mateos - Chief Accountant Officer -CPA of more than 20 years work experience in finance and accounting, risk management for various industries such as in banking, IT technologies, drug manufacturing, RFID technologies and medical equipment distributions. KSA VAT and GAZT administration. Has acquired knowledge of the importance and acceptance of data analytics as a good tool to empower people in the organization and revenue source as well as widening market share in the industry. Jose collaborates with the chief financial officer and oversees a team of financial experts to manage daily financial operations and maintain the company's financial stability.`,
        },
        "carlson-lam": {
            id: "carlson-lam",
            name: "Carlson Lam",
            title: "Chief Technology Officer",
            image: "/background_20.png",
            education: `Carlson Lam, a strategic leader responsible for the IT solutions development at Makamat, has a Bachelor of Applied Science (Electrical Engineering) from the University of Waterloo and a Master of Science (Electronics Engineering) from the University of Hong Kong. He manages the development, implementation, and maintenance of all technology within our organization. Lam's robust skill set includes Product Marketing, Embedded Software, Test Engineering, Engineering Management, and Lean Manufacturing. He brings experience from previous roles at LCT Systems, EY, Convergence Systems Limited, and Autoliv.`
        },
        "abdelmajeed-fayyad": {
            id: "abdelmajeed-fayyad",
            name: "Abdelmajeed Fayyad",
            title: "IT Systems Delivery Manager",
            image: "/background_19.png",
            education: `IT Systems Delivery Manager - He is responsible for the effective distribution of products and services. He leads the field teams, identifying potential challenges and facilitating solutions. He leads Makamats' projects and ensures everything runs smoothly from concept to completion. Abdelmajeed brings with him over 20 years of experience in IT systems, computers, networking and Low Current Hardware systems integration.`
        }
    };

    const member = experts[id];

    if (!member) {
        return (
            <>
                <Header />
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">Expert Not Found</h1>
                        <Link to="/experts" className="text-blue-600 hover:text-blue-800">
                            Back to Our Experts
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
                                    className="w-full h-full rounded-[25px] md:rounded-[50px] object-cover"
                                />
                            </div>

                            {/* Name and Title */}
                            <h1 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                                {member.name} - <span className="font-normal">{member.title}</span>
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
                            <div className="space-y-6 text-start">
                                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                    {member.education}
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Achievements (if available) */}
                        {member.achievements && (
                            <AnimatedSection animation="fadeInUp" delay={500}>
                                <div className="my-3">
                                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-base md:text-lg">
                                        {member.achievements.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedSection>
                        )}

                        {/* Experience */}
                        {member.experience && (
                            <AnimatedSection animation="fadeInRight" delay={600}>
                                <div className="space-y-6 text-start">
                                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                        {member.experience}
                                    </p>
                                </div>
                            </AnimatedSection>
                        )}
                    </div>

                    {/* Back Navigation */}
                    <AnimatedSection animation="fadeInUp" delay={800}>
                        <div className="text-center mt-12 md:mt-16">
                            <Link
                                to="/experts"
                                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-base md:text-lg transition-colors duration-300"
                            >
                                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Our Experts
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default ExpertDetailPage;