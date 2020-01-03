import React from 'react'
import Navigation from './Navigation'
import './layout.css'
const layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  )
}

export default layout
