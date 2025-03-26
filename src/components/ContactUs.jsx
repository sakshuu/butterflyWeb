import React from 'react'
import { princess, Vishwaicon } from '../assets/img'
import { calls, clock, facebook, insta, location, mail } from '../assets/img/icons';

const ContactUs = () => {
  const ContactInfo = [
    {
      title: "Address",
      description: "Laxmi Nagar, Moshi 412105",
      image:location
    },
    {
      title: "Mobile number",
      description: "7030204848",
      image:calls
    },
    {
      title: "Accessibility",
      description: "10:00 to 6:00",
      image:clock
    },
    {
      title: "Email",
      description: "butterfly.sales23@gmail.com",
      image:mail
    }
  ];
  return (<>
<div className="row" style={{width:'100%' }}>
  <div className="col-5 " style={{width:'50%'  }}>
    <img src={princess} style={{width:'50vmax', height:'53vmax', marginLeft:'-10%'}}  alt="" />
  </div>
  <div className="col-6" style={{width:'50%' }}>
<p>A project by: </p>
<img src={Vishwaicon} alt="" />
<h1>Contact Details</h1>
<p>
Have a question or need more details? Get in touch with us—we’re here to help! Reach out via call, email, or visit us, and let’s build something amazing together.
</p>

<div className="row">
{ContactInfo.map((item, index) => ( 
  <div className="col-6">
    <div>
      <div className="d-flex">
        <div><img src={item.image} alt="" /></div>
        <titlediv>
<p>{item.title}</p>
<p>{item.description}</p>
        </titlediv>
      </div>
    </div>
  </div>
  ))}
</div>
<hr />
<div className='d-flex gap-10'>

<div style={{backgroundColor:'rgba(241, 238, 216, 0.8)'}}>

<img src={insta}  width={100} alt="" />
</div>
<div style={{backgroundColor:'rgba(241, 238, 216, 0.8)'}}>

<img src={facebook} width={100}  alt="" />
</div>
</div>
  </div>
</div>


<div className="contact-section">
      <div className="container">
        <form>
          <div className="row">
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