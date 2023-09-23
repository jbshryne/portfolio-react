import React from "react";
import { useLoaderData } from "react-router-dom";

function Projects(props) {
  const projects = useLoaderData();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {projects.map((project, i) => (
        <div className="project-box" key={i}>
          <h2 className="project-name">{project.name}</h2>
          <h3 className="project-role">{project.role}</h3>
          <section>
            <img
              src={project.images[0]}
              alt={`${project.name} screenshot`}
              style={{
                height: 220,
                margin: 10,
                borderRadius: 5,
                boxShadow: "0px 0px 2px 0px rgb(97, 97, 86)",
              }}
            />
          </section>
          <p>{project.description}</p>
          <section>
            <a href={project.git}>
              <button>Github</button>
            </a>
            <a href={project.live}>
              <button>live site</button>
            </a>
          </section>
        </div>
      ))}
    </div>
  );
}

export default Projects;
