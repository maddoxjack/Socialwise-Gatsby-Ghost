import React from "react"
import PropTypes from "prop-types"
import logo from "../../../images/logo.svg"
import "./styles.scss"
import { Helmet } from "react-helmet"

// import HeaderLogoImg from "../../landing-page/Images/HeaderLogo"

// const Logo = () => (
//     <div id="logo" >
//         <HeaderLogoImg /> <span>socialwise</span>
//     </div>
// )

const Logo = () => (
    <>
        <Helmet>
            <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"/>
        </Helmet>
        <div id="logo" >
            <img src={logo} alt="logo" id="logo-heart"/> <span id="logo-text">socialwise</span>
        </div>
    </>
)

export default Logo

