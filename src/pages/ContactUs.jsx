import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
            const templateParams = {
                from_name: `${formData.firstName} ${formData.lastName}`,
                from_email: formData.email,
                phone_number: formData.phoneNumber,
                message: formData.message,
                to_email: '126ou3atensi@gmail.com' // Your company email
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            setSubmitStatus('success');
            setFormData({
                firstName: '',
                lastName: '',
                phoneNumber: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Email sending failed:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 mt-20">
                    <div className="max-w-7xl mx-auto">
                        <AnimatedSection animation="fadeInUp" delay={200}>
                            <div className="text-center mb-12 md:mb-16">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                    Contact Us
                                </h1>
                                <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
                                    We're here to help. Reach out to us for inquiries, support, or partnership opportunities.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Contact Form and Details Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
                            {/* Contact Form - Left Side (3/4 width) */}
                            <AnimatedSection className="lg:col-span-3" animation="fadeInLeft" delay={400}>
                                <div className="lg:col-span-3">
                                    {/* Success Message */}
                                    {submitStatus === 'success' && (
                                        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                                            <div className="flex items-center">
                                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                Thank you! Your message has been sent successfully. We'll get back to you soon.
                                            </div>
                                        </div>
                                    )}

                                    {/* Error Message */}
                                    {submitStatus === 'error' && (
                                        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                                            <div className="flex items-center">
                                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                                </svg>
                                                Sorry, there was an error sending your message. Please try again or contact us directly.
                                            </div>
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* First Name and Last Name Row */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    disabled={isSubmitting}
                                                    className="w-full px-4 py-3 bg-gray-200 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors duration-200"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    disabled={isSubmitting}
                                                    className="w-full px-4 py-3 bg-gray-200 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors duration-200"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Phone Number and Email Row */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phoneNumber"
                                                    name="phoneNumber"
                                                    value={formData.phoneNumber}
                                                    disabled={isSubmitting}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 bg-gray-200 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors duration-200"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    disabled={isSubmitting}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 bg-gray-200 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors duration-200"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Message Field */}
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={6}
                                                disabled={isSubmitting}
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-gray-200 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors duration-200 resize-none"
                                                required
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <div className="pt-4">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:transform-none"
                                            >
                                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </AnimatedSection>

                            {/* Company Details - Right Side (1/4 width) */}
                            <AnimatedSection className="lg:col-span-1" animation="fadeInRight" delay={600}>
                                <div >
                                    <div className="h-fit">
                                        <h3 className="text-base md:text-lg pb-4 text-center font-bold border-b-2 border-black text-gray-900 mb-6">Company Details</h3>

                                        {/* Headquarters */}
                                        <div className="mb-6 md:mb-8">
                                            <h4 className="font-semibold text-gray-900 mb-3">Headquarters</h4>
                                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                                Al Nakheel Center, Building No. 6704, Office 101<br />
                                                Wazarat Al Dakheliyah Street, Al Hamra'a District<br />
                                                Jeddah 4607 - 23324, Kingdom of Saudi Arabia
                                            </p>
                                        </div>

                                        {/* Phone */}
                                        <div className="mb-4 md:mb-6">
                                            <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                                            <p className="text-xs md:text-sm text-gray-600">+966 12 664 6063</p>
                                            <p className="text-xs md:text-sm text-gray-600">+966 12 664 2023</p>
                                        </div>

                                        {/* Fax */}
                                        <div className="mb-4 md:mb-6">
                                            <h4 className="font-semibold text-gray-900 mb-2">Fax</h4>
                                            <p className="text-xs md:text-sm text-gray-600">+966 12 661 2023</p>
                                        </div>

                                        {/* Email */}
                                        <div className="mb-6 md:mb-8">
                                            <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                                            <p className="text-xs md:text-sm text-blue-600">info@rfid.sa</p>
                                        </div>

                                        {/* Social Media */}
                                        <div className="flex space-x-4 ">
                                            <a target={'_blank'} href="https://www.instagram.com/rfid.sa/?igsh=MXZnc29zcXN3OXQ0dw%3D%3D" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                                         className="bi bi-instagram" viewBox="0 0 16 16">
                                                        <path
                                                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                                    </svg>
                                            </a>
                                            <a target={'_blank'} href="https://www.linkedin.com/company/rfid-sa/posts/?feedView=all" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM7.1 20.5H3.5v-11h3.6v11zM5.3 8.3c-1.1 0-1.9-.8-1.9-1.9S4.2 4.5 5.3 4.5c1.1 0 1.9.8 1.9 1.9s-.9 1.9-1.9 1.9zm15.2 12.2h-3.6v-5.6c0-1.3-.5-2.2-1.6-2.2-1 0-1.5.7-1.7 1.3-.1.2-.1.5-.1.8v5.7H9.9v-11h3.5v1.5c.5-.7 1.3-1.7 3.2-1.7 2.3 0 4 1.5 4 4.6v6.6z"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default ContactPage;