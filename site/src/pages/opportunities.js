import React from 'react'
import Layout from '../components/layout'
import Footer from '../components/footer'
export default () => (
  <Layout>
    <h1 class="mainheading">Submit Opportunities</h1>
                <p class="lead">Submit local jobs, events, and volunteer opportunities, as well as recurring events to The Stand.<br /> Fill out the form with all information regarding your opportunity. The Stand's team will review all submissions and contact you if any additional questions need be answered.</p>

  <form />
  <div class="form-row mt-2 mb-2" /> 
    <div class="col-md-6 col-12" />
      <input type="text" class="form-control" placeholder="First name" />
    
    <div class="col-md-6 col-12">
      <input type="text" class="form-control" placeholder="Last name" />
    </div>

    <div class="form-group mt-3 mb-3" />
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

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
<form />
<Footer />
  </Layout>
)
