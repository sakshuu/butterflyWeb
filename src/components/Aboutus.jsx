import React from 'react';
import "./../assets/css/about.css";
import { AboutSide } from '../assets/img';
import { car, currentlocation, home, space, sunlight, vastu } from '../assets/img/icons';

const Aboutus = () => {
   
    const features = [
        {
          icon: home,
          title: 'Work out; stay fit and enjoy good health. Work out; stay fit and enjoy good health.',
        },
        {
          icon: currentlocation,
          title: 'Location in Heart of Moshi',
        },
        {
          icon: car,
          title: 'Dedicated Parking',
        },
        {
          icon: vastu,
          title: 'Fully Vastu Compliant House',
        },
        {
          icon: sunlight,
          title: 'Ample Sunlight & Well Ventilated',
        },
        {
          icon: space,
          title: 'Effective Space Utilization',
        }
    ];


    return (<>
   
        <div className="row justify-content-center" style={{width: '100%', marginTop: '8%'}}>
            <div className="col-lg-6 text-center" style={{width: '40%'}}>
                <img src={AboutSide} alt="About Visual" style={{width: '80%'}}/>
            </div>
            <div className='col-lg-6' style={{width: '50%' , marginTop:'7rem', lineHeight:'20px', letterSpacing:'0%'}}>

               
                <span style={{fontWeight:'400', fontFamily:'Outfit', color:'rgba(255, 255, 255, 0.7)'}}>About Us</span>
                <h1 className='heroheading' style={{fontFamily:'TT Nooks Trial', fontWeight:'700', lineHeight:'32px', marginTop:'10px'}}>Float Like a Butterfly, <br/>Beyond Space.</h1>
                <p style={{fontFamily:'Outfit', fontWeight:'400'}}>Live every moment in opulence. After all, you've got only one life. Live it like a butterfly, at The Butterfly.</p>
                <div className="features-container">
                    {features.map((feature, index) => (
                        <div className='d-flex align-items-center gap-3 mb-1' key={index}>
                            <div className='feature-bg'>
                            <img 
                                src={feature.icon} 
                                alt={feature.title} 
                                className="feature-icon"
                                />
                                </div>
                            <h4 className="feature-title m-0">{feature.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>

</>
    );
};

export default Aboutus;