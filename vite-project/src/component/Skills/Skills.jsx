import React from 'react';
import "./Skills.css"

const Skills = () => {
  return (
    <div id='skills'> 
        <div className="skills">
        <div className='heading text-center'>
            <h4>PASSION FUELS PURPOSE</h4>
            <h1>My Skills</h1>
          </div>
        <ol className="list">
          <li className="item">
            <h3 > Programming Languages:</h3>
            <span>
            C++,C, JavaScript, SQL,Solidity
            </span>
          </li>
          <li className="item">
            <h3>Relevant Concepts:</h3>
            <span className='skill-names'>
            Data Structures And Algorithms,OOPS, DBMS
            </span>
          </li>
          <li className="item">
            <h3>Knowledgeable Domains:</h3>
            <span>ReactJS, Redux,HTML,CSS,Tailwind, Blockchain,Material UI ,Smart Contracts ,TypeScript</span>
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
            Leading the team, Event Management, Public Speaking,Flautist ,Realistic-Artist,Sports
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Skills