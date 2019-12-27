import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import styled from "styled-components"
export default () => (


     
  <div style={{ color: `purple` }}>
    <li><Link to="/index/">Home</Link></li>
    <li><Link to="/aboutstaff/">About Staff</Link></li>
    <li><Link to="/ad/">Ad</Link></li>
    <li><Link to="/article/">Article</Link></li>
    <li><Link to="/calendar/">Calendar</Link></li>
    <li><Link to="/contact/">Contact Us</Link></li>
    <li><Link to="/donation/">Donation</Link></li>
    <li><Link to="/getinvoloved/">Get Involved</Link></li>
    <li><Link to="/opportunities/">Opportunties</Link></li>
    <li><Link to="/printlocations/">Print Locations</Link></li>
    <li><Link to="/vertical/">Vertical</Link></li>
    <li><Link to="/aboutstaff/">About Staff</Link></li>
    <Header headerText="Hello Gatsby!" />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />



  <UserWrapper>
    <Avatar src={props.avatar} alt="" />
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </UserWrapper>
)

export default () => (
  <Container>
    <h1>About Styled Components</h1>
    <p>Styled Components is cool</p>
    <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Container>
)
  </div>
)
