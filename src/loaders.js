const URL = "https://jpb-profile-backend.onrender.com";
// const URL = "http://localhost:4000";
// import dotenv from "dotenv";
// dotenv.config();

// const URL = process.env.API_URL;

export const projectsLoader = async () => {
  const response = await fetch(URL + "/projects");
  const projects = await response.json();
  return projects;
};

export const aboutLoader = async () => {
  const response = await fetch(URL + "/about");
  const about = await response.json();
  return about;
};
