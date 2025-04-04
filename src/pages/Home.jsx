import React, { useRef } from 'react'
import { covermain } from '../assets/img'

const Home = () => {
  const contactRef = useRef(null);

  const handleSmoothScroll = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return <>
  <div className='content'>
  <img draggable={false}
    src={covermain} 
    alt="Background" 
    style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
    />
    <div className='mainsecation'>

    <h1 className='heroheading' style={{textAlign:'right', fontFamily:'TT Nooks Trial', fontWeight:'700', lineHeight:'2.5rem', fontSize:'2.9rem'}}>The Butterfly <br/>
    Where Luxury <br/> Takes Flight</h1>
    <p style={{fontFamily:'Outfit', fontWeight:'400', fontSize:'1rem'}}>The Butterfly represents liberation, beauty and aspiration, just <br/> like the life you deserve. It is a 3 & 2 BHK ultra - luxurious project <br/> designed to fulfill your desires, much like the joy of witnessing a <br/> butterfly in flight.</p>
    <div className='d-flex justify-content-end' style={{marginTop:'-30px', marginBottom:'10px'}}>
    <a href="#contact"  ref={contactRef}>
    <button className='goldBtn' style={{fontFamily:'Outfit'}} onClick={handleSmoothScroll} >Book Your Dream House</button>
    </a>
    </div>
    </div>
    </div>
    
  </>
}

export default Home