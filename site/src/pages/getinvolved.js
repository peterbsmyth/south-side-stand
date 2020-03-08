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


    <div class="row pt-4">
      <div class="col-md-9">
        <h3>Get Involved</h3>
        <img src="images/getinvolved/newhouse.png" alt="newhouse logo" class="img-fluid pb-3"/>

         <p>S.I. Newhouse School of Public Communications and The Stand partnered in which Newhouse students can volunteer to write in order to promote community jounalism throughout the city of Syracuse and the University.</p>

        <div class="row pt-3">
          <div class="col-md-6 pb-4 text-center">
            <h5>For general involvement inquiries contact the director South Side Newspaper Project and Editor of The Stand:</h5>
            <img src="images/getinvolved/ashelykang.jpg" alt="kang pic" width="290"  />
            <h5 class="pt-3">Ashley Kang</h5>
            <h5>(315) 882-1054</h5>
            <h5>Ashley@MySouthSideStand.com</h5>
          </div>

          <div class="col-md-6 pb-4 text-center">
            <h5>For involvement through S.I. Newhouse School of Public Communications contact the Faculty Advisor:</h5>
              <img src="images/getinvolved/munno.jpeg" alt="munno pic" width="345" />
            <h5 class="pt-3">Professor Greg Munno</h5>
            <h5>(315) 730-4621</h5>
            <h5>gjmunno@syr.edu</h5>
          </div>
        </div>
      </div>

          <div class="col-md-3 pr-md-0 mb-5">
              <h3 class="mb-4">Calendar</h3>

              <a href="#" class="calendar-listing">Citizen Review Board Meeting</a>
              <p>December 5 @ 5:30 pm - 7:30 pm</p>

              <a href="#" class="calendar-listing">CNY Flute Choir Performance</a>
              <p>December 10 @ 7:30 pm - 8:30 pm</p>

              <a href="#" class="calendar-listing">Christmas Cookie Café</a>
              <p>December 14 @ 9:30 am - 12:00 pm</p>

            <a class="btn btn-primary btn-md" href="#" role="button">More Events</a>
          </div>

    </div>

<Footer />
  
</div>
  

     
     
    {/* <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="js/bootstrap.min.js"></script> */}
  </Layout>
)