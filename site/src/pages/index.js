import React from "react"
import { Link } from "gatsby"
import '../styles/global.css'
import Logo from '../components/logo'
import Navigation from '../components/Navigation'
import Header from '../components/header'
import Footer from '../components/Footer'

class index extends React.Component{
  render() { 
    return (

// export default () => (
  
 
  <div style={{ color: `purple` }}>
  <Logo />
   <Navigation />

  
    
    <Header headerText="Hello Gatsby!" />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <Footer/>
  </div>
   )
  }
}

export default index;