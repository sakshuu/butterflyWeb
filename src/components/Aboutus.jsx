import React from 'react';
import "./../assets/css/about.css";
import { AboutSide } from '../assets/img';
import { car, currentlocation, home, space, sunlight, vastu } from '../assets/img/icons';

const Aboutus = () => {
   
    const features = [
        {
          icon: home,
          title: 'Ultra Luxurious 2 & 3 BHK Abodes',
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
   <div className="aboutus-desktop-view">

        <div className="row d-flex justify-content-center align-items-center" style={{ marginTop: '8%'}}>
            <div className="col-6" style={{ textAlign:'center', margin:'auto'}}>
                <img src={AboutSide} alt="About Visual" className='about-img-content-fit' />
            </div>
            <div className='col-6' style={{ lineHeight:'20px', letterSpacing:'0%', }}>

<div>
                <span className='about-us-title'>About Us</span>
                <h1 className='minheading-landingpage'>Float Like a Butterfly, <br/>Beyond Space.</h1>
                <p className='minipara-landingpage'>Live every moment in opulence. After all, you've got only one life. Live it like a butterfly, at The Butterfly.</p>
                <div className="features-container">
                    {features.map((feature, index) => (
                      <div className='d-flex align-items-center gap-3 mb-1' key={index}>
                            <div className='feature-bg'>
                            <img 
                                src={feature.icon} 
                                alt={feature.title} 
                                className="feature-icon" />
                                </div>
                            <h4 className="feature-title m-0">{feature.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
                </div>
        </div>
                    </div>
                    <div className="aboutus-mobile-view">

            <div  style={{ textAlign:'center', margin:'auto', marginTop:'10%' }}>
                <img src={AboutSide} alt="About Visual" className='about-img-content-fit' />
            </div>
            <div  style={{ lineHeight:'20px', letterSpacing:'0%', }}>
<div>
                <div className='about-us-title-mobile-view'>About Us</div>
                <h1 className='minheading-landingpage-mobile-view'>Float Like a Butterfly, Beyond Space.</h1>
                {/* <div className="features-container"> */}
                    {features.map((feature, index) => (
                      <div className='d-flex align-items-center gap-3 mb-2 ' key={index}>
                            <div className='feature-bg'>
                            <img 
                                src={feature.icon} 
                                alt={feature.title} 
                                className="feature-icon" />
                                </div>
                            <h4 className="feature-title-mobile-view m-0">{feature.title}</h4>
                        </div>
                    ))}
                {/* </div> */}
            </div>
                </div>
                    </div>

</>
    );
};

export default Aboutus;