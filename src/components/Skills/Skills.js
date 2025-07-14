import React from "react";
import "./skills.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    // Main skills section
    <div id="skills" className="skills-section">
      <div className="container">

        {/* Section Header: Icon + Title */}
        <div className="skills-header">
          <div className="logocode">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path
                fill="currentColor"
                d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"
              />
            </svg>
          </div>

          <div className="title">
            <h2>
              Skills & <span className="blue-text"> Abilities</span>
            </h2>
          </div>
        </div>

        {/* Animated Content on Scroll */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >

          {/* All Skills Section */}
          <div className="skills-content">

            {/* Group 1: Using Now */}
            <div className="skills-group">
              <h3>USING NOW:</h3>
              <div className="skills-icons">
                <div className="skills-item">
                  <img src="/html.png" alt="HTML" />
                  <span>HTML</span>
                </div>
                <div className="skills-item">
                  <img src="/Css.png" alt="CSS" />
                  <span>CSS</span>
                </div>
                <div className="skills-item">
                  <img src="/js.png" alt="JS" />
                  <span>Java Script</span>
                </div>
                <div className="skills-item">
                  <img src="/react.png" alt="react" />
                  <span>React</span>
                </div>
                <div className="skills-item">
                  <img src="/bootstrap.png" alt="Bootstrap" />
                  <span>Bootstrap</span>
                </div>
                <div className="skills-item">
                  <img src="/figma.png" alt="figma" />
                  <span>Figma</span>
                </div>
                <div className="skills-item">
                  <img src="/Git.png" alt="Git" />
                  <span>Git</span>
                </div>
                <div className="skills-item">
                  <img src="/github.png" alt="Github" />
                  <span>Github</span>
                </div>
              </div>
            </div>

            {/* Group 2: Programming Languages */}
            <div className="skills-group">
              <h3>Programming Languages:</h3>
              <div className="skills-icons">
                <div className="skills-item">
                  <img src="/python.png" alt="Python" />
                  <span>Python</span>
                </div>
                <div className="skills-item">
                  <img src="/C++.png" alt="C++" />
                  <span>C++</span>
                </div>
              </div>
            </div>

            {/* Group 3: Other Skills */}
            <div className="skills-group">
              <h3>OTHER SKILLS:</h3>
              <div className="skills-icons">
                <div className="skills-item">
                  <img src="/English.png" alt="English" />
                  <span>English</span>
                </div>
                <div className="skills-item">
                  <img src="/comunication.png" alt="Communication" />
                  <span>Communication</span>
                </div>
                <div className="skills-item">
                  <img src="/Self-learning.png" alt="Self-learning" />
                  <span>Self-learning</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Skills;
