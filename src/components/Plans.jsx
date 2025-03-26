import React, { useState } from 'react';
import { AboutSide, mapgroup, palgroupA, palgroupB, planA, planB, safarisecond } from '../assets/img';
import "./../assets/css/plan.css";

const Plans = () => {
  const [activePlan, setActivePlan] = useState('2BHK'); // State to track the active plan

  const handleToggle = (plan) => {
    setActivePlan(plan); // Update the active plan when a button is clicked
  };

  return (
    <>
      <div className="plans-section">
        <h2 className="section-subtitle">Floor Plans</h2>
        <h1 className="heroheading">
          Thoughtfully Designed for Space and Comfort, Every Layout Crafted for a Seamless Living Experience.
        </h1>

        <div className="row justify-content-center" style={{ width: '100%', marginTop: '8%' }}>
          <div className="col-lg-6 text-center" style={{ width: '50%' }}>
            {/* Show the appropriate floor plan image based on the active plan */}
            {activePlan === '2BHK' ? (
              <img src={planA} alt="2BHK Plan" className="plan-image" />
            ) : (
              <img src={planB} alt="3BHK Plan" className="plan-image" />
            )}
          </div>
          <div className="col-lg-6 plans-content" style={{ width: '50%', marginTop: '90px' }}>
            {/* Toggle Buttons */}
            <div className="toggle-buttons">
              <button
                className={`toggle-btn ${activePlan === '2BHK' ? 'active' : ''}`}
                onClick={() => handleToggle('2BHK')}
              >
                2BHK
              </button>
              <button
                className={`toggle-btn ${activePlan === '3BHK' ? 'active' : ''}`}
                onClick={() => handleToggle('3BHK')}
              >
                3BHK
              </button>
            </div>

            {/* Show both palgroup images, with a border on the active one */}
            <div className="palgroup-container">
              <img
                src={palgroupA}
                alt="2BHK Group"
                className={`palgroup-image ${activePlan === '2BHK' ? 'active' : ''}`}
              />
              <img
                src={palgroupB}
                alt="3BHK Group"
                className={`palgroup-image ${activePlan === '3BHK' ? 'active' : ''}`}
              />
            </div>

            {/* Description */}
            <p className="plans-description">
              Our floor plans are crafted to offer the perfect balance of space, comfort. With smart layouts that maximize natural light and ventilation, each home is designed for effortless movement and efficient space utilization. Experience a home where design meets comfort, creating the ideal setting for modern living.
            </p>

            {/* Download Brochure Button */}
            <button className="download-btn">Download Brochure</button>
          </div>
        </div>
      </div>

      <p className='text-center heroheading'>88 Acres The  adventurous greener serene and enchanting proposed Deer safari park.</p>
        <div className="row">
          <div className="col-6 text-center">
      <img src={AboutSide} alt=""  style={{width:'70%'}}  />

        </div>
          <div className="col-6 text-center">
      <img src={safarisecond} alt=""  style={{width:'70%'}}  />
          </div>
      </div>



      <h1 className='heroheading'>A Prime Location for a Promising Future,Live, Work, and Thrive in the Perfect Setting.</h1>
      <img src={mapgroup}  style={{width:'100%'}} alt="" />
    </>
  );
};

export default Plans;