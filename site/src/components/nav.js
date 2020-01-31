import React from 'react';

class Nav extends React.Component {
    render() {
        return (
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
        )
    }
}

export default Nav;