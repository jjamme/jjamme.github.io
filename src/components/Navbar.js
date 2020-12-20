import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

import githubImage from "../images/github.svg";
import linkedinImage from "../images/linkedin.png";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="socials-container">
              <div className="social-container">
                <img
                  className="social-icon"
                  src={githubImage}
                  alt="GitHub logo icon"
                  class="social-icon"
                />
                <a className="social-name" href="https://github.com/jjamme">
                  GitHub
                </a>
              </div>
            </div>
            <div className="author-name">
              <Link to="/" className="navbar-logo">
                Frank Nguyen
              </Link>
            </div>
            <div class="socials-container">
              <div className="social-container">
                <img
                  className="social-icon"
                  src={linkedinImage}
                  alt="LinkedIn logo icon"
                  class="social-icon"
                />
                <a
                  className="social-name"
                  href="https://www.linkedin.com/in/frank-nguyen2000/"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
