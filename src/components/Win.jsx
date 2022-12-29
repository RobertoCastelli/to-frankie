import React from "react"
// ICONS
import { ImGift } from "react-icons/im"
// IMAGES
import ticket from "../images/ticket.jpg"

const Win = () => {
  return (
    <div className="win__container">
      <div className="win__icon">
        <ImGift size={50} />
      </div>
      <div className="win__text">the object of art is to give life a shape</div>
      <img className="win__image" src={ticket} alt="win-img" />
    </div>
  )
}

export default Win
