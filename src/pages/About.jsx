import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const about = {
    name: "Jon Patrick Brennan",
    email: "mailto:JonPatrickBrennan@gmail.com",
    linkedin: "https://www.linkedin.com/in/jon-patrick-brennan",
    github: "https://github.com/jbshryne",
    headshot: "https://i.imgur.com/yadnz4d.png",
    bio: "I'm a coder and musician, specializing in Game Development. I've been an entertainer all of my life, devoting my talents to live music, sound engineering, and theatre, always seeking to collaborate with other creative minds. I'm looking to use the interpersonal and production skills I've developed in the world of the arts, to contribute in telling stories and crafting user experiences.",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <img
        src={about.headshot}
        alt="headshot"
        style={{ borderRadius: 200, width: 300, margin: 15 }}
      />
      <br />
      <p className="bio">"{about.bio}"</p>
      <h3>
        <a href={about.email}>Email</a> |{" "}
        <a href={about.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>{" "}
        |{" "}
        <a href={about.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </h3>
    </motion.div>
  );
};

export default About;
