import React from "react";
import "../../../../styles/bul-styles.scss";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faLinkedinIn,
    faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
// import FooterImg from "../../Images/FooterImg"
import logoText from "../../../../images/logoText.png";
import { Link } from "gatsby";

const linkStyle = {
    color: `white`,
};

const Footer = () => (
    <footer className="footer">
        <div className="content has-text-centered" id="footer-content">
            <div className="columns" id="footer-columns">
                <div className="column one" id="how-to">
                    <ul>
                        <li>
                            <h6>HOW TO</h6>
                        </li>
                        <li>Monitor Your Competition on Twitter Instagram</li>
                        <li>Find New Customers on Twitter Instagram</li>
                        <li>
                            <Link to="/football" style={linkStyle}>
                                Find Premier League News on Twitter
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="column two" id="company">
                    <ul>
                        <li>
                            <h6>Company</h6>
                        </li>
                        <li>
                            <Link to="/blog" style={linkStyle}>
                                Our Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="/privacy-policy" style={linkStyle}></Link>
                            Privacy Policy
                        </li>
                        <li>Email Us</li>
                    </ul>
                </div>
                <div className="column three" id="social">
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faTwitter} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </li>
                    </ul>
                </div>
                <div className="column four" id="footer-logo">
                    {/* <FooterImg /> */}
                    <div id="logo-footer">
                        <img
                            src={logoText}
                            alt="logo with text"
                            id="footer-logo"
                        />
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
