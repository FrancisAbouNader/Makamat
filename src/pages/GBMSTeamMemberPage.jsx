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
            education:"A Bachelor Degree holder in Medical Laboratory from the Jordan University of Science and Technology, with 12 years' experience in retail customer service and expertise in supply chain, procurement, inventory and cost reduction optimization.",
            skills: "Proven skills in warehouse management, supply chain logistics, and inventory management using the latest IT systems. Proficient in maintaining quality service, storage safety compliance, new item inclusion, software testing, business reporting, and developing corrective action and forecasting plans. Strong negotiation and interpersonal skills with ability to interact effectively with clients and internal teams."
        },
        'kassem-badran': {
            name: "Kassem Badran",
            title: "Sales Manager",
            image: "/human-4.png",
education:"Holder of a Bachelor of Science in Biomedical Engineering from the Islamic University of Lebanon. Results-oriented Sales Leader with over 13 years of experience driving revenue growth and market penetration within the Saudi Arabian healthcare sector, specializing in Sleep Therapy and Respiratory Care.",
         skills:   " Kassem has a proven track record of success in developing and implementing sales strategies, building key customer relationships, and consistently exceeding sales targets. His professional experience lies in promoting and selling products such as CPAP, BiPAP, NIV, home ventilators, oxygen therapy equipment, and respiratory diagnostic tools. He possesses a deep understanding of the Saudi healthcare landscape and is highly motivated to achieve continued success.",

        },
        'ahmed-hassan': {
            name: "Meraj Uddin Ahmed",
            title: "Credit Control and Receivables Manager",
            image: "/human-2.png",
            education:"Meraj, an MBA in Finance, is a highly accomplished professional with a proven track record of over 15 years in financial management. His extensive expertise encompasses a wide range of critical areas, including credit control, accounts receivable and payable, general ledger maintenance, audit oversight, taxation compliance, intercompany reconciliation, and inventory control.  ",
            skills:"Furthermore, Meraj possesses in-depth knowledge and proficiency in handling sales tax,  VAT, and service tax returns and assessments, ensuring adherence to all relevant regulations and minimizing financial risk. His exceptional analytical and problem-solving skills enable him to identify and address potential issues proactively, while his strong leadership abilities and collaborative mindset make him an invaluable asset in both individual and team settings. Meraj's self-motivated nature and results-oriented approach consistently drive him to exceed expectations and deliver optimal outcomes."
        },
        'sarah-al-rashid': {
            name: "Bashayer Al Otaibi",
            title: "HR Operations Senior Specialist",
            image: "/human-3.png",
            education:"Bashayer's educational background includes a Bachelor of Science in Human Resource Management from the University of Jeddah. This foundation in HR principles and practices has been complemented by hands-on experience in both operations and HR support, contributing to a well-rounded skill set that she brings to GBMED. Her practical experience has allowed her to develop and hone key skills such as leadership, compliance, and data management. " ,
            skills:"These skills are essential for effectively managing teams, ensuring adherence to regulations and procedures, and organizing and interpreting information to support decision-making. In addition to her general HR and operational skills, Bashayer possesses in-depth knowledge of the Saudi Labor System and compliance procedures. This expertise is particularly valuable in the Saudi Arabian context, as it enables her to navigate the specific legal and regulatory requirements governing employment relationships in the country. Overall, Bashayer is a multi-faceted professional with a strong educational foundation, valuable practical experience, and specialized knowledge of the Saudi Arabian labor market. Her leadership abilities, combined with her expertise in HR management and team dynamics, make her a valuable asset to GBMED and position her for continued success in her career.",

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
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-36">
                    {/* Profile Section */}
                    <AnimatedSection animation="fadeInUp" delay={200}>
                        <div className="text-center mb-8 md:mb-12">
                            {/* Profile Image */}
                            <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-6 md:mb-8 overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover rounded-[25px]"
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