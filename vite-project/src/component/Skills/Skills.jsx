import React from "react";
import "./Skills.css";
import devImg from "./mern-dev-img.png";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant, textVariant2, zoomIn } from "../../motion";

const Skills = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      viewport={{ once: false, amount: 0.25 }}
      whileInView="show"
      id="skills"
    >
      <div className="skills">
        <motion.div variants={textVariant2} className="heading text-center">
          <h4>PASSION FUELS PURPOSE</h4>
          <h1>My Skills</h1>
        </motion.div>
        <div className="skill-wrapper">
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="left-item"
          >
            <ol className="list">
              <motion.li variants={textVariant(0.5)} className="item">
                <h3> Programming Languages:</h3>
                <span>C++,C, JavaScript, SQL,Solidity,Typescript</span>
              </motion.li>
              <motion.li variants={textVariant(0.7)} className="item">
                <h3>Relevant Concepts:</h3>
                <span className="skill-names">
                  Data Structures And Algorithms,OOPS, DBMS,CN
                </span>
              </motion.li>
              <motion.li variants={textVariant(0.9)} className="item">
                <h3>Knowledgeable Domains:</h3>
                <span>
                  ReactJS, Redux,HTML,CSS/SCSS,Framer Motion,Tailwind, <br />
                  Blockchain,Material UI ,Smart Contracts ,MERN
                  Stack <br /> Firebase,REST API
                </span>
              </motion.li>
              <motion.li variants={textVariant(1.1)} className="item">
                <h3>Tools:</h3>
                <span>
                  Linux, MacOS, Windows, Git ,Github , Jest Unit testing
                </span>
              </motion.li>
              <motion.li variants={textVariant(1.3)} className="item">
                <h3>Soft Skills and Interests:</h3>
                <span>
                  Leading the team, Event Management, Public Speaking,Flautist
                  ,Realistic-Artist,Sports
                </span>
              </motion.li>
            </ol>
          </motion.div>
          <motion.div variants={zoomIn(0.3,1)} className="right-item">
            <img src={devImg} alt="" className="devImg" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
