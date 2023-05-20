import React from "react";
import "./Home.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import EmailIcon from "@mui/icons-material/Email";
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
import resume from "../../assets/Chandan_Gunaga_Resume.pdf";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
  zoomIn,
} from "../../motion";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          // viewport={{ once: false, amount: 0.25 }}
          whileInView="show"
          className="container f_flex top"
        >
          <div className="left top">
            <motion.div variants={fadeIn("right", "tween", 0.4, 1)}>
              <motion.h3 variants={textVariant(0.6)}>
                WELCOME TO MY WORLD
              </motion.h3>
              <motion.h1 variants={textVariant(0.9)}>
                Hi, I’m <span>Chandan</span>
              </motion.h1>
              <motion.h2
                variants={textVariant(1.3)}
                className="typewriter-head"
              >
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
              </motion.h2>

              <motion.p variants={textVariant(1.5)}>
                Trying to understand the language of 0s and 1s | Software
                development engineer | Frontend React Developer | MERN Stack |
                DSA Practitioner with Proficiency in C++
              </motion.p>
            </motion.div>
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="hero_btn d_flex"
            >
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
                  <a
                    href="https://www.instagram.com/chandangunaga/"
                    target="_blank"
                  >
                    <button className="contact_btn_shadow">
                      <InstagramIcon fontSize="large" />
                    </button>
                  </a>
                  <a href="mailto:chandangunaga1307@gmail.com" target="_blank">
                    <button className="contact_btn_shadow">
                      <EmailIcon fontSize="large" />
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
            </motion.div>
          </div>
          <motion.div variants={zoomIn(0.3, 1)} className="right">
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
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
