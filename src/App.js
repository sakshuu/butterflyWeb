import React, { useEffect } from 'react'
import Mynavbar from './components/Mynavbar'
import { covermain } from './assets/img';
import "./assets/css/index.css"

const App = () => {

// Inside your component
useEffect(() => {
  const navbar = document.querySelector('.navbar');
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
  return <>
  <div className='maincontainer'>
  {/* <Navbar /> */}
  <Mynavbar/>
  
<div className='content'>
  <img 
    src={covermain} 
    alt="Background" 
    style={{ width: '100%', height: '120vh', objectFit: 'cover' }}
    />
    <h1 className='herosecationheading'>sakshi</h1>
    </div>


  {/* Your content here */}
</div>
  </>
}

export default App