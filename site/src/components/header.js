import React from 'react';
import standLogo from '../images/header_footer/the-stand-logo-full-blue.png';
import iconfinder from '../images/header_footer/iconfinder_search.png';

class Header extends React.Component {
  render() {
    return (
      <header class="row py-4">

        <div class="col-3">
          <img src={standLogo} alt="the stand logo" width="200" />
        </div>

        <div class="col-6">
        </div>

        <div class="col-3">

          <div class="row">
            <div class="col px-0">

              <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />

                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon2"><img src={iconfinder} alt="the search logo" width="24" /></span>
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
    )
  }
}

export default Header;