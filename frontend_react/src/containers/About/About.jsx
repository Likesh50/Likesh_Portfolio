import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import fullstack from '../../assets/fullstack.jpg';
import Ingram from '../../assets/Ingram Robot.png';
import ProblemSolving from '../../assets/problemSolving.png';
import leadership from '../../assets/leadership.jpg';

import { images } from "../../constants";
import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

const About = () => {

  const [abouts, setAbouts] = useState([
    {
      title: "Fullstack Developer",
      description:
        "MERN stack, well versed with React, Node.js, Express, MySQL, RESTful APIs etc...",
      imgUrl: Ingram, // Ensure the import is correct
    },
    {
      title: "Tech Enthusiast",
      description:
        "Love new technologies and like to explore the field of Machine Learning, AI and Cloud.",
      imgUrl: fullstack,
    },
    {
      title: "Problem Solver",
      description:
        "Equipped with good analytical and problem solving skills. Creative thinker and love to take up any challenges or puzzles.",
      imgUrl: ProblemSolving,
    },
    {
      title: "Leadership",
      description:
        "A visionary with commendable leadership qualities. Aiming to reach new heights. Tend to recover quickly from setbacks and learn from failures.",
      imgUrl: leadership, // Ensure the correct image is used
    },
  ]);

  

  const [aboutMe, setAboutMe] = useState({});

  useEffect(() => {
    const aboutsQuery = '*[_type == "abouts"]';
    const aboutMeQuery = `*[_type == "aboutme"][0]{
      profileImg,
     description,
     "resumeUrl": resume.asset -> url 
    }`;
    client.fetch(aboutsQuery).then((data) => {
      
    });
    client.fetch(aboutMeQuery).then((data) => {
      
    });
  }, []);

  const viewResumeHandler = () => {
    window.open("https://drive.google.com/file/d/1I7mWctBnKbLVVOP_BIXyVMZs4xX-v2Vt/view?usp=sharing", "_blank");
  };

  return (
    <>
      <h2 className="head-text">
      Innovation starts with <span>an IDEA</span>
        <br />
        Success begins with <span>EXECUTION</span>
      </h2>

      <div className="app__about-context app__flex">
        <div className="app__about-img app__flex">
          <div className="app__flex">
            <img
              src={
                aboutMe.profileImg
                  ? urlFor(aboutMe.profileImg)
                  : images.aboutmine
              }
              alt="Profile"
            />
          </div>
        </div>
        <div className="app__about-data app__flex">
          <h2 className="head-text">About Me</h2>
          <p
            className="p-text"
            
          > I’m <span style={{color:"blue"}}>Likesh</span>, a passionate Full Stack Web Developer specializing in the <span style={{color:"blue"}}>MERN</span> stack. My mission is to develop impactful web solutions that simplify tasks and enhance user experiences.
<br></br><br></br>
          I have successfully developed <span style={{color:"blue"}}>4 projects for my college</span>, with two already in use and two in the deployment phase. Additionally, I have <span style={{color:"blue"}}>freelanced for 2 private organizations</span>, building a marathon landing page with a registration system and a competition evaluation application that efficiently processed results for 5,500 students.
          <br></br><br></br>
          Beyond development, I have excelled in national competitions, <span style={{color:"#FF8A05"}}>Winner - Smart India Hackathon 2024</span> and <span style={{color:"red"}}>Finalist - Kynnovate 2025</span>.
          <br></br><br></br>
          I am also an <span style={{color:"#c74634"}}>Oracle Certified Java SE 11 Developer</span>, showcasing my expertise in Java-based applications and enterprise solutions.

          </p>
          <div>
            <button className="portfolio-button" onClick={viewResumeHandler}>
              Resume
            </button>
          </div>
        </div>
      </div>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.2, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: "20px" }}>
              {about.title}
            </h2>
            <h2 className="p-text" style={{ marginTop: "10px" }}>
              {about.description}
            </h2>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
