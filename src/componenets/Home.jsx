// Home.js

import React, { useEffect } from "react";

import data from "../assets/data.json";

import { HashLink } from "react-router-hash-link";
import { gsap } from "gsap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import sg from "../assets/2.webp";
import html from "../assets/HTML5.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import frontend from "../assets/frontend.jpg";
import backend from "../assets/Backend.jpg";

function Home() {
  const skills = [
    { name: "HTML5", logo: html },
    { name: "CSS3", logo: css },
    { name: "JavaScript", logo: js },
    { name: "React.js", logo: react },
    { name: "Node.js", logo: node },
  ];

  useEffect(() => {
    const homeContent = document.querySelector(".home-content");
    gsap.set(homeContent, { opacity: 0 });
    gsap.to(homeContent, {
      opacity: 1,
      duration: 1,
      delay: 0.2,
      ease: "power2.out",
    });
  }, []);

  const services = [
    {
      name: "Frontend Development",
      icon: frontend,
      description:
        "Create user interfaces and implement interactive features for web applications.",
    },
    {
      name: "Backend Development",
      icon: backend,
      description:
        "Build server-side logic, databases, and APIs to power web applications.",
    },
    // Add more service items here
  ];

  return (
    <>
      {/* home page */}
      <section id="home" className="home-section">
        <div className="home-content">
          <h2>Welcome to My Portfolio</h2>
          <p>Hi, I'm Sarhan, a passionate web developer.</p>
          <button className="learn-button">
            <HashLink smooth to="/#about">
              Learn More
            </HashLink>
          </button>
        </div>
      </section>

      {/* about page */}
      <section id="about" className="about-section">
        <div className="about-content">
          <div className="about-image">
            <img src={sg} alt="" />
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              <span className="orange-text">
                Hi there! I'm Sarhan, a web developer with a passion for
                creating user-friendly and engaging web experiences.
              </span>
            </p>
            <p>
              I specialize in <span className="orange-text"> React.js </span>and
              am currently diving into the world of
              <span className="orange-text"> Node.js </span> to further enhance
              my skill set. My journey in web development began with a{" "}
              <span className="orange-text">
                strong foundation in HTML, CSS, and JavaScript
              </span>
              , and I'm thrilled to apply these skills to build dynamic and
              impactful websites.
            </p>
            <p>
              Beyond coding, I have a deep love for reading books that expand my
              knowledge and provide fresh perspectives. My commitment to
              personal growth extends to{" "}
              <span className="orange-text">
                managing my time with a well-structured daily schedule
              </span>
              , allowing me to balance learning, coding, and other interests.
            </p>
            <p>
              <span className="orange-text">
                {" "}
                While I may be relatively new to the field, my dedication and
                enthusiasm make me a valuable asset to any team or project.{" "}
              </span>
            </p>
          </div>
        </div>
      </section>
{/* skills section  */}
      <section id="skills" className="skills-section">
        <div className="skills-content">
          <h2>My Skills</h2>
          <div className="skill-icons">
            {skills.map((skill, index) => (
              <div key={index} className={`skill skill-${index}`}>
                <div className="skill-content2">
                  <img src={skill.logo} alt={`${skill.name} Logo`} />
                  <p className="skill-name">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
 {/* project section  */}

      <section id="projects" className="projects-section">
        <h2>PROJECTS</h2>
        <section>
          <article>
            <Carousel
              showArrows={false}
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
              interval={3000}
              infiniteLoop={true}
              autoPlay={true}
            >
              {data.projects.map((i) => (
                <div key={i.title} className="workItem">
                  <img src={i.imgSrc} alt={i.title} />
                  <aside>
                    <h3>{i.title}</h3>
                    <p>{i.description}</p>
                    <a target={"blank"} href={i.url}>
                      View Demo
                    </a>
                  </aside>
                </div>
              ))}
            </Carousel>
          </article>
        </section>
      </section>


{/* services section  */}

      <section id="services" className="services-section">
        <div className="services-content">
          <h2>Services</h2>
          <h3 className="full-stack-heading">
            I Am a Full Stack Web Developer;
          </h3>
          <div className="service-icons">
            {services.map((service, index) => (
              <div key={index} className={`service service-${index}`}>
                <div className="service-icon">
                  <div className="img">
                  <img src={service.icon} alt={`${service.name} Icon`} />
                  </div>
                </div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
