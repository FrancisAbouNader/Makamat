import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import WhyChooseSection from '../components/WhyChooseSection';
import ClientsSection from '../components/ClientsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AffiliatesSection from '../components/AffiliatesSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <WhyChooseSection />
      <ClientsSection />
      <TestimonialsSection />
      <AffiliatesSection />
      <Footer />
    </>
  );
};

export default HomePage;