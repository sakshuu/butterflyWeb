// import React, { useState } from 'react'
// import { colswiper, colswiperone, colswipersecond, colswiperthered, GroupAboutUs } from '../assets/img';
// import { arrowdown } from '../assets/img/icons';
// import "./../assets/css/about.css";

// const Amenities = () => {
//     const [activeIndex, setActiveIndex] = useState(null);
  
//     const handleToggle = (index) => {
//       setActiveIndex(prevIndex => (prevIndex === index ? null : index));
//     };

//     const amenities = [
//         {
//           title: "Open Gym",
//           description: "Work out; stay fit and enjoy good health. Work out; stay fit and enjoy good health.",
//           image:colswiper
//         },
//         {
//           title: "Children's Play Area",
//           description: "Children's Play Area. A fun, secure, and engaging space designed for kids to play, explore, and grow while ensuring their safety and enjoyment!",
//           image:colswiperone
//         },
//         {
//           title: "Senior Citizens Sit-out",
//           description: "Senior Citizen Sit-Out A peaceful and comfortable space designed for relaxation, socializing, and unwinding amidst serene surroundings.",
//           image:colswipersecond
//         },
//         {
//           title: "Leisure Time",
//           description: "Leisure Time Unwind, relax, and indulge in moments of peace with thoughtfully designed spaces for ultimate comfort and recreation.",
//           image:colswiperthered
//         },
//         {
//           title: "Leisure Time",
//           description: "A Cut Above the Rest Experience unmatched luxury, superior craftsmanship, and a lifestyle designed for those who seek the extraordinary.",
//           image:colswipersecond
//         }
//     ];

//     return (
//         <>
//             <div className='headingLandingpage'>
//                 <span style={{fontSize:'1.44rem', fontWeight:'500'}}>Fly Above!</span>
//                 <h1 className='heroheading'>Amenities that gives you butterfly</h1>
//             </div>

//             <div style={{
//                 display: "flex",
//                 justifyContent: 'space-between',
//                 gap: '10px',
//                 width: '100%',
//                 height:'40vmax'
//             }}>
//                 {amenities.map((item, index) => (
//                     <div
//                         className="card"
//                         key={index}
//                         style={{
//                             width: '20%',
//                             backgroundColor: 'rgba(241, 238, 216, 0.1)',
//                             padding: '10px',
//                             height: '30vmax',
//                             borderRadius:'10px',
//                         }}>
//                         <div style={{ display: 'flex', justifyContent: 'center' }}>
//                             <img
//                                 src={item.image}
//                                 style={{
//                                     width: '100%',
//                                     height:'20vmax',
//                                     filter: activeIndex === index ? 'none' : 'brightness(0.4)',
//                                     transition: 'filter 0.3s ease'
//                                 }}
//                                 alt={item.title}
//                             />
//                         </div>

//                         <div style={{
//                             padding: '0px 4% 10px 4%',
//                             marginTop:'20px',
//                             color: activeIndex === index ? 'white' : 'rgba(255, 255, 255, 0.6)', // Change color based on active state
//                             transition: 'color 0.3s ease' // Smooth transition
//                         }}>
//                             <div style={{
//                                 fontWeight:'bold', 
//                                 fontSize:'0.8rem',
//                                 color: activeIndex === index ? 'white' : 'rgba(255, 255, 255, 0.6)' // Title also changes color
//                             }}>
//                                 {item.title}
//                             </div>

//                             {/* Show description if active */}
//                             {activeIndex === index && (
//                                 <div style={{ 
//                                     marginTop: '7px', 
//                                     marginBottom: "2px", 
//                                     fontWeight:'normal', 
//                                     fontSize:'0.7rem',
//                                     lineHeight:'14px', 
//                                     fontFamily:'Outfit',
//                                     color: 'white' // Ensures description is always white
//                                 }}>
//                                     {item.description}
//                                 </div>
//                             )}
//                         </div>

//                         <div style={{ paddingLeft: '10px', paddingBottom: '20px' }}>
//                             {/* Show arrow only if not active */}
//                             {activeIndex !== index && (
//                                 <div className='arrowdownbtn' style={{ cursor: 'pointer' }} onClick={() => handleToggle(index)}>
//                                     <img src={arrowdown} width={10} alt="arrow" />
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* gallery */}
//             <div className='headingLandingpage'>
//                 <span style={{fontSize:'1.44rem'}}>Gallery</span>
//                 <h1 className='heroheading' style={{lineHeight:'28px', marginTop:'10px'}}>A collection of moments that define excellence,Showcasing creativity, craftsmanship, and vision</h1>
//             </div>

//             <img src={GroupAboutUs} style={{width:'100%'}} draggable={false} alt="" />
//         </>
//     )
// }

// export default Amenities;


"use client"

import { useState } from "react"
import { colswiper, colswiperone, colswipersecond, colswiperthered, GroupAboutUs } from "../assets/img"
import { arrowdown } from "../assets/img/icons"
import "../assets/css/about.css"

const Amenities = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  const amenities = [
    {
      title: "Open Gym",
      description: "Work out; stay fit and enjoy good health. Work out; stay fit and enjoy good health.",
      image: colswiper,
    },
    {
      title: "Children's Play Area",
      description:
        "A fun, secure, and engaging space designed for kids to play, explore, and grow while ensuring their safety and enjoyment!",
      image: colswiperone,
    },
    {
      title: "Senior Citizens Sit-out",
      description:
        "A peaceful and comfortable space designed for relaxation, socializing, and unwinding amidst serene surroundings.",
      image: colswipersecond,
    },
    {
      title: "Leisure Time",
      description:
        "Unwind, relax, and indulge in moments of peace with thoughtfully designed spaces for ultimate comfort and recreation.",
      image: colswiperthered,
    },
    {
      title: "A cut Above the rest",
      description:
        "Experience unmatched luxury, superior craftsmanship, and a lifestyle designed for those who seek the extraordinary.",
      image: colswipersecond,
    },
  ]

  return (
    <>
      <div className="headingLandingpage">
        <span className="tagline-small">Fly Above!</span>
        <h1 className="heroheading">Amenities that gives you butterfly</h1>
      </div>

      <div className="amenities-container">
        {amenities.map((item, index) => (
          <div
            className={`amenity-card ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => handleToggle(index)}
          >
            <div className="amenity-image-container">
              <img src={item.image || "/placeholder.svg"} className="amenity-image" alt={item.title} />
            </div>

            {activeIndex !== index && (
              <div className="arrowdownbtn">
                <img src={arrowdown || "/placeholder.svg"} width={10} alt="arrow" />
              </div>
            )}
            <div className="amenity-content">
              <div className="amenity-title">{item.title}</div>

              {activeIndex === index && <div className="amenity-description">{item.description}</div>}
            </div>

          </div>
        ))}
      </div>

      {/* gallery */}
      <div className="headingLandingpage gallery-heading">
        <span className="tagline-small">Gallery</span>
        <h1 className="heroheading">
          A collection of moments that define excellence, Showcasing creativity, craftsmanship, and vision
        </h1>
      </div>

      <div className="gallery-container">
        <img src={GroupAboutUs || "/placeholder.svg"} className="gallery-image" draggable={false} alt="Gallery" />
      </div>
    </>
  )
}

export default Amenities

