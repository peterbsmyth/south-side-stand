import React from 'react';
import Layout from '../components/layout';
import Navigation from '../components/navigation';
import Header from '../components/header';
import Nav from '../components/nav';
import Footer from '../components/footer';


class Contact extends React.Component {
  render() {
    return (
      <div>
        <Layout />
        <Navigation />
        <html lang="en">
          <head>

            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            <title>Contact Us</title>


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

              <div class="container">
                <h1 class="h1-zimeng mb-3">Contact Us</h1>
                <div class="row py-3">
                  <div class="col-6">
                    <img src="images/contact/building.jpg" alt="brown house" class="img-fluid" />
                  </div>
                  <div class="col-md-6">
                    <h4>Mailing Address</h4>
                    <br />
                    <h5 class="h5-zimeng">South Side Communication Center</h5>
                    <h5 class="h5-zimeng">2331 South Salina St.</h5>
                    <h5 class="h5-zimeng">Syracuse, NY 13205</h5>
                  </div>
                </div>

                <div class="row py-3">
                  <div class="col">
                    <h2>Contact Information</h2>

                    <form class="needs-validation" novalidate>

                      <div class="row">

                        <div class="col-md-6">
                          <label for="fname">First Name*</label>
                          <input type="text" class="form-control" id="fname" placeholder="enter your first name" required />
                          <div class="invalid-feedback">Valid first name is required.</div>
                        </div>

                        <div class="col-md-6">
                          <label for="fname">Last Name*</label>
                          <input type="text" class="form-control" id="lname" placeholder="enter your last name" required />
                          <div class="invalid-feedback">Valid last name is required.</div>
                        </div>

                      </div>

                      <div class="row">

                        <div class="donor col-md-6">
                          <label for="fname">Email*</label>
                          <input type="text" class="form-control" id="lname" placeholder="enter your email" required />
                          <div class="invalid-feedback">Valid Email is required.</div>
                        </div>

                        <div class="donor col-md-6">
                          <label for="fname">Phone*</label>
                          <input type="text" class="form-control" id="lname" placeholder="enter your phone number" required />
                          <div class="invalid-feedback">Valid Phone is required.</div>
                        </div>

                      </div>

                      <div class="row">

                        <div class="col-md">
                          <label for="fname">Message*</label>
                          <input type="text" class="form-control message text-center" id="lname" placeholder="enter your message" required />
                          <div class="invalid-feedback">.</div>
                          <button class="my-3 btn btn-primary btn-lg" type="submit">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div> { /** delete? */}

                </div>
              </div>

              <Footer />

            </div>


            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/form-validation.js"></script>
          </body>
        </html>

      </div>
    )
  }
}

export default Contact;