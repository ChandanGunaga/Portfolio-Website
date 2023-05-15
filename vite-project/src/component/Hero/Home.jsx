import React from "react";
import "./Home.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Typewriter } from "react-simple-typewriter";
import circle from "../pic/circle.svg";
import react from "../pic/react.png";
import redux from "../pic/redux.png";
import javascript from "../pic/javascript.png";
import git from "../pic/git.png";
import node from "../pic/node.png";
import sass from "../pic/sass.png";
import typescript from "../pic/typescript.png";
import graphql from "../pic/graphql.png";
import resume from "../../assets/Chandan_Gunaga_Resume (3).pdf";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Chandan</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={[" Software Engineer.", " Developer.", " Leader."]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
            SDE | Frontend React Developer | DSA Practitioner with Proficiency in C++
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1"> 
                <h4>CONNECT WITH ME</h4>
                <div className="button">
                  <a
                    href="https://www.linkedin.com/in/chandangunaga1307/"
                    target="_blank"
                  >
                    <button className="contact_btn_shadow ">
                      <LinkedInIcon fontSize="large" />
                    </button>
                  </a>
                  <a
                    href="https://github.com/ChandanGunaga"
                    target="_blank"
                    className="contact-links"
                  >
                    <button className="contact_btn_shadow">
                      <GitHubIcon fontSize="large" />
                    </button>
                  </a>
                  <a href="https://www.instagram.com/chandangunaga/" target="_blank">
                    <button className="contact_btn_shadow">
                      <InstagramIcon fontSize="large" />
                    </button>
                  </a>
                </div>
              </div>
              <div className="col_1">
                <h4>DOWNLOAD</h4>
                <button>
                  <a href={resume} download className="resume_btn_shadow">
                    RESUME &nbsp;
                    <FileDownloadIcon />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={circle} alt="" />
            </div>
            <img src={react} alt="" className="hero-logo lg1" />
            <img src={redux} alt="" className="hero-logo lg2" />
            <img src={git} alt="" className="hero-logo lg3" />
            <img src={node} alt="" className="hero-logo lg4" />
            <img src={typescript} alt="" className="hero-logo lg5" />
            <img src={sass} alt="" className="hero-logo lg6" />
            <img src={javascript} alt="" className="hero-logo lg7" />
            <img src={graphql} alt="" className="hero-logo lg8" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
