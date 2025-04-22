"use client"

import { useState } from "react"
import { colswiper, colswiperone, colswipersecond, colswiperthered, gallery, galleryfive, galleryfour, gallerylast, galleryone, gallerythered, gallerytwo, GroupAboutUs } from "../assets/img"
import { arrowdown, arrowup } from "../assets/img/icons"
import "../assets/css/about.css"

const Amenities = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }
  const imagesGallery = [
    gallery, 
    galleryfive, 
    galleryfour, 
    gallerylast, 
    galleryone, 
    gallerythered, 
    gallerytwo,
  ];
  const handleZoom = (src) => {
    // Display the clicked image in zoomed view
    const zoomContainer = document.querySelector(".zoom-container");
    zoomContainer.style.display = "flex";
    zoomContainer.querySelector("img").src = src;
  };

  const closeZoom = () => {
    const zoomContainer = document.querySelector(".zoom-container");
    zoomContainer.style.display = "none";
  };
  const amenities = [
    {
      title: "Open Gym",
      description: "Work out; stay fit and enjoy good health. Work out; stay fit and enjoy good health.",
      image: colswiper,
    },
    {
      title: "Children's Play Area",
      description:
        "A fun, secure, and engaging space designed for kids to play, explore, and grow while ensuring their safety and enjoyment!",
      image: colswiperone,
    },
    {
      title: "Senior Citizens Sit-out",
      description:
        "A peaceful and comfortable space designed for relaxation, socializing, and unwinding amidst serene surroundings.",
      image: colswipersecond,
    },
    {
      title: "Leisure Time",
      description:
        "Unwind, relax, and indulge in moments of peace with thoughtfully designed spaces for ultimate comfort and recreation.",
      image: colswiperthered,
    },
    {
      title: "A cut Above the rest",
      description:
        "Experience unmatched luxury, superior craftsmanship, and a lifestyle designed for those who seek the extraordinary.",
      image: colswipersecond,
    },
  ]

  return (
    <>
    <div className="dekstop-above-view-section">

    {/* </div> */}
      <div className="headingLandingpage">
        <span className="tagline-small">Fly Above!</span>
        <h1 className="heroheading-landingpage">Amenities that gives you butterfly</h1>
      </div>

      <div className="amenities-container">
        {amenities.map((item, index) => (
          <div
            className={`amenity-card ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => handleToggle(index)}
          >
            <div className="-mobile-view">
              <img src={item.image || "/placeholder.svg"} className="amenity-image" alt={item.title} />
            </div>

            {activeIndex !== index && (
              <div className="arrowdownbtn">
                <img src={arrowdown || "/placeholder.svg"} width={10} alt="arrow" />
              </div>
            )}
            <div className="amenity-content">
              <div className="amenity-title">{item.title}</div>
              {activeIndex === index && <div className="amenity-description">{item.description}</div>}
            </div>
          </div>
        ))}
      </div>


      <div className="headingLandingpage gallery-heading">
        <span className="tagline-small">Gallery</span>
        <h1 className="heroheading-landingpage">
          A collection of moments that define excellence, Showcasing creativity, craftsmanship, and vision
        </h1>
      </div>
   
      <div className="gallery-container">
        <img src={GroupAboutUs || "/placeholder.svg"} className="gallery-image" draggable={false} alt="Gallery" />
      </div>
     {/* <div className="grid grid-cols-6 grid-rows-3 gap-2">
      <div className="col-span-2 row-span-1">
        <img src={gallery} alt="Building View" className="w-full h-full object-cover rounded-lg" />
      </div>

      <div className="col-span-2 row-span-1">
        <img src={galleryone} alt="Elderly Couple" className="w-full h-full object-cover rounded-lg" />
      </div>

      <div className="col-span-2 row-span-2">
        <img src={galleryfour} alt="Top View Building" className="w-full h-full object-cover rounded-lg" />
      </div>

      <div className="col-span-2 row-span-2">
        <img src={gallerytwo} alt="Aerial Building" className="w-full h-full object-cover rounded-lg" />
      </div>

      <div className="col-span-2 row-span-1">
        <img src={galleryfive} alt="Outdoor Gym" className="w-full h-full object-cover rounded-lg" />
      </div>

      <div className="col-span-2 row-span-1">
        <img src={gallerythered} alt="Jogging Couple" className="w-full h-full object-cover rounded-lg" />
      </div>

      <div className="col-span-2 row-span-1">
        <img src={gallerylast} alt="Yoga Group" className="w-full h-full object-cover rounded-lg" />
      </div>
    </div> */}
      </div>


   
      {/* gallery */}
      
      <div className="mobile-above-view-section" >
<div className="headingLandingpage" style={{marginTop:'20%'}}>
  <span className="tagline-small-mobile-view">Fly Above!</span>
  <h1 className="heroheading-landingpage-mobile-view">Amenities that gives you butterfly</h1>
</div>

<div className="amenities-container-mbile-view">
      {/* {amenities.map((item, index) => {
        const isActive = activeIndex === index
        return (
          <div className={`amenity-card-mobile-view ${isActive ? "active" : ""}`}
            key={index}
            onClick={() => handleToggle(index)}
          >
            <div className="card-header-mobile-view">
              <div className='amenity-title-mobile-view'>{item.title}</div>
              <div className="arrow-btn-mobile-view">
                <img src={isActive ? arrowup : arrowdown} width={14} alt="arrow" />
              </div>
            </div>

            {isActive && (
              <div className="card-body-mobile-view">
                <div className="amenity-image-container-mobile-view">
                  <img src={item.image || "/placeholder.svg"} className="amenity-image-mobile-view" alt={item.title} />
                </div>
                <div>
                  <div>

<img src={arrowdown} width={14} alt="arrow"/>
                  <h5 className="amenity-title-body-mobile-view">{item.title}</h5>
                  </div>
                  <div className="amenity-description-mobile-view">{item.description}</div>
                </div>
              </div>
            )}
          </div>
        )
      })} */}
       {amenities.map((item, index) => {
          const isActive = activeIndex === index
          return (
            <div
              key={index}
              className={`card mb-3 border-0 rounded-3 ${isActive ? "active" : ""}`}
              style={{
                backgroundColor: "rgba(106, 57, 58, 0.9)",
                overflow: "hidden",
              }}
            >
              {isActive ? (
                <div className="card-body p-1 mb-3">
                  <div className="row g-0">
                    {/* Left side - Full image */}
                    <div className="col-5">
                      <div style={{  position: "relative" , textAlign:'center'}}>
                        <img
                          src={item.image || "/placeholder.svg"}
                          fill
                          alt={item.title}
                          width='100'
                          style={{ objectFit: "cover", borderRadius: "10px 0 0 10px"}}
                        />
                      </div>
                    </div>

                    {/* Right side - Title, arrow and description */}
                    <div className="col-7">
                      {/* <div className=""> */}
                        <div className="d-flex justify-content-between align-items-center">
                          <h6
                            style={{
                              color: "white",
                              fontSize: "0.9rem",
                              fontWeight: "500",
                              lineBreak:'auto',
                              margin: 0,
                            }}
                          >
                            {item.title}
                          </h6>
                          <div
                            className="d-flex align-items-center justify-content-center rounded-circle mb-4"
                            style={{
                              backgroundColor: "rgba(255, 255, 255, 0.6)",
                              width: "25px",
                              height: "25px",
                              cursor: "pointer",
                              marginRight:'12px'
                            }}
                            onClick={() => handleToggle(index)}
                          >
                            <img src={arrowup} width={14} alt="arrow" />
                          </div>
                        </div>
                        <p
                          style={{
                            fontSize: "0.8rem",
                            lineHeight: "1.4rem",
                            color: "rgba(255, 255, 255, 0.8)",
                            lineHeight:'0.9rem'
                          }} >
                          {item.description}
                        </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="card-header border-0 d-flex justify-content-between align-items-center p-3"
                  onClick={() => handleToggle(index)}
                  style={{ cursor: "pointer" }}
                >
                  <h5
                    className="mb-0"
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                    }}
                  >
                    {item.title}
                  </h5>
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.6)",
                      width: "25px",
                      height: "25px",
                    }}
                  >
                    <img src={arrowdown} width={14} alt="arrow" />
                  </div>
                </div>
              )}
            </div>
          )
        })}
    </div>




<div className="headingLandingpage gallery-heading">
        <span className="tagline-small-mobile-view">Gallery</span>
        <h1 className="heroheading-landingpage-mobile-view">
          A collection of moments that define excellence, Showcasing creativity, craftsmanship, and vision
        </h1>
      </div>

      <div className="gallery-container">
      {imagesGallery.map((image, index) => (
        <img className="gallery-mobile-view"  src={image} alt="" />
          ))}
    
      </div>
</div>

    </>
  )
}

export default Amenities

