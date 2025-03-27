import React, { useState } from 'react';
import { AboutSide, mapgroup, palgroupA, palgroupB, planA, planB, safarisecond } from '../assets/img';
import "./../assets/css/plan.css";

const Plans = () => {
  const [activePlan, setActivePlan] = useState('2BHK'); 

  const handleToggle = (plan) => {
    setActivePlan(plan); 
  };

  return (
    <>

      <div className='headingLandingpage' >
<span style={{fontSize:'1.44rem', fontWeight:'500'}}>Floor Plans</span>
<h1 className='heroheading' style={{lineHeight:'32px', marginTop:'10px'}}> Thoughtfully Designed for Space and Comfort, Every Layout Crafted for a Seamless Living Experience.</h1>
</div>
    

        <div className="row justify-content-start ">
          <div className="col-7 text-center">
            {activePlan === '2BHK' ? (
              <img src={planA} alt="2BHK Plan" className="plan-image" />
            ) : (
              <img src={planB} alt="3BHK Plan" className="plan-image" />
            )}
          </div>
          <div className="col-5 plans-content">
         <div className="custom-toggle-wrapper d-inline-flex">
      <button
        type="button"
        className={`custom-toggle-btn ${activePlan === "2BHK" ? "active" : ""}`}
        onClick={() => handleToggle("2BHK")}
      >
        2BHK
      </button>
      <button
        type="button"
        className={`custom-toggle-btn ${activePlan === "3BHK" ? "active" : ""}`}
        onClick={() => handleToggle("3BHK")}
      >
        3BHK
      </button>
    </div>

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
            <button className="goldBtn">Download Brochure</button>
          </div>
        </div>

<div style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
      <div className='heroheadingpara' >88 Acres The  adventurous, greener, serene and enchanting proposed Deer safari park.</div>
</div>
        <div className="row">
          <div className="col-6 text-center">
      <img src={AboutSide} alt=""  style={{width:'70%'}}  />

        </div>
          <div className="col-6 text-center">
      <img src={safarisecond} alt=""  style={{width:'70%'}}  />
          </div>
      </div>


      <div className='headingLandingpage' >
<span style={{fontSize:'1.44rem', fontWeight:'500'}}>Location</span>
<h1 className='heroheading' style={{lineHeight:'32px', marginTop:'10px'}}> A Prime Location for a Promising Future, <br/> Live, Work, and Thrive in the Perfect Setting..</h1>
</div>
      <img src={mapgroup}  style={{width:'100%'}} alt="" />
    </>
  );
};

export default Plans;