import React from "react";
import { Link } from "react-router";
import './contactBtn.css'

const ContactBtn = () => {
  return (
    <div>
      <button className="glow-on-hover font-Varela font-semibold" type="button">
          <Link to="/contact">Contact Us !</Link>
      </button>
    </div>
  );
};

export default ContactBtn;
