import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';

const CookiePolicyPage = () => {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-32 mt-20">
                    <div className="mx-auto">
                        <AnimatedSection animation="fadeInUp" delay={200}>
                            <h1 className="text-4xl md:text-5xl font-bold text-[#2F5572] mb-8">
                                Website Cookie Policy
                            </h1>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeInUp" delay={200}>
                            <div className="mb-8">
                                <p className="text-base md:text-lg font-semibold text-gray-900 mb-4">
                                    Effective Date: 21 June 2025
                                </p>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                    This Cookie Policy explains how [Makamat] ("we," "us," or "our") uses cookies and similar tracking technologies
                                    on our website [www.mtc.com.sa] (the "Website"). By continuing to use our Website, you consent to the use of
                                    cookies as described in this policy.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* How We Use Cookies Section */}
                        <AnimatedSection animation="fadeInUp" delay={200}>
                            <div className="mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    How We Use Cookies
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-6 font-semibold">
                                    We use cookies for the following purposes:
                                </p>

                                <ul className="space-y-6 list-disc pl-4">
                                    <li>
                                        <p className="text-gray-700 leading-relaxed">
                                            <strong>Essential Cookies: </strong>
                                            These cookies are strictly necessary for the operation of our Website and enable you to
                                            navigate the site and use its features, such as accessing secure areas. Without these cookies, services you
                                            have asked for, like shopping carts or e-billing, cannot be provided.
                                        </p>
                                    </li>

                                    <li>
                                        <p className="text-gray-700 leading-relaxed">
                                            <strong >Performance and Analytics Cookies: </strong>

                                            These cookies collect information about how visitors use our
                                            Website, such as which pages visitors go to most often, and if they get error messages from web pages.
                                            These cookies do not collect information that identifies a visitor. All information these cookies collect is
                                            aggregated and therefore anonymous. It is only used to improve how a website works.
                                        </p>
                                    </li>

                                    <li>
                                        <p className="text-gray-700 leading-relaxed">
                                            <strong>Functionality Cookies: </strong>

                                            These cookies allow our Website to remember choices you make (such as your
                                            username, language, or the region you are in) and provide enhanced, more personal features. For instance,
                                            a website may be able to provide you with local weather reports or traffic news by storing in a cookie the
                                            region in which you are currently located. These cookies can also be used to remember changes you have
                                            made to text size, fonts, and other parts of web pages that you can customize. They may also be used to
                                            provide services you have asked for such as watching a video or commenting on a blog.
                                        </p>
                                    </li>

                                    <li>
                                        <p className="text-gray-700 leading-relaxed">
                                            <strong>Targeting and Advertising Cookies: </strong>
                                            These cookies are used to deliver advertisements more relevant to
                                            you and your interests. They are also used to limit the number of times you see an advertisement as well as
                                            help measure the effectiveness of the advertising campaign. They are usually placed by advertising
                                            networks with the website operator's permission. They remember that you have visited a website and this
                                            information is shared with other organizations such as advertisers.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Third-Party Cookies Section */}
                        <AnimatedSection animation="fadeInUp" delay={200}>
                            <div className="mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    Third-Party Cookies
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the
                                    Website, deliver advertisements on and through the Website, and so on.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Your Choices Regarding Cookies Section */}
                        <AnimatedSection animation="fadeInUp" delay={200}>
                            <div className="mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    Your Choices Regarding Cookies
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    You have the ability to accept or decline cookies. Most web browsers automatically accept cookies, but you can
                                    usually modify your browser setting to decline cookies if you choose to decline cookies, you may
                                    not be able to fully experience the interactive features of our Website or other websites you visit.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Please refer to your browser's help menu for information on how to manage your
                                    cookie preferences.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* More Information About Cookies Section */}
                        <AnimatedSection animation="fadeInUp" delay={200}>
                            <div className="mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    More Information About Cookies
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    You can learn more about cookies and the following third-party websites:
                                </p>
                                <ul className="space-y-2 list-disc pl-4">
                                    <li>
                                        <strong>AllAboutCookies:</strong>
                                        <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 ml-1">
                                            https://www.allaboutcookies.org/
                                        </a>
                                    </li>
                                    <li>
                                        <strong>Network Advertising Initiative:</strong>
                                        <a href="https://www.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 ml-1">
                                            https://www.networkadvertising.org/
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Changes to This Cookie Policy Section */}
                        <AnimatedSection animation="fadeInUp" delay={200}>
                            <div className="mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    Changes to This Cookie Policy
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new
                                    Cookie Policy on this page. You are advised to review this Cookie Policy periodically for any changes. Changes to
                                    this Cookie Policy are effective when they are posted on this page.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Contact Us Section */}
                        <AnimatedSection animation="fadeInUp" delay={200}>
                            <div className="mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    Contact Us
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    If you have any questions about this Cookie Policy, please contact us:
                                </p>
                                <div className="space-y-2 text-gray-700">
                                    <p>By email: info@rfid.sa</p>
                                    <p>By visiting this page on our website: <a href="/contact" className="text-blue-600 hover:text-blue-800">Contact us</a></p>
                                </div>
                            </div>
                        </AnimatedSection>

                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default CookiePolicyPage;