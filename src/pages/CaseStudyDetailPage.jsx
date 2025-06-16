import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';

const CaseStudyDetailPage = () => {
    const { id } = useParams();

    const caseStudies = {
        'clorox': {
            company: "The Clorox Company",
            logo: "/company-1.png",
            title: "RFID-Enabled Forklift Safety System to Prevent Warehouse Accidents",
            description: "Makamat implemented an advanced RFID forklift safety system to prevent accidents in Clorox’s warehouse operations, boosting both safety and productivity.",
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
            logo: "/company-5.png",
            title: "RFID-Based Asset Tracking System Integrated with SAP for Operational Accuracy",
            description: "Makamat deployed a comprehensive RFID asset tracking solution to replace Tahakom's manual, error-prone inventory processes with a fully automated system integrated into their existing SAP ecosystem—ensuring real-time asset visibility across all facilities.",
            keyFeatures: [
                "Automated tracking of capital assets across Tahakom sites, eliminating manual data entry and barcode errors.",
                "Integration with SAP EWM module to interface asset EPCs linked to existing barcode asset numbers.",
                "Real-time visibility on asset location, status, and maintenance decommissioning.",
                "Deployment of mobile UHF RFID solution enabling field tracking even in restricted or remote areas.",
                "Workflow automation and alerts for asset management activities.",
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
            logo: "/company-4.png",
            title: "Solution: RFID-Driven Forklift Safety System for Secure Warehouse Exits",
            description: "To reduce the risk of forklift-related incidents at warehouse exits, Makamat deployed an RFID-enabled forklift safety solution at FrieslandCampina’s Jeddah facility—focusing on secure trailer loading and inter-warehouse transfers.",
            keyFeatures: [
                "MTC RFID Forklift Safety Lights installed at all warehouse exits",
                "Real-time audio/visual alerts activated when:",
                "Personnel are within 2–3 meters in front, behind, or in forklift blind spots.",
                "Two loaded forklifts approach an intersection within 4–6 meters.",
                "Reduced risk of accidents during critical loading and transfer operations.",
                "Supported higher throughput without compromising safety.",
                "Enhanced safety culture and operational assurance for all warehouse personnel."
            ],

        },
        'unilever': {
            company: "Unilever",
            logo: "/company-6.png",
            title: "RFID Forklift Safety System for Collision Prevention and Operational Efficiency",
            description: "To mitigate the risk of forklift-related accidents during warehouse operations, Makamat deployed an RFID-enabled forklift safety solution at Unilever’s Jeddah plant—boosting safety protocols while supporting productivity targets.",
            keyFeatures: [
                "Installation of MTC RFID Forklift Safety Lights on all forklifts.",
                "Real-time audio/visual alarms activated when:",
                "Personnel are within 2–3 meters in front, behind, or in forklift blind spots.",
                "Two loaded forklifts approach an intersection within 4–6 meters.",
                "Enabled safer navigation within congested warehouse zones.",
                "Allowed Unilever to increase picking and loading rates without compromising worker safety.",
                "Delivered peace of mind to operational teams through proactive, automated collision alerts.",
            ]
        },
        'tetra-pak': {
            company: "Tetra Pak",
            logo: "/company-2.png",
            title: "RFID-Enabled Forklift Safety System to Enhance Warehouse Safety and Throughput",
            description: "Makamat implemented an RFID-based forklift safety solution at Tetra Pak’s Jeddah plant to mitigate collision risks and improve warehouse safety during material handling operations.",
            keyFeatures: [
                "Installation of MTC RFID Forklift Safety Lights on all forklifts.",
                "Audio/visual alarms triggered in real-time when:",
                "Personnel are within 2–3 meters in front, behind, or in blind spots of moving forklifts.",
                "Two loaded forklifts approach an intersection within 4–6 meters.",
                "Enabled a safer working environment, reducing risk of collisions and near-misses.",
                "Empowered operations to increase picking and loading efficiency without compromising safety.",
                "Delivered operational peace of mind and compliance with internal safety standards.",
            ]
        },
        'pg': {
            company: "P&G",
            logo: "/company-7.png",
            title: "Solution: RFID-Driven Forklift Safety System for Secure Warehouse Exits",
            description:"To reduce the risk of forklift-related incidents at warehouse exits, Makamat deployed an RFID-enabled forklift safety solution at Friesland Campina’s Jeddah facility—focusing on secure trailer loading and inter-warehouse transfers.",
            keyFeatures: [
                "MTC RFID Forklift Safety Lights installed at all warehouse exits.",
                "Real-time audio/visual alarms activated when:",
                "Personnel are within 2–3 meters in front, behind, or in forklift blind spots.",
                "Two loaded forklifts approach an intersection within 4–6 meters.",
                "Reduced risk of accidents during critical loading and transfer operations.",
                "Supported higher throughput without compromising safety.",
                "Enhanced safety culture and operational assurance for all warehouse personnel."
            ]
        },
        'saudi-airlines': {
            company: "Saudi Airlines Catering",
            logo: "/company-3.png",
            title:"Smart Automated Food Rotation Labeling to Enhance Safety and Efficiency",
            description:"Saudi Airlines faced significant operational challenges including time-consuming handwritten labeling, frequent best-before-date calculation errors, complex staff training, and food waste due to improper labeling.\n" +
                "\n" +
                "Makamat implemented a Smart Automated Food Rotation Labeling Solution tailored to meet these pain points and ensure full compliance with food safety standards.",
            keyFeatures: [
              "Quick, 100% accurate, and clear label printing.",
                "Automatic best-before date calculations using an extensive built-in product database.",
                "Label usage tracking to verify adherence to food safety protocols.",
                "A compact, PC-less design optimized for hygienic kitchen environments.",
                "Operation with gloves and resistance to moisture, suitable for use near liquids.",
                "Lightweight, portable functionality for easy relocation within the kitchen.",
            ]
        },
        'jac': {
            company: "JAC",
            logo: "/company-8.png",
            title: "Scalable RFID Access Control and Time-Attendance System for Enhanced Operational Visibility",
            description:"Makamat delivered a modular RFID access control and time-attendance solution designed for scalability and integration, enabling real-time personnel tracking and enhanced emergency management.",
            keyFeatures: [
                "Dual-mode RFID system combining low-signal nodal access control with high-signal on-demand location tracking.",
                "Passive RFID personnel badges for secure daily access and dynamic real-time locating.",
                "Integration with Wiegand communication protocol for seamless compatibility with existing access systems.",
                "Scalable architecture allowing expansion and full integration with other Makamat solutions.",
                "Improved accuracy in employee attendance reporting, eliminating manual processes.",
                "Enhanced emergency and evacuation management through real-time personnel visibility.",
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
                <div className="relative z-10 flex justify-center pt-24 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
                    <AnimatedSection animation="scaleIn" delay={200}>
                        <div className="max-w-3xl w-full bg-white/60 backdrop-blur-lg rounded-[80px] md:rounded-[150px] p-8 md:p-20 space-y-6 md:space-y-8">
                            {/* Logo */}
                            <div className="flex justify-center lg:justify-start">
                                <img
                                    src={study.logo}
                                    alt={study.company}
                                    className="h-12 md:h-16 w-auto object-contain"
                                />
                            </div>

                            {/* Title */}
                            <h1 className="text-lg md:text-xl font-bold text-start text-gray-900 leading-tight text-center lg:text-left">
                                {study.title}
                            </h1>

                            {/* Description */}
                            <p className="text-base md:text-lg text-gray-700 text-start leading-relaxed text-center">
                                {study.description}
                            </p>

                            {/* Key Features */}
                            <div className="space-y-4 text-left">
                                <h2 className="text-lg md:text-xl font-bold text-gray-900">
                                    Key Features and Benefits:
                                </h2>
                                <ul className="space-y-2 md:space-y-3 ml-3 md:ml-5 list-disc list-inside text-gray-700 text-sm md:text-base">
                                    {study.keyFeatures.map((feature, index) => (
                                        <li key={index}>
                                           {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Delivered Components (Optional) */}
                            {study.deliveredComponents && (
                                <div className="space-y-4 text-left">
                                    <h3 className="text-base md:text-lg font-bold text-gray-900">
                                        Delivered Components Include:
                                    </h3>
                                    <ul className="space-y-2 md:space-y-3 ml-3 md:ml-5 list-disc list-inside text-gray-700 text-sm md:text-base">
                                        {study.deliveredComponents.map((component, index) => (
                                            <li key={index}>{component}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Back Button */}
                            <div className="pt-6 md:pt-8 text-center">
                                <Link
                                    to="/case-studies"
                                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-base md:text-lg transition-colors duration-300"
                                >
                                    <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    Back to Case Studies
                                </Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default CaseStudyDetailPage;