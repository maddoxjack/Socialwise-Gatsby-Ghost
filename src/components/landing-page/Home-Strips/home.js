import React from "react"
import Hero from "./Hero/Hero"
import StripOne from "./Strip-1-Problem/Strip1Problem"
import StripTwo from "./Strip-2-Dash/Strip2Dash"
import StripThree from "./Strip-3-About/Strip3About"
import StripFour from "./Strip-4-Testimonials/Strip4Testimonials"
import StripFive from "./Strip-5-Process/Strip5Process"
import StripSix from "./Strip-6-Closing/Strip6Closing"
import "../../../styles/bul-styles.scss"
import "./styles.scss"

const HomePage = () => (
    <>
        <main id="homePage">
            
            <Hero />
            <StripOne />
            <StripTwo />
            <StripThree />
            <StripFour />
            <StripFive />
            <StripSix />
        </main>
    </>
)

export default HomePage
