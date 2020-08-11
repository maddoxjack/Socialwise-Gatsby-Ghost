import React from "react"
import "./styles.scss"
import EntStripThreeImg from "../Images/EntStrip3Img"

const EntStripThree = () => (
    <section id="strip-three">
        <div className="strip-three-body">
            <div className="container strip-three">
                <div className="columns">
                    <div className="column one" id="service-img">
                        <EntStripThreeImg />
                    </div>
                    <div className="column two" id="service-dash">
                        <h3>Real-Time Monitoring Dashboard</h3>
                        <p>You want to do the same level of searching or filtering as described in our Data Processing service.<br /><br />​But we deliver it in real-time and displayed in a clean minimalist UI for easy consumption.<br /><br />Perfect for covering one-off events, daily newsgathering competition monitoring, or community discovery.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default EntStripThree
