import React from 'react'
import { covermain } from '../assets/img'

const Home = () => {
  return <>
  <div className='content'>
  <img 
    src={covermain} 
    alt="Background" 
    style={{ width: '100%', height: '120vh', objectFit: 'cover' }}
    />
    <div className='mainsecation'>
    <h1 className='heroheading' style={{textAlign:'right'}}>The Butterfly <br/>
    Where Luxury <br/> Takes Flight</h1>
    <p>The Butterfly represents liberation, beauty and aspiration, just <br/> like the life you deserve. It is a 3 & 2 BHK ultra - luxurious project <br/> designed to fulfill your desires, much like the joy of witnessing a <br/> butterfly in flight.</p>
    </div>
    </div>
  </>
}

export default Home