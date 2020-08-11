import React from "react"
import FootStripTwoImg from "../Images/FootStrip2Img"
import "./styles.scss"

const FootStripTwo = () => (
    <section id="strip-two">
        <div className="strip-two-body">
            <div className="container strip-two">
                <h2 className="title is-1 is-size-2-mobile">
                    Built by football fans, for football fans
                </h2>
                <div className="columns" id="closing">
                    <div className="column" id="closing-text">
                        <p>
                            We&apos;ve built our own version of Tweetdeck
                            pre-loaded with reliable sources about your Premier
                            League club.
                            <br />
                            <br />
                            Track your club news using what the journalists use.
                            <br />
                            <br />
                            Built by a social media mad football fan to make
                            your life easier.
                        </p>
                    </div>
                    <div className="column" id="vector-img-closing">
                        <FootStripTwoImg />
                    </div>
                </div>
                <div className="button-wrapper-close">
                    <button
                        className="button is-primary is-large is-full-width has-text-weight-bold"
                        id="closing-button"
                    >
Want a dashboard built for your business? Get in touch.                    </button>
                </div>
            </div>
        </div>
    </section>
)
export default FootStripTwo
