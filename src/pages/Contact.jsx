import React from "react";
import "../styles/Contact.css";
import PizzaLeft from "../assets/pizzaLeft.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form action="" id="contactForm" method="POST">
          <label htmlFor="name">Full Name</label>
          <input type="text" placeholder="Enter Full Name" name="name" />
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter Email" name="email" />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="6"
            placeholder="Message us"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
