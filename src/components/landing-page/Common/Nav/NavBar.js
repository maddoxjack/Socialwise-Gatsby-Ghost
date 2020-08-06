import React from "react"
import "../../../../styles/bul-styles.scss"
import './styles.scss'

import Logo from "../../../common/Logo/index"
import { Link } from "gatsby"

const linkStyle = {
    color: `black`,
    textDecoration: `none`,
    fontSize: `medium`,
    
}

export default function NavBarHomePage() {
    const [isActive, setisActive] = React.useState(false)
    console.log(`is active state`, isActive)
    return (
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/" style={{ textDecoration: `none` }}>
                    <div className="navbar-item">
                        <Logo />
                    </div>
                </Link>

                <a onClick={() => {
                    setisActive(!isActive)
                }}
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

            <div id="navbarBasicExample" className={ isActive ? `narbar-menu is-active` : `navbar-menu` }
            >

                <div className="navbar-end">                
                    <a className="navbar-item"><Link to="/blog" style={linkStyle}>Blog</Link></a>

                    <div className="navbar-item has-dropdown is-hoverable is-black">
                        <a className="navbar-link" style={linkStyle}>Other Offerings</a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item"><Link to="/enterprise" style={linkStyle}>Enterprise</Link></a>
                            <a className="navbar-item is-black">
                                <Link to="/football" style={linkStyle}>Football
                                </Link>
                            </a>
                            <a className="navbar-item">
                                <Link to="/contact" style={linkStyle}>
                                Contact
                                </Link>
                            </a>                        
                        </div>
                    </div>
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary is-large">
                                <strong>Build Your Dashboard</strong>
                            </a>
                            <a className="button is-light is-large"><strong>Log in</strong></a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

// export default NavBarHomePage
