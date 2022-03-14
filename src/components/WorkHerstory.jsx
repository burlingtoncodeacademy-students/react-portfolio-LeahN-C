//Import React
import React from "react";
//Importing my resume from images folder
import resume2022 from "../images/resume2022.pdf";
//Importing style sheet
import "../App.css";

//Function to show my resume
function WorkHerstory() {
  //Returns the title and text below as well as a download-able resume
  return (
    <main>
      <h2 className="titleOfPage">Work Her-story</h2>
      <div>
        This is my story of the work that I have done.
        <br />
        <br />I have worked many, many jobs. My most recent, very fun and
        creative job was working at a small leather shop in Hinesburg, Vermont
        making custom leather hand bags! The shop is called{" "}
        <a href="https://maandpembum.com/" target="_blank">
          Ma & Pembum
        </a>
        . I cut the leather, sewed it together, assembled it with hardware, and
        voila! A bag.
        <br />I also made leather jewelry, leather wallets, and dog leashes!
      </div>
      <iframe className="resume" src={resume2022} frameborder="10"></iframe>
    </main>
  );
}

//Exporting this function
export default WorkHerstory;
