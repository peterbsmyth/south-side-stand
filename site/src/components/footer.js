import React from 'react';

class Footer extends React.Component {
  render() {
    return (
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
    )
  }
}

export default Footer;