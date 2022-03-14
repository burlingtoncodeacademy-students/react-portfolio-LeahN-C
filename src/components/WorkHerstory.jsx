//Import React
import React from "react";
import resume2022 from "../images/resume2022.pdf";
import resumeJPG from "../images/resumeJPG.jpg";
//Importing style sheet
import "../App.css";

function WorkHerstory() {
  return (
    <main>
      <h2 className="titleOfPage">Work Her-story</h2>
      <div>
        This is my story of the work that I have done.
        <br />
        <br />
        I have worked many, many jobs. My most recent, very fun and creative job was working at a small leather shop making custom leather hand bags! The shop is called Ma & Pembum (www.maandpembum.com). I cut the leather, sewed it together, assembled it with hardware, and voila! A bag. 
        <br />
        I also made leather jewelry, leather wallets, and dog leashes!
      </div>
        <iframe className="resume" src={resume2022} frameborder="10"></iframe>
    </main>
  );
}

export default WorkHerstory;
