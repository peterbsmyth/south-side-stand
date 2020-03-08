import React from "react"
import Header from '../components/header'
import Nav from '../components/nav'
import Layout from '../components/layout'
import Footer from '../components/footer'

export default () => (
  <Layout>

        <div class="container">

          <Header />


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




              <Footer />
            </div>
          </div>
        </div>
      </div>
  </Layout>
)