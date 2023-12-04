import React from "react";
import { useLoaderData } from "react-router-dom";

const About = () => {
  const about = {
    name: "Jon Patrick Brennan",
    email: "mailto:JonPatrickBrennan@gmail.com",
    linkedin: "https://www.linkedin.com/in/jon-patrick-brennan",
    github: "https://github.com/jbshryne",
    headshot: "https://i.imgur.com/yadnz4d.png",
    bio: "I'm a coder and musician, specializing in Game Development. I've been an entertainer for all of my life, focusing at different times of my career on theatre, live music, and sound engineering, always seeking to collaborate with other creative minds. I want to use the interpersonal and organizational skills I've developed in the world of the arts, to contribute my talents in telling stories and crafting user experiences.",
  };

  return (
    <div>
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
    </div>
  );
};

export default About;
