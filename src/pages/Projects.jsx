import React from "react";
import { motion } from "framer-motion";

function Projects(props) {
  const projects = [
    {
      name: "Dungeon Throwdown",
      role: "Sole Developer",
      description:
        "A turn-based RPG-style boardgame for two players. Use stragety, luck, and powerups to fight your opponent and reduce their Hit Points to zero! Built with React and the Redux-based library boardgame.io.",
      live: "https://dungeon-throwdown.onrender.com",
      git: "https://github.com/jbshryne/dungeon-crawl",
      images: ["https://i.imgur.com/Zw7RMCS.png"],
    },
    {
      name: "Trip Planner",
      role: "Frontend Developer",
      description:
        "A full CRUD app for planning trips, with a focus on the user's experience.  Get help with scheduling, packing checklist, and budgeting.  Built with React, Express.js, and Bootstrap.",
      live: "https://trip-planner-dn6v.onrender.com",
      git: "https://github.com/jliakim23/project3-frontend",
      images: ["https://i.imgur.com/7H3AtM5.png"],
    },
    {
      name: "CHESSMIXED",
      role: "Sole Developer",
      description:
        'Currently a full CRUD Chess app, where a user can play & save multiple games and play friends remotely.  Actively adding features like playing against ChatGPT, player vs player, and a special "higher variance" game mode.',
      live: "https://chessmixed-0goz.onrender.com/",
      git: "https://github.com/jbshryne/chessmixed-react",
      images: [
        "https://i.imgur.com/tbjpKqJ.jpg",
        "https://i.imgur.com/XCZpflf.png",
      ],
    },
    {
      name: "MTG Conclave",
      role: "Sole Developer",
      description:
        "A database search site for the card game Magic the Gathering that utilizes the Scryfall API, adding unique search options like sorting results by Card Type and showing a random card within given parameters.",
      live: "https://jbshryne.github.io/mtg-project",
      git: "https://github.com/jbshryne/mtg-project.git",
      images: [
        "https://i.imgur.com/IDzUsVD.png",
        "https://i.imgur.com/2W35DzI.png",
      ],
    },
    {
      name: "The Living Room",
      role: "Composer / Sound Designer",
      description:
        "A cozy-feeling hub app for a line of retro-style minigames, The Living Room puts you back in your childhood home, with a stack of cartridges next to a boxy old game system. ",
      live: "https://apps.apple.com/app/id1153215591",
      git: "",
      images: ["https://i.imgur.com/RSKyGNT.png"],
    },
    {
      name: "Dino Finder",
      role: "Composer / Sound Designer",
      description:
        "A charming, fast-paced romp in the Mesozoic...  Find the matching Dino, Fish, or Flower before the temperature boils over!  Musically, a single madcap theme plays throughout, switching genres to match the vibe of each area.",
      live: "https://apps.apple.com/app/id1153215591",
      git: "",
      images: ["https://i.imgur.com/PUfIHI1.png"],
    },
  ];

  return (
    <motion.div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      {projects.map((project, i) => (
        <div className="project-box" key={i}>
          <h2 className="project-name">{project.name}</h2>
          <h3 className="project-role">{project.role}</h3>
          <a href={project.live}>
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
          </a>
          <p>{project.description}</p>
          <section>
            <a href={project.live}>
              <button>Website</button>
            </a>
            {project.git && (
              <a href={project.git}>
                <button>Github</button>
              </a>
            )}
          </section>
        </div>
      ))}
    </motion.div>
  );
}

export default Projects;
