import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div className="footer--items">
          <h1>Contach Me</h1>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://github.com/Himanshu8825"
                className="container-ancher"
                target="_blank"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            
            <li>
              <a
                href="kumarsureajverma6001@gmail.com"
                className=" container-ancher"
                target="_blank"
              >
                <i class="fa-sharp fa-solid fa-envelope"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/suraj-verma-1b9244242/"
                className="container-ancher"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">Made with 💖 by Verma</p>
        <div className="footer--social--icon">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Terms_of_Service"
                className="text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
