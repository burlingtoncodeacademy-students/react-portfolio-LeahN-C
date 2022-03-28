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

      <div>
        Please feel free to email me with any questions about me, my site, or
        Maple! We'd love to hear from you!
      </div>
      <br />
      <form
        className="contactForm"
        action="https://formsubmit.co/cf624acdf293ab96185f44edc0bec8c7"
        method="POST"
      >
        <label className="labels" htmlFor="name">
          <span>*</span>Name:{" "}
        </label>
        <input type="text" name="name" required />
        <label className="labels" htmlFor="email">
          <span>*</span>Email Address:{" "}
        </label>
        <input type="email" name="email" required />
        <label className="labels" htmlFor="subject">
          Subject:{" "}
        </label>
        <input type="text" name="subject" />

        <label className="labels" htmlFor="message">
          <span>*</span>Message:{" "}
        </label>
        <textarea
          className="message"
          name="message"
          form="signUp"
          id=""
          cols="30"
          rows="10"
          required
        ></textarea>
        <br />
        <input className="button" type="submit" value="SEND" />
      </form>
    </main>
  );
}

//Exporting function
export default Contact;
