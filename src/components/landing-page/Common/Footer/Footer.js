import React from "react"
import "../../../../styles/bul-styles.scss"
import "./styles.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faTwitter,
    faLinkedinIn,
    faFacebookF,
} from "@fortawesome/free-brands-svg-icons"
import logoText from "../../../../images/logoText.png"
import FooterLogoImg from "../../Images/FooterLogo"
import { Link } from "gatsby"

const linkStyle = {
    color: `white`,
}

const Footer = () => (
    <footer className="footer">
        <div className="content has-text-centered" id="footer-content">
            <div className="columns" id="footer-columns">
                {/* <div className="column one" id="how-to">
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
                </div> */}
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
                            <Link to="/privacy-policy" style={linkStyle}>
                                Privacy Policy
                            </Link>
                        </li>
                        <li><a style={linkStyle}href="mailto:jack@socialwise.io">Email Us</a></li>
                    </ul>
                </div>
                <div className="column three" id="social">
                    <ul>
                        <li>
                            <a href="https://twitter.com/maddoxjack"><FontAwesomeIcon icon={faTwitter} /></a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/maddoxjack/">
                                <FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </li>
                    </ul>
                </div>
                <div className="column four" id="footer-logo">
                    <div id="logo-footer">
                        <FooterLogoImg/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer
