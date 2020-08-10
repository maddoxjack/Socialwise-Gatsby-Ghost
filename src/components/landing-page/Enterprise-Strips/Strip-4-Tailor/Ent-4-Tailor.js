import React from "react"
import "./styles.scss"
import EntStripTwoImg from "../Images/EntStrip2Img"

const EntStripFour = () => (
    <section id="strip-four">
        <div className="strip-four-body">
            <div className="container strip-four">
                <div className="columns">
                    <div className="column one" id="service-tailor">
                        <h3>Tailored Audiences</h3>
                        <p> We find the people you want to share your product or services with, and provide you with the information needed for your campaigns or research.<br /><br />You want to see who was talking about that event for the hours around it and engage with them? No problem.
                        </p>
                    </div>
                    <div className="column two" id="service-img">
                        <EntStripTwoImg />
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default EntStripFour
