import React from "react"
import StripFiveImg from "../Images/Strip5Img"
import './styles.scss'

const StripFive = () => (
    <section id="strip-five">
        <div className="strip-five-body">
            <div className="container strip-five">
                <h2 className="title has-text-left is-1 is-size-2-mobile">
                    Here&apos;s How it Works
                </h2>
                <h3>
                    We help you increase your reach using this 4-step process
                </h3>
                <div className="columns" id="process">
                    <div className="column" id="vector-img-process">
                        <StripFiveImg />
                    </div>
                    <div className="column" id="process-right">
                        <ol>
                            <li>
                                <b>Book a Search</b>
                                <br />
                                Submit your industry and pay X with our
                                Stripe-secured checkout. You&apos;ll receive a
                                confirmation and an email to clarify your
                                business persona and key competitor analysis.
                                {` `}
                            </li>
                            <li>
                                <b>Define Needs</b>
                                <br />
                                Submit your industry and pay X with our
                                Stripe-secured checkout. You&apos;ll receive a
                                confirmation and an email to clarify your
                                business persona and key competitor analysis.
                                {` `}
                            </li>
                            <li>
                                <b>Dashboard Publication</b>
                                <br />
                                Submit your industry and pay X with our
                                Stripe-secured checkout. You&apos;ll receive a
                                confirmation and an email to clarify your
                                business persona and key competitor analysis.
                                {` `}
                            </li>
                            <li>
                                <b>Engage away</b>
                                <br />
                                Submit your industry and pay X with our
                                Stripe-secured checkout. You&apos;ll receive a
                                confirmation and an email to clarify your
                                business persona and key competitor analysis.
                                {` `}
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default StripFive
