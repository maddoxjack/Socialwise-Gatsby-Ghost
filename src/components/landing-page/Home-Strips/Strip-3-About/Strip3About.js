import React from "react"
import StripThreeImg from "../Images/Strip3Img"

const StripThree = () => (
    <section id="strip-Three">
        <div className="strip-Three-body">
            <div className="container strip-Three">
                <h2 className="title is-1 is-size-2-mobile">
                    What makes us the right team for the job?
                </h2>
                <div className="columns">
                    <div className="column" id="benefits">
                        <div>
                            <p>
                                Most people can say that they&apos;ve built the tool,
                                but how many can say they&apos;ve lived it through
                                real-world experience?
                            </p>
                            <p>
                                Our search expert team is made up of journalists
                                that have spent years working at major news
                                organisations like CNN and Al-Jazeera, or at
                                AI-driven event detection companies such as
                                Dataminr, and a range of financial institutions;
                                always breaking news and discovering new
                                sources.
                            </p>
                            <p>
                                Socialwise is the culmination of real world
                                experience and productized knowledge. This is
                                your opportunity to use what the professionals
                                use.
                            </p>
                        </div>
                    </div>
                    <div className="column" id="headshot">
                        <StripThreeImg />
                    </div>
                </div>
            </div>
        </div>
    </section>
)
export default StripThree
