import React from "react"
import StripOneImg from "../../Home-Strips/Images/Strip1Img"
import "./styles.scss"

const StripOne = () => (
    <section id="strip-one">
        <div className="strip-one-body">
            <div className="container strip-one">
                <h2 className="title is-1 is-size-2-mobile">
                    You can&apos;t find your Twitter community and it&apos;s
                    starting to get frustrating.
                </h2>
                <div className="columns">
                    <div className="column" id="vector-img">
                        <StripOneImg />
                        {` `}
                    </div>
                    <div className="column" id="benefits">
                        <h3>Socialwise Benefits:</h3>
                        <div>
                            <ul>
                                <li>
                                    ✅ Real-time information from Twitter to
                                    help you make better business decisions and
                                    sales intelligence.
                                </li>
                                <li>
                                    ✅ Presented in our clean dashboard or
                                    direct to your business via our API, email
                                    or slack.
                                </li>
                                <li>
                                    ✅ Improve your social selling by monitoring
                                    leads and acting at the right moment.
                                </li>
                                <li>
                                    ✅ No need to learn any complicated tools.
                                </li>
                                <li>
                                    Proprietary search algorithms to pre-vet
                                    Twitter users talking about things that
                                    matter to you.
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
