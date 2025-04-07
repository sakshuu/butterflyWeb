import React, { useEffect, useRef } from 'react';
import Mynavbar from './components/Mynavbar';
import './assets/css/index.css';
import Aboutus from './components/Aboutus';
import Plans from './components/Plans';
import Amenities from './components/Amenities';
import ContactUs from './components/ContactUs';
import { covermain } from './assets/img';

const App = () => {
  const contactRef = useRef(null); 

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

 
  const handleScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start', 
      });
    }
  };

  return (
    <>
      <div className="maincontainer">
        <Mynavbar />
        <section id="home">
          <div className="content">
            <img
              draggable={false}
              src={covermain}
              alt="Background"
              className='backgroundcolorcontent'
            />
            <div className="mainsecation">
              <div >
              <h1
                className="heroheadingmainsecation">
                The Butterfly <br />
                Where Luxury <br /> Takes Flight
              </h1>
                  </div>
              <p className="heroparamainsecation" >
                The Butterfly represents liberation, beauty and aspiration, just <br /> like the life you deserve. It is a 3 & 2 BHK ultra - luxurious project <br /> designed to fulfill your desires, much like the joy of witnessing a <br /> butterfly in flight.
              </p>
              <div
              className='btn-main-home-secation'>
                <button
                  className="goldBtn home-goldBtn"
                  style={{ fontFamily: 'Outfit' }}
                  onClick={handleScrollToContact} 
                >
                  Book Your Dream House
                </button>
              </div>
            </div>
          </div>
        </section>

        <div style={{ padding: '0px 70px 0px 70px' }}>

          <section id="about">
            <Aboutus />
          </section>
          <section id="amenities">
            <Amenities />
          </section>
          <section id="plans">
            <Plans />
          </section>
          <section id="contact" ref={contactRef}> 
            <ContactUs />
          </section>
        </div>
      </div>

      <div className="mobile-coming-soon">📱 Mobile version coming soon...</div>
    </>
  );
};

export default App;
