import React from "react"
// ROUNTER
import { Link } from "react-router-dom"
// ICONS
import { GiCastle } from "react-icons/gi"
// IMAGES
import frankie from "../images/frankie.jpg"

const Enter = () => {
  return (
    <Link to="/quiz">
      <div className="enter__container">
        <img className="enter__image" src={frankie} alt="avatar" />
        <div className="enter__text">
          to die, to sleep, no more; and by a sleep to say we end the heart-ache
          and the thousand natural shocks.
        </div>
        <div className="enter__text" style={{ color: "orange" }}>
          it's hora de spielen meine Nachtfrau!
        </div>
        <div className="enter__icon-btn">
          <GiCastle size={50} />
        </div>
        <div>enter</div>
      </div>
    </Link>
  )
}

export default Enter
