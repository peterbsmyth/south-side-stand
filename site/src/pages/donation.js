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

              <Nav />

            </div>
          </div>
          <div class="container">
            <h1 class="h1-zimeng">Online Donation</h1>

            <form class="needs-validation" novalidate>
              <div class="row">
                <div class="col-12">
                  <h2>Donor Information</h2>
                </div>
                <div class="col-6">
                  <label for="fname">First Name*</label>
                  <input type="text" class="form-control" id="fname" placeholder="enter your first name" required />
                  <div class="invalid-feedback">Valid first name is required.</div>
                </div>
                <div class="col-6">
                  <label for="fname">Last Name*</label>
                  <input type="text" class="form-control" id="lname" placeholder="enter your last name" required />
                  <div class="invalid-feedback">Valid last name is required.</div>
                </div>
                <div class="donor col-6">
                  <label for="fname">Email*</label>
                  <input type="text" class="form-control" id="lname" placeholder="enter your email" required />
                  <div class="invalid-feedback">Valid Email is required.</div>
                </div>
                <div class="donor col-6">
                  <label for="fname">Phone*</label>
                  <input type="text" class="form-control" id="lname" placeholder="enter your phone number" required />
                  <div class="invalid-feedback">Valid Phone is required.</div>
                </div>
              </div>
              <div class="row">
                <div class="donor col-8">
                  <label for="fname">Adress*</label>
                  <input type="text" class="form-control" id="lname" placeholder="enter your adress" required />
                  <div class="invalid-feedback">Valid Adress is required.</div>
                </div>
                <div class="donor col-8">
                  <label for="fname">Adress 2(Optional)</label>
                  <input type="text" class="form-control" id="lname" placeholder="enter your adress" required />
                  <div class="invalid-feedback">Valid Adress is required.</div>
                </div>
                <div class="donor col-8">
                  <label for="fname">City*</label>
                  <input type="text" class="form-control" id="lname" placeholder="enter your city" required />
                  <div class="invalid-feedback">Valid City is required.</div>
                </div>
                <div class="donor col-8">
                  <label for="state">State*</label>
                  <select class="custom-select" id="state" required>
                    <option value="">Pick One</option>
                    <option selected>Alabama</option>
                    <option>Alabama</option>
                    <option>Alaska</option>
                    <option>Arizona</option>
                    <option>Arkansas</option>
                    <option>California</option>
                    <option>Connecticut</option>
                    <option>Delaware</option>
                    <option>Florida</option>
                    <option>Georgia</option>
                    <option>Hawaii</option>
                    <option>Idaho</option>
                    <option>Illinois</option>
                    <option>Indiana</option>
                    <option>Iowa</option>
                    <option>Kansas</option>
                    <option>Kentycky</option>
                    <option>Louisiana</option>
                    <option>Maine</option>
                    <option>Maryland</option>
                    <option>Massachusetts</option>
                    <option>Michigan</option>
                    <option>Minnesota</option>
                    <option>Mississippi</option>
                    <option>Missouri</option>
                    <option>Montana</option>
                    <option>Nebraska</option>
                    <option>Nevada</option>
                    <option>New Hampshire</option>
                    <option>New Jersey</option>
                    <option>New Mexico</option>
                    <option>New York</option>
                    <option>North Carolina</option>
                    <option>North Dakota</option>
                    <option>Ohio</option>
                    <option>Oklahoma</option>
                    <option>Oregon</option>
                    <option>Pennsylvania</option>
                    <option>Rhode Island</option>
                    <option>South Carolina</option>
                    <option>South Dakota</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Utah</option>
                    <option>Vermont</option>
                    <option>Virginia</option>
                    <option>Washington</option>
                    <option>West Virginia</option>
                    <option>Wisconsin</option>
                    <option>Wyoming</option>
                  </select>
                  <div class="invalid-feedback">Please provide a valid state</div>
                </div>
                <div class="donor col-4">
                  <label for="fname">Zip*</label>
                  <input type="text" class="form-control" id="lname" placeholder="enter your zip" required />
                  <div class="invalid-feedback">Valid Zip is required.</div>
                </div>


              </div>

              <div class="row pt-3">
                <div class="col-12">
                  <h2>Donation Amount </h2>
                  <h5 class="h5-zimeng">Select the amount you would like to donate from the list below or enter a different amount.</h5>
                </div>
                <div class="col">
                  <div class="custom-control custom-radio">
                    <input id="$5" name="donationamount" type="radio" class="custom-control-input" checked required />
                    <label class="custom-control-label" for="$5">$5</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input id="$10" name="donationamount" type="radio" class="custom-control-input" checked required />
                    <label class="custom-control-label" for="$10">$10</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input id="$25" name="donationamount" type="radio" class="custom-control-input" checked required />
                    <label class="custom-control-label" for="$25">$25</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input id="$50" name="donationamount" type="radio" class="custom-control-input" checked required />
                    <label class="custom-control-label" for="$50">$50</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input id="$100" name="donationamount" type="radio" class="custom-control-input" checked required />
                    <label class="custom-control-label" for="$100">$100</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="donationamount col-3">
                  <label for="fname">Other</label>
                  <input type="text" class="form-control" id="fname" placeholder="enter your donation amount" required />
                  <div class="invalid-feedback">Valid donation amount is required.</div>
                </div>
              </div>
              <div class="row pt-3">
                <div class="col-12">
                  <h2>Payment</h2>
                  <h5 class="h5-zimeng">Please select how you would like to make your payment</h5>
                </div>

                <div class="col">
                  <div class="custom-control custom-radio">
                    <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required />
                    <label class="custom-control-label" for="credit">Credit Card</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" checked required />
                    <label class="custom-control-label" for="debit">Debit Card</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" checked required />
                    <label class="custom-control-label" for="paypal">Paypal</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="payment col-6">
                  <label for="fname">Name on card*</label>
                  <input type="text" class="form-control" id="fname" placeholder="enter your name on card" required />
                  <div class="invalid-feedback">Valid name is required.</div>
                </div>
                <div class="payment col-6">
                  <label for="fname">Card number*</label>
                  <input type="text" class="form-control" id="fname" placeholder="enter your card number" required />
                  <div class="invalid-feedback">Valid card number is required.</div>
                </div>
                <div class="payment col-3">
                  <label for="fname">Expiration*</label>
                  <input type="text" class="form-control" id="fname" placeholder="enter your expiration date" required />
                  <div class="invalid-feedback">Valid expiration date is required.</div>
                </div>
                <div class="payment col-3">
                  <label for="fname">CVV*</label>
                  <input type="text" class="form-control" id="fname" placeholder="enter your security code" required />
                  <div class="invalid-feedback">Valid security code is required.</div>
                </div>
              </div>

              <button class="my-3 btn btn-primary btn-lg" type="submit">Continue</button>

            </form>
          </div>

          <Footer />

        </div>




        {/* <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/form-validation.js"></script> */}

  </Layout>
)