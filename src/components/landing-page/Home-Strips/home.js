import React from "react"
import Hero from "./Hero/Hero"
import StripOne from "./Strip-1-Problem/Strip1Problem"
import StripTwo from "./Strip-2-Community/Strip2Community"
import StripThree from "./Strip-3-Comp/Strip3Community"
import StripFour from "./Strip-4-News/Strip4News"
import StripFive from "./Strip-5-Testimonials/Strip5Testimonials"
import StripSix from "./Strip-6-Why/Strip6Why"
import StripSeven from "./Strip-7-Process/Strip7Process"
import StripEight from "./Strip-8-Stop/Strip8Process"
import "../../../styles/bul-styles.scss"
import "./styles.scss"
import { Helmet } from 'react-helmet'

const HomePage = () => (
    <><Helmet>
        <body className="navbar is-fixed-top" />
    </Helmet>
    <main id="homePage">
        <Hero />
        <StripOne />
        <StripTwo />
        <StripThree />
        <StripFour />
        <StripFive />
        <StripSix />
        <StripSeven />
        <StripEight />
    </main>
    </>
)

export default HomePage
