import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import { motion } from "framer-motion";
import { footerVariants, staggerContainer, textVariant2 } from "../../motion";
import "./Resume.css"
// import SchoolIcon from "@material-ui/icons/School";
// import WorkIcon from "@material-ui/icons/Work";

const Resume = () => {
  return (
    <>
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        // viewport={{ once: false, amount: 0.25 }}
        whileInView="show"
        className="Resume"
        id="resume"
      >
        <div className="container top">
          <motion.div variants={textVariant2} className="heading text-center">
            <h4>MY JOURNEY INTO DEV</h4>
            <h1>Education & Experience</h1>
          </motion.div>
          <motion.div variants={footerVariants} className="experience">
            <VerticalTimeline lineColor="#3e497a">
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2015 - 2016"
                iconStyle={{ background: "#3e497a", color: "#fff" }}
                icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  New English School (E.M)
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  High School | Aggregate: 97.2%
                </h4>
                <p> Honnavar,India</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2016 - 2018"
                iconStyle={{ background: "#3e497a", color: "#fff" }}
                icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  M.E.S Chaitanya P.U College
                </h3>

                <h4 className="vertical-timeline-element-subtitle">
                  Class 11th & 12th | Aggregate(PCMB): 92%
                </h4>

                <p> Sirsi ,Karnataka , India</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2018 - 2022"
                iconStyle={{ background: "#3e497a", color: "#fff" }}
                icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  A.J Institute of Engineering And Technology
                </h3>

                <h4 className="vertical-timeline-element-subtitle">
                  Bachelor of Engineering (ISE)| CGPA : 7.6
                </h4>

                <p> Mangalore ,Karnataka ,India</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2021 (Aug-Oct)"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Web development Intern - Agile Technologies
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Mangalore,India
                </h4>
                <p>
                  Project: The React Car Showroom is a web application that
                  allows users to browse and view information about various car
                  models. It includes features such as a search function, filter
                  options, and detailed car specifications. The application also
                  provides a user-friendly interface for car dealers to manage
                  their inventory and pricing information.
                </p>
                <p>
                  Outcome: Created features to enhance the user experience in
                  ReactJS, Javascript, MaterialUI,HTML,CSS
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2022(August) - present"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Software Engineer (ReactJS Developer) - Robosoft Technologies
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Udupi,Karnataka, India
                </h4>
                <p>
                  ◦ Project: Identified web based user interactions and
                  developed UI components via React concepts. Translated designs
                  and wire-frames into high quality code and wrote application
                  interface code following ReactJs workflows.collaborated
                  closely with the back-end development team to ensure that the
                  front-end and back-end components of the application were
                  tightly integrated and worked seamlessly together
                </p>
                <p>
                  ◦ Training: Had an intensive training in ReactJS, State
                  management using Redux toolkit along with other major
                  development tools and built many minor projects
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Resume;
