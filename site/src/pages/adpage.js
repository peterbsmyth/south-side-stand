import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
import Nav from "../components/nav"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'


export default () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    adList: file(relativePath: {eq: "advertising/advlist.jpeg"}) {
      id
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    adChart: file(relativePath: {eq: "advertising/advertisingchart.png"}) {
      id
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }  
  `)
  return (
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
              <h3>Advertising</h3>
  
              <div class="row pt-4">
                <div class="col">
                  <h1> Want to place an advertisement?</h1>
                  <p class="pt-2">Please contact:</p>
                  <p>Ashley Kang</p>
                  <p>The Stand Director</p>
                  <p>(315) 882-1054</p>
                  <p>Ashley@MySouthSideStand.com</p>
                </div>
              </div>
  
              <div class="row">
                <div class="col">
                  <h3 class="pt-3">Online Advertising Options</h3>
                  <p class="pt-3">Online advertising with mysouthsidestand.com is a great way to get your message out in the most timely and affordable manner possible. Reach your audience 24/7 with an online ad placed adjacent to editorial of great interest to them.</p>
                  <p>Costs vary by position as indicated below. Built-in discounts apply. The more months you buy, the less you pay as you go. Shorter-term pricing is available upon request.</p>
                </div>
              </div>
  
              <div class="row pt-4">
                <div class="col">
                  <h3>Why You Should Advertise With The Stand</h3>
                  <Img
                    fluid={data.adList.childImageSharp.fluid}
                    alt="list of ads"
                    className="img-fluid pt-3"
                  />
                </div>
              </div>
  
              <div class="row pt-4">
                <div class="col">
                  <h3> What Does The Stand "Stand" For?</h3>
                  <p class="pt-3">This project is an initiative to share the community’s viewpoints and to uphold the power of the written word through hands-on civic journalism.</p>
                  <p>Our project is grounded in our plan to train community and student journalists as our chief writers, photographers and bloggers.</p>
                  <p>Through print and our Web site, The Stand serves to chronicle issues facing the South Side and connect members living in the community.</p>
                  <p>The Stand is committed to being a publication by the South Side, for the South Side and a credible source for community news.</p>
                  <p>5,000 copies of the print edition will be distributed free from more than 50 locations. Eight print issues are published each year and the website is updated weekly. Ask your account representative for details and our publication schedule.</p>
                </div>
              </div>
  
              <div class="row pt-4">
                <div class="col">
                  <h3> Print Advertising</h3>
                  <Img
                    fluid={data.adChart.childImageSharp.fluid}
                    alt="advertising chart"
                    className="img-fluid pt-2 pb-4"
                  />
                </div>
              </div>
  
            </div>
            <div class="col-md-3 mb-5">
              <div class="row pb-4">
                <div class="col ads-side text-center">
                  <p> Your Ad Here</p>
                </div>
              </div>
              <div class="row pb-4">
                <div class="col ads-side text-center">
                  <p> Your Ad Here</p>
                </div>
              </div>
              <div class="row pb-4">
                <div class="col ads-side text-center">
                  <p> Your Ad Here</p>
                </div>
              </div>
              <div class="row pb-4">
                <div class="col ads-side text-center">
                  <p> Your Ad Here</p>
                </div>
              </div>
  
            </div>
          </div>
  
          <Footer />
  
        </div>
  
  
  
  
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="js/bootstrap.min.js"></script>
  
    </Layout>
  )
} 