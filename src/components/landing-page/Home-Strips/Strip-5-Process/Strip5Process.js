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
                                <b>Define Needs</b>
                                <br />
                                Your dashboard is loaded with 5 content columns
                                to get you started on your community discovery
                                journey. Answer 5 quick questions about your
                                business and pay £349 with our Stripe-secure
                                checkout. You’ll receive a confirmation email
                                and we take care of the rest.
                            </li>
                            <li>
                                <b>Dashboard publication</b>
                                <br />
                                We go over your needs and craft the perfect
                                searches within 48 hours. We then put those
                                searches into a nice and clean dashboard that’s
                                exclusively yours.
                            </li>
                            <li>
                                <b>Engage away</b>
                                <br />
                                Customers, community and competition
                                conversations are all right in front of you.
                                Time to engage with your community and increase
                                your profile views.
                            </li>
                            <li>
                                <b>Analytics addiction</b>
                                <br />
                                Your future customers are now in front of you.
                                Engage and increase your conversions.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default StripFive
