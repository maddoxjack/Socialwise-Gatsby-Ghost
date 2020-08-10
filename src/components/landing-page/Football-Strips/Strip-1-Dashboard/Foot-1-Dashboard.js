import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCommentsDollar,
    faUsers,
    faBullhorn,
    faNewspaper,
    faLightbulb,
} from "@fortawesome/free-solid-svg-icons"
import "./styles.scss"

const FootStripOne = () => (
    <section id="strip-one">
        <div className="strip-one-body">
            <div className="container strip-one">
                <h2 className="title is-1 is-size-2-mobile">
                    Your Dashboard is 5 Essential Columns
                </h2>
                <div className="columns first-row">
                    <div className="column one">
                        <FontAwesomeIcon icon={faLightbulb} className="icons" />
                        <h3>Official News</h3>
                        <p>
                            News and tweets from the official club handle as
                            well as players official accounts.
                        </p>
                    </div>
                    <div className="column two">
                        <FontAwesomeIcon icon={faBullhorn} className="icons" />
                        <h3>Reliable News Sources</h3>
                        <p>
                            Stop wasting time hunting transfer news across
                            multiple portals and wondering if they&apos;re
                            reliable. Our search experts have done the work for
                            you.
                        </p>
                    </div>
                    <div className="column three">
                        <FontAwesomeIcon icon={faNewspaper} className="icons" />
                        <h3>Transfer Gossip</h3>
                        <p>
                            Good ol&apos; transfer news. What&apos;s real? What
                            are rumors? Be in the know on the latest transfer
                            gossips happening in real-time.
                        </p>
                    </div>
                </div>
                <div className="columns second-row">
                    <div className="column is-one-third is-offset-2 row-2-one">
                        <FontAwesomeIcon icon={faUsers} className="icons" />
                        <h3>International Coverage</h3>
                        <p>
                            See what reporters are saying internationally. They
                            might have stumbled on something new. Hint hint,
                            takeover news perhaps?
                        </p>
                    </div>
                    <div className="column is-one-third is-offset-1 row-2-two">
                        <FontAwesomeIcon
                            icon={faCommentsDollar}
                            className="icons"
                        />
                        <h3>Fan Chat</h3>
                        <p>
                            See what like-minded supporters are saying about
                            your team and more. Join in the conversation. Meet
                            new pub mates.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
export default FootStripOne
