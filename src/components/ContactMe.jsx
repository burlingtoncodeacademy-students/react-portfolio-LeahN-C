//Import React
import React, { useState } from "react";
//Importing style sheet
import "../App.css";

//Function for Contact page
function Contact() {
  //That returns text and a button that doesn't work... and maybe someday a form
  return (
    <main>
      <h2 className="titleOfPage">Contact Me</h2>
      <form action="submit">
        <div>
          This is the place where you can contact me! This page will maybe have
          a form eventually that submits to my email or something. Maybe. I don't fucking know.
        </div>
        <br />
        <button>Maybe This Button Will Lead Somewhere Someday...</button>
      </form>
    </main>
  );
}

//Exporting function
export default Contact;
