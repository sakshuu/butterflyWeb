import React, { useState } from 'react';
import { AboutSide, mapgroup, mapsideimg, palgroupA, palgroupB, palgroupC, palgroupD, planA, planB, planC, planD, safariimg, safarisecond } from '../assets/img';
import "./../assets/css/plan.css";
import ButterflyBrochure from "./../assets/pdf/ButterflyBrochure.pdf"
import { saveAs } from 'file-saver';

const Plans = () => {
  const [activePlan, setActivePlan] = useState('2BHK'); 
  const [activePalgroup, setActivePalgroup] = useState('A'); // 'A' or 'B'

  const handlePlanToggle = (plan) => {
    setActivePlan(plan);
    setActivePalgroup('A');
  };

  const handlePalgroupToggle = (group) => {
    setActivePalgroup(group);
  };

  const getCurrentPlanImage = () => {
    if (activePlan === '2BHK') {
      return activePalgroup === 'A' ? planA : planB;
    } else { // 3BHK
      return activePalgroup === 'A' ? planC : planD;
    }
  };

  const handleDownload = () => {
    const fileUrl = ButterflyBrochure; 
    const fileName = 'ButterflyBrochure.pdf'; 
    saveAs(fileUrl, fileName);
  };

  return (
    <>
      <div className='headingLandingpage'>
        <div style={{fontSize:'1.4rem', fontWeight:'500', textAlign:'left'}}>Floor Plans</div>
        <h1 className='heroheading-landingpage'>Thoughtfully Designed for Space and Comfort, Every Layout Crafted for a Seamless Living Experience.</h1>
      </div>
    
      {/* <div className="row justify-content-start">
        <div className="col-7 text-center">
          <img 
            src={getCurrentPlanImage()} 
            alt={`${activePlan} Plan ${activePalgroup}`} 
            className="plan-image" 
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className="col-5 plans-content">
          <div className="custom-toggle-wrapper d-inline-flex">
            <button
              type="button"
              className={`custom-toggle-btn ${activePlan === "2BHK" ? "active" : ""}`}
              onClick={() => handlePlanToggle("2BHK")}
            >
              2BHK
            </button>
            <button
              type="button"
              className={`custom-toggle-btn ${activePlan === "3BHK" ? "active" : ""}`}
              onClick={() => handlePlanToggle("3BHK")}
            >
              3BHK
            </button>
          </div>

          <div className="palgroup-container">
            {activePlan === '2BHK' ? (
              <>
                <img
                  src={palgroupA}
                  alt="Group A"
                  className={`palgroup-image ${activePalgroup === 'A' ? 'active' : ''}`}
                  onClick={() => handlePalgroupToggle('A')}
                  style={{ cursor: 'pointer' }}
                />
                <img
                  src={palgroupB}
                  alt="Group B"
                  className={`palgroup-image ${activePalgroup === 'B' ? 'active' : ''}`}
                  onClick={() => handlePalgroupToggle('B')}
                  style={{ cursor: 'pointer' }}
                />
              </>
            ) : (
              <>
                <img
                  src={palgroupC}
                  alt="Group C"
                  className={`palgroup-image ${activePalgroup === 'A' ? 'active' : ''}`}
                  onClick={() => handlePalgroupToggle('A')}
                  style={{ cursor: 'pointer' }}
                />
                <img
                  src={palgroupD}
                  alt="Group D"
                  className={`palgroup-image ${activePalgroup === 'B' ? 'active' : ''}`}
                  onClick={() => handlePalgroupToggle('B')}
                  style={{ cursor: 'pointer' }}
                />
              </>
            )}
          </div>

          <p className="plans-description">
            Our floor plans are crafted to offer the perfect balance of space, comfort. With smart layouts that maximize natural light and ventilation, each home is designed for effortless movement and efficient space utilization. Experience a home where design meets comfort, creating the ideal setting for modern living.
          </p>

          <button className="goldBtn" onClick={handleDownload}>Download Brochure</button>
        </div>
      </div> */}

      {/* Rest of your component remains the same */}
      <div style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div className='heroheadingpara'>88 Acres The adventurous, greener, serene and enchanting proposed Deer safari park.</div>
      </div>
      
      <div className="row">
        <div className="col-6 text-center">
          <img src={safariimg} alt="" style={{width:'70%'}} />
        </div>
        <div className="col-6 text-center">
          <img src={safarisecond} alt="" style={{width:'70%'}} />
        </div>
      </div>

      <div className='headingLandingpage'>
        <div style={{fontSize:'1.4rem', fontWeight:'500', textAlign:'left'}}>Location</div>
        <h1 className='heroheading-landingpage'>A Prime Location for a Promising Future, <br/> Live, Work, and Thrive in the Perfect Setting.</h1>
      </div>
      
      <div className='mapgridcol'>
        <div className='map-left-mobile-view' >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.871327192764!2d73.8535715!3d18.669769199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c9abe8b094e7%3A0xe107735daae8ad38!2sThe%20Butterfly!5e0!3m2!1sen!2sin!4v1743760760154!5m2!1sen!2sin"  
            height="650" 
            style={{border:'0', borderRadius:'10px', width:'100%'}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>
        <div className='mapsideimg-right-mobile-view'>
          <img src={mapsideimg} style={{width:'100%'}} height="650" alt="Location" />
        </div>
      </div>
    </>
  );
};

export default Plans;