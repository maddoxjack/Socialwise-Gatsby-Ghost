import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faQuoteRight,
} from "@fortawesome/free-solid-svg-icons"
import "./styles.scss"

const StripFour = () => (
    <section id="strip-four">
        <div className="strip-four-body">
            <div className="container strip-four">
                <h2 className="title is-1 is-size-2-mobile">
                    What others have to say{` `}
                </h2>
                <div className="columns first-row">
                    <div className="column one">
                        <p>⭐⭐⭐⭐⭐</p>
                        <h3>Casey, Co-Founder @ Refrag</h3>
                        <p>
                            Big fan of being able to see everyone I need to
                            engage with in one place. My profile views have gone
                            way up.
                        </p>
                        <FontAwesomeIcon
                            icon={faQuoteRight}
                            className="quote"
                        />
                    </div>
                    <div className="column two">
                        <p>⭐⭐⭐⭐⭐</p>
                        <h3>Paul, Owner @ The Bagel Guys</h3>
                        <p>
                            As a small business Socialwise helped us stay across
                            all the changes to our industry that have been
                            happening at breakneck speed during coronavirus -
                            best practices for serving customers safely, how and
                            when we could operate, government aid available to
                            us and our staff.
                        </p>
                        <FontAwesomeIcon
                            icon={faQuoteRight}
                            className="quote"
                        />
                    </div>
                    <div className="column three">
                        <p>⭐⭐⭐⭐⭐</p>
                        <h3>Pat, Product @ C-Port</h3>
                        <p>
                            I was able to see global reaction to a product
                            launch and gain valuable insight into user opinions
                            in real-time.
                        </p>
                        <FontAwesomeIcon
                            icon={faQuoteRight}
                            className="quote"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default StripFour
