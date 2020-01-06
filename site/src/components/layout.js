import React from 'react'
import Navigation from './navigation'
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
