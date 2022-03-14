//Import React
import React from "react";
//Import image for link to GitHub account
import githubLogo from "../images/githubLogo.jpg";
import linkedInLogo from "../images/linkedInLogo.jpg"
//Importing style sheet
import "../App.css";

function Projects() {
  return (
    <main>
      <h2 className="titleOfPage">Projects</h2>
      <div>
        My GitHub page (click the logo on the left) contains projects that I have completed throughout the course of this Software Development Bootcamp! 
        <br />
        On the right, is a link to my LinkedIn account!
      </div>
      <section>
        <a
          className=""
          href="https://github.com/LeahN-C"
          target="_blank"
        >
          <img className="icons" src={githubLogo} />
        </a>
        <a
          className=""
          href="https://www.linkedin.com/in/leah-niemasz-cavanagh-ba58ab126/"
          target="_blank"
        >
          <img className="icons" src={linkedInLogo} />
        </a>
      </section>
    </main>
  );
}

export default Projects;
