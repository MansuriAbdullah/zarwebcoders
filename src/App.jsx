import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AgreementPage from './pages/AgreementPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

// ScrollToTop component to reset scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0a2e] text-slate-900 dark:text-white transition-colors duration-500">
      <Navbar />
      <ScrollToTop />
      <main className="pt-[70px] sm:pt-[80px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/agreement" element={<AgreementPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

