import React from 'react';
import Layout from '../components/layout';
import Navigation from '../components/navigation';
import Header from '../components/header';
import Footer from '../components/footer';


class Contact extends React.Component{
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

export default Contact;