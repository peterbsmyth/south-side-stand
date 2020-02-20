import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

export default () => {
  const data = useStaticQuery(graphql`
  query ArticlePage {
    groupPhoto: file(relativePath: {eq: "article/grieve.JPEG"}) {
      id
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    familyPhoto: file(relativePath: {eq: "article/grieve2.JPEG"}) {
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
      <h1>This is the article page.</h1>

      <div class="container">

        <Header />


        <div class="row">
          <div class="col px-0">

            <Nav />

          </div>
        </div>


        <div class="row py-3">
          <section class="col-md-9">
            <h4 class="pb-2">A Better Way to Grieve</h4>
            <Img
              fluid={data.groupPhoto.childImageSharp.fluid}
              alt="group photo"
              className="img-fluid"
            />
            <p class="location">iApologize’s first Park & John Street Memorial Cookout took place Sep. 21. The nonprofit’s founder plans to make it an annual event. | Sheila Quinell, Staff Photographer</p>
            <h5>How Rashawn Sullivan Plans to Turn a Place of Grief Into a Memorial Garden</h5>
            <p>For some time, the intersection of Park and John streets on Syracuse’s North Side was a symbol of the neighborhood’s misery. At this intersection once stood a two-story home that had long been abandoned and vandalized. Empty and decaying, the house was littered with hundreds of empty liquor bottles. Tattooed in spray paint across its walls read “rest in peace.” In a way, the house stood as a memorial to those lost at this intersection. In another, it was a reminder of the merciless killings that continue to plague this city. And while the house has been demolished, its empty lot remains like a fading scar reminiscent of all the tears shed on these streets.</p>

            <p>Yet on a sunny September day, this empty lot played host to a crowd of roughly 100 smiling people. Hip-hop music echoed through the streets and gray smoke rose into the air as burgers and hot dogs were dished out to anyone hungry for a last bite of summer. Bringing energy and dignity to the lot has been the dream of Rashawn Sullivan, founder of the iApologize Foundation.</p>

            <p>“My desire for creating the garden was to give people, family members, a better place to visit their loved ones instead of on some street corner that has been unattended to for months,” Sullivan said.</p>

            <div class="row">
              <div class="col-md-8">
                <Img
                  fluid={data.familyPhoto.childImageSharp.fluid}
                  alt="family photo"
                  className="img-fluid"
                />
                <p>The family of James Springer III poses for a photo with Rashawn Sullivan during the cookout organized Sep. 21. | Sheila Quinell, Staff Photographer</p>

              </div>
              <div class="col-md-4">
                <p>Last year, 16-year-old Antonio Gullotto and 12-year-old James Springer III were both shot and killed near this intersection. Two years ago, 22-year-old John White was also killed here. Sullivan found the empty liquor bottles and RIP inscriptions marking their place of death to be “disrespectful” and radiating “negative energy.” To turn this space into one of inspiration and positive energy, Sullivan came up with the idea to transform the empty lot into a community garden.</p>

                <p>“You wouldn’t want to live in a dirty house, so why have somebody’s energy living at a dirty memorial site?” Sullivan asked.</p>
              </div>
            </div>
            <p>All proceeds generated from iApologize’s first Park & John Street Memorial Cookout go toward developing the empty lot into a memorial garden. Sullivan believes this cookout is one of the first steps in changing what memorials look like in Syracuse while also adding green spaces to areas which may otherwise not have them.</p>

            <p>An important part of the garden’s initial development was the planting of two crabapple trees and a dogwood tree in honor of the young men who lost their lives at the intersection.</p>


            <div class="row">
              <div class="col-md-5">


                <p>“The trees symbolize growth because that’s what we’re going to do, we’re going to grow from this,” he said.</p>

                <p>Growth is something that has been vital in Sullivan’s life journey, albeit in a different way. In 1997, Sullivan, who was 17 at the time, murdered 18-year-old Jason Crawford in a drive-by shooting. Since his release in 2015, Sullivan has been dedicated to combating violence in Syracuse through public speaking, community outreach and inspiring others to take responsibility for their actions and move forward.</p>
                <p>And though grief played a dominant role in the memorialization, residents who attended have pledged to keep the lot alive. As attendees danced to upbeat hip-hop, others competed fiercely in friendly games of ping pong and horseshoes while kids took turns sparring with boxing gloves — all in good fun. Blunts were lit and passed as everyone chatted and soaked in each other’s company. If it weren’t for the number of people wearing black T-shirts reading “Long Live Tone,” you’d probably think this event was a block party rather than a memorial and recruiting center in the war against neighborhood crime.</p>

              </div>
              <div class="col-md-7">
                <img src="images/article/grieve3.JPEG" alt="people planting a tree" class="img-fluid" />
                <p>A tree is planed in memory of Antonio “Tone” Gullotto. | Alex Rouhandeh, The Stand Intern</p>
              </div>
            </div>

            <p>“We just want to stop some of this violence,” said Tyrone L. Anderson, Gullotto’s great-uncle. Anderson believes getting the community together helps in steering young people away from risky behaviors. He hopes events like this will motivate those in tough situations to turn their lives around.
          “If I can do it, anybody can do it,” he said.</p>

            <p>Anderson shared that during high school he started smoking marijuana which eventually led to using crack. It wasn’t until he met his current wife that he found the motivation to get clean. Anderson is 10-years crack-free, he says. He owns his own home, his own boat and his own trucks.</p>

            <p>“Everything we got is paid for,” he said proudly. “It ain’t hard to do if you really want it.”</p>


            <p>Part of iApologize’s mission is to mentor youth toward changing their lives and aspiring them toward greatness so they can one day create change in their communities. A way in which Sullivan works toward this is through partnering with other local nonprofits and organizations. One of which is the Onondaga Earth Corps (OEC) that provided the trees planted in each victim’s memory. The other is State University of New York College of Environmental Science and Forestry, which plans to work with the victim’s families in planning the garden’s future development. Throughout the cookout ESF representatives were actively taking suggestions on the garden’s design to incorporate in their plans.</p>

            <p>“We’re trying to figure out with this project what people want,” said Alex Samoray a SUNY ESF landscape architecture student who is working with her professor, Maren King, in developing the garden. “A garden hopefully is a healing space. I think people think of nature as healing and as a place to reflect.” Reflection and healing are two of Sullivan’s main motives in creating the garden. At the cookout Sullivan initiated these practices with attendees during the memorial tree plantings.</p>

            <p>At Sullivan’s call, all 100 people move like a wave toward each planting spot for a moment of remembrance. The garden, which was filled with chatter and hip-hop, fell silent as a prayer is read for each of the young men: A crabapple tree for John White; a dogwood tree for Antonio Gullotto, and a crabapple tree for James Springer III.</p>

            <p>“(I’m) just trying to keep his memory alive,” said Wendy Voles, the mother of Springer III. “I’m not going to say this (event) will stop (gun violence) 100 percent. But I’m kinda hoping with all this going on that it can decrease it.”</p>

            <p>Sullivan has supported Springer III’s family with their grief and continues to believe in the power that the community holds in bringing people together toward the common good. He plans to make the memorial cookout an annual event and will continue to create these spaces of healing throughout Syracuse.</p>

            <p>Due to gang territories dividing the city and lack of sufficient public transportation, some individuals are unable to visit memorials on other sides of town. Sullivan hopes to address this while also uniting the city through the creation of memorial gardens on each side of Syracuse. His next intended spot will be on the South Side at the intersection of Cannon Street and West Lafayette Avenue, a spot to which he has strong personal ties.</p>

            <p>This is the intersection where Sullivan grew up and used to sell drugs as a young gang member. He has also lost two friends to violence on this corner. Clifford Ryan, another antiviolence activist and the founder of OG’s Against Gun Violence, lost his son at this same corner. This is why Sullivan plans to establish his next community garden here.</p>

            <p>“There’s a lot of loss,” Sullivan said. “There’s a lot of pain, a lot of hurt, a lot of suffering. I just wanted to do (these gardens) to give people a better way to grieve.”</p>

            <p class="location">By Alex Rouhandeh, The Stand Intern</p>

            <h3>More From the Stand</h3>
            <div class="row pt-2 pb-4">

              <div class="col-md-4">
                <img src="images/article/more1.JPEG" alt="people dancing" class="img-fluid" />
                <p class="calendar-listing">Kurtis Blow puts his spin on classic to create ‘Hip Hop Nutcracker’</p>
              </div>
              <div class="col-md-4">
                <img src="images/article/more2.JPEG" alt="people cutting a ribbon" class="img-fluid" />
                <p class="calendar-listing">Grand Opening of Freedom Commons</p>
              </div>
              <div class="col-md-4">
                <img src="images/article/more3.JPEG" alt="framed transcript" class="img-fluid" />
                <p class="calendar-listing">Injustice Corrected</p>
              </div>

            </div>
          </section>
          <div class="col-md-3 pr-md-0">
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




      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="js/bootstrap.min.js"></script>
    </Layout>
  )
}  