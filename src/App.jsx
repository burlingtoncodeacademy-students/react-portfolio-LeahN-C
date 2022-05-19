//Importing React
import React from "react";
//Importing each of these things to allow navigation between pages
import { Routes, Route, NavLink } from "react-router-dom";
//Importing each of the other pages of website
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import WorkHerstory from "./components/WorkHerstory";
import ContactMe from "./components/ContactMe";
//Importing the styles sheet
import "./App.css";

//A function to hold all of the site content
function App() {
  //Return statement to show Nav Bar (with links to other pages) and Footer
  //Also includes video
  return (
    <div className="wholePage">
      <h1 className="title">Leah's Portfolio</h1>
      <nav className="navBar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-me">About Me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/hobbies">Hobbies</NavLink>
        <NavLink to="/work">Work Her-story</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <main>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-me" element={<AboutMe />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/hobbies" element={<Hobbies />}></Route>
        <Route path="/work" element={<WorkHerstory />}></Route>
        <Route path="/contact" element={<ContactMe />}></Route>
      </Routes>
      <footer className="footer">
        <iframe
          id="song"
          width="200"
          height="75"
          src="https://www.youtube.com/embed/c9loGNzNJm4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <br />
        <div>Created by Leah Niemasz-Cavanagh, March 2022</div>
      </footer>
    </main>
    </div>
  );
}

//Exporting function
export default App;
