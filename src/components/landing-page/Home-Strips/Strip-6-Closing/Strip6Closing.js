import React from "react"
import StripSixImg from "../Images/Strip6Img"
import './styles.scss'

const StripSix = () => (
    <section id="strip-six">
        <div className="strip-six-body">
            <div className="container strip-six">
                <h2 className="title is-1 is-size-2-mobile">
                    Stop Searching For The Wrong Audience. Leave The Search To
                    Us.
                </h2>
                <div className="columns" id="closing">
                    <div className="column" id="closing-text">
                        <p>
                            Spend less on chasing wild leads and more on those
                            that matter.
                        </p>
                        <p>
                            Your time is precious. Let us make it easy for you
                            to grow your community.
                        </p>
                    </div>
                    <div className="column" id="vector-img-closing">
                        <StripSixImg />
                    </div>
                </div>
                <div className="button-wrapper-close">
                    <button className="button is-primary is-large is-full-width has-text-weight-bold" id="closing-button">
                        Build My Community Dashboard
                    </button>
                </div>
            </div>
        </div>
    </section>
)
export default StripSix
