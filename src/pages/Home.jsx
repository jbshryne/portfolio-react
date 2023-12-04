import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img
        src="https://i.imgur.com/8lp4d2x.jpg"
        alt="hero"
        className="hero-img"
      />
      <br />
      <small>Photographer: Noel Hernandez</small>
    </motion.div>
  );
};

export default Home;
