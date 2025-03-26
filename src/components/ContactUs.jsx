import React from 'react'
import { princess } from '../assets/img'

const ContactUs = () => {
  return (<>
<div className="row" style={{width:'100%' }}>
  <div className="col-5 " style={{width:'50%'  }}>
    <img src={princess} style={{width:'50vmax', height:'53vmax', marginLeft:'-10%'}}  alt="" />
  </div>
  <div className="col-6" style={{width:'50%' }}>

  </div>
</div>


<div className="contact-section">
      <div className="container">
        <form>
          <div className="row">
            {/* First Row: Name, Contact Number, Email */}
            <div className="col-md-4 mb-3">
              <input
                type="text"
                className="form-control contact-input"
                placeholder="Name"
              />
            </div>
            <div className="col-md-4 mb-3">
              <input
                type="text"
                className="form-control contact-input"
                placeholder="Contact Number"
              />
            </div>
            <div className="col-md-4 mb-3">
              <input
                type="email"
                className="form-control contact-input"
                placeholder="Email"
              />
            </div>
          </div>
          {/* Second Row: Message */}
          <div className="row">
            <div className="col-12 mb-3">
              <textarea
                className="form-control contact-textarea"
                placeholder="Message"
                rows="5"
              ></textarea>
            </div>
          </div>
          {/* Submit Button */}
          <div className="row">
            <div className="col-12 text-end">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}

export default ContactUs