import React from "react";
import "./Skills.css";
import devImg from "./mern-dev-img.png"

const Skills = () => {
  return (
    <div id="skills">
      <div className="skills">
        <div className="heading text-center">
          <h4>PASSION FUELS PURPOSE</h4>
          <h1>My Skills</h1>
        </div>
        <div className="skill-wrapper">
          <div className="left-item">
            <ol className="list">
              <li className="item">
                <h3> Programming Languages:</h3>
                <span>C++,C, JavaScript, SQL,Solidity,Typescript</span>
              </li>
              <li className="item">
                <h3>Relevant Concepts:</h3>
                <span className="skill-names">
                  Data Structures And Algorithms,OOPS, DBMS,CN
                </span>
              </li>
              <li className="item">
                <h3>Knowledgeable Domains:</h3>
                <span>
                  ReactJS, Redux,HTML,CSS,Tailwind, Blockchain,Material UI
                  ,Smart Contracts ,MERN Stack
                </span>
              </li>
              <li className="item">
                <h3>Tools:</h3>
                <span>
                  Linux, MacOS, Windows, Git ,Github , Jest Unit testing
                </span>
              </li>
              <li className="item">
                <h3>Soft Skills and Interests:</h3>
                <span>
                  Leading the team, Event Management, Public Speaking,Flautist
                  ,Realistic-Artist,Sports
                </span>
              </li>
            </ol>
          </div>
          <div className="right-item">
            <img src={devImg} alt="" className="devImg"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
