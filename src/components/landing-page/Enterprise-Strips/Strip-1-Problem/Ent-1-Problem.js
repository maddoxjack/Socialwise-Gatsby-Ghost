import React from "react"
import StripOneImg from "../../Home-Strips/Images/Strip1Img"
import EntStripOneImg from '../Images/EntStrip1Img'

import "./styles.scss"

const StripOne = () => (
    <section id="strip-one">
        <div className="strip-one-body">
            <div className="container strip-one">
                <h2 className="title is-1 is-size-2-mobile">
                    You Want a Tweetdeck for Your Business but Tweetdeck Isn&apos;t the Answer.
                </h2>
                <div className="columns">
                    <div className="column" id="tweetdeck-img">
                        <EntStripOneImg />
                        {` `}
                    </div>
                    <div className="column" id="problems">
                        <div>
                            <ul>
                                <li>
                                    ❌ &nbsp; Tweetdeck is heavy and slows down your browser.
                                </li>
                                <li>
                                    ❌ &nbsp; Streams get overloaded with content due to slow refresh.
                                </li>
                                <li>
                                    ❌ &nbsp; Can&apos;t share your awesome Tweetdeck with others.
                                </li>
                                <li>
                                    ❌ &nbsp; Don&apos;t want people to login to Twitter to view it.
                                </li>
                                <li>
                                    ❌ &nbsp; You need to see Tweets faster than Tweetdeck shows.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
export default StripOne
