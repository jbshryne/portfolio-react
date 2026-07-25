import React from "react";
import { motion } from "framer-motion";

function Projects(props) {
  const projects = [
    {
      name: "Checker Toss (in production)",
      role: "Main Developer / Composer",
      description:
        "A new physics-based game built with Unity for the Living Room (below), combining bowling and frisbee! Toss your checkers and knock over all the toys. Try hitting a bank shot off a wall for big bonus points!",
      live: "https://bitbucket.org/jbshryne/checker-toss/src/main/",
      git: "https://bitbucket.org/jbshryne/checker-toss/src/main/",
      images: [
        "https://i.imgur.com/OAYwBvQ.png",
        "https://i.imgur.com/JNFkIF8.png",
      ],
    },
    {
      name: "Solar System Spotlight",
      role: "Sole Developer",
      description:
        "A 3D interactive model of the Solar System, with a focus on getting folks of all ages excited about space.  Built with Unity, incorporating DOTween and Cinemachine.",
      live: "https://jbshryne.itch.io/solar-system-spotlight",
      git: "https://github.com/jbshryne/SolarSystemUnity",
      images: ["https://i.imgur.com/u5wJtgn.png"],
    },
    {
      name: "Dungeon Throwdown",
      role: "Sole Developer",
      description:
        "A turn-based RPG-style boardgame for two players. Use stragety, luck, and powerups to fight your opponent and reduce their Hit Points to zero! Built with React and the Redux-based library boardgame.io.",
      live: "https://dungeon-throwdown.onrender.com",
      git: "https://github.com/jbshryne/dungeon-crawl",
      images: ["https://i.imgur.com/C6LAGgv.png"],
    },
    {
      name: "CHESSMIXED",
      role: "Sole Developer",
      description:
        "Currently a full CRUD Chess app, where users can play & save multiple games and play friends remotely.  Future versions will include playing against an AI opponent (currently in beta) & a wacky higher variance mode.",
      live: "https://chessmixed-0goz.onrender.com/",
      git: "https://github.com/jbshryne/chessmixed-react",
      images: [
        "https://i.imgur.com/tbjpKqJ.jpg",
        "https://i.imgur.com/XCZpflf.png",
      ],
    },
    {
      name: "Card Conclave",
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
