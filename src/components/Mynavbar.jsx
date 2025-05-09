import React from 'react';
import "./../assets/css/mynavbar.css";
import { Butterfly } from '../assets/img/icons';

const Mynavbar = () => {
  return (<>
  
<div className='desktop-navbar-main'>
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-mobile-scrren">
      <div className="container" style={{margin:'0px 40px 0px 40px', padding:'0px 0px 0px 0px'}}>
        <a  href="#home" className='nav-link'>
        <img src={Butterfly} alt=""  style={{cursor:'pointer', width:'90%'}} className="logo " />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" style={{ textAlign: 'center' }}>
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#amenities">Amenities</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#plans">Plans</a>
            </li>
            <li className="nav-item">
              <a href="#contact" type='button' style={{textDecoration:'none', fontSize:'0.8rem', marginTop:'6px'}}className="goldBtn">Contact Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    </>
  );
};

export default Mynavbar;