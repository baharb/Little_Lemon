import React from "react";
import "../styles/footer.css";
import logo from '../assets/logo-w.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (      
        <div id="footer-section">
         
          <div className="footer">
            <div className="footerCol">
            <a href="/"><img className="logoFooter" src={logo} /></a>
            </div>
            <div className="footerCol">

              <div className="commentCol">
                <h6 className="headF">Doormat Navigation</h6>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li>menu</li>
                  <li><a href="/booking">Reservations</a></li>
                  <li>Order Online</li>
                  <li>Login</li>
                </ul>
              </div>
            </div>            
            <div className="footerCol">
            <div className="commentCol">
            <h6 className="headF">Contact</h6>
                <ul>
                  <li>1950 E 17th St, No.212</li>
                  <li>+12132201111</li>
                  <li>info@little-lemon.com</li>
                </ul>
            </div>
            </div>           
            <div className="footerCol">
              <div className="commentCol">
                <h6 className="headF">Social Media</h6>
                  <ul>
                    <li><a href='https://instagram.com'>
                      <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a></li>
                    <li><a href='https://github.com'>
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a></li>
                    <li><a href='https://linkedin.com'>
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a></li>
                  </ul>
              </div>
              </div>
          </div>
        </div>
  );
};
export default Footer;
