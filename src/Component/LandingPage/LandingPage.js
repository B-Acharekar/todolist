import React, {useState,useEffect} from 'react';

// import components
import Navbar from './Navbar/navbar'
import HeroSection from './HeroSection/HeroSection';
import Features from './FeatureSection/FeatureSection';
import Testimonials from './TestimonialSection/TestimonialSection';
import Benefits from './BenefitSection/BenefitSection';
import About from './AboutSection/AboutSection'
import CTA from './ctaSection/ctaSection';
import Footer from './Footer/footer';

// import assets
import heroImage from '../../assets/heroImage.jpg';
import AboutImage from '../../assets/AboutImage.png';

const LandingPage = () => {
    return(
<div className="">
    {/* Header */}
    <Navbar />
    
    {/* Main Content */}
    <main className="flex flex-col items-center justify-center pt-18 min-h-screen text-white">
        {/* Hero Section */}
        <HeroSection image={heroImage}/>

        {/* Features Section */}
        <Features/>

        {/* Testimonials Section */}
        <Testimonials/>

        {/* Benefits Section */}
        <Benefits/>

        {/* About Section */}
        <About image={AboutImage}/>

        {/* CTA Section */}
        <CTA/>

    </main>

    {/* Footer Section */}
    <Footer/>


</div>
    )
    
}
export default LandingPage;