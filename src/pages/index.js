import React from "react"
import HomePage from '../components/landing-page/Home-Strips/home'
import NavBarHomePage from '../components/landing-page/Common/Nav/NavBar'
import Footer from '../components/landing-page/Common/Footer/Footer'
import { Layout } from "../components/common"

const Landing = () => (
    <>
        <NavBarHomePage/>
        <HomePage />
        <Footer/>
    </>
)

export default Landing