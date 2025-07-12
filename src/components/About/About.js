import React from "react";
import './About.css';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  // Intersection Observer hook for scroll-based animations
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.15    // Percentage of element visibility before animation starts
  });

  return (
    <div id="about" className="about-section">
      <div className="container">
        {/* Main content with animation */}
        <motion.div
          ref={ref}
          className="about-content"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Left section - Personal introduction */}
          <div className="left-section">
            <h1 className="title">Who I'm ?</h1>
            <div className="title-underline"></div>
            
            <p>
            <span className="title2">AI Student & Front-End Developer</span> <br />
               <span className="title3">Hello, <br />I'm Abdelrahman, an AI student <br />
              from Egypt and a front-end <br />
              developer passionate about <br />
              modern web development and <br />
              learning AI/ML.</span> 
            </p>
          </div>
          
          {/* Right section - Personal information and social links */}
          <div className="right-section">
            <h1 className="title">Personal Info</h1>
            <div className="title-underline"></div>
            
            {/* Personal details */}
            <p>
              <span className="about-personal-info">Full Name :</span>{" "}
              <a href="https://www.linkedin.com/in/abdelrahman-sherif-648aa9276/" className="link" target="_blank" rel="noreferrer">Abdelrahman Sherif</a> 
            </p>
            <p>
              <span className="about-personal-info">Email :</span>{" "}
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abdelrhmansherif85@gmail.com" className="link" target="_blank" rel="noreferrer">abdelrhmansherif85@gmail.com</a> 
            </p>
            <p>
              <span className="about-personal-info">Phone :</span> 
              <a href="https://wa.me/201112659808" className="link" target="_blank" rel="noreferrer"> +(20) 01112659808</a> 
            </p>
            <p>
              <span className="about-personal-info">Location :</span> Egypt
            </p>
            
            {/* Social media icons */}
            <div className="about-icon">
              <a href="https://www.linkedin.com/in/abdelrahman-sherif-648aa9276/"className="linkedin" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/AbdelrahmanSh7" className="github" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://www.instagram.com/3bdelrahman_sherif/" className="instagram" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
