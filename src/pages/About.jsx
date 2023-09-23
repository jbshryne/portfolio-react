import React from "react";
import { useLoaderData } from "react-router-dom";

const About = () => {
  const about = useLoaderData();

  return (
    <div>
      <img
        src={about.headshot}
        alt="headshot"
        style={{ borderRadius: 200, width: 300, margin: 15 }}
      />
      <br />
      <p className="bio">" {about.bio} "</p>
      <h3>
        <a href={about.email}>Email</a> | <a href={about.linkedin}>LinkedIn</a>{" "}
        | <a href={about.github}>GitHub</a>
      </h3>
    </div>
  );
};

export default About;
