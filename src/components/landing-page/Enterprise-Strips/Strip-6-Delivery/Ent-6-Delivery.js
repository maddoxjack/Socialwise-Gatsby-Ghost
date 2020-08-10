import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"
import "./styles.scss"

const EntStripSix = () => (
    <section id="strip-six">
        <div className="strip-six-body">
            <div className="container strip-six">
                <h2 className="title is-1 is-size-2-mobile">
                    Delivered how you want. 
                </h2>
                <div className="columns first-row">
                    <div className="column one">
                        <FontAwesomeIcon
                            icon={faQuoteRight}
                            className="quote"
                        />
                        <h3> Online</h3>
                        <p>
                            Our content live-streaming in clean dashboard.
                        </p>
                    </div>
                    <div className="column two">
                        <FontAwesomeIcon
                            icon={faQuoteRight}
                            className="quote"
                        />
                        <h3> Email</h3>
                        <p>
                            Receive e-mail digests or reports immediately or
                            once a day.
                        </p>
                    </div>
                    <div className="column three">
                        <FontAwesomeIcon
                            icon={faQuoteRight}
                            className="quote"
                        />
                        <h3> API </h3>
                        <p>
                            Our data processed and integrated directly into your
                            systems.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default EntStripSix
