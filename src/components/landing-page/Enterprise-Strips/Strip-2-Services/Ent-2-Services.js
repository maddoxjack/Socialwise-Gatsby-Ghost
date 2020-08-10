import React from "react"
import "./styles.scss"
import EntStripTwoImg from '../Images/EntStrip2Img'

const EntStripTwo = () => (
    <section id="strip-two">
        <div className="strip-two-body">
            <div className="container strip-two">
                <h2 className="title is-1 is-size-2-mobile">Services </h2>
                <div className="columns">
                    <div className="column one" id="service-data">
                        <h3>Data Processing</h3>
                        <p>We build the searches, apply the filtering, pre-vet the users, select the time frame, choose a location, see if it&apos;s trending, look for media, check for links, analyze the accounts.<br /><br />And then we relay the results directly from our server to yours.<br /><br />So you can do the research and analysis you need.</p>
                    </div>
                    <div className="column two" id="service-img">
                        <EntStripTwoImg />
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default EntStripTwo