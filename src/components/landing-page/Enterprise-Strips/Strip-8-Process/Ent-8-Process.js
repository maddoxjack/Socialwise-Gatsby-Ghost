import React from "react"
import EntStripTwoImg from "../Images/EntStrip2Img"
import "./styles.scss"

const EntStripEight = () => (
    <section id="strip-eight">
        <div className="strip-eight-body">
            <div className="container strip-eight">
                <h2 className="title has-text-left-mobile is-1 is-size-2-mobile">
                    Here&apos;s How it Works
                </h2>
                <div className="columns" id="process">
                    <div className="column" id="vector-img-process">
                        <EntStripTwoImg />
                    </div>
                    <div className="column" id="process-right">
                        <ol>
                            <li>
                                <b>Consult</b>
                                <br />
                                We&apos;ll setup a Zoom call to discuss your
                                needs and the best solutions.
                            </li>
                            <li>
                                <b>Proposal</b>
                                <br />
                                We&apos;ll get back to you after our call with
                                several proposed solutions of different scale.
                            </li>
                            <li>
                                <b>Build</b>
                                <br />
                                Once we get your sign-off we get to work and
                                provide updates on progress depending on the
                                scale of the operation.
                            </li>
                            <li>
                                <b>Engage away</b>
                                <br />
                                We don&apos;t build &amp; dash. We make sure
                                that the results are catered specific to your
                                needs and will tweak them as needed.
                            </li>
                            <li>
                                <b>Deliver</b>
                                <br />
                                Enjoy all that beautiful Twitter data.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default EntStripEight
