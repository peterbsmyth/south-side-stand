import React from 'react'
import { Link } from 'gatsby'
const Navbar = () => {
  return (
    <nav>
      <ul>
        
        <li>
          <Link to="/stories/">Stories</Link>
        </li>
        <li>
          <Link to="/aboutstaff/">About</Link>
        </li>
        <li>
          <Link to="/opportunities/">Opportunities</Link>
        </li>
        <li>
          <Link to="/fatherhood/">Fatherhood</Link>
        </li>
        <li>
          <Link to="/calendar/">Calendar</Link>
        </li>
        <li>
          <Link to="/contact/">Contact</Link>
        </li>
        <li>
          <Link to="/getinvolved/">Get Involved</Link>
        </li>
        <li>
          <Link to="/donate">Donate</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
