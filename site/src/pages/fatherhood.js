import React from 'react';
import Layout from '../components/layout';
import Navigation from '../components/navigation';
import Header from '../components/header';
import Footer from '../components/footer';


class Fatherhood extends React.Component {
  render() {
    return (
      <div>
        <Layout />
        <Navigation />
        <Header />

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

              <header class="row py-4">

                <div class="col-3">
                  <img src="images/header_footer/the-stand-logo-full-blue.png" alt="the stand logo" width="200" />
                </div>

                <div class="col-6">
                </div>

                <div class="col-3">

                  <div class="row">
                    <div class="col px-0">

                      <div class="input-group input-group-sm mb-3">
                        <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />

                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon2"><img src="images/header_footer/iconfinder_search.png" alt="the search logo" width="24" /></span>
                        </div>

                      </div>

                    </div>
                  </div>

                  <div class="row">
                    <div class="col text-right px-0">
                      <button type="button" class="btn btn-primary btn-md px-3 px-md-5">Donate</button>
                    </div>
                  </div>


                </div>

              </header>


              <div class="row">
                <div class="col px-0">

                  <nav class="navbar navbar-expand-lg navbar-light">

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                      <ul class="navbar-nav mr-auto">

                        <li class="nav-item dropdown">

                          <a class="nav-link dropdown-toggle px-3" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Stories</a>

                          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">News</a>
                            <a class="dropdown-item" href="#">Community</a>
                            <a class="dropdown-item" href="#">Environment</a>
                            <a class="dropdown-item" href="#">Business</a>
                            <a class="dropdown-item" href="#">School & Youth</a>
                            <a class="dropdown-item" href="#">Entertainment</a>
                            <a class="dropdown-item" href="#">Religion & Faith</a>
                            <a class="dropdown-item" href="#">Fatherhood</a>
                            <a class="dropdown-item" href="#">Southside Achiever</a>


                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Photo Walk</a>
                            <a class="dropdown-item" href="#">They Wear Blue</a>
                            <a class="dropdown-item" href="#">My Housing Matters</a>
                            <a class="dropdown-item" href="#">From Where We Stand</a>
                          </div>

                        </li>

                        <li class="nav-item dropdown">

                          <a class="nav-link dropdown-toggle px-3" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</a>

                          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">History</a>
                            <a class="dropdown-item" href="#">Print Copies</a>
                            <a class="dropdown-item" href="#">Flickr</a>
                            <a class="dropdown-item" href="#">FAQ</a>
                          </div>
                        </li>

                        <li class="nav-item dropdown">

                          <a class="nav-link dropdown-toggle px-3" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Opportunites</a>

                          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Job Openings</a>
                            <a class="dropdown-item" href="#">Volunteer</a>
                            <a class="dropdown-item" href="#">Skills Training</a>
                          </div>
                        </li>

                        <li class="nav-item dropdown">

                          <a class="nav-link dropdown-toggle px-3" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Calendar</a>

                          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Events</a>
                            <a class="dropdown-item" href="#">Announcements</a>
                          </div>
                        </li>

                        <li class="nav-item">
                          <a class="nav-link px-3" href="#">Contact<span class="sr-only"></span></a>
                        </li>

                        <li class="nav-item">
                          <a class="nav-link px-3" href="#">Getting Involved<span class="sr-only"></span></a>
                        </li>
                      </ul>

                    </div>
                  </nav>

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

                      <div class="col-md-4 pb-3">
                        <a href="#"><img src="images/fatherhood/Chol Majok.jpg" alt="Chol Majok" class="img-fluid pb-2" /></a>
                        <p class="section-header mb-2">Q&A with Father</p>
                        <h2 class="my-2">Chol Majok</h2>
                        <p class="mb-0">Nominated by David Chaplin</p>
                        <p class="publication-date">Published on December 3, 2019</p>
                      </div>

                      <div class="col-md-4 pb-3">
                        <a href="#"><img src="images/fatherhood/Hasan Stephens.jpg" alt="Hasan Stephens" class="img-fluid pb-2" /></a>
                        <p class="section-header mb-2">Q&A with Father</p>
                        <h2 class="my-2">Hasan Stephens</h2>
                        <p class="mb-0">Nominated by Tedd Perry</p>
                        <p class="publication-date">Published on October 30, 2019</p>
                      </div>

                      <div class="col-md-4 pb-3">
                        <a href="#"><img src="images/fatherhood/David Chaplin.jpg" alt="David Chaplin" class="img-fluid pb-2" /></a>
                        <p class="section-header mb-2">Q&A with Father</p>
                        <h2 class="my-2">David Chaplin</h2>
                        <p class="mb-0">Nominated by Twiggy Billue</p>
                        <p class="publication-date">Published on August 28, 2019</p>
                      </div>

                    </div>

                    <div class="row">

                      <div class="col-md-4 pb-3">
                        <a href="#"><img src="images/fatherhood/Yusuf Abdul-Qadir.jpg" alt="Yusuf Abdul-Qadir" class="img-fluid pb-2" /></a>
                        <p class="section-header mb-2">Q&A with Father</p>
                        <h2 class="my-2">Yusuf Abdul-Qadir</h2>
                        <p class="mb-0">Nominated by Twiggy Billue</p>
                        <p class="publication-date">Published on May 21, 2019</p>
                      </div>

                      <div class="col-md-4 pb-3">
                        <a href="#"><img src="images/fatherhood/Tyrone Dixon.jpg" alt="Tyrone Dixon" class="img-fluid pb-2" /></a>
                        <p class="section-header mb-2">Q&A with Father</p>
                        <h2 class="my-2">Tyrone Dixon</h2>
                        <p class="mb-0">Nominated by Rachielle Scrivens</p>
                        <p class="publication-date">Published on April 2, 2019</p>
                      </div>

                      <div class="col-md-4 pb-3">
                        <a href="#"><img src="images/fatherhood/Rashawn Sullivan.jpg" alt="Rashawn Sullivan" class="img-fluid pb-2" /></a>
                        <p class="section-header mb-2">Q&A with Father</p>
                        <h2 class="my-2">Rashawn Sullivan</h2>
                        <p class="mb-0">Uncle serves as a mentor to his niece and nephew</p>
                        <p class="publication-date">Published on March 4, 2019</p>
                      </div>

                    </div>

                    <div class="row mb-3">
                      <div class="col-md-12 mb-2 text-center">
                        <a class="btn btn-primary btn-md mx-3 mb-3" href="#" role="button">Load more stories</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>


              <footer class="row background-blue footer">

                <div class="col-md-3 py-4 text-center">
                  <img src="images/header_footer/the-stand-logo-white.png" alt="Stand Logo" width="150" />
                </div>

                <div class="col-md-6 py-4 text-center footer-text">

                  <h4 class="pb-0">SUBSCRIBE</h4>
                  <p>To recieve a weekly newsletter with popular stories and upcoming events:</p>

                  <div class="input-group input-group-sm mb-3 container px-0">

                    <input type="text" class="form-control" placeholder="Insert Email" aria-label="Insert Email" aria-describedby="basic-addon2" />
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon2">Submit</span>
                    </div>

                  </div>

                  <ul class="list-inline">

                    <li class="list-inline-item mx-2"><a target="new" href="INSERT LINK HERE" class="footer-link">Stories</a></li>

                    <li class="list-inline-item mx-2"><a target="new" href="INSERT LINK HERE" class="footer-link">About</a></li>

                    <li class="list-inline-item mx-2"><a target="new" href="INSERT LINK HERE" class="footer-link">Contact</a></li>

                    <li class="list-inline-item mx-2"><a target="new" href="INSERT LINK HERE" class="footer-link">Getting Involved</a></li>
                  </ul>

                  <ul class="list-inline">

                    <li class="list-inline-item mx-2"><a target="new" href="INSERT LINK HERE" class="footer-link">Calendar</a></li>

                    <li class="list-inline-item mx-2"><a target="new" href="INSERT LINK HERE" class="footer-link">Opportunities</a></li>

                    <li class="list-inline-item mx-2"><a target="new" href="https://www.flickr.com/photos/mysouthsidestand/" class="footer-link">Flickr</a></li>

                    <li class="list-inline-item mx-2"><a target="new" href="INSERT LINK HERE" class="footer-link">Advertising</a></li>
                  </ul>

                  <p class="footer-text">&copy; 2019 The South Side Stand. All rights reserved.</p>

                </div>


                <div class="col-md-3 py-4 text-center">

                  <a target="new" href="https://www.facebook.com/TheStandNewspaper/" ><img src="images/header_footer/iconfinder_facebook.png" alt="Facebook Logo" width="36" class="mx-1" /></a>

                  <a target="new" href="http://twitter.com/mysouthside" ><img src="images/header_footer/iconfinder_twitter.png" alt="Twitter Logo" width="36" class="mx-1" /></a>

                  <a target="new" href="INSERT STAND INSTAGRAM LINK" ><img src="images/header_footer/iconfinder_instagram.png" alt="Instagram Logo" width="36" class="mx-1" /></a>
                </div>

              </footer>

            </div>




            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="js/bootstrap.min.js"></script>
          </body>
        </html>


        <Footer />
      </div>
    )
  }
}

export default Fatherhood;