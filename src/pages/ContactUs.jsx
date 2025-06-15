import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                                Contact Us
                            </h1>
                            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                                We're here to help. Reach out to us for inquiries, support, or partnership opportunities.
                            </p>
                        </div>

                        {/* Contact Form and Details Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                            {/* Contact Form - Left Side (2/3 width) */}
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
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Company Details - Right Side (1/3 width) */}
                            <div className="lg:col-span-1">
                                <div className="h-fit">
                                    <h3 className="text-md pb-4 text-center font-bold  border-b-2 border-black text-gray-900 mb-6">Company Details</h3>

                                    {/* Headquarters */}
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-gray-900 mb-3">Headquarters</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            Al Nakheel Center, Building No. 6704, Office 101<br />
                                            Wazarat Al Dakheliyah Street, Al Hamra'a District<br />
                                            Jeddah 4607 - 23324, Kingdom of Saudi Arabia
                                        </p>
                                    </div>

                                    {/* Phone */}
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                                        <p className="text-sm text-gray-600">+966 12 664 6063</p>
                                        <p className="text-sm text-gray-600">+966 12 664 2023</p>
                                    </div>

                                    {/* Fax */}
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-900 mb-2">Fax</h4>
                                        <p className="text-sm text-gray-600">+966 12 661 2023</p>
                                    </div>

                                    {/* Email */}
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                                        <p className="text-sm text-blue-600">info@fid.sa</p>
                                    </div>

                                    {/* Social Media */}
                                    <div className="flex space-x-4">
                                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                                            </svg>
                                        </a>
                                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM7.1 20.5H3.5v-11h3.6v11zM5.3 8.3c-1.1 0-1.9-.8-1.9-1.9S4.2 4.5 5.3 4.5c1.1 0 1.9.8 1.9 1.9s-.9 1.9-1.9 1.9zm15.2 12.2h-3.6v-5.6c0-1.3-.5-2.2-1.6-2.2-1 0-1.5.7-1.7 1.3-.1.2-.1.5-.1.8v5.7H9.9v-11h3.5v1.5c.5-.7 1.3-1.7 3.2-1.7 2.3 0 4 1.5 4 4.6v6.6z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
};

export default ContactPage;