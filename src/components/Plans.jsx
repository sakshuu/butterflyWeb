import React, { useRef, useState } from 'react';
import { AboutSide, mapgroup, mapsideimg, palgroupA, palgroupB, palgroupC, palgroupD, planA, planB, planC, planD, princess, safariimg, safarisecond, Vishwaicon } from '../assets/img';
import "./../assets/css/plan.css";
import "./../assets/css/contact.css";
import ButterflyBrochure from "./../assets/pdf/ButterflyBrochure.pdf"
import { saveAs } from 'file-saver';
import { bullet, calls, clock, facebook, insta, location, mail } from '../assets/img/icons';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const Plans = () => {
  const [activePlan, setActivePlan] = useState('2BHK'); 
  const [activePalgroup, setActivePalgroup] = useState('A'); // 'A' or 'B'

  const handlePlanToggle = (plan) => {
    setActivePlan(plan);
    setActivePalgroup('A');
  };

  const handlePalgroupToggle = (group) => {
    setActivePalgroup(group);
  };

  const getCurrentPlanImage = () => {
    if (activePlan === '2BHK') {
      return activePalgroup === 'A' ? planA : planB;
    } else { // 3BHK
      return activePalgroup === 'A' ? planC : planD;
    }
  };

  const handleDownload = () => {
    const fileUrl = ButterflyBrochure;
    const fileName = 'ButterflyBrochure.pdf';
    saveAs(fileUrl, fileName);
    
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    validationSchema: yup.object({
      name: yup.string().required('Please Enter Name'),
      email: yup.string().email('Please enter a valid email').required('Please Enter email'),
      phone: yup.string().required('Please Enter phone'),
    }),
    onSubmit: (values, { resetForm }) => {
      axios.post('http://localhost:5000/send-email', values)
        .then((response) => {
          console.log('Email sent successfully!', response.data);
          alert('Message sent successfully!');
          resetForm();
          handleDownload();
        })
        .catch((error) => {
          console.error('Failed to send email:', error);
          alert('Failed to send message. Please try again.');
        });
    },
  });

  const mapslocation = [
    {
      title: "Nashik Highway",
      image: bullet,
    },
    {
      title: "Talewade IT Park",
      image: bullet,
    },
    {
      title: "Chakan  MIDC",
      image: bullet,
    },
    {
      title: "Bhosari  MIDC",
      image: bullet,
    },
    {
      title: "Talegaon  MIDC",
      image: bullet,
    },
    {
      title: "International Exhibition & Convention Center",
      image: bullet,
    },
  ]
  const modalRef = useRef(null);

   const ContactInfo = [
      {
        title: "Address",
        description: "Laxmi Nagar,Moshi 412105",
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
    
  return (
    <>

    <div className='desktop-plans-view'>

   
      <div className='headingLandingpage'>
        <div style={{fontSize:'1.4rem', fontWeight:'500', textAlign:'left'}}>Floor Plans</div>
        <h1 className='heroheading-landingpage'>Thoughtfully Designed for Space and Comfort, Every Layout Crafted for a Seamless Living Experience.</h1>
      </div>
          <div className="row justify-content-start">
        <div className="col-7 text-center">
          <img 
            src={getCurrentPlanImage()} 
            alt={`${activePlan} Plan ${activePalgroup}`} 
            className="plan-image" 
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className="col-5 plans-content">
          <div className="custom-toggle-wrapper d-inline-flex">
            <button
              type="button"
              className={`custom-toggle-btn ${activePlan === "2BHK" ? "active" : ""}`}
              onClick={() => handlePlanToggle("2BHK")}
            >
              2BHK
            </button>
            <button
              type="button"
              className={`custom-toggle-btn ${activePlan === "3BHK" ? "active" : ""}`}
              onClick={() => handlePlanToggle("3BHK")}
            >
              3BHK
            </button>
          </div>

          <div className="palgroup-container">
            {activePlan === '2BHK' ? (
              <>
                <img
                  src={palgroupA}
                  alt="Group A"
                  className={`palgroup-image ${activePalgroup === 'A' ? 'active' : ''}`}
                  onClick={() => handlePalgroupToggle('A')}
                  style={{ cursor: 'pointer' }}
                />
                <img
                  src={palgroupB}
                  alt="Group B"
                  className={`palgroup-image ${activePalgroup === 'B' ? 'active' : ''}`}
                  onClick={() => handlePalgroupToggle('B')}
                  style={{ cursor: 'pointer' }}
                />
              </>
            ) : (
              <>
                <img
                  src={palgroupC}
                  alt="Group C"
                  className={`palgroup-image ${activePalgroup === 'A' ? 'active' : ''}`}
                  onClick={() => handlePalgroupToggle('A')}
                  style={{ cursor: 'pointer' }}
                />
                <img
                  src={palgroupD}
                  alt="Group D"
                  className={`palgroup-image ${activePalgroup === 'B' ? 'active' : ''}`}
                  onClick={() => handlePalgroupToggle('B')}
                  style={{ cursor: 'pointer' }}
                />
              </>
            )}
          </div>

          <p className="plans-description">
            Our floor plans are crafted to offer the perfect balance of space, comfort. With smart layouts that maximize natural light and ventilation, each home is designed for effortless movement and efficient space utilization. Experience a home where design meets comfort, creating the ideal setting for modern living.
          </p>

          <button className="goldBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">Download Brochure</button>
<div >
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">

          <div className="modal-content" style={{backgroundColor: '#300507', border: '5px solid #F1EED8', borderRadius:'30px'}}>
            <div className="modal-header border-0">
              <button type="button" className="btn-close btn-close-white bnt-close-model" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4">

            {/* <h2 className="mb-4">Form</h2> */}
            <form noValidate onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <input type="text"  className="form-control contact-input"  id="name"
            placeholder="Enter your name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name} />
      </div>
      
      <div className="mb-3">
        <input type="tel" className="form-control contact-input"  id="phone"
                 name="phone"
                 placeholder='phone no.'
                 autoComplete="phone"
                 value={formik.values.phone}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 error={formik.touched.phone && Boolean(formik.errors.phone)}
                 helperText={formik.touched.phone && formik.errors.phone} />
      </div>
      
      <div className="mb-4">
        <input type="email"  className="form-control contact-input"  placeholder="Email"
                id="email"
                label="Enter your email"
                name="email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email} />
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>

              <button 
                className="goldBtn" data-bs-dismiss="modal" type="submit">

                Download Brochure
              </button>
                </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>

          
        </div>
      </div> 

    
      <div className="row">
        <div className="col-6 text-center">
          <img src={safariimg} alt="" style={{width:'70%'}} />
        </div>
        <div className="col-6 text-center">
          <img src={safarisecond} alt="" style={{width:'70%'}} />
        </div>
      </div>

      <div className='headingLandingpage'>
        <div style={{fontSize:'1.4rem', fontWeight:'500', textAlign:'left'}}>Location</div>
        <h1 className='heroheading-landingpage'>A Prime Location for a Promising Future, <br/> Live, Work, and Thrive in the Perfect Setting.</h1>
      </div>
      
      <div className='mapgridcol'>
        <div className='map-left-mobile-view' >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.871327192764!2d73.8535715!3d18.669769199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c9abe8b094e7%3A0xe107735daae8ad38!2sThe%20Butterfly!5e0!3m2!1sen!2sin!4v1743760760154!5m2!1sen!2sin"  
             
            style={{border:'0', width:'100%', height:'650px' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>
        <div className='mapsideimg-right-mobile-view'>
          <img src={mapsideimg} style={{width:'100%', backgroundColor:'beige', height:'650px'}}  alt="Location" />
        </div>
      </div>

       
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
      </div>

    <div className='mobile-plans-view'>

   
      <div className='headingLandingpage'>
        <div className='tagline-small-mobile-view'>Floor Plans</div>
        <h1 className='heroheading-landingpage-mobile-view'>Thoughtfully Designed for Space and Comfort, Every Layout Crafted for a Seamless Living Experience.</h1>
      </div>
          <div className='aa'>
          <div className="custom-toggle-wrapper-mobile-plans-view d-inline-flex">
            <button
              type="button"
              className={`custom-toggle-btn-mobile-view ${activePlan === "2BHK" ? "active" : ""}`}
              onClick={() => handlePlanToggle("2BHK")}
            >
              2BHK
            </button>
            <button
              type="button"
              className={`custom-toggle-btn-mobile-view ${activePlan === "3BHK" ? "active" : ""}`}
              onClick={() => handlePlanToggle("3BHK")}
            >
              3BHK
            </button>
          </div>
          </div>
        <div className="text-center">
          <img 
            src={getCurrentPlanImage()} 
            alt={`${activePlan} Plan ${activePalgroup}`} 
            className="plan-image-mobile-plans-view" 
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className="plans-content-mobile-plans-view">
       

          <div className="palgroup-container-mobile-view">
            {activePlan === '2BHK' ? (
              <>
                <img
                  src={palgroupA}
                  alt="Group A"
                  className={`palgroup-image-mobile-view ${activePalgroup === 'A' ? 'active' : ''}`}
                  onClick={() => handlePalgroupToggle('A')}
                  style={{ cursor: 'pointer' }}
                />
                <img
                  src={palgroupB}
                  alt="Group B"
                  className={`palgroup-image-mobile-view ${activePalgroup === 'B' ? 'active' : ''}`}
                  onClick={() => handlePalgroupToggle('B')}
                  style={{ cursor: 'pointer' }}
                />
              </>
            ) : (
              <>
                <img
                  src={palgroupC}
                  alt="Group C"
                  className={`palgroup-image-mobile-view ${activePalgroup === 'A' ? 'active' : ''}`}
                  onClick={() => handlePalgroupToggle('A')}
                  style={{ cursor: 'pointer' }}
                />
                <img
                  src={palgroupD}
                  alt="Group D"
                  className={`palgroup-image-mobile-view ${activePalgroup === 'B' ? 'active' : ''}`}
                  onClick={() => handlePalgroupToggle('B')}
                  style={{ cursor: 'pointer' }}
                />
              </>
            )}
          </div>

          <p className="plans-description-mobile-view">
            Our floor plans are crafted to offer the perfect balance of space, comfort. With smart layouts that maximize natural light and ventilation, each home is designed for effortless movement and efficient space utilization. Experience a home where design meets comfort, creating the ideal setting for modern living.
          </p>

          <button className="goldBtn" style={{marginBottom:'8%'}} data-bs-toggle="modal" data-bs-target="#exampleModal_sm">Download Brochure</button>
<div >
      <div className="modal fade" id="exampleModal_sm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">

          <div className="modal-content" style={{backgroundColor: '#300507', border: '5px solid #F1EED8', borderRadius:'30px'}}>
            <div className="modal-header border-0">
              <button type="button" className="btn-close btn-close-white bnt-close-model" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4">

            {/* <h2 className="mb-4">Form</h2> */}
            <form noValidate onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <input type="text"  className="form-control contact-input"  id="name"
            placeholder="Enter your name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name} />
      </div>
      
      <div className="mb-3">
        <input type="tel" className="form-control contact-input"  id="phone"
                 name="phone"
                 placeholder='phone no.'
                 autoComplete="phone"
                 value={formik.values.phone}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 error={formik.touched.phone && Boolean(formik.errors.phone)}
                 helperText={formik.touched.phone && formik.errors.phone} />
      </div>
      
      <div className="mb-4">
        <input type="email"  className="form-control contact-input"  placeholder="Email"
                id="email"
                label="Enter your email"
                name="email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email} />
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>

              <button 
                className="goldBtn" data-bs-dismiss="modal" type="submit" >

                Download Brochure
              </button>
                </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
      {/* </div>  */}

     
      <div className="">
        <div className=" text-center">
          <img src={safariimg} alt="" style={{width:'70%'}} />
        </div>
        <div className=" text-center" style={{marginTop:'8%'}}>
          <img src={safarisecond} alt="" style={{width:'70%'}} />
        </div>
      </div>

      <div className='headingLandingpage'>
        <div className='tagline-small-mobile-view'>Location</div>
        <h1 className='heroheading-landingpage-mobile-view'>A Prime Location for a Promising Future, <br/> Live, Work, and Thrive in the Perfect Setting.</h1>
      </div>
      
      <div className='mapgridcol-mobile-view'>
        <div className='map-left-mobile-view' >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.871327192764!2d73.8535715!3d18.669769199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c9abe8b094e7%3A0xe107735daae8ad38!2sThe%20Butterfly!5e0!3m2!1sen!2sin!4v1743760760154!5m2!1sen!2sin"  
            height="330" 
            style={{border:'0', borderRadius:'10px', width:'100%'}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>
<div className="row" style={{marginTop:'4%'}}>
  {mapslocation.map((item, index) => (<>
  <div className="col-4">
    <div className='mapaddress-mobile-view'>
      <div>
    <img src={item.image} alt="" />
      </div>
    <span>{item.title}</span>
    </div>
  </div>
  </>
  ))}
  </div>
        <div className='mapsideimg-right-mobile-view'>
          <img src={mapsideimg} style={{width:'100%'}} height="650" alt="Location" />
        </div>
      </div>

      <div >
  <div >
    <img src={princess} style={{width:'100%', height:'100%',}}  alt="" />
  </div>
  <div  style={{marginTop:'2%' }}>
<div className='tagline-small-mobile-view'>A project by: </div>
<div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'10px 0px 10px 0px'}}>
<img src={Vishwaicon} style={{width:'30%'}} alt="" />
</div>
<h1 className='heroheading-landingpage-mobile-view'>Contact Details</h1>
<p className='contactpara'>
Have a question or need more details? Get in touch with us—we’re here to help! Reach out via call, email, or visit us, and let’s build something amazing together.
</p>

<div className="row">
{ContactInfo.map((item, index) => ( 
  <div className="col-6" >
    <div>
      <div className="d-flex gap-2" style={{marginTop:'10%', width:'100%', height:'auto'}} >
        <div className='contact-vishwa-icons-mobile-view'>
          <img src={item.image} style={{width:'1.8rem'}} alt="" />
          </div>
        <div className='contact-vishwa-mobile-view'>
{/* <div className='contact-vishwa-title'>{item.title}</div> */}
<div className='contact-vishwa-desc'>{item.description}</div>
        </div>
      </div>
    </div>
  </div>
  ))}
</div>
<hr style={{borderTop:'2px solid rgba(241, 238, 216, 1)'}}/>
<div style={{display:'flex' , justifyContent:'center', alignItems:'center'}} >

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
      </div>
    </>
  );
};

export default Plans;