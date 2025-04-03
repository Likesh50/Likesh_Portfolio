import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client, urlFor } from "../../client";
import "./Work.scss";

import image from '../../assets/competition.jpeg';
import marathon from '../../assets/marathon.jpeg';
import sih from '../../assets/sih.jpeg';
import ims from '../../assets/ims.jpeg';
import mess from '../../assets/mess.jpeg';
import result from '../../assets/result.jpeg';
import cms from '../../assets/cms.png';
import seithi from '../../assets/seithi.png';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);

  const [touched, setTouched] = useState(null);


  const [filterWorks, setFilterWorks] = useState([
    {
      title:"Competition Evaluation App (FREELANCING)",
      description:"Designed and developed a product to streamline the entry, evaluation, and result generation process for State and National Level Alama Abacus Competition with 5,500 participants.",
      codeLink:"https://github.com/Likesh50/Alama-Competition",
      projectLink:"na",
      imgUrl:image,
      tags:["MERN"],
      _type:"works"
    },
    {
      title:"Vellore Marathon 2k24 (FREELANCING)",
      description:"Developed a landing page with event schedules, routes, prize details, registration system for Vellore Marathon held on NOV 17 2024 for DRUG Awareness accomodating 2,200 participants.",
      codeLink:"https://github.com/Likesh50/Marathon",
      projectLink:"https://www.velloremarathon.in",
      imgUrl:marathon,
      tags:["ReactJS"],
      _type:"works"
    },
    {
      title:"Smart India Hackathon 24 (WINNER)",
      description:"Led the development of PRAGATI MITRA, a Web-based solution designed for educational institutions to automate report generation processes by collecting data from various sources",
      codeLink:"https://github.com/rohitvijayan1111/SIH_PRAGATI_MITRA-24",
      projectLink:"na",
      imgUrl:sih,
      tags:["MERN"],
      _type:"works"
    },
    {
      title:"College Management System (INTERN)",
      description:"RMK Connect is a comprehensive web application designed for college management, streamlining academic and administrative tasks with data management, attendance tracking, and hall booking modules",
      codeLink:"https://github.com/Likesh50/RMKCONNECT",
      projectLink:"na",
      imgUrl:cms,
      tags:["MERN"],
      _type:"works"
    },
    {
      title:"Inventory Management System (INTERN)",
      description:"RMK Stock Mate a web application for RMK Mess to efficiently manage purchase dispatches and track available stock with import/export, customized report generation, visualization features ",
      codeLink:"https://github.com/Likesh50/RMKStockMate",
      projectLink:"na",
      imgUrl:ims,
      tags:["MERN"],
      _type:"works"
    },
    {
      title:"Stock Management System (INTERN)",
      description:"RMK Inventory is an inventory management system to handle purchase dispatch and stock tracking of electrical, plumbing, and other materials with out of stock remainder, visualization features ",
      codeLink:"https://github.com/Likesh50/RMK-Stock-IMS",
      projectLink:"na",
      imgUrl:mess,
      tags:["MERN"],
      _type:"works"
    },
    {
      title:"SMS Communication App (INTERN)",
      description:"Developed a mobile-based SMS app for RMK Engineering College to facilitate cost-free communication between student counselors and parents.",
      codeLink:"https://github.com/Likesh50/RMKResultBuzz",
      projectLink:"na",
      imgUrl: result,
      tags:["Mobile App"],
      _type:"works"
    },
    {
      title:"News Aggregator App (Hackathon)",
      description:"Developed a mobile-based news aggregator app which is used to collect local news and events happening from verified sources and renders based on interst",
      codeLink:"https://github.com/rohitvijayan1111/Seithi-360",
      projectLink:"na",
      imgUrl:seithi,
      tags:["MERN"],
      _type:"works"
    },
  ]);
  

  useEffect(() => {
    
      setWorks(filterWorks);
      

  }, []);

  const handleFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ opacity: 0, scale: 0.5, y: -100 });
  
    setTimeout(() => {
      setAnimateCard({ opacity: 1, scale: 1, y: 0 });
      if (item === "All") {
        setFilterWorks(works); // Use the original `works` array
      } else {
        setFilterWorks(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  
  return (
    <>
      <h2 className="head-text">
        My creative <span>Portfolio</span> section
      </h2>

      <div className="app__work-filter">
        {["All", "ReactJS", "MERN", "Mobile App"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
        onClick={() => setTouched(null)}
      >
        {filterWorks.map((work, index) => (
          <motion.div
            className={`app__work-item app__flex ${
              touched === index ? "app__work-touched-nowrap" : ""
            }`}
            key={index}
            onClick={() => setTouched(index)}
            onTouchStart={() => setTouched(index)}
          >
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className={`app__work-hover app__flex ${
                  touched === index ? "app__work-touched" : ""
                }`}
              >
                <a
                  href={work.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`app__flex ${
                    work.projectLink.toLowerCase() === "na" ? "none" : ""
                  }`}
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a
                  href={work.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="app__flex"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text" title={work.title}>
                {work.title}
              </h4>
              <p
                className="p-text"
                style={{ marginTop: 10 }}
                title={work.description}
              >
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
