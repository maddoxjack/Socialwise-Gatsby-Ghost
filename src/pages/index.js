import React from "react"
import Enterprise from "../components/landing-page/Enterprise-Strips/Enterprise"
import NavBarHomePage from '../components/landing-page/Common/Nav/NavBar'
import Footer from '../components/landing-page/Common/Footer/Footer'

const Landing = () => (
    <>
        <NavBarHomePage/>
        <Enterprise />
        <Footer/>
    </>
)

export default Landing
