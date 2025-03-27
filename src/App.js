import React, { useEffect } from 'react';
import Mynavbar from './components/Mynavbar';
import "./assets/css/index.css";
import Aboutus from './components/Aboutus';
import Plans from './components/Plans';
import Amenities from './components/Amenities';
import Home from './pages/Home';
import ContactUs from './components/ContactUs';

const App = () => {
  useEffect(() => {
    const navbar = document.querySelector('.navbar');

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1); // Remove the '#' from href
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for fixed navbar height
          behavior: 'smooth',
        });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (<>
    <div className="maincontainer">
      <Mynavbar />
        <section id="home">
          <Home />
        </section>
      <div style={{ padding: '0px 70px 0px 70px' }}>
        {/* Each section has an id for anchor scrolling */}
        <section id="about">
          <Aboutus />
        </section>
        <section id="amenities">
          <Amenities />
        </section>
        <section id="plans">
          <Plans />
        </section>
        <section id="contact">
          <ContactUs />
        </section>
      </div>
    </div>

<div className="mobile-coming-soon">
📱 Mobile version coming soon...
</div>
  </>
  );
};

export default App;