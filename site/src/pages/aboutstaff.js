import React from "react"
import Layout from "../components/layout"
import Nav from "../components/nav"
import Header from "../components/header"
import Footer from "../components/footer"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import StaffCard from '../components/staffcard'


export default () => {
    const data = useStaticQuery(graphql`
  query AboutStaff {
    steveDavis: file(relativePath: {eq: "about_staff/SteveDavis.png"}) {
      id
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ashleyKang: file(relativePath: {eq: "about_staff/AshleyKang.jpg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      charlesPierce: file(relativePath: {eq: "about_staff/CharlesPierce-El.jpg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shanteashiaHarris: file(relativePath: {eq: "about_staff/ShanteashiaHarrisEl.jpg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    reginaldSeigler: file(relativePath: {eq: "about_staff/ReginaldA.Seigler.jpg"}) {
      id
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    daleHarp: file(relativePath: {eq: "about_staff/DaleHarp.png"}) {
        id
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    brendaMuhammad: file(relativePath: {eq: "about_staff/BrendaBillinsMuhammad.png"}) {
        id
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
    }
    keithMuhammad: file(relativePath: {eq: "about_staff/KeithMuhammad.png"}) {
        id
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
    }
    katherineHills: file(relativePath: {eq: "about_staff/KatherineHills.png"}) {
        id
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
    }
    gloryThomas: file(relativePath: {eq: "about_staff/GloryThomas.png"}) {
        id
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
    }
    miguelBalbuena: file(relativePath: {eq: "about_staff/MiguelBalbuena.png"}) {
        id
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
    }
    jeremiahHowell: file(relativePath: {eq: "about_staff/JeremiahHowell.jpg"}) {
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
            <h1>This is the about staff page</h1>

            <div class="container">

                <Header />


                <div class="row">
                    <div class="col px-0">

                        <Nav />

                    </div>
                </div>


                <div class="container container-background">

                    <div class="row mt-2">
                        <div class="col-md-12">
                            <h1 class="mainheading">About</h1>
                            <p class="subtitle">Who we are</p>
                            <p class="abtcontent">The Stand is an online South Side community newspaper that is written for and by South Side residents. As the voice of the    South Side community of Syracuse, the paper aims to start a community conversation online by inviting residents of the South Side to share        their stories. The paper is the brainchild of the South Side Newspaper Project, a collaboration of the South Side Community Coalition,            Syracuse University and a number of dedicated South Side community residents. Regular contributors to The Stand can become community              reporters. In order to join The Stand’s team, residents can participate in Journalism Workshops held monthly and then join the editorial          leadership in building the paper. With the community’s help, we will continually improve The Stand and contribute to the South Side community.    Our goal is to have a positive impact on the community by introducing youth and residents to opportunities in journalism while also helping      college journalism students gain essential skills needed in their future fields. Once established, community reporters can be paired with        Syracuse University students to develop uniquely local stories.
                </p>
                            <p class="subtitle">History</p>
                            <p class="abtcontent">The vision for the South Side Newspaper Project emerged in September of 2006 from a flash of serendipity. During the previous year, Prof. Steve Davis gave his class an assignment to create a newspaper focused on stories from Syracuse’s South Side. The result was an impressive 36-page publication that circulated the city and received positive feedback. Later, Davis contemplated creating a community newspaper that would be the work of South Side residents and students. During the same time, members of the Southside Community Coalition — a group of citizens dedicated to the economic and cultural revitalization of the South Side — discussed creating a community newspaper to herald neighborhood news from a community perspective grounded in truth, diversity and creativity. Once news spread of the similar ventures, several people from the S.I. Newhouse School of Public Communications and the Coalition met and decided to create a partnership and join Syracuse University’s South Side Initiative, SU’s multi-faceted plan to rejuvenate its nearest neighbor.</p>
                        </div>
                    </div>

                    <div class="row subh my-4">
                        <div class="col-md-12 mt-3 mb-3">
                            <h3>Staff</h3>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="row staffcontent">
                                <StaffCard
                                    name="Steve Davis"
                                    position="Creator"
                                    information="Prof. Davis has worked in newsrooms of all kinds and all sizes, as a manager, editor, writer and page designer. He was executive editor at the community newspaper in Chambersburg, Pa., for six years prior to"
                                    more="joining the Newhouse faculty in 1999. Before that he was national editor and then Washington editor at USA Today, including one year as the lead editor directing the newspaper’s coverage of the Persian Gulf War. Within a year or two, he hopes to turn the project over to the community and work at the project as a volunteer. He graduated from the University of Missouri School of Journalism with a bachelor’s degree in 1977."
                                    image={data.steveDavis.childImageSharp.fluid}
                                />
                                <div class="col-md-3">
                                    <Img
                                        fluid={data.steveDavis.childImageSharp.fluid}
                                        alt="Steve Davis Image"
                                        className="img-fluid simg mb-3 mt-3"
                                    />
                                </div>
                                <div class="col-md-9 stf-text mt-3">
                                    <p><span class="name">Steve Davis</span><br /><span class="position">Creator</span></p>
                                    <p class="staff-information">Prof. Davis has worked in newsrooms of all kinds and all sizes, as a manager, editor, writer and page designer. He was executive editor at the community newspaper in Chambersburg, Pa., for six years prior to<span id="dots1">...</span><span id="more1"> joining the Newhouse faculty in 1999. Before that he was national editor and then Washington editor at USA Today, including one year as the lead editor directing the newspaper’s coverage of the Persian Gulf War. Within a year or two, he hopes to turn the project over to the community and work at the project as a volunteer. He graduated from the University of Missouri School of Journalism with a bachelor’s degree in 1977.</span></p><button onclick="myFunction1()" id="myBtn1" class="mb-3 button">Read more</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row staffcontent">
                                <div class="col-md-3">
                                    <Img
                                        fluid={data.ashleyKang.childImageSharp.fluid}
                                        alt="Ashley Kang Image"
                                        className="img-fluid simg mb-3 mt-3"
                                    />                                </div>
                                <div class="col-md-9 stf-text mt-3">
                                    <p><span class="name">Ashley Kang</span><br /><span class="position">Director</span></p>
                                    <p>Ashley first arrived in Syracuse in 2000 to study journalism at the S.I. Newhouse School of Public Communications. While at the university, she wrote for several student-run publications and served<span id="dots2">...</span><span id="more2"> as editor of the university’s only magazine devoted to diversity, 360 Degrees. Upon graduation, she took a full-time position with The Citizen, the daily newspaper based in Auburn, NY. As the paper’s features editor, she worked not only with staff writers but community members to provide local coverage of Cayuga County.She took over as director of The Stand in May of 2009 and quickly began collecting sources and contacts in the community. She is the main point person for interested contributors and works to coordinate all content seen on the website and in print. She hopes to find many from the community who are interested in contributing to the project and is impressed with the number of community residents who have shown interest so far. She graduated from SU in 2004 with a magazine journalism degree and obtained a master’s degree in higher education from SU’s School of Education in 2011.</span></p><button onclick="myFunction2()" id="myBtn2" class="mb-3">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row subh my-4">
                        <div class="col-md-12 mt-3 mb-3">
                            <h3>Board of Directors</h3>
                        </div>
                    </div>

                    <div class="row mb-5">
                        <div class="col-md-6">
                            <div class="row staffcontent">
                                <div class="col-md-3">
                                    <Img
                                        fluid={data.charlesPierce.childImageSharp.fluid}
                                        alt="Charles Pierce-El Image"
                                        className="img-fluid simg mb-3 mt-3"
                                    />                                </div>
                                <div class="col-md-9 stf-text mt-3">
                                    <p><span class="name">Charles Pierce-El</span></p>
                                    <p>Charles was born and raised in Syracuse. He currently is the President of the South Side Community Coalition and is a retired employee from Chrysler. He is also the president/chairperson of the South Side Homeowner Association, chairperson of Saving Our Society<span id="dots3">...</span><span id="more3"> and a member of a couples of more organizations in an around the city of Syracuse. Besides this, he enjoys bowling, swimming, chess, jogging, cooking and reading. He sees The Stand as a great opportunity for the youth of Syracuse’s South Side and the community as a whole. He hopes many will get involved in the project. “The Stand can only go as far as we take it.” In the future, he would like The Stand to be run by the community. He believes this is a wonderful opportunity to the community. “It’s a great jewel for our community; it represents all sectors of the city of Syracuse. Everyone can get something out of it. We include everyone.”</span></p><button onclick="myFunction3()" id="myBtn3" class="mb-3">Read more</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row staffcontent">
                                <div class="col-md-3">
                                    <Img
                                        fluid={data.shanteashiaHarris.childImageSharp.fluid}
                                        alt="Shanteashia Harris-El Image"
                                        className="img-fluid simg mb-3 mt-3"
                                    />
                                </div>
                                <div class="col-md-9 stf-text mt-3">
                                    <p><span class="name">Shanteashia Harris-El</span></p>
                                    <p>Shanteashia is a graduate of Henninger High School and holds two nursing degrees: a bachelors of science from the University of Rochester and a masters of science from Upstate Medical University. She currently works as a nurse practitioner. She has volunteered her time<span id="dots4">...</span><span id="more4"> at Moorish Science Temple of America and in the past, with the Big Brother Big Sister program. She loves traveling and religion. She would like to see articles of religious, political, cultural, food (recipes) and health content featured in The Stand.</span></p><button onclick="myFunction4()" id="myBtn4" class="mb-3">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-5">
                        <div class="col-md-6">
                            <div class="row staffcontent">
                                <div class="col-md-3">
                                    <Img
                                        fluid={data.reginaldSeigler.childImageSharp.fluid}
                                        alt="Reginald A. Seigler Image"
                                        className="img-fluid simg mb-3 mt-3"
                                    />
                                </div>
                                <div class="col-md-9 stf-text mt-3">
                                    <p><span class="name">Reginald A. Seigler</span></p>
                                    <p>Reginald volunteers as the coordinator of Jubilee Homes Inc. Southwest Showcase Sundays by acting as a strong promoter to these community events held at the Spirit of Jubilee Park in the summer. He is an active member in the Tucker Missionary Baptist Church<span id="dots5">...</span><span id="more5">, contributes to The Post-Standard as a Newschaser and also serves as the bandleader for Soft Spoken Band. He is helping to launch an entertainment column, A Friendly Five, in The Stand that highlights the music and history of the local music scene. He also hopes to see The Stand become involved with South Side schools and be an outlet for the community to voice their concerns. In his free time, he enjoys recording and mixing audio, videography, photography and writing.</span></p><button onclick="myFunction5()" id="myBtn5" class="mb-3">Read more</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row staffcontent">
                                <div class="col-md-3">
                                    <Img
                                        fluid={data.daleHarp.childImageSharp.fluid}
                                        alt="Dale Harp Image"
                                        className="img-fluid simg mb-3 mt-3"
                                    />                                </div>
                                <div class="col-md-9 stf-text mt-3">
                                    <p><span class="name">Dale Harp</span></p>
                                    <p>Dale joined The Stand as a board member this past month but has been connected with the publication since 2013. He was first featured in The Stand’s pages for being a local, published author of “The Day My Dawgs Ran,” a book he wrote while incarcerated<span id="dots6">...</span><span id="more6">. He wanted to share his personal stories about going down the wrong path as a way to encourage youth to make better choices. He next participated in The Stand’s recent summer long storytelling series From Where We Stand. Now he is eager to be further involved as a board member. Harp is also a volunteer at the Mary Nelson Youth Center, Faith Hope Community Center and member of Citizen Action of NY.</span></p><button onclick="myFunction6()" id="myBtn6" class="mb-3">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row subh my-4">
                        <div class="col-md-12 mt-3 mb-3">
                            <h3>Community Correspondents</h3>
                        </div>
                    </div>

                    <div class="row mb-5">
                        <div class="col-md-6">
                            <div class="row staffcontent">
                                <div class="col-md-3">
                                    <Img
                                        fluid={data.brendaMuhammad.childImageSharp.fluid}
                                        alt="Brenda Billins Muhammad Image"
                                        className="img-fluid simg mb-3 mt-3"
                                    />                                </div>
                                <div class="col-md-9 stf-text mt-3">
                                    <p><span class="name">Brenda Billins Muhammad</span></p>
                                    <p>Brenda is a consummate community volunteer seeking to serve the community as a true community conduit. She is dedicated not only to our community, but to our country as well. She has earned two President’s Volunteer Service Awards and a Certificate of<span id="dots7">...</span><span id="more7"> National Service. Brenda is currently serving a second term of National Service as an AmeriCorps VISTA (Volunteers in Service to America) with Syracuse Habitat for Humanity. Brenda is a graduate of Onondaga Community College and SUNY Institute of Technology. Brenda has excellent professional and educational experience in the areas of volunteer management, community organizing, non-profit management, disaster preparedness, business administration, homeownership education, foreclosure intervention and default counseling. She has recently acquired certificates from the Citizen’s Academy, NeighborWorks America Training Institute, FEMA and the Black History Preservation Project. Her plan of action is to attend town hall meetings, community events, workshops and share reports of the knowledge and resources that she secures with our readers. Brenda’s knowledge of our community and her varied experience will be a welcomed addition to The Stand.</span></p><button onclick="myFunction7()" id="myBtn7" class="mb-3">Read more</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row staffcontent">
                                <div class="col-md-3">
                                    <Img
                                        fluid={data.keithMuhammad.childImageSharp.fluid}
                                        alt="Dale Harp Image"
                                        className="img-fluid simg mb-3 mt-3"
                                    />
                                </div>
                                <div class="col-md-9 stf-text mt-3">
                                    <p><span class="name">Keith Muhammad</span></p>
                                    <p>Keith is a servant leader who has worked in the public and non-profit sectors for more than 25 years. He is moved by the pain and suffering of people and is committed to bringing about social change and equitable participation of the disenfranchised<span id="dots8">...</span><span id="more8">. Keith is from a family of activists. His father, Laymon Herring, was the self-educated publisher of the Syracuse Banner and Syracuse Crusader newspapers. He desires to walk in his father’s shoes by writing articles that speak truth to power, that address the needs of the people, that are thought provoking and entertaining. He became involved with the South Side Newspaper Project to improve his writing and to contribute. He has written a few small articles. His work has appeared in The Syracuse Banner, Health Care Cost and The Final Call.</span></p><button onclick="myFunction8()" id="myBtn8" class="mb-3">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-5">
                        <div class="col-md-6">
                            <div class="row staffcontent">
                                <div class="col-md-3">
                                    <Img
                                        fluid={data.katherineHills.childImageSharp.fluid}
                                        alt="Katherine Hills Image"
                                        className="img-fluid simg mb-3 mt-3"
                                    />
                                </div>
                                <div class="col-md-9 stf-text mt-3">
                                    <p><span class="name">Katherine Hills</span></p>
                                    <p>Katherine is a graduate of St. John Fisher College with a degree in Communication/Journalism. She currently works for News Channel 9, as part of the production crew and for Say Yes to Education. Her goal when writing is to help shed light on the dimly lit areas of<span id="dots9">...</span><span id="more9"> our Community.</span></p><button onclick="myFunction9()" id="myBtn9" class="mb-3">Read more</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row staffcontent">
                                <div class="col-md-3">
                                    <Img
                                        fluid={data.gloryThomas.childImageSharp.fluid}
                                        alt="Glory Thomas Image"
                                        className="img-fluid simg mb-3 mt-3"
                                    />
                                </div>
                                <div class="col-md-9 stf-text mt-3">
                                    <p><span class="name">Glory Thomas</span></p>
                                    <p>Glory is the mother of three and a grandmother of three. She has been self-employed and in business for more than 20 years. She is an accomplished published author and recently published a book titled “My Big Little Book of Spiritual Experiences.” She now owns and operates<span id="dots10">...</span><span id="more10"> a family day care. In her spare time, she enjoys giving helpful business tips to new business owners. Glory also enjoys sewing. She does some alterations and makes custom-made bereavement pillows. She considers herself a skilled professional because she has such diverse experiences in many different areas. Finally she was also a radio personality of Star time gospel hour on 1540 radio located in East Syracuse.</span></p><button onclick="myFunction10()" id="myBtn10" class="mb-3">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-5">
                        <div class="col-md-6">
                            <div class="row staffcontent">
                                <div class="col-md-3">
                                    <Img
                                        fluid={data.miguelBalbuena.childImageSharp.fluid}
                                        alt="Miguel Balbuena Image"
                                        className="img-fluid simg mb-3 mt-3"
                                    />
                                </div>
                                <div class="col-md-9 mt-3">
                                    <p><span class="name">Miguel Balbuena</span></p>
                                    <p>Miguel moved to Syracuse in 1990 and to the South Side in 2006. He graduated from the Maxwell School of Citizenship and Public Affairs with master’s degrees in public administration and economics in 1992 and 1993, respectively. He sees as his mission to give back to<span id="dots11">...</span><span id="more11"> the community by empowering South Side residents and increasing their consciousness, especially in the areas of the environment and public health. After writing fiction in the seventh grade, Miguel’s first foray in journalism came two years later as publisher and editor-in-chief of a high school newspaper. He reassumed his love affair with journalism in his freshman year in college at the Pontifical Catholic University as member of the editorial board of a magazine. He has also published an economics essay in the journal of a central bank of reserve.</span></p><button onclick="myFunction11()" id="myBtn11" class="mb-3">Read more</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row staffcontent">
                                <div class="col-md-3">
                                    <Img
                                        fluid={data.jeremiahHowell.childImageSharp.fluid}
                                        alt="Jeremiah Howell Image"
                                        className="img-fluid simg mb-3 mt-3"
                                    />
                                </div>
                                <div class="col-md-9 mt-3">
                                    <p><span class="name">Jeremiah Howell</span></p>
                                    <p>A long time resident of the area, Jeremiah is currently working as an environmental scientist in Syracuse. Jeremiah is a graduate of S.U.N.Y. College of Environmental Science and Forestry in Syracuse with a degree in Environmental Policy and<span id="dots12">...</span><span id="more12"> Management. An avid photographer, Jeremiah hopes to expand his ability behind the lens and contribute to community awareness through involvement with The Stand.</span></p><button onclick="myFunction12()" id="myBtn12" class="mb-3">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

                {  /*  <!-- Add this right before you </body>. This is to include elements of Javascript. THIS IS MY NOTE. Everything after this needs to be pasted in, including notes below describing what is happening --> */}
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>

                <script src="js/bootstrap.min.js"></script>
                <script src="js/general.js"></script>
            </div>

        </Layout>
    )
} 