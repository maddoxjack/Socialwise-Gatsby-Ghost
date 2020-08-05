import React from "react"
import "../../../../styles/bul-styles.scss"
import Logo from "../../../common/Logo/index"
import { Link } from "gatsby"

export default function NavBarHomePage() {
    const [isActive, setisActive] = React.useState(false)
    console.log(`is active state`, isActive)
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
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
                    <a className="navbar-item"><Link to="/blog">Blog</Link></a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">Other Offerings</a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item"><Link to="/enterprise">Enterprise</Link></a>
                            <a className="navbar-item">
                                <Link to="/football">
                                Football
                                </Link>
                            </a>
                            <a className="navbar-item">
                                <Link to="/contact">
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
                            <a className="button is-light is-large">Log in</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

// export default NavBarHomePage
