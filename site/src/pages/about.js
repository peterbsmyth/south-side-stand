import React from 'react'
import Layout from "../components/layout"
import Navigation from '../components/Navigation'
import Header from '../components/header'
import Footer from '../components/footer'

class About extends React.Component{
  render() { 
    return (
    <div>
      <Layout></Layout>
      <Navigation />
      <Header />
      <Footer />
    </div>
    )
  }
}

export default About;