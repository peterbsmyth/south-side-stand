import React from 'react'
import { Link } from 'gatsby'
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog/">About Staff</Link>
        </li>
        <li>
          <Link to="/products/">Ads</Link>
        </li>
        <li>
          <Link to="/products/">Articles</Link>
        </li>
        <li>
          <Link to="/products/">Calendar</Link>
        </li>
        <li>
          <Link to="/products/">Donations</Link>
        </li>
        <li>
          <Link to="/products/">Get Involved</Link>
        </li>
        <li>
          <Link to="/products/">Products</Link>
        </li>
        <li>
          <Link to="/products/">Opportunites</Link>
        </li>
        <li>
          <Link to="/products/">Print Locations</Link>
        </li>
        <li>
          <Link to="/products/">Fatherhood</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation