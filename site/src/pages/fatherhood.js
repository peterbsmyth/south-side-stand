import React from 'react';
import Layout from '../components/layout';
import Navigation from '../components/navigation';
import Header from '../components/header';
import Footer from '../components/footer';
import Card from '../components/card';
import Nav from '../components/nav';




class Fatherhood extends React.Component {
  render() {
    return (
      <div>
        <Layout />
        <Navigation />


        <html lang="en">
          <head>

            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            <title>Fatherhood</title>


            <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />


            <link rel="stylesheet" href="css/general.css" type="text/css" />
            <link href="https://fonts.googleapis.com/css?family=Anton|Francois+One|Oswald|Roboto:700&display=swap" rel="stylesheet" />

          </head>

          <body>

            <div class="container">

              <Header />


              <div class="row">
                <div class="col px-0">

                  <Nav />

                </div>
              </div>


              <section>

                <div class="row">

                  <div class="col jumbotron-fluid my-4 jumbotron-fatherhood">

                    <div class="row box mx-0">

                      <div class="col-12">
                        <h1 class="display-4 pl-3">Q&A with Father Arnold Malloy</h1>
                      </div>

                      <div class="col-md-9">
                        <p class="lead dek d-none d-md-inline pl-3">Nominated by his wife, Lauaren Malloy</p>
                        <p class="jumbotron-publication-date pl-3 mt-0">Published on November 28, 2018</p>
                      </div>

                      <div class="col-md-3 mb-2 text-center">
                        <a class="btn btn-primary btn-md mx-3 my-0" href="#" role="button">Read more</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">

                  <div class="col-md-12 pl-md-0">

                    <p>To nominate a father, send a short explanation with contact information to The Stand Director Ashley Kang by calling  (315) 882-1054 or emailing ashley@mysouthsidestand.com</p>
                    <h3 class="mb-4">Fatherhood</h3>

                    <div class="row">
                      <Card name="Chol Majok" nominated="David Chaplin" published="December 3, 2019" />

                      <Card name="Hasan Stephens" nominated="Tedd Perry" published="October 30, 2019" />
                      <Card name="David Chaplan" nominated="Twiggy Billue" published="August 28, 2019" />

                    </div>

                    <div class="row">
                      <Card name="Yusuf Abdul-Qadir" nominated="Twiggy Billue" published="May 21, 2019" />
                      <Card name="Tyrone Dixo" nominated="Rachielle Scrivens" published="April 2, 2019" />
                      <Card name="Rashawn Sullivan" nominated="niece and nephew" published="March 4, 2019" />

                    </div>

                    <div class="row mb-3">
                      <div class="col-md-12 mb-2 text-center">
                        <a class="btn btn-primary btn-md mx-3 mb-3" href="#" role="button">Load more stories</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <Footer />


            </div>




            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="js/bootstrap.min.js"></script>
          </body>
        </html>



      </div>
    )
  }
}

export default Fatherhood;