import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faBullhorn,
    faNewspaper,
    faLightbulb,
} from "@fortawesome/free-solid-svg-icons"
import "./styles.scss"

const StripFour = () => (
    <section id="strip-four">
        <div className="strip-four-body">
            <div className="container strip-four">
                <h2 className="title is-1 is-size-2-mobile">
What others have to say                </h2>
                <div className="columns first-row">
                    <div className="column one">
                        <FontAwesomeIcon icon={faLightbulb} className="icons" />
                        <h3>Your Brand</h3>
                        <p>
                            Track any mention of your brand across Twitter.
                            Respond to good or bad news as soon as it happens.
                        </p>
                    </div>
                    <div className="column two">
                        <FontAwesomeIcon icon={faBullhorn} className="icons" />
                        <h3>Your Competition</h3>
                        <p>
                            Swoop in on your competition&apos;s dissatisfied
                            customers or see what good things are being said.
                            Make better business decisions.
                        </p>
                    </div>
                    <div className="column three">
                        <FontAwesomeIcon icon={faNewspaper} className="icons" />
                        <h3>Your News</h3>
                        <p>
                            It&apos;ll become even easier to find new customers
                            on Twitter.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default StripFour
