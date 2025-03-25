import React from 'react'
import "./../assets/css/mynavbar.css"
import { Butterflylogo } from '../assets/img/icons'

const Mynavbar = () => {
  return <>
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        {/* <a className="navbar-brand" href="#"></a> */}
          <img src={Butterflylogo}  alt="" className='logo'/>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" style={{textAlign:'center'}}>
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Amenities</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">plans</a>
            </li>
            {/* <li className="nav-item"> */}
              <button className='navBtn'>Contact Now</button>
            {/* </li> */}
          </ul>
        </div>
      </div>
    </nav>


  </>
}

export default Mynavbar