import React from 'react'
import { covermain } from '../assets/img'

const Home = () => {
  return <>
  <div className='content'>
  <img 
    src={covermain} 
    alt="Background" 
    style={{ width: '100%', height: '126vh', objectFit: 'cover' }}
    />
    <div className='mainsecation'>

    <h1 className='heroheading' style={{textAlign:'right', fontFamily:'TT Nooks Trial', fontWeight:'700', lineHeight:'32px'}}>The Butterfly <br/>
    Where Luxury <br/> Takes Flight</h1>
    <p style={{fontFamily:'Outfit', fontWeight:'400', fontSize:'1rem'}}>The Butterfly represents liberation, beauty and aspiration, just <br/> like the life you deserve. It is a 3 & 2 BHK ultra - luxurious project <br/> designed to fulfill your desires, much like the joy of witnessing a <br/> butterfly in flight.</p>
    <div className='d-flex justify-content-end' style={{marginTop:'-30px', marginBottom:'10px'}}>
    <button className='goldBtn' style={{fontFamily:'Outfit'}}>Book Your Dream House</button>
    </div>
    </div>
    </div>
  </>
}

export default Home