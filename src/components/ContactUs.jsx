import React from 'react'
import { princess, Vishwaicon } from '../assets/img'
import { calls, clock, copy, facebook, insta, location, mail, or, Reralogo } from '../assets/img/icons';
import "./../assets/css/contact.css"
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const ContactUs = () => {
  const ContactInfo = [
    {
      title: "Address",
      description: "Laxmi Nagar, Nr, Moshi, Pune, Pimpei-Chinchwad 412105",
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
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: yup.object({
      name: yup.string().required('Please Enter Name'),
      email: yup.string().email('Please enter a valid email').required('Please Enter email'),
      phone: yup.string().required('Please Enter phone'),
      message: yup.string().required('Type Your message'),
    }),
    onSubmit: (values, { resetForm }) => {
      // Send form data to the backend
      axios.post('https://butterflyserver.onrender.com/send-email', values)
        .then((response) => {
          console.log('Email sent successfully!', response.data);
          alert('Message sent successfully!');
          resetForm(); // Reset the form after successful submission
        })
        .catch((error) => {
          console.error('Failed to send email:', error);
          alert('Failed to send message. Please try again.');
        });
    },
  });

  
  return (<>
<div className="row" style={{width:'100%' }}>
  <div className="col-5 " style={{width:'50%'  }}>
    <img src={princess} style={{width:'50vmax', height:'53vmax', marginLeft:'-10%'}}  alt="" />
  </div>
  <div className="col-6" style={{width:'50%', marginTop:'8%' }}>
<div style={{fontFamily:'Outfit'}}>A project by: </div>
<img src={Vishwaicon} style={{width:'30%',}} alt="" />
<h1 className='heroheading-landingpage'>Contact Details</h1>
<p className='contactpara'>
Have a question or need more details? Get in touch with us—we’re here to help! Reach out via call, email, or visit us, and let’s build something amazing together.
</p>

<div className="row">
{ContactInfo.map((item, index) => ( 
  <div className="col-6" >
    <div>
      <div className="d-flex gap-2" style={{marginTop:'12%'}} >
        <div className='contact-vishwa-icons'><img src={item.image} width={52} alt="" /></div>
        <div className='contact-vishwa'>
<div className='contact-vishwa-title'>{item.title}</div>
<div className='contact-vishwa-desc'>{item.description}</div>
        </div>
      </div>
    </div>
  </div>
  ))}
</div>
<hr style={{borderTop:'2px solid rgba(241, 238, 216, 1)'}}/>
<div className='d-flex' >

<div className='contact-social-media'>
<a href=" https://www.instagram.com/vishwa_developers23">
<img src={insta} width={26} alt="" />
</a>
</div>
<div className='contact-social-media' style={{marginLeft:'30px'}}>
<a href="https://www.facebook.com/share/1Bp7mrKFrS">
<img src={facebook} width={26}  alt="" />
</a>
</div>
</div>
  </div>
</div>
<div className='headingLandingpage' >
<div style={{fontSize:'1.4rem', fontWeight:'500', textAlign:'left'}}>Get in Touch</div>
<h1 className='heroheading-landingpage'>Looking for the perfect partner for your next project? <br/> Get in touch with us today!</h1>
</div>

<div className="contact-section">
      <div className="container">
        <form noValidate onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-md-4 mb-3">
              <input
                type="text"
                className="form-control contact-input"
                placeholder="Name"
                  id="name"
            label="Enter your name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </div>
            <div className="col-md-4 mb-3">
              <input
                type="text"
                className="form-control contact-input"
                placeholder="Contact Number"
                 id="phone"
                 name="phone"
                 autoComplete="phone"
                 value={formik.values.phone}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 error={formik.touched.phone && Boolean(formik.errors.phone)}
                 helperText={formik.touched.phone && formik.errors.phone}
              />
            </div>
            <div className="col-md-4 mb-3">
              <input
                type="email"
                className="form-control contact-input"
                placeholder="Email"
                id="email"
                label="Enter your email"
                name="email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
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
                id="message"
            label="Enter your message"
            name="message"
            multiline
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}

              ></textarea>
            </div>
          </div>
          {/* Submit Button */}
          <div className="row">
            <div className="col-12 text-end">
              <button type="submit" className="goldBtn">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div style={{marginTop:'35px'}}>
    <hr/>

    <div className='d-flex justify-content-between'>
<div className='copyright'>Copyright © 2025 Butterfly. All rights reserved.</div>
<div>
  <div className='d-flex justify-space-end gap-2'>
    <img src={Reralogo} width={60} alt="" />
   <img src={copy} width={150} alt="" />
    <img src={or} width={60} alt="" />
  </div>
</div>
    </div>
    </div>
  </>
  )
}

export default ContactUs