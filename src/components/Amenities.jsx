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
      </div>


   
      {/* gallery */}
      
      <div className="mobile-above-view-section" >
<div className="headingLandingpage" style={{marginTop:'20%'}}>
  <span className="tagline-small-mobile-view">Fly Above!</span>
  <h1 className="heroheading-landingpage-mobile-view">Amenities that gives you butterfly</h1>
</div>

<div className="amenities-container-mbile-view">
  {amenities.map((item, index) => {
    const isActive = activeIndex === index;
    return (
      <div
        className={`amenity-card-mobile-view ${isActive ? "active" : ""}`}
        key={index}
        onClick={() => handleToggle(index)}
      >
        <div className="card-header-mobile-view">
          <div className="amenity-title-mobile-view">{item.title}</div>
          <div className="arrow-btn-mobile-view">
            <img
              src={isActive ? arrowup : arrowdown}
              width={14}
              alt="arrow"
            />
          </div>
        </div>

        {isActive && (
          <div className="card-body-mobile-view">
            <div className="amenity-image-container-mobile-view">
              <img
                src={item.image || "/placeholder.svg"}
                className="amenity-image-mobile-view"
                alt={item.title}
              />
            </div>
            <div>
            <h5 className="amenity-description-mobile-view">{item.title}</h5>
            <div className="amenity-description-mobile-view">{item.description}</div>
            </div>
          </div>
        )}
      </div>
    );
  })}
</div>




<div className="headingLandingpage gallery-heading">
        <span className="tagline-small-mobile-view">Gallery</span>
        <h1 className="heroheading-landingpage-mobile-view">
          A collection of moments that define excellence, Showcasing creativity, craftsmanship, and vision
        </h1>
      </div>

      <div className="gallery-container">
        <img className="gallery-mobile-view" src={gallery} alt="" />
        <img className="gallery-mobile-view" src={galleryfive} alt="" />
        <img className="gallery-mobile-view" src={galleryfour} alt="" />
        <img className="gallery-mobile-view" src={gallerythered} alt="" />
        <img className="gallery-mobile-view" src={gallerylast} alt="" />
        <img className="gallery-mobile-view" src={galleryone} alt="" />
      </div>
</div>

    </>
  )
}

export default Amenities

