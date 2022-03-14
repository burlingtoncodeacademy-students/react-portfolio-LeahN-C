//Import React
import React from "react";
//Importing images
import mabedies from "../images/mabedies.JPG";
import mapes from "../images/mapes.JPG";
//Importing style sheet
import "../App.css";

//Function for About Me page
function AboutMe() {
  //That returns two photos of me and Maple with text in between
  return (
    <main>
      <h2 className="titleOfPage">About Me</h2>
      <section className="aboutMeSection">
        <img className="maple" src={mabedies} alt="Maple and Me" />
        <div>
          What a journey I have been on to get to where I am. A year ago, I
          never thought I would be learning to code, let along in a Software
          Development bootcamp.
          <br />
          <br />
          For years, I worked in many roles with children and families, and I
          loved serving people and helping parents to raise good humans. I
          worked as a Residential Counselor at a residential treatment center
          for children in San Diego, CA. I also worked as a nanny in both
          Vermont and then California for years. I have slowly been working
          toward Birth Doula certification since 2014, and in 2022 became
          certified through DONA International! I am also a trained Postpartum
          Doula through CAPPA. In 2021, I opened an LLC for my Doula business
          called Empowered Start. I love supporting labor and birth as well as
          families postpartum, but I do not want to do that full time. I want to
          reserve that energy for special occasions.
          <br />
          <br />
          In the fall of 2021, I was talking with a friend who was telling me
          about her job as a coder, and I became interested in the idea. So I
          did some research, and came across a training program at Burlington
          Code Academy (now known as Upright Education) through Community
          College of Vermont. I applied to the part time course, and started a
          few weeks later.
          <br />
          <br />
          I've always loved equations and problem solving. When I first started
          college, I was a Math major. I really liked math, but quickly started
          to fall behind because I was not able to keep up with the fast pace of
          learning in school. My academic advisor told me that because my grades
          were not great, it might be a good idea for me to change majors. And I
          listened. I let that part of myself go because I didn't think I was
          good enough or smart enough. But as I was learing how to code, I
          started to remember how good it felt to solve problems and to learn a
          language and syntax that was specific to solving a type of problem. I
          really liked it, and although it was difficult and confusing at times,
          it was so rewarding when things actually worked! And so cool to be
          able to create programs from scratch!
          <br />
          After the part time course was over, I applied to the full time
          bootcamp, and the rest is her-story :D
          <br />
          <br />
          In addition, and perhaps more importantly, is the question of who is
          the adorable pup in these pictures? This is Maple! She is 37% mini
          poodle and 18% chihuahua, with many other small breeds mixed in. She
          is very smart and sweet and well behaved. She loves to listen and be
          praised for being good. She was born in Oceanside, California, and
          moved to Vermont with me in August of 2020! She loves her life here
          and she adores the snow.
        </div>
        <img className="maple" src={mapes} alt="St. Patrick's Day with Maple" />
      </section>
    </main>
  );
}

//Export function
export default AboutMe;
