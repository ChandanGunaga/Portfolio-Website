import port from "./image/port.png";
import weather from "./image/weather.png"
import amazon from "./image/amazon.png";
import discord from "./image/discord.png"
import devdetect from "./image/devdetectdark.png";
import crowdfund from "./image/crowdfund.png";
import vl from "./image/VL.png"



const Portfolio_data = [
  {
    id: 1,
    category: "REACT APPLICATION",
    title: "Virtual-Learn-admin-dashboard",
    image: vl,
    desc:"Web-based platform designed to manage and monitor the activities of an online learning platform. Allow the administrators to perform add, edit, delete courses, managing users, monitoring progress, and generating reports.The e-learn admin dashboard application is a web-based platform designed to manage the operations of an online learning system. ",
    desc2:"Tech:ReactJS,Redux toolkit,Material UI, NPM packages, Api handling,Axios",
    link:"https://github.com/ChandanGunaga/Virtual-Learn-admin-dashboard"
  },
  {
    id: 2,
    category: "REACT DEVELOPMENT",
    title: "amazon-clone",
    image: amazon,
    desc:"Amazon Clone is a web application that emulates the functionality of Amazon's online shopping platform. It includes features such as product browsing, cart management, and checkout processing. The application uses Firebase for authentication and Stripe for payment processing.",
    desc2:"Tech:ReactJS,Redux toolkit,Material UI, NPM packages, Api handling,Axios,state management",
    link:"https://github.com/ChandanGunaga/amazon-clone",
  },
  {
    id: 3,
    category: "WEB DEVELOPMENT",
    title: "DevDetective",
    image: devdetect,
    desc:"Its a web application that allows users to search for GitHub accounts by entering the account username. It displays relevant information about the user's account, including their profile picture, bio, and repository information. The application also includes a feature to filter the user's repositories by programming language.",
    desc2:"Tech:Javascript,HTML,CSS",
    link:"https://github.com/ChandanGunaga/DevDetective",
  },
  {
    id: 4,
    category: "DEVELOPMENT",
    title: "Weather-app",
    image: weather,
    desc:"The React WeatherApp is a web application that uses OpenWeatherMap API to fetch weather data and displays it on the screen. It allows users to search for the current weather of any location by entering its name or zip code, and displays relevant weather information such as temperature, humidity, and wind speed.",
    desc2:"Tech:ReactJS,Redux toolkit,Material UI, NPM packages, Api handling,Axios",
    link:"https://github.com/ChandanGunaga/Weather-app",

  },

  {
    id: 5,
    category: "DEVELOPMENT",
    title: "Portfolio Website ",
    image: port,
    desc:"The React Portfolio is a personal website built using React, showcasing a collection of a person's projects, skills, and experience. It provides a responsive user interface, allowing visitors to view the portfolio on different devices. The website also includes links to the person's social media accounts and contact information.",
    desc2:"Tech:ReactJS,ReactHooks,CSS,Material UI, NPM packages,animations",
    link:"https://chandangunaga.netlify.app/",
  },


  {
    id: 6,
    category: "WEB DEVELOPMENT",
    title: "Discord-clone-UI ",
    image: discord,
    desc:" Discord UI Clone is a web application that replicates the user interface of the popular chat application Discord. It includes features such as text and voice channels, direct messaging, and user profiles UI. The clone provides a responsive and customizable user interface.",
    desc2:"Tech:HTML,Tailwind CSS",
    link:"https://github.com/ChandanGunaga/Discord-clone-UI",
  },
  {
    id: 7,
    category: "BLOCKCHAIN APPLICATION",
    title: "CrowdFunding-Blockchain",
    image: crowdfund,
    desc:"A web-app built to solve major problems relating to issues in online fund transfer providing a grad-up of security and Transparency to the users.",
    desc2:"Tech: Blockchain,ReactJS,Ethereum,Solidity,Smart Contracts",
    link:"https://github.com/ChandanGunaga/CrowdFunding-Blockchain",
  },
]
export default Portfolio_data
