import React, { Component } from 'react';
// import logo from '../images/header_footer/the-stand-logo.png';
// import '../styles/general.css';

class Opportunities extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />

          <div className="container">
  
    <header className="row py-4">
    
      <div className="col-3">
        <img src="images/header_footer/the-stand-logo-full-blue.png" alt="the stand logo" width="200" />
      </div>
    
      <div className="col-6">
      </div>
  
      <div className="col-3">
        
        <div className="row">
          <div className="col px-0">
            
            <div className="input-group input-group-sm mb-3">
              <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
        
              <div className="input-group-prepend">
                 <span className="input-group-text" id="basic-addon2"><img src="images/header_footer/iconfinder_search.png" alt="the search logo" width="24" /></span>
              </div>
            
            </div>

          </div>
        </div>

        <div className="row">
          <div className="col text-right px-0">
            <button type="button" className="btn btn-primary btn-md px-3 px-md-5">Donate</button>
          </div>
        </div>


      </div>
 
     </header>


<div className="row">
  <div className="col px-0">

  <nav className="navbar navbar-expand-lg navbar-light">
  
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul className="navbar-nav mr-auto">
      
        <li className="nav-item dropdown">
        
          <a className="nav-link dropdown-toggle px-3" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Stories</a>
        
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">News</a>
            <a className="dropdown-item" href="#">Community</a>
            <a className="dropdown-item" href="#">Environment</a>
            <a className="dropdown-item" href="#">Business</a>
            <a className="dropdown-item" href="#">School & Youth</a>
            <a className="dropdown-item" href="#">Entertainment</a>
            <a className="dropdown-item" href="#">Religion & Faith</a>
            <a className="dropdown-item" href="#">Fatherhood</a>
            <a className="dropdown-item" href="#">Southside Achiever</a>

          
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Photo Walk</a>
            <a className="dropdown-item" href="#">They Wear Blue</a>
            <a className="dropdown-item" href="#">My Housing Matters</a>
            <a className="dropdown-item" href="#">From Where We Stand</a>
          </div>

        </li>

        <li className="nav-item dropdown">
        
           <a className="nav-link dropdown-toggle px-3" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</a>
        
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">History</a>
              <a className="dropdown-item" href="#">Print Copies</a>
              <a className="dropdown-item" href="#">Flickr</a>
              <a className="dropdown-item" href="#">FAQ</a>
            </div>
        </li>

        <li className="nav-item dropdown">
        
           <a className="nav-link dropdown-toggle px-3" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Opportunites</a>
        
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Job Openings</a>
              <a className="dropdown-item" href="#">Volunteer</a>
              <a className="dropdown-item" href="#">Skills Training</a>
            </div>
        </li>

        <li className="nav-item dropdown">
        
           <a className="nav-link dropdown-toggle px-3" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Calendar</a>
        
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Events</a>
              <a className="dropdown-item" href="#">Announcements</a>
            </div>
        </li>

        <li className="nav-item">
          <a className="nav-link px-3" href="#">Contact<span className="sr-only"></span></a>
        </li>

        <li className="nav-item">
          <a className="nav-link px-3" href="#">Getting Involved<span className="sr-only"></span></a>
        </li>
      </ul>

    </div>
  </nav>

  </div>
</div>


  <section>
      <div class="row mt-2">
            <div class="col-md-12 so">
                <h1 class="mainheading">Submit Opportunities</h1>
              <p class="lead">Submit local jobs, events, and volunteer opportunities, as well as recurring events to The Stand.<br></br> Fill out the form with all information regarding your opportunity. The Stand's team will review all submissions and contact you if any additional questions need be answered.</p>
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
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label class="form-check-label" for="invalidCheck2">
         I Agree to The Stand <span class="under">Terms and Conditions</span>
      </label>
    </div>
  </div>
  <button class="btn btn-primary mb-5" type="submit">Submit form</button>
</form>

              <div className="col-md-3 mb-2 text-center">
                <a className="btn btn-primary btn-md mx-3 my-0" href="#" role="button">Read more</a>
              </div>
  <div className="col-md-3 mb-2 text-center">
                <h1 class="mainheading">Your ads here</h1>
              </div>
 
     
          </div>

      </div>

  </section>
  

  <footer classNameName="row background-blue footer" />
    
    <div classNameName="col-md-3 py-4 text-center">
      <img src="images/header_footer/the-stand-logo-white.png" alt="Stand Logo" width="150" />
    </div>

    <div className="col-md-6 py-4 text-center footer-text">
      
      <h4 className="pb-0">SUBSCRIBE</h4>
      <p>To recieve a weekly newsletter with popular stories and upcoming events:</p>

      <div className="input-group input-group-sm mb-3 container px-0">
        
        <input type="text" className="form-control" placeholder="Insert Email" aria-label="Insert Email" aria-describedby="basic-addon2" / >
        <div className="input-group-prepend" />
          <span className="input-group-text" id="basic-addon2">Submit</span>
        </div>
     
      
      </div>

      <ul className="list-inline">

        <li className="list-inline-item mx-2"><a target="new" href="INSERT LINK HERE" className="footer-link">Stories</a></li>

        <li className="list-inline-item mx-2"><a target="new" href="INSERT LINK HERE" className="footer-link">About</a></li>

        <li className="list-inline-item mx-2"><a target="new" href="INSERT LINK HERE" className="footer-link">Contact</a></li>

        <li className="list-inline-item mx-2"><a target="new" href="INSERT LINK HERE" className="footer-link">Getting Involved</a></li>
      </ul>

      <ul className="list-inline">

        <li className="list-inline-item mx-2"><a target="new" href="INSERT LINK HERE" className="footer-link">Calendar</a></li>

        <li className="list-inline-item mx-2"><a target="new" href="INSERT LINK HERE" className="footer-link">Opportunities</a></li>

        <li className="list-inline-item mx-2"><a target="new" href="https://www.flickr.com/photos/mysouthsidestand/" className="footer-link">Flickr</a></li>

        <li className="list-inline-item mx-2"><a target="new" href="INSERT LINK HERE" className="footer-link">Advertising</a></li>
      </ul>
            
      <p className="footer-text">&copy; 2019 The South Side Stand. All rights reserved.</p>
       
    </div>


    <div className="col-md-3 py-4 text-center">

      <a target="new" href="https://www.facebook.com/TheStandNewspaper/" ><img src="images/header_footer/iconfinder_facebook.png" alt="Facebook Logo" width="36" className="mx-1"/></a>
          
      <a target="new" href="http://twitter.com/mysouthside" ><img src="images/header_footer/iconfinder_twitter.png" alt="Twitter Logo" width="36" className="mx-1" /></a>
          
      <a target="new" href="INSERT STAND INSTAGRAM LINK" ><img src="images/header_footer/iconfinder_instagram.png" alt="Instagram Logo" width="36" className="mx-1" /></a>
    </div>


  
</div>
  
    );
  }
}

export default Opportunities; 