import React from "react";
import { Link } from "react-router";
import "./contactBtn.css";

const ContactBtn = () => {
  return (
    <div>
      <Link to='/contact'>
        <button
          className="glow-on-hover font-Varela font-semibold"
          type="button"
        >
          Contact Us !
        </button>
      </Link>
    </div>
  );
};

export default ContactBtn;
