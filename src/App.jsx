import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Careers from './components/Careers';
import Contact from './components/Contact';
import MCA from './components/MCA';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ minHeight: '100vh', color: '#0f0a2e' }}>
      <Navbar />
      <main className="pt-[100px]">
        {/* Hero - vibrant gradient */}
        <Hero />

        {/* About - soft violet */}
        <div className="section-bg-violet">
          <About />
        </div>

        {/* Services - always has its own bg-services-img */}
        <Services />

        {/* TechStack - teal / mint */}
        <div className="section-bg-teal">
          <TechStack />
        </div>

        {/* Portfolio - indigo */}
        <div className="section-bg-indigo">
          <Portfolio />
        </div>

        {/* Why Choose Us - amber / warm */}
        <div className="section-bg-amber">
          <WhyChooseUs />
        </div>

        {/* Process - violet */}
        <div className="section-bg-violet">
          <Process />
        </div>

        {/* Testimonials - pink */}
        <div className="section-bg-pink">
          <Testimonials />
        </div>

        {/* Careers - teal */}
        <div className="section-bg-teal">
          <Careers />
        </div>

        {/* Contact - has its own bg-contact-img */}
        <Contact />

        {/* Master Client Agreement - Blue/Slate */}
        <div className="section-bg-blue">
          <MCA />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
