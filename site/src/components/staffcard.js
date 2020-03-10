import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import './aboutstaff.css'

class StaffCard extends React.Component {
    render() {
        return (
            <>
                <div class="col-md-3">
                    <Img
                        fluid={this.props.image}
                        alt={this.props.name}
                        className="img-fluid simg mb-3 mt-3"
                    />
                </div>
                <div class="col-md-9 stf-text mt-3">
                    <p><span class="name">{this.props.name}</span><br /><span class="position">{this.props.position}</span></p>
                    <p class="mb-0">{this.props.position}</p>
                    <p class="staff-information">{this.props.information}<span id="dots1">...</span><span id="more1">{this.props.more}</span></p>
                    <button onclick="myFunction1()" id="myBtn1" class="mb-3 button">Read more</button>
                </div>
            </>
        )
    }
}

export default StaffCard;