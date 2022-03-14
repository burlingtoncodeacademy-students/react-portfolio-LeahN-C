//Import React
import React from "react";
//Importing portrait
import portrait from "../images/portrait.JPG";
//Importing style sheet
import "../App.css";

//Function
function Home() {
  return (
    <main>
      <h2 className="titleOfPage">Home Page</h2>
      <section className="profile">
        <img id="portrait" src={portrait} alt="Photo of Me" />
        <p>
          Welcome to my portfolio!
          <br />
          My name is Leah, and this is my personal portfolio website that I
          created from scratch with the JavaScript Library, React!
          <br />
          I am passionate, caring, motivated, and I love to learn and grow!
          <br />
          <br />
          Check out my <a href="./about-me">About Me</a> and{" "}
          <a href="./hobbies">Hobbies</a> pages for more information on who I
          am, and check out my <a href="./projects">Projects</a> page for some
          examples of my programming work.
          <br />
          <br />
          <br />
          <br />
          At the bottom of the page is a song that I wrote and recorded as a teenager... enjoy :)
        </p>
      </section>
    </main>
  );
}

export default Home;
