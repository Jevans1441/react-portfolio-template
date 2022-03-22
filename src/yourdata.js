// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import muiIcon from "./images/mui.svg"
import bootStrapIcon from "./images/bootstrap.svg"
import nodeIcon from "./images/node.svg"
import expressIcon from "./images/express.svg"
import postgresIcon from "./images/postgres.svg"
import gitIcon from "./images/git.svg"
import spaceXimg from "./images/SpaceX.png"
import restaurantImg from "./images/restaurantPage.png"
import awsIcon from "./images/aws.svg"
import pythonIcon from "./images/python.svg"
import profilePic from "./images/profilePic.png"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"
import { node } from "prop-types"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Josh",
  headerTagline: [
    //Line 1 For Header
    "Software Developer",
    //Line 2 For Header
    " ",
    //Line 3 For Header
    " ",
  ],
  //   Header Paragraph
  headerParagraph: "",

  //Contact Email
  contactEmail: "jevans1441@outlook.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "SpaceX", //Project Title - Add Your Project Title Here
      para:
        "Multi-page front end project about SpaceX. Users can view the the different rockets, crew members, and dragons with details about each. Made with React, Redux, Material-UI", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: spaceXimg,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Jevans1441/SpaceX-project",
    },
    {
      title: "Best ATL Restaurants", //Project Title - Add Your Project Title Here
      para:
        "A group project built with multi-page front end built with a NodeJS backend, with a sequelize Postgres DB. I designed to front-end, routing, and database.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: restaurantImg,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Boltzy50/restaurantdb2",
    },
    {
      title: "Project Three", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Hey, I'm Josh, and I live in Athens, Ga. I've worked in the LTL transportation industry for the past 7 years. Being in the industry, and seeing how unoptimized, and inefficient it is has given me the drive and passion to step into the programming world.",
  aboutParaTwo:
    "When I'm not coding I spend time with my fiancé and Pembroke Welsh Corgi Olive. I love corgis, best short legged dog.",
  aboutParaThree: "",
  aboutImage: profilePic,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para: "HTML",
    },
    {
      img: cssIcon,
      para: "CSS",
    },
    {
      img: jsIcon,
      para: "JavaScript",
    },
    {
      img: reactIcon,
      para: "React",
    },
    {
      img: muiIcon,
      para: "Material-UI",
    },
    {
      img: bootStrapIcon,
      para: "Bootstrap",
    },
    {
      img: nodeIcon,
      para: "NodeJS",
    },
    {
      img: expressIcon,
      para: "ExpressJS",
    },
    {
      img: postgresIcon,
      para: "PostgreSQL",
    },
    {
      img: gitIcon,
      para: "Git",
    },
    {
      img: awsIcon,
      para: "AWS",
    },
    {
      img: pythonIcon,
      para: "Python",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  // promotionHeading: ",
  // promotionPara: "",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Connect with me",
  social: [
    // Add Or Remove The Link Accordingly
    {
      img: githubIcon,
      url: "https://github.com/jevans1441",
    },
    {
      img: linkedinIcon,
      url: "https://linkedin.com/in/jevans1441",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
