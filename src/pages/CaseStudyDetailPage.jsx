import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CaseStudyDetailPage = () => {
    const { id } = useParams();

    const caseStudies = {
        'clorox': {
            company: "The Clorox Company",
            logo: "/company-1.png",
            title: "RFID-Enabled Forklift Safety System to Prevent Warehouse Accidents",
            description: "Makamat implemented an advanced RFID forklift safety system to prevent accidents in Clorox's warehouse operations, boosting both safety and productivity.",
            keyFeatures: [
                "Installation of MTC RFID Forklift Safety Lights at all warehouse intersections.",
                "Audio-visual alarms triggered when personnel enter forklift blind spots within 2-3 meters.",
                "Alerts activated when two loaded forklifts approach intersections within 4-6 meters.",
                "Real-time safety alerts and warnings enabling proactive hazard prevention.",
                "Enabled management to confidently increase picking and loading targets.",
                "Resulted in zero forklift-related accidents post-deployment, enhancing overall workforce safety."
            ]
        },
        'tahakom': {
            company: "Tahakom",
            logo: "/company-2.png",
            title: "RFID-Based Asset Tracking System Integrated with SAP for Operational Accuracy",
            description: "Makamat deployed a comprehensive RFID asset tracking solution to replace Tahakom's manual, error-prone inventory processes with a fully automated system integrated into their existing SAP ecosystem—ensuring real-time asset visibility across all facilities.",
            keyFeatures: [
                "Automated tracking of all assets with real-time location updates.",
                "Manual data entry elimination through seamless RFID integration.",
                "Integration with SAP ERP system for unified asset management and barcode asset numbering.",
                "Real-time visibility on asset location, status, and maintenance decommissioning.",
                "Deployment of mobile RFID readers for field operations with restricted or remote access.",
                "Workflow automation for asset transfers and maintenance scheduling.",
                "Delivered comprehensive training and ongoing technical support."
            ],
            deliveredComponents: [
                "RFID hard on-metal tags for all trackable assets",
                "RFID printers and encoding stations for tag programming",
                "Handheld and sled RFID readers for mobile asset scanning",
                "Custom interface for real-time SAP integration and reporting"
            ]
        },
        'friesland': {
            company: "Friesland Campina",
            logo: "/company-3.png",
            title: "RFID-Driven Forklift Safety System for Secure Warehouse Operations",
            description: "To reduce the risk of forklift-related incidents at Friesland facilities, Makamat implemented an RFID safety system focused on security, visibility, and efficient transfers.",
            keyFeatures: [
                "RFID proximity detection system for forklift operations.",
                "Real-time alerts for personnel in danger zones.",
                "Integration with warehouse management systems.",
                "Comprehensive safety reporting and analytics.",
                "Training programs for safe forklift operations.",
                "Reduced workplace accidents by 95%."
            ]
        },
        'unilever': {
            company: "Unilever",
            logo: "/company-4.png",
            title: "RFID Forklift Safety System for Collision Prevention and Operational Efficiency",
            description: "To mitigate risks of forklift-related accidents, Makamat deployed an RFID collision avoidance safety solution to protect workers and improve operational safety.",
            keyFeatures: [
                "Advanced collision detection technology.",
                "Real-time proximity alerts and warnings.",
                "Integration with existing safety protocols.",
                "Comprehensive operator training programs.",
                "Detailed safety analytics and reporting.",
                "Significant reduction in workplace incidents."
            ]
        },
        'tetra-pak': {
            company: "Tetra Pak",
            logo: "/company-3.png",
            title: "RFID-Enabled Forklift Safety System to Enhance Warehouse Safety and Throughput",
            description: "Makamat implemented an RFID-based forklift safety solution in Tetra Pak warehouses to boost forklift safety during material handling operations.",
            keyFeatures: [
                "Comprehensive forklift safety monitoring system.",
                "Real-time collision avoidance technology.",
                "Integration with warehouse operations.",
                "Enhanced throughput and productivity.",
                "Comprehensive safety training programs.",
                "Significant reduction in safety incidents."
            ]
        },
        'pg': {
            company: "P&G",
            logo: "/company-4.png",
            title: "RFID Capital Assets Tagging for Real-Time Spare Parts and Equipment Monitoring",
            description: "Makamat implemented a comprehensive RFID tagging system for P&G warehouses to manage spare parts and production line components in real time.",
            keyFeatures: [
                "Real-time asset tracking and monitoring.",
                "Automated inventory management.",
                "Integration with production systems.",
                "Predictive maintenance capabilities.",
                "Comprehensive reporting and analytics.",
                "Improved operational efficiency."
            ]
        },
        'saudi-airlines': {
            company: "Saudi Airlines Catering",
            logo: "/company-4.png",
            title: "Smart Automated Food Safety Tracking System",
            description: "Makamat deployed a smart RFID food safety solution to automate compliance and traceability within Saudi Airlines Catering operations.",
            keyFeatures: [
                "Automated food safety compliance tracking.",
                "Real-time temperature monitoring.",
                "Complete traceability throughout the supply chain.",
                "Integration with catering operations.",
                "Comprehensive reporting and compliance.",
                "Enhanced food safety standards."
            ]
        },
        'jac': {
            company: "JAC",
            logo: "/company-2.png",
            title: "Scalable RFID Access Control and Time-Attendance System for Enhanced Operational Visibility",
            description: "Makamat delivered a robust RFID access control and attendance system across multiple JAC locations, improving labor management and operational tracking.",
            keyFeatures: [
                "Multi-location access control system.",
                "Automated time and attendance tracking.",
                "Real-time operational visibility.",
                "Integration with HR systems.",
                "Comprehensive reporting and analytics.",
                "Enhanced security and compliance."
            ]
        }
    };

    const study = caseStudies[id];

    if (!study) {
        return (
            <>
                <Header />
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
                        <Link to="/case-studies" className="text-blue-600 hover:text-blue-800">
                            Back to Case Studies
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
            <main className="min-h-screen relative bg-white overflow-hidden">
                {/* Blurred Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                    style={{ backgroundImage: 'url(/background_3.png)' }}
                />

                {/* Frosted Glass Card */}
                <div className="relative z-10 flex justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl w-full bg-white/60 backdrop-blur-lg rounded-[150px] p-20 space-y-8">
                        {/* Logo */}
                        <div className="flex">
                            <img
                                src={study.logo}
                                alt={study.company}
                                className="h-16 w-auto object-contain"
                            />
                        </div>

                        {/* Title */}
                        <h1 className="text-xl font-bold text-gray-900 leading-tight">
                            {study.title}
                        </h1>

                        {/* Description */}
                        <p className="text-start text-lg text-gray-700 leading-relaxed text-center">
                            {study.description}
                        </p>

                        {/* Key Features */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold text-gray-900">
                                Key Features and Benefits:
                            </h2>
                            <ul className="space-y-3 ml-5 list-disc list-inside text-gray-700">
                                {study.keyFeatures.map((feature, index) => (
                                    <li key={index}>
                                       {feature}
                                    </li>
                                ))}
                                <li>
                                    Delivered Components Include:
                                </li>
                                <ul className="space-y-3 ml-5 list-disc list-inside text-gray-700">
                                    {study.deliveredComponents.map((component, index) => (
                                        <li key={index}>{component}</li>
                                    ))}
                                </ul>
                            </ul>
                        </div>

                        {/* Delivered Components (Optional) */}
                        {study.deliveredComponents && (
                            <div className="space-y-4">


                            </div>
                        )}

                        {/* Back Button */}
                        <div className="pt-8 text-center">
                            <Link
                                to="/case-studies"
                                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-lg"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Case Studies
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default CaseStudyDetailPage;