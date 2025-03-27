import React, { useState } from 'react'
import { AboutSide, colswiper, colswiperone, colswipersecond, colswiperthered, GroupAboutUs } from '../assets/img';
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
              description: "Work out, stay fit and enjoy good health.",
              image:colswiper
            },
            {
              title: "Children's Play Area",
              description: "A safe and fun space for kids to play",
              image:colswiperone
            },
            {
              title: "Senior Citizens Sit-out",
              description: "Comfortable spaces designed for our senior",
              image:colswipersecond
            },
            {
              title: "Leisure Time",
              description: "Perfect spaces to unwind and enjoy your free time",
              image:colswiperthered
            },
            {
              title: "Leisure Time",
              description: "Perfect spaces to unwind and enjoy your free",
              image:colswipersecond
            }
          ];
  return <>

<div className='headingLandingpage' >
<span style={{fontSize:'1.44rem', fontWeight:'500'}}>Fly Above!</span>
<h1 className='heroheading'>Amenities that gives you butterfly</h1>
</div>


<div style={{display:"flex", justifyContent:'space-between', gap:'10px', alignItems:'center', width:'100%'}} >
{amenities.map((item, index) => ( 
    <div className="card" key={index} style={{width:'17%', backgroundColor:' rgba(241, 238, 216, 0.1)', paddingTop:'10px'
    }}>
    <div style={{display:'flex' , justifyContent:'center'}}>
    <img src={item.image} style={{width:'90%'}} alt={item.title} />
    </div>
    <div style={{color:'rgba(255, 255, 255, 0.6)', padding:'15px 0px 0px 15px', fontSize:'0.8rem'}}>
    <div >{item.title}</div>
    {/* <div style={{marginTop:'10px', marginBottom:"10px"}}>{item.description}</div> */}
    </div>
    <div style={{paddingLeft:'10px', paddingBottom:'20px'}}>
 <div className='arrowdownbtn' >
    <img src={arrowdown} width={10} alt="" />
 </div>
    </div>
</div>
))}
</div>


{/* gallery */}
<div className='headingLandingpage' >
<span style={{fontSize:'1.44rem', fontWeight:'500'}}>Gallery</span>
<h1 className='heroheading' style={{lineHeight:'28px', marginTop:'10px'}}>A collection of moments that define excellence,Showcasing creativity, craftsmanship, and vision</h1>
</div>

<img src={GroupAboutUs} style={{width:'100%'}} alt="" />
{/* <div style={{position:'relative'}}>
<img src={gallery} alt="Image 1" style={{width:'60%', padding:'4px', height:"20%"}}  className="collage-image" />
            <img src={galleryone} alt="Image 2" style={{width:'20%',  padding:'4px', height:"50%"}}className="collage-image" />
            <img src={galleryfour} alt="Image 3"  style={{width:'20%',  padding:'4px', height:"50%"}}className="collage-image" />
            <img src={gallerytwo} alt="Image 4" width={100}  className="collage-image" />
            <img src={galleryfive} alt="Image 5"  width={100} className="collage-image" />
            <img src={gallerythered} alt="Image 6" width={100} className="collage-image" />
            <img src={gallerylast} alt="Image 7" width={100} className="collage-image" />
</div> */}
  </>
}

export default Amenities