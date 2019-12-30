import React from 'react';
import Layout from '../components/layout';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';


class Fatherhood extends React.Component{
  render() { 
    return (
    <div>
      <Layout />
      <Navigation />
      <Header />
      <Footer />
    </div>
    )
  }
}

export default Fatherhood;