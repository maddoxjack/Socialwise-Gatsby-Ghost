import React from "react"
import "../../../../styles/bul-styles.scss"
import "./styles.scss"

import HeroImg from "../../Home-Strips/Images/HeroImg"

const Hero = () => (
    <section className="hero">
        <div className="hero-body">
            <div className="hero-container">
                <h1 className="title has-text-weight-bold is-1 is-size-2-mobile has-text-left-mobile">
                    The Best Premier League Twitter Dashboard
                </h1>
                <h2 className="sub-title is-size-3 has-text-left-mobile pb-6">
                    Since no one else has made one.
                </h2>
                <div className="break"></div>
                <div className="button-wrapper">
                    <a
                        href="https://beta.socialwise.io/premier-league"
                        className="button is-primary is-large is-full-width has-text-weight-bold"
                    >
                        See what streaming content looks like
                    </a>
                </div>
                <div className="dashboard-wrapper is-hidden-mobile">
                    <HeroImg />
                </div>
            </div>
        </div>
    </section>
)

export default Hero
