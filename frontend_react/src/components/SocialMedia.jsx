import React from "react";

import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaFacebookF,FaWhatsapp,FaGithub  } from "react-icons/fa";
import { SiLeetcode,SiGeeksforgeeks  } from "react-icons/si";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://wa.me/+918122876830"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <FaWhatsapp />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/Likesh50"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <FaGithub/>
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/likesh-k-r"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://leetcode.com/u/Likesh_K/"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <SiLeetcode />
        </a>
      </div>
      <div>
        <a
          href="https://www.geeksforgeeks.org/user/likeshkr12/"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <SiGeeksforgeeks />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
