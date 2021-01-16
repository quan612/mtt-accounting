import React, { useState } from "react"
import links from "../../constants/links"
import { Link } from "gatsby"

import { NavWrapper } from "./style"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <NavWrapper>
      <div className="masthead flex-container">
        {/* <img src={Logo} alt="Startup Logo" /> */}
        {/* <label style={{ color: "#fff" }}>Logo is here</label> */}
        <button
          className={
            isOpen
              ? `${"toggle-btn"} ${"toggle-btn-active"}`
              : `${"toggle-btn"}`
          }
          type="button"
          onClick={toggleNav}
          aria-label="Menu Button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul
        className={isOpen ? `${"nav-links"} ${"show-nav"}` : `${"nav-links"}`}
      >
        {links.map((item, index) => {
          return (
            <li key={index}>
              <Link activeClassName="active" to={item.path}>
                {item.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </NavWrapper>
  )
}

export default Navbar
