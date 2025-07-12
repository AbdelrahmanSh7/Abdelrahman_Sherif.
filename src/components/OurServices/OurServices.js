import React, { useState } from "react";
import "./OurSercices.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "Web Devlopment",
    img: "/website-photo.svg",
    description: (
      <>
        <span className="highlight">Modern Web Development</span> <br />
        I build responsive and interactive websites using React, HTML, CSS, and JavaScript — focused on user experience and clean UI.<br />
        <span className="highlight">Responsive Design</span> <br />
        I ensure websites look and work great on all devices — desktops, tablets, and smartphones.<br />
        <span className="highlight">Website Optimization</span> <br />
        I improve website performance, reduce load time, and follow best practices for fast, smooth experiences.
      </>
    ),
  },
  {
    title: "Design & UI/UX",
    img: "/uiux-photo.svg",
    description: (
      <>
        <span className="highlight">UI Design (with Figma)</span> <br />
        I design clean and modern interfaces using Figma — focusing on simplicity, usability, and consistency.<br />
        <span className="highlight">User Experience Design</span> <br />
        I think from the user’s perspective and design flows that make navigating the website easy and intuitive.
      </>
    ),
  },
  {
    title: "Data Science / AI (Learning Stage)",
    img: "/Ai-photo.svg",
    description: (
      <>
        <span className="highlight">Data Science Exploration</span> <br />
        I'm starting my journey into Data Science, learning how to use Python and tools like Pandas and Matplotlib to explore and understand data.<br />
        <span className="highlight">Machine Learning</span> <br />
        I'm currently learning the fundamentals of Machine Learning — starting with simple models like regression and classification, and exploring how they work behind the scenes.<br />
        <span className="highlight">AI Enthusiast</span> <br />
        I'm passionate about Artificial Intelligence and how it can solve real-world problems. I'm taking the first steps to learn and apply AI in my future projects.
      </>
    ),
  },
];

const OurServices = () => {
  const [current, setCurrent] = useState(0);
  const [dragging, setDragging] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    if (offset < -100) {
      setCurrent((prev) => (prev + 1) % services.length);
    } else if (offset > 100) {
      setCurrent((prev) => (prev - 1 + services.length) % services.length);
    }
  };

  return (
    <div id="service" className="our-services-section">
      <div className="container">
        <div className="our-services-content">
          <div className="title">
            <h2>Our Services</h2>
          </div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="service-card"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragStart={() => setDragging(true)}
              onDragEnd={(e, info) => {
                setDragging(false);
                handleDragEnd(e, info);
              }}
              whileTap={{ cursor: "grabbing" }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="title">
                <h3>{services[current].title}</h3>
              </div>
              <div className="data">
                <img src={services[current].img} alt={services[current].title} />
                <p>{services[current].description}</p>
              </div>
              <div className="progress-bar">
                {services.map((_, idx) => (
                  <span
                    key={idx}
                    className={`progress-dot ${idx === current ? "active" : ""}`}
                    onClick={() => setCurrent(idx)}
                  ></span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;