import React from "react";
import "./Features.css";
import img from "../pic/img.png"

const Features = () => {
  return (
    <>
      <section className="features top" id="features">
        <div className="container">
          <div className="heading">
            <h4>INTRODUCTION</h4>
            <h1>Brief Intro</h1>
          </div>

          <div className="a">
            <div className="a-left">
              <div className="box_shadow">
                <img src={img} alt="" className="a-img" />
              </div>
            </div>
            <div className="a-right">
              <div className="a-desc">
              &nbsp; &nbsp; &nbsp; As a ReactJS Developer and Software Engineer with a year of
                experience, I specialize in building robust, scalable and
                performant web applications. My proficiency in ReactJS, data
                structures and algorithms, allows me to develop complex
                applications that meet clients unique needs.
              </div>
              <div className="a-desc">
                Proficient in using modern tools and technologies such as
                ReactJS, Redux, TailwindCss, Material UI. Writing clean,
                well-documented, and maintainable code, ensuring that my
                applications are easy to understand and scale.
              </div>
              <div className="a-desc">
                If you're looking for a ReactJS Developer and Software Engineer
                who is passionate about creating exceptional web applications
                and enjoys working in a fast-paced, dynamic environment, look no
                further. Let's connect!
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
