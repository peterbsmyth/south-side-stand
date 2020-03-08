import React from 'react'
import Header from '../components/header'
import Nav from '../components/nav'
import Layout from '../components/layout'
import Footer from '../components/footer'

const Card = (props) => (
  <div class="col-md-4 pb-3 w3-card-4 img-card4">
    <a href="#"><img src={props.imgSrc} alt={props.imgAlt} class="img-fluid pb-2" /></a>
    <p class="section-header mb-2">Q&A with</p>
    <h2 class="my-2">{props.name}</h2>
    <p class="mb-0">Nominated by {props.nominator}</p>
    <p class="publication-date">Published on {props.date}</p>
  </div>
)

export default () => (
  <Layout>
    <div class="container">
      <Header />

      <div class="row">
        <div class="col px-0">
          <Nav />
        </div>
      </div>

      <div class="row">

        <div class="col jumbotron-fluid my-4 jumbotron-fatherhood">

          <div class="row box mx-0">

            <div class="col-12">
              <h1 class="display-4 pl-3">Q&A with Father Arnold Malloy</h1>
            </div>

            <div class="col-md-9">
              <p class="lead dek d-none d-md-inline pl-3">Nominated by his wife, Laren Malloy</p>
              <p class="jumbotron-publication-date pl-3 mt-0">Published on November 28, 2018</p>
            </div>

            <div class="col-md-3 mb-2 text-center">
              <a class="btn btn-primary btn-md mx-3 my-0" href="#" role="button">Read more</a>
            </div>
          </div>
        </div>
      </div>


      <div class="row">

        <Card imgSrc="images/fatherhood/Chol Majok.jpg" imgAlt="Chol Majok" name="Chol Majok" nominator="David Chaplin" date="December 3, 2019"/>

        <Card imgSrc="images/fatherhood/Hasan Stephens.jpg" imgAlt="Hasan Stephens"  name="Hasan Stephens" nominator="Tedd Perry" date="October 30, 2019"/>

        <Card imgSrc="images/fatherhood/David Chaplin.jpg" imgAlt="David Chaplin"  name="David Chaplin" nominator="Twiggy Billue" date="August 28, 2019"/>

        <Card imgSrc="images/fatherhood/Yusuf Abdul-Qadir.jpg" imgAlt="Yusuf Abdul-Qadir"  name="Yusuf Abdul-Qadir" nominator="Twiggy Billue" date="May 21, 2019"/>

        <Card imgSrc="images/fatherhood/Tyrone Dixon.jpg" imgAlt="Tyrone Dixon"  name="Tyrone Dixon" nominator="Rachielle Scrivens" date="April 2, 2019"/>

        <Card imgSrc="images/fatherhood/Rashawn Sullivan.jpg" imgAlt="Rashawn Sullivan"  name="Rashawn Sullivan" nominator="None" date="March 4, 2019"/>

      </div>
      <div class="row mb-3">
        <div class="col-md-12 mb-2 text-center">
          <a class="btn btn-primary btn-md mx-3 mb-3" href="#" role="button">Load more stories</a>
        </div>
      </div>

      <Footer />

    </div>
  </Layout>
)