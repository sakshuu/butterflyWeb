import React, { useState } from 'react'
import { colswiper, colswiperone, colswipersecond, colswiperthered, GroupAboutUs } from '../assets/img';
import { arrowdown } from '../assets/img/icons';
import "./../assets/css/about.css";
import { gallery, galleryfive, galleryfour, gallerylast, galleryone, gallerythered, gallerytwo } from '../assets/img';

const Amenities = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleToggle = (index) => {
      setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const amenities = [
        {
          title: "Open Gym",
          description: "Work out; stay fit and enjoy good health. Work out; stay fit and enjoy good health.",
          image:colswiper
        },
        {
          title: "Children's Play Area",
          description: "Children's Play Area. A fun, secure, and engaging space designed for kids to play, explore, and grow while ensuring their safety and enjoyment!",
          image:colswiperone
        },
        {
          title: "Senior Citizens Sit-out",
          description: "Senior Citizen Sit-Out A peaceful and comfortable space designed for relaxation, socializing, and unwinding amidst serene surroundings.",
          image:colswipersecond
        },
        {
          title: "Leisure Time",
          description: "Leisure Time Unwind, relax, and indulge in moments of peace with thoughtfully designed spaces for ultimate comfort and recreation.",
          image:colswiperthered
        },
        {
          title: "Leisure Time",
          description: "A Cut Above the Rest Experience unmatched luxury, superior craftsmanship, and a lifestyle designed for those who seek the extraordinary.",
          image:colswipersecond
        }
    ];

    return (
        <>
            <div className='headingLandingpage'>
                <span style={{fontSize:'1.44rem', fontWeight:'500'}}>Fly Above!</span>
                <h1 className='heroheading'>Amenities that gives you butterfly</h1>
            </div>

            <div style={{
                display: "flex",
                justifyContent: 'space-between',
                gap: '10px',
                alignItems: 'center',
                width: '100%'
            }}>
                {amenities.map((item, index) => (
                    <div
                        className="card"
                        key={index}
                        style={{
                            width: '19%',
                            backgroundColor: 'rgba(241, 238, 216, 0.1)',
                            paddingTop: '10px',
                            height: '26vmax',
                            borderRadius:'10px',
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img
                                src={item.image}
                                style={{
                                    width: '90%',
                                    height:'250px',
                                    filter: activeIndex === index ? 'none' : 'brightness(0.4)',
                                    transition: 'filter 0.3s ease'
                                }}
                                alt={item.title}
                            />
                        </div>

                        <div style={{
                            padding: '0px 19px 0px 19px',
                            fontSize: '0.8rem',
                            marginTop:'20px',
                            color: activeIndex === index ? 'white' : 'rgba(255, 255, 255, 0.6)', // Change color based on active state
                            transition: 'color 0.3s ease' // Smooth transition
                        }}>
                            <div style={{
                                fontWeight:'bold', 
                                fontSize:'1rem',
                                color: activeIndex === index ? 'white' : 'rgba(255, 255, 255, 0.6)' // Title also changes color
                            }}>
                                {item.title}
                            </div>

                            {/* Show description if active */}
                            {activeIndex === index && (
                                <div style={{ 
                                    marginTop: '7px', 
                                    marginBottom: "2px", 
                                    fontWeight:'normal', 
                                    fontSize:'0.8rem',
                                    lineHeight:'14px', 
                                    fontFamily:'Outfit',
                                    color: 'white' // Ensures description is always white
                                }}>
                                    {item.description}
                                </div>
                            )}
                        </div>

                        <div style={{ paddingLeft: '10px', paddingBottom: '20px' }}>
                            {/* Show arrow only if not active */}
                            {activeIndex !== index && (
                                <div className='arrowdownbtn' style={{ cursor: 'pointer' }} onClick={() => handleToggle(index)}>
                                    <img src={arrowdown} width={10} alt="arrow" />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* gallery */}
            <div className='headingLandingpage'>
                <span style={{fontSize:'1.44rem'}}>Gallery</span>
                <h1 className='heroheading' style={{lineHeight:'28px', marginTop:'10px'}}>A collection of moments that define excellence,Showcasing creativity, craftsmanship, and vision</h1>
            </div>

            <img src={GroupAboutUs} style={{width:'100%'}} draggable={false} alt="" />
        </>
    )
}

export default Amenities;