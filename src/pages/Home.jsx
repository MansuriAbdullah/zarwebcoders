import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import TechStack from '../components/TechStack';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';

function Home() {
  return (
    <>
      <Hero />
      <div className="section-bg-violet">
        <About />
      </div>
      <div className="section-bg-teal">
        <TechStack />
      </div>
      <div className="section-bg-amber">
        <WhyChooseUs />
      </div>
      <div className="section-bg-violet">
        <Process />
      </div>
      <div className="section-bg-pink">
        <Testimonials />
      </div>
    </>
  );
}


export default Home;
