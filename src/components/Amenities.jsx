"use client"

import { useState } from "react"
import { colswiper, colswiperone, colswipersecond, colswiperthered, GroupAboutUs } from "../assets/img"
import { arrowdown } from "../assets/img/icons"
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
            <div className="amenity-image-container">
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

      {/* gallery */}
      <div className="headingLandingpage gallery-heading">
        <span className="tagline-small">Gallery</span>
        <h1 className="heroheading-landingpage">
          A collection of moments that define excellence, Showcasing creativity, craftsmanship, and vision
        </h1>
      </div>

      <div className="gallery-container">
        <img src={GroupAboutUs || "/placeholder.svg"} className="gallery-image" draggable={false} alt="Gallery" />
      </div>
    </>
  )
}

export default Amenities

