import React from "react"
import Hero from "./Hero/Hero"
import StripOne from "./Strip-1-Problem/Ent-1-Problem"
import EntStripTwo from "./Strip-2-Services/Ent-2-Services"
import EntStripThree from "./Strip-3-Dashboard/Ent-3-Dash"
import EntStripFour from "./Strip-4-Tailor/Ent-4-Tailor"
import EntStripFive from "./Strip-5-Millions/Ent-5-Millions"
import EntStripSix from "./Strip-6-Delivery/Ent-6-Delivery"
import EntStripSeven from "./Strip-7-About/Ent-7-About"
import EntStripEight from "./Strip-8-Process/Ent-8-Process"
import EntStripNine from "./Strip-9-Close/Ent-9-Close"
import "../../../styles/bul-styles.scss"
import "./styles.scss"

const Enterprise = () => (
    <>
        <main id="homePage">
            <Hero />
            <StripOne />
            {/* <EntStripTwo /> */}
            {/* <EntStripThree/> */}
            {/* <EntStripFour/> */}
            {/* <EntStripFive/> */}
            {/* <EntStripSix/> */}
            <EntStripSeven/>
            <EntStripEight/>
            <EntStripNine/>
        </main>
    </>
)

export default Enterprise
