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
              style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
            />
            <div className="mainsecation">
              <h1
                className="heroheading"
                style={{
                  textAlign: 'right',
                  fontFamily: 'TT Nooks Trial',
                  fontWeight: '700',
                  lineHeight: '2.5rem',
                  fontSize: '2.9rem',
                }}
              >
                The Butterfly <br />
                Where Luxury <br /> Takes Flight
              </h1>
              <p
                style={{
                  fontFamily: 'Outfit',
                  fontWeight: '400',
                  fontSize: '1rem',
                }}
              >
                The Butterfly represents liberation, beauty and aspiration, just <br /> like the life you deserve. It is a 3 & 2 BHK ultra - luxurious project <br /> designed to fulfill your desires, much like the joy of witnessing a <br /> butterfly in flight.
              </p>
              <div
                className="d-flex justify-content-end"
                style={{ marginTop: '-30px', marginBottom: '10px' }}
              >
                <button
                  className="goldBtn"
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
