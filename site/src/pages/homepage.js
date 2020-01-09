import React, { Component } from 'react';
// import logo from '../images/header_footer/the-stand-logo.png';
// import '../styles/general.css';

class Homepage extends Component {
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
      
      <div className="row">

          <div className="col jumbotron-fluid my-4">

            <div className="row box mx-0">

              <div className="col-12">
                <h1 className="display-4 pl-3">New Group Forms to Fight Lead Poisoning</h1>
              </div>

              <div className="col-md-9">
                <p className="lead dek d-none d-md-inline pl-3">Families for Lead Freedom now works to support Southsiders.</p>  
                <p className="publication-date pl-3 mt-0">Published on November 4, 2019</p>
              </div>

              <div className="col-md-3 mb-2 text-center">
                <a className="btn btn-primary btn-md mx-3 my-0" href="#" role="button">Read more</a>
              </div>
            </div>

          </div>

      </div>
      
      <div className="row">

          <div className="col-md-9 pl-md-0">
            <h3 className="mb-4">Lastest Stories</h3>

              <div className="row">
                <div className="col-md-6 pb-3">
                  
                  <a href="#"><img src="images/about_staff/AshleyKang" alt="David Haas" className="img-fluid pb-2" /></a>
                  <a className="section-header" href="#">Features</a>
                  <h2>Telling Stories</h2>
                  <p>The man behind @SyracuseHistory recently awarded for preservation efforts.</p>
                </div>


                <div className="col-md-6 pb-3">
                  <a href="#"><img src="images/about_staff/AshleyKang" alt="David Haas" className="img-fluid pb-2" /></a>
                  <a className="section-header" href="#">Business</a>
                  <h2>Meeting Milestones</h2>
                  <p>Help Me Grow is a new resource for parents.</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 pb-3">                  
                  <a href="#"><img src="images/about_staff/AshleyKang" alt="David Haas" className="img-fluid pb-2" /></a>
                  <a className="section-header" href="#">Religion & Faith</a>
                  <h2>How Hopps Keeps Going</h2>
                  <p>Hopps memorial CME Church's mission to serve remains strong in the face of uncertainty.</p>
                </div>
                
                <div className="col-md-6 pb-3">
                  <a href="#"><img src="images/about_staff/AshleyKang" alt="David Haas" className="img-fluid pb-2" /></a>
                  <a className="section-header" href="#">Community</a>
                  <h2>Creating Change</h2>
                  <p>The Creators Lounge holds #TrapTheVote to spark civic action in local election.</p>
                </div>
              </div>


          </div>

          <div className="col-md-3 pr-md-0 mb-5">
              <h3 className="mb-4">Calendar</h3>

              <a href="#" className="calendar-listing">Citizen Review Board Meeting</a>
              <p>December 5 @ 5:30 pm - 7:30 pm</p>

              <a href="#" className="calendar-listing">CNY Flute Choir Performance</a>
              <p>December 10 @ 7:30 pm - 8:30 pm</p>

              <a href="#" className="calendar-listing">Christmas Cookie Café</a>
              <p>December 14 @ 9:30 am - 12:00 pm</p>

            <a className="btn btn-primary btn-md" href="#" role="button">More Events</a>
          </div>

      </div>

      <div className="row">

        <div className="col pl-md-0">
            <h3 className="mb-4">Who We Are</h3>
        </div>

        <div className="row">

          <div className="col-md-5 px-3">
            <img src="images/about_staff/AshleyKang" alt="South Side Communications Center" className="img-fluid pb-2" />
          </div>

          <div className="col-md-7">
            <h4>The Stand's History</h4>
            <p>The vision for the South Side Newspaper Project emerged in September of 2006 from a flash of serendipity. During the previous year, Prof. Steve Davis gave his className an assignment to create a newspaper focused on stories from Syracuse’s South Side.</p>
            <p>The result was an impressive 36-page publication that circulated the city and received positive feedback.</p>
            <p>Later, Davis contemplated creating a community newspaper that would be the work of South Side residents and students.</p>
            <p><span className="location">The South Side Communication Center, located at 2331 S. Salina St. at the corner of McKinley Avenue and South Salina Street.</span></p>
          </div>
        </div>

      </div>

      <div className="row">

          <div className="col text-center px-md-0">
            <p className="ads">Your Ads Here</p>
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

export default Homepage; 