import React from "react"
import "./Home.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Typewriter } from "react-simple-typewriter"
import circle from "../pic/circle.svg"
import react from "../pic/react.png"
import redux from "../pic/redux.png"
import javascript from "../pic/javascript.png"
import git from "../pic/git.png"
import node from "../pic/node.png"
import sass from "../pic/sass.png"
import typescript from "../pic/typescript.png"
import graphql from "../pic/graphql.png"



const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Chandan</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Software Engineer.", " Developer." , " Leader."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>CONNECT WITH ME</h4>
                <div className='button'>
                  <button className='contact_btn_shadow ' >
                    <LinkedInIcon fontSize="large"/>
                  </button>
                  <button className='contact_btn_shadow'>
                    <GitHubIcon fontSize="large"/>
                  </button>
                  <button className='contact_btn_shadow'>
                    <InstagramIcon fontSize="large" />
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>DOWNLOAD</h4>
                <button className='resume_btn_shadow'>
                  RESUME  &nbsp;<FileDownloadIcon />
                </button>
               
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={circle} alt='' />
            </div>
            <img src={react} alt="" className="hero-logo lg1"/>
            <img src={redux} alt="" className="hero-logo lg2"/>
            <img src={git} alt="" className="hero-logo lg3"/>
            <img src={node} alt="" className="hero-logo lg4"/>
            <img src={typescript} alt="" className="hero-logo lg5"/>
            <img src={sass} alt="" className="hero-logo lg6"/>
            <img src={javascript} alt="" className="hero-logo lg7"/>
            <img src={graphql} alt="" className="hero-logo lg8"/>


          </div>
        </div>
      </section>
    </>
  )
}

export default Home
