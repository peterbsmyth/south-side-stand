import React from "react"
import Layout from "../components/layout"
export default () => (
  <Layout>
    <h1>This is the opportunities page.</h1>

    <head>


      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      <title>Submit Opportunites</title>


      <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />


      <link rel="stylesheet" href="css/general.css" type="text/css" />
      <link rel="stylesheet" href="css/submitopportunities.css" text="text/css" />
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

        <div class="container">


          <div class="row mt-2">
            <div class="col-md-12 so">
              <h1 class="mainheading">Submit Opportunities</h1>
              <p class="lead">Submit local jobs, events, and volunteer opportunities, as well as recurring events to The Stand.<br /> Fill out the form with all information regarding your opportunity. The Stand's team will review all submissions and contact you if any additional questions need be answered.</p>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 mt-3 mb-3">
              <form>
                <div class="form-row mt-2 mb-2">
                  <div class="col-md-6 col-12">
                    <input type="text" class="form-control" placeholder="First name" />
                  </div>
                  <div class="col-md-6 col-12">
                    <input type="text" class="form-control" placeholder="Last name" />
                  </div>
                </div>
                <div class="form-group mt-3 mb-3">
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="form-group mt-5 mb-5">
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>--Select One--</option>
                    <option>Local Job</option>
                    <option>Event</option>
                    <option>Volunteer Opportunity</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1"><span class="select">Provide Information About the Opportunity</span></label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                    <label class="form-check-label" for="invalidCheck2">
                      I want to recieve The Stand's weekly newsletter
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                    <label class="form-check-label" for="invalidCheck2">
                      I Agree to The Stand <span class="under">Terms and Conditions</span>
                    </label>
                  </div>
                </div>
                <button class="btn btn-primary mb-5" type="submit">Submit form</button>
              </form>




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
          </div>
        </div>
      </div>
    </body>
  </Layout>
)