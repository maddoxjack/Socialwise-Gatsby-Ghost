import React from "react"
import "../../../../styles/bul-styles.scss"
import Logo from "../../../common/Logo/index"
import { Link } from "gatsby"

const NavBarHomePage = () => (
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <Link to="/" style={{ textDecoration: `none` }}>
                <div className="navbar-item">
                    <Logo />
                </div>
            </Link>

            <a
                role="button"
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start"></div>

            <div className="navbar-end">
                <a className="navbar-item">Home</a>
                
                <a className="navbar-item"><Link to="/blog">Blog</Link></a>

                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">Other Offerings</a>

                    <div className="navbar-dropdown">
                        <a className="navbar-item"><Link to="/enterprise">Enterprise</Link></a>
                        <a className="navbar-item">Football</a>
                        <a className="navbar-item">Contact</a>
                        <hr className="navbar-divider"></hr>
                        <a className="navbar-item">Report an issue</a>
                    </div>
                </div>
                <div className="navbar-item">
                    <div className="buttons">
                        <a className="button is-primary">
                            <strong>Build Your Dashboard</strong>
                        </a>
                        <a className="button is-light">Log in</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
)

export default NavBarHomePage
