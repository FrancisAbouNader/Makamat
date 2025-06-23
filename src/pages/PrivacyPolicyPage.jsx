import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';

const PrivacyPolicyPage = () => {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-32 mt-20">
                    <div className="mx-auto">
                        <AnimatedSection animation="fadeInUp" delay={200}>
                            <h1 className="text-4xl md:text-5xl font-bold text-[#2F5572] mb-8">
                                Privacy Policy
                            </h1>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeInUp" delay={400}>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                                This Privacy Policy describes how [Makamat] ("we," "us," or "our") collects, uses, and discloses your information
                                when you visit our website at [www.mtc.com.sa] (the "Website"). By using the Website, you agree to the
                                collection and use of information in accordance with this policy.
                            </p>
                        </AnimatedSection>

                        {/* Section 1: Information We Collect */}
                        <AnimatedSection animation="fadeInUp" delay={600}>
                            <div className="mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    1. Information We Collect
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    We collect several types of information from and about users of our Website, including:
                                </p>
                                <ul className="space-y-4 text-black list-disc pl-4">
                                    <li>
                                        <strong className={'text-black font-bold'}>Personal Information:</strong> This includes information that can be used to identify you, such as your name, email
                                        address, postal address, phone number, and any other information you voluntarily provide to us.
                                    </li>
                                    <li>
                                        <strong className={'text-black font-bold'}>Usage Data:</strong> This includes information about how you access and use the Website, such as your IP address,
                                        computer and operating system, referring URLs, pages viewed, and the dates and times of your visits.
                                    </li>
                                    <li>
                                        <strong className={'text-black font-bold'}>Cookies and Tracking Technologies:</strong> We may use cookies and similar tracking technologies to track the activity
                                        on our Website and hold certain information. Cookies are files with a small amount of data which may
                                        include an anonymous unique identifier.
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Section 2: How We Use Your Information */}
                        <AnimatedSection animation="fadeInUp" delay={800}>
                            <div className="mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    2. How We Use Your Information
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    We use the information we collect for various purposes, including:
                                </p>
                                <ul className="space-y-3 text-gray-700 list-disc ml-4">
                                    <li>To provide and maintain our Website.</li>
                                    <li>To notify you about changes to our Website.</li>
                                    <li>To allow you to participate in interactive features of our Website when you choose to do so.</li>
                                    <li>To provide customer support.</li>
                                    <li>To gather analysis or valuable information so that we can improve our Website.</li>
                                    <li>To monitor the usage of our Website.</li>
                                    <li>To detect, prevent, and address technical issues.</li>
                                    <li>To provide you with news, special offers, and general information about other goods, services, and events
                                        which we offer that are similar to those that you have already purchased or inquired about unless you have
                                        opted not to receive such information.</li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Section 3: Disclosure of Your Information */}
                        <AnimatedSection animation="fadeInUp" delay={1000}>
                            <div className="mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    3. Disclosure of Your Information
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    We may disclose your personal information in the following situations:
                                </p>
                                <ul className="space-y-4 text-gray-700 list-disc pl-4">
                                    <li>
                                        <strong>With Service Providers:</strong> We may share your information with third-party service providers to monitor and
                                        analyze the use of our Website, to contact you.
                                    </li>
                                    <li>
                                        <strong>For Business Transfers:</strong> If we are involved in a merger, acquisition, or asset sale, your Personal Data may
                                        be transferred.
                                    </li>
                                    <li>
                                        <strong>With Affiliates:</strong> We may share your information with our affiliates, in which case we will require those
                                        affiliates to honor this Privacy Policy.
                                    </li>
                                    <li>
                                        <strong>With Business Partners:</strong> We may share your information with our business partners to offer you certain
                                        products, services, or promotions.
                                    </li>
                                    <li>
                                        <strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.
                                    </li>
                                    <li>
                                        <strong>Legal Requirements:</strong> We may disclose your data in the good faith belief that such action is necessary to:
                                        <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                            <li>Comply with a legal obligation.</li>
                                            <li>Protect and defend the rights or property of [Makamat].</li>
                                            <li>Prevent or investigate possible wrongdoing in connection with the Website.</li>
                                            <li>Protect the personal safety of users of the Website or the public.</li>
                                            <li>Protect against legal liability.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Section 4: Security of Your Information */}
                        <AnimatedSection animation="fadeInUp" delay={1200}>
                            <div className="mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    4. Security of Your Information
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    The security of your data is important to us, but remember that no method of transmission over the Internet or
                                    method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect
                                    your Personal Data, we cannot guarantee its absolute security.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Section 5: Links to Other Websites */}
                        <AnimatedSection animation="fadeInUp" delay={1400}>
                            <div className="mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    5. Links to Other Websites
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Our Website may contain links to other websites that are not operated by us. If you click on a third-party link,
                                    you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site
                                    you visit.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    We have no control over and assume no responsibility for the content, privacy policies, or practices of any
                                    third-party sites or services.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Section 6: Children's Privacy */}
                        <AnimatedSection animation="fadeInUp" delay={1600}>
                            <div className="mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    6. Children's Privacy
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Our Website does not address anyone under the age of 13 ("Children"). We do not knowingly collect personally
                                    identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware
                                    that your Children has provided us with Personal Data, please contact us. If we become aware that we have
                                    collected Personal Data from children without verification of parental consent, we take steps to remove that
                                    information from our servers.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Section 7: Changes to This Privacy Policy */}
                        <AnimatedSection animation="fadeInUp" delay={1800}>
                            <div className="mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    7. Changes to This Privacy Policy
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                                    Privacy Policy on this page.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We will let you know via email and/or a prominent notice on our Website, prior to the change becoming
                                    effective and update the "last updated" date at the top of this Privacy Policy.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are
                                    effective when they are posted on this page.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Section 8: Contact Us */}
                        <AnimatedSection animation="fadeInUp" delay={2000}>
                            <div className="mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    8. Contact Us
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    If you have any questions about this Privacy Policy, please contact us:
                                </p>
                                <div className="space-y-2 text-gray-700">
                                    <p>By email: info@rfid.sa</p>
                                    <p>By visiting this page on our website: [Your Contact Page URL]</p>
                                    <p>By phone number: +966 12 6642023</p>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Last Updated */}
                        <AnimatedSection animation="fadeInUp" delay={2200}>
                            <div className="text-center py-8 ">
                                <p className="text-black font-bold font-medium">
                                    Last updated: 21 June 2025
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default PrivacyPolicyPage;