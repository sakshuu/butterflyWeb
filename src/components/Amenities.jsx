import React, { useState } from 'react'
import { AboutSide, colswiper, colswiperone, colswipersecond, colswiperthered } from '../assets/img';
import { arrowdown, car, home, location, space, sunlight, vastu } from '../assets/img/icons';
import "./../assets/css/about.css";
import { gallery, galleryfive, galleryfour, gallerylast, galleryone, gallerythered, gallerytwo } from '../assets/img';

const Amenities = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const toggleDescription = (index) => {
        if (activeIndex === index) {
          setActiveIndex(null);
        } else {
          setActiveIndex(index);
        }
      };
        const amenities = [
            {
              title: "Open Gym",
              description: "Work out, stay fit and enjoy good health. Our state-of-the-art gym facilities help you maintain your fitness routine.",
              image:colswiper
            },
            {
              title: "Children's Play Area",
              description: "A safe and fun space for kids to play and make new friends while",
              image:colswiperone
            },
            {
              title: "Senior Citizens Sit-out",
              description: "Comfortable spaces designed for our senior residents to relax.",
              image:colswipersecond
            },
            {
              title: "Leisure Time",
              description: "Perfect spaces to unwind and enjoy your free time with friends.",
              image:colswiperthered
            },
            {
              title: "Leisure Time",
              description: "Perfect spaces to unwind and enjoy your free time with friends.",
              image:colswipersecond
            }
          ];
  return <>
  <div style={{marginTop:'8%'}}>
<span>Fly Above</span>
<h1 className='heroheading'>Amenities that gives you butterfly</h1>


<div style={{display:"flex", justifyContent:'space-between', gap:'10px', alignItems:'center', width:'100%'}} >
{amenities.map((item, index) => ( 
    <div className="card" key={index} style={{width:'17%', backgroundColor:' rgba(241, 238, 216, 0.1)', paddingTop:'10px'
    }}>
    <div style={{display:'flex' , justifyContent:'center'}}>
    <img src={item.image} style={{width:'90%'}} alt={item.title} />
    </div>
    <p style={{color: 'rgba(255, 255, 255, 0.6)',padding:'15px 0px 0px 15px'}} >{item.title}</p>
    <div style={{paddingLeft:'10px', paddingBottom:'20px'}}>
 <div className='arrowdownbtn' >
    <img src={arrowdown} width={10} alt="" />
 </div>
    </div>
</div>
))}
</div>
</div>

<img src={gallery} alt="Image 1" width={100}  className="collage-image" />
            <img src={galleryone} alt="Image 2" width={100}  className="collage-image" />
            <img src={galleryfour} alt="Image 3"  width={100} className="collage-image" />
            <img src={gallerytwo} alt="Image 4" width={100}  className="collage-image" />
            <img src={galleryfive} alt="Image 5"  width={100} className="collage-image" />
            <img src={gallerythered} alt="Image 6" width={100} className="collage-image" />
            <img src={gallerylast} alt="Image 7" width={100} className="collage-image" />
  </>
}

export default Amenities