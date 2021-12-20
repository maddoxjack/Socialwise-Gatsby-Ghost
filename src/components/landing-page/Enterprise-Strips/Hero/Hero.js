import React from "react"
import "../../../../styles/bul-styles.scss"
import "./styles.scss"

import HeroImg from "../../Home-Strips/Images/HeroImg"

const Hero = () => (
    <section className="hero">
        <div className="hero-body">
            <div className="container" id="hero-text">
                <h1 className="title has-text-weight-bold is-1 is-size-2-mobile has-text-left-mobile">
                    Enterprise Twitter Software built by <br />
                    Search Experts
                </h1>
                <h2 className="sub-title is-size-3 has-text-left-mobile pb-6">
                    We find things that normal people can&apos;t. Use real-time
                    information to improve <br /> your sales pipelines, build
                    new audiences and make smarter decisions.
                </h2>
                <div className="break"></div>

                <div className="button-wrapper">
                    <a
                        href="https://www.socialwise.io/dashboard-builder"
                        className="button is-primary is-large is-full-width has-text-weight-bold"
                    >
                        Submit Application Request
                    </a>

                </div>
                <div className="button-subtext">
                    <p>Only suitable applications are currently being accepted due to demand.</p>
                </div>
                <div className="dashboard-wrapper">
                    <HeroImg />
                </div>
            </div>
        </div>
    </section>
)

export default Hero
