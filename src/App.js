import React, { useEffect, useRef } from 'react';
import Mynavbar from './components/Mynavbar';
import './assets/css/index.css';
import Aboutus from './components/Aboutus';
import Plans from './components/Plans';
import Amenities from './components/Amenities';
import ContactUs from './components/ContactUs';
import { covermain, MobileCoverbg } from './assets/img';

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
              className='backgroundcolorcontent'/>
              {/* side text */}
            <div className="mainsecation">
              <div >
              <h1
                className="heroheadingmainsecation">
                The Butterfly <br />
                Where Luxury <br /> Takes Flight
              </h1>
         
                  </div>
              <p className="heroparamainsecation">
                The Butterfly represents liberation, beauty and aspiration, just  like the life you deserve. It is a 3 & 2 BHK ultra - luxurious project designed to fulfill your desires, much like the joy of witnessing a butterfly in flight.
              </p>
              <div
              className='btn-main-home-secation'>
                <button
                  className="goldBtn home-goldBtn"
                  style={{ fontFamily: 'Outfit' }}
                  onClick={handleScrollToContact} >
                  Book Your Dream House
                </button>
              </div>
            </div>
          </div>
          {/* mobile view start*/}
          <div className="content-mobile-view">
            <img
              draggable={false}
              src={MobileCoverbg}
              alt="Background"
              className='backgroundcolorcontent-mobile-view'/>
             <div className="mainsecation-mobile-view">
              <div>
              <h1
                className="heroheadingmainsecation-mobile-view">
                The Butterfly <br />
                Where Luxury <br /> Takes Flight
              </h1>
                  </div>
                  <div className="hero-text-container">
              <p className="heroparamainsecation-mobile-view">
                The Butterfly represents liberation, beauty and aspiration, just like the life you deserve. It is a 3 & 2 BHK ultra - luxurious project designed to fulfill your desires, much like the joy of witnessing a butterfly in flight.
              </p>
                  </div>
              <div
              className='btn-main-home-secation-mobile-view'>
                <button
                  className="goldBtn-mobile-view home-goldBtn-mobile-view"
                  style={{ fontFamily: 'Outfit' }}
                  onClick={handleScrollToContact} >
                  Book Your Dream House
                </button>
              </div>
            </div> 
          </div>
        </section>

        <div id='main-desktop-section-padding'>
          <section id="about">
            <Aboutus/>
          </section>
          <section id="amenities">
            <Amenities/>
          </section>
          <section id="plans">
            <Plans/>
          </section>
          <section id="contact" ref={contactRef}> 
            <ContactUs/>
          </section>
        </div>
      </div>

    </>
  );
};

export default App;
