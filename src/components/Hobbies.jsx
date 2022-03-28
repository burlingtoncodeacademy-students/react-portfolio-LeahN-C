//Import React
import React from "react";
//Importing silks and skydiving photos
import hipKey from "../images/hipKey.jpg";
import inversion from "../images/inversion.jpg";
import split from "../images/split.jpg";
import belay from "../images/belay.jpg";
import freeFalling from "../images/freeFalling.jpg";
import opening from "../images/opening.jpg";
import ALicense from "../images/ALicense.jpeg"
//Importing skydiving video
import skydive from "../images/skydive.m4v";
//Importing style sheet
import "../App.css";

//Function for Hobbies page
function Hobbies() {
  //That returns 4 photos of me doing silks
  //2 photos of me skydiving with text in between
  //A photo of me with my A license
  //And a video of me skydiving
  return (
    <main>
      <h2 className="titleOfPage">Hobbies and Interests</h2>
      <section>
        <img
          className="silksPhotos"
          src={hipKey}
          alt="Photo of Me Doing Silks"
        />
        <img
          className="silksPhotos"
          src={inversion}
          alt="Photo of Me Doing Silks"
        />
        <img
          className="silksPhotos"
          src={split}
          alt="Photo of Me Doing Silks"
        />
        <img
          className="silksPhotos"
          src={belay}
          alt="Photo of Me Doing Silks"
        />
      </section>
      <section className="hobbiesPage">
        <img
          className="skydivePhotos"
          src={freeFalling}
          alt="Photo of Me Skydiving"
        />
        <div>
          I have many, many interests. From yoga to crocheting to playing piano
          and writing songs to frolicking through snow with my pup... But more
          than anything, I love to fly! 
          <br />
          <br />
          In December, 2015, I went for my first
          tandem skydive, as a birthday gift. I loved it and right away decided
          to get licensed. I took a course, and learned to skydive on my own. 
          <br />
          I
          passed the levels, packed my own parachute and jumped with it, bought
          an altimeter, a jump suit, goggles and a helmet, and I got my
          A license (which allows me to jump alone, without an instructor)! A couple of years and 39 jumps later, I decided to
          "retire", at least for the time being. 
          <br />
          <br />
          In 2021, I chose to start
          flying in a different way -- with Aerial Silks! I've been working hard
          and have built a lot of strength and flexibility. It's so much fun!
        </div>
        <img
          className="skydivePhotos"
          src={opening}
          alt="Photo of Me Skydiving"
        />
      </section>
      <img id="ALicense" src={ALicense} alt="My A License!" />
      <video controls className="skydivePhotos" src={skydive} muted></video>
    </main>
  );
}

//Export function
export default Hobbies;
