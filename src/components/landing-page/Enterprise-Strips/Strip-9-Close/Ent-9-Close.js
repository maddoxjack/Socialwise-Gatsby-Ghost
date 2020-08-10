import React from "react"
import StripSixImg from "../../Home-Strips/Images/Strip6Img"
import "./styles.scss"

const EntStripNine = () => (
    <section id="strip-six">
        <div className="strip-six-body">
            <div className="container strip-six">
                <h2 className="title is-1 is-size-2-mobile">
                    We build software solutions for that crazy idea you had.
                </h2>
                <div className="columns" id="closing">
                    <div className="column" id="closing-text">
                        <p>
                            For all those times you&apos;ve sat in a meeting
                            room and said to yourself,
                            <br />
                            <br />
                            &quot;I just wish we could do...&quot; <br />
                            <br />
                            With Socialwise we make your idea happen.
                        </p>
                    </div>
                    <div className="column" id="vector-img-closing">
                        <StripSixImg />
                    </div>
                </div>
                <div className="button-wrapper-close">
                    <button
                        className="button is-primary is-large is-full-width has-text-weight-bold"
                        id="closing-button"
                    >
Get in touch and let&apos;s make it real.                    </button>
                </div>
            </div>
        </div>
    </section>
)
export default EntStripNine
