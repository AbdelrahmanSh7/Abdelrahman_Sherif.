import React from "react";
import "./Hero.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  // Track whether the hero section is in the viewport (for animation)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <div id="home" className="hero-section">
      <div className="container">
        {/* Animated wrapper for hero content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hero-content"
        >
          {/* Left side of the hero (text content) */}
          <div className="left-hero">
            <h1>
              Hello, It's Me <br />
              <span style={{ fontWeight: "bold" }}>Abdelrahman Sherif</span>
            </h1>

            <h2>
              And I’m <span className="blue-text">Software developer</span>
            </h2>

            <p>
              AI Student At Kafr El-Sheikh University | Passionate <br />
              About Data Science & Machine Learning
            </p>

            {/* Download CV Button */}
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/cv.pdf";
                link.download = "Abdelrahman_Sherif_CV.pdf";
                link.click();
              }}
              className="btn"
            >
              Download CV
            </button>
          </div>

          {/* Right side of the hero (social links) */}
          <div className="right-hero">
            <a
              href="https://www.linkedin.com/in/abdelrahman-sherif-648aa9276/"
              className="social-icon linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              <span className="text-icon">LinkedIn</span>
            </a>

            <a
              href="https://github.com/AbdelrahmanSh7"
              className="social-icon github"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              <span className="text-icon">GitHub</span>
            </a>

            <a
              href="https://www.instagram.com/3bdelrahman_sherif/"
              className="social-icon instagram"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
              <span className="text-icon">Instagram</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
