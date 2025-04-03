import React, { useState } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";

import react from '../../assets/react.png';
import css from '../../assets/css.png';
import java from '../../assets/java.png';
import sql from '../../assets/javascript.png';
import js from '../../assets/js.png';
import html from '../../assets/html.png';
import node from '../../assets/node.png';
import git from '../../assets/git.png';
import rest from '../../assets/rest.png';
import express from '../../assets/express.png';
import aws from '../../assets/aws.png';


const Skills = () => {
  const [skills] = useState([
    { name: "React", icon: react, bgColor: "#EDF2F8" },
    { name: "Node", icon: node, bgColor: "#EDF2F8" },
    { name: "Express", icon: express, bgColor: "#EDF2F8" },
    { name: "HTML", icon: html, bgColor: "#EDF2F8" },
    { name: "CSS", icon: css, bgColor: "#EDF2F8" },
    { name: "JavaScript", icon: js, bgColor: "#EDF2F8" },
    { name: "AWS", icon: aws, bgColor: "#EDF2F8" },
    { name: "Rest API", icon: rest, bgColor: "#EDF2F8" },
    { name: "MySQL", icon: sql, bgColor: "#EDF2F8" },
    { name: "Java", icon: java, bgColor: "#EDF2F8" },
    { name: "Git", icon: git, bgColor: "#EDF2F8" },
    { name: "JavaScript", icon: react, bgColor: "#EDF2F8" },
    
  ]);

  const [experience] = useState([
    {
      year: "Present",
      works: [
        { name:"B.Tech Information Technology (Passout : 2026)", company: "R.M.K. Engineering College", desc: "8.45%" },
      ],
    },
    {
      year: "2025    ",
      works: [
        { name: "Published Research Paper in IEEE", company: "IEEE", desc: "Revolutionizing Healthcare Diagnostics: Precision and Timeliness Through AI and ML Integration" },
        { name: "Oracle Java SE 11 Developer Certification", company: "ORACLE", desc: "Cleared Oracle Java SE 11 developer certification" },
        { name: "Hackathon Finalist", company: "Kynnovate 2025", desc: "Developed a news aggregator application for collecting local news based on personalization" },
      ],
    },
    {
      year: "2024",
      works: [
        { name: "Hackathon Winner", company: "Smart India Hackathon 2025", desc: "Developed automated annual report generation portal for educational institution." },
        { name: "FreeLancing - Marathon ", company: "Sri Narayani group of Schools", desc: "Developed a landing page for Vellore Marathon held for Drug Awareness" },
        { name: "FreeLancing - Competition", company: "Alama Abacus International", desc: "Developed result generation application for state and national level competition" },
        { name: "Web Developer Intern", company: "R.M.K. Group of Institution", desc: "Developed 4 applications for college use" },
      ],
    },
    {
      year: "2022",
      works: [
        { name: "Higher Secondary (CBSE)", company: "Sri Narayani Vidyashram", desc: "91.8%" },
      ],
    },
  ]);

  const skillVariants = {
    view: {
      x: [-15, 0],
      opacity: [0, 1],
      transition: {
        x: { type: "spring", stiffness: "10" },
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    hover: {
      y: -7,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    tap: {
      y: -7,
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <>
      <h2 className="head-text">Skills <span>&</span> Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              variants={skillVariants}
              whileInView="view"
              whileHover="hover"
              whileTap="tap"
              className="app__skills-item app__flex"
              key={skill.name + "-" + index}
            >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experience.map((exp) => (
            <motion.div className="app__skills-exp-item" key={exp.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{exp.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {exp.works.map((work) => (
                  <React.Fragment key={work.name+work.desc}>
                    <motion.div
                      whileInView={{ opacity: [0, 1], x: [-100, 5, 0] }}
                      transition={{ duration: 1 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip id={work.name} effect="solid" arrowColor="#313bac" className="skills-tooltip">
                      {work.desc}
                    </ReactTooltip>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills", "app__whitebg");
