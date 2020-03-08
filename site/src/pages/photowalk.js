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


        <section>

          <div class="row">
            <div class="col-md-12">
              <h1>The 10th Annual Photo Walk</h1>
              <div>
              </div>

              <div class="row">
                <div class="col-md-5 px-3 py-1">
                  <img src="images/photowalk/poster.jpg" alt="Photo Walk Cover Page" class="img-fluid pb-3" />
                </div>

                <div class="col-md-7 py-1">
                  <p>The Stand will hold its annual Photo Walk for the 10th year Saturday, July 27.</p>
                  <p>A Photo Walk is a social photography event where photographers get together to explore a neighborhood, shoot photos and practice their skills.</p>
                  <p>Because this year is the 10th anniversary, multiple walks will be held. Interested participants may sign up for a specific walk or arrive day of the walk and pick which to join. </p>
                  <p>If interested in learning more, email ashley@mysouthsidestand.com or register online at <a href="https://docs.google.com/forms/d/e/1FAIpQLSdol4DBe9pV1-ilp-iWtcQVPjOAHSHgfjFalrabbQXTc4LtMA/closedform" target="new">bit.ly/SouthSidePhotoWalk.</a></p>
                  <p><span class="location">The event will begin at 10 a.m. from the South Side Innovation Center, located at 2610 S. Salina St.</span></p>
                </div>
              </div>

              <div class="row">

                <div class="col-md-12">

                  <h3 class="mb-4">Photo Walk Archive</h3>

                  <div class="row">

                    <div class="col-md-4 pb-3">
                      <a href="https://www.flickr.com/photos/mysouthsidestand/collections/72157710050431582/" target="new"><img src="images/photowalk/2019.jpg" alt="Photowalk 2019" class="img-fluid pb-2" /></a>
                      <h2 class="mb-2">2019</h2>
                    </div>

                    <div class="col-md-4 pb-3">
                      <a href="https://www.flickr.com/photos/mysouthsidestand/collections/72157669687323687/" target="new"><img src="images/photowalk/2018.jpg" alt="Photowalk 2018" class="img-fluid pb-2" /></a>
                      <h2 class="mb-2">2018</h2>
                    </div>

                    <div class="col-md-4 pb-3">
                      <a href="https://www.flickr.com/photos/mysouthsidestand/collections/72157684050666613/" target="new"><img src="images/photowalk/2017.jpg" alt="Photowalk 2017" class="img-fluid pb-2" /></a>
                      <h2 class="mb-2">2017</h2>
                    </div>

                  </div>

                  <div class="row">

                    <div class="col-md-4 pb-3">
                      <a href="https://www.flickr.com/photos/mysouthsidestand/collections/72157670512552511/" target="new"><img src="images/photowalk/2016.jpg" alt="Photowalk 2016" class="img-fluid pb-2" /></a>
                      <h2 class="mb-2">2016</h2>
                    </div>

                    <div class="col-md-4 pb-3">
                      <a href="https://www.flickr.com/photos/mysouthsidestand/collections/72157653792318784/" target="new"><img src="images/photowalk/2015.jpg" alt="Photowalk 2015" class="img-fluid pb-2" /></a>
                      <h2 class="mb-2">2015</h2>
                    </div>

                    <div class="col-md-4 pb-3">
                      <a href="https://www.flickr.com/photos/mysouthsidestand/collections/72157646023682305/" target="new"><img src="images/photowalk/2014.jpg" alt="Photowalk 2014" class="img-fluid pb-2" /></a>
                      <h2 class="mb-2">2014</h2>
                    </div>

                  </div>

                  <div class="row">

                    <div class="col-md-4 pb-3">
                      <a href="https://www.flickr.com/photos/mysouthsidestand/collections/72157634624885794/" target="new"><img src="images/photowalk/2013.jpg" alt="Photowalk 2013" class="img-fluid pb-2" /></a>
                      <h2 class="mb-2">2013</h2>
                    </div>

                    <div class="col-md-4 pb-3">
                      <a href="https://www.flickr.com/photos/mysouthsidestand/collections/72157630684537012/" target="new"><img src="images/photowalk/2012.jpg" alt="Photowalk 2012" class="img-fluid pb-2" /></a>
                      <h2 class="mb-2">2012</h2>
                    </div>

                    <div class="col-md-4 pb-3">
                      <a href="https://www.flickr.com/photos/mysouthsidestand/collections/72157629847352129/" target="new"><img src="images/photowalk/2011.jpg" alt="Photowalk 2011" class="img-fluid pb-2" /></a>
                      <h2 class="mb-2">2011</h2>
                    </div>

                  </div>

                  <div class="row">

                    <div class="col-md-4 pb-3">
                      <a href="https://www.flickr.com/photos/mysouthsidestand/collections/72157624448596327/" target="new"><img src="images/photowalk/2010.jpg" alt="Photowalk 2010" class="img-fluid pb-2" /></a>
                      <h2 class="mb-2">2010</h2>
                    </div>

                    <div class="col-md-4 pb-3">
                    </div>

                    <div class="col-md-4 pb-3">
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>


        <Footer />

      </div>




      {/* <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="js/bootstrap.min.js"></script> */}
  </Layout>
)