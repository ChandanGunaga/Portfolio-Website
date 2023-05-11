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
            <h3 > Front-End</h3>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h3>Back-End</h3>
            <span className='skill-names'>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h3>Languages</h3>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
          <li className="item">
            <h3>Back-End</h3>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h3>Back-End</h3>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Skills