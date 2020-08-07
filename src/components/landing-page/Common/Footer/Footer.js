import React from "react"
import "../../../../styles/bul-styles.scss"
import "./styles.scss"
// import FooterImg from "../../Images/FooterImg"
import logoText from "../../../../images/logoText.png"

const Footer = () => (
    <footer className="footer">
        <div className="content has-text-centered">
            <div className="columns" id="footer-columns">
                <div className="column" id="how-to">
                    <ul>
                        <li>
                            <h6>HOW TO</h6>
                        </li>
                        <li>Monitor Your Competition on Twitter Instagram</li>
                        <li>Find New Customers on Twitter Instagram</li>
                        <li>Find Premier League News on Twitter</li>
                    </ul>
                </div>
                <div className="column" id="company">
                    <ul>
                        <li>
                            <h6>Company</h6>
                        </li>
                        <li>Our Blog</li>
                        <li>Privacy Policy</li>
                        <li>Email Us</li>
                    </ul>
                </div>
                <div className="column" id="footer-logo">
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
)

export default Footer
