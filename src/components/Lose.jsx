import React from "react"
// ROUTER
import { Link } from "react-router-dom"
// ICONS
import { FaSkull } from "react-icons/fa"
import { BiInfinite } from "react-icons/bi"

const Lose = () => {
  return (
    <div className="lose__container">
      <div className="lose__icon">
        <FaSkull size={50} />
      </div>
      <div className="lose__text">try again and again and again...</div>
      <Link to="/">
        <button className="lose__btn">
          <BiInfinite size={30} />
        </button>
      </Link>
    </div>
  )
}

export default Lose
