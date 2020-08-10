import React from "react"
import Hero from "./Hero/Hero"
import FootStripOne from "./Strip-1-Dashboard/Foot-1-Dashboard"
import FootStripTwo from "./Strip-2-Close/Foot-2-Close"
import "../../../styles/bul-styles.scss"
import "./styles.scss"

const Football = () => (
    <>
        <main id="homePage">
            <Hero />
            <FootStripOne />
            <FootStripTwo />
        </main>
    </>
)

export default Football
