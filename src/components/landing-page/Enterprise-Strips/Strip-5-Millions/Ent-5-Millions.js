import React from "react"
import "./styles.scss"
import EntStripFiveImg from "../Images/EntStrip5Img"

const EntStripFive = () => (
    <section id="strip-five">
        <div className="strip-five-body">
            <div className="container strip-five">
                <h2 className="title is-1 is-size-2-mobile">
                    Millions of Tweets analyzed &amp; delivered.
                </h2>
                <div className="finance-text">
                    <p>
                        Our clients in financial centers require 24/7 up-time
                        and information as soon as it&apos;s published.
                        <br />
                        <br />
                        We always deliver.
                    </p>
                </div>
            </div>
            <div className="vector-wrapper">
                <EntStripFiveImg />
            </div>
        </div>
    </section>
)

export default EntStripFive
