import React from "react"
import "../../../../styles/bul-styles.scss"
import "./styles.scss"

const BuilderForm = () => (
    <section className="builder">
        <div className="builder-body">
            <div className="container builder" id="container-builder">
                <h1 className="title has-text-weight-bold is-1 is-size-2-mobile has-text-left-mobile">
                    Answer these questions and we&apos;ll get to work.{` `}
                </h1>
                <div className="break"></div>
                <div className="form-wrapper">
                    <form
                        className="builder-form"
                        method="post"
                        netlify-honeypot="bot-field"
                        data-netlify="true"
                        name="builder"
                    >
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="builder" />

                        <div className="field">
                            <label className="label is-large">Name</label>
                            <div className="control">
                                <input
                                    className="input is-large"
                                    type="text"
                                    placeholder="e.g Alex Smith"
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label is-large">Email</label>
                            <div className="control">
                                <input
                                    className="input is-large"
                                    type="email"
                                    placeholder="e.g. alexsmith@gmail.com"
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label is-large">
                                Enter some examples of other influencers or
                                leaders in your industry you admire
                            </label>
                            <div className="control">
                                <input
                                    className="input is-large"
                                    type="text"
                                    placeholder="e.g Alex Smith"
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label is-large">
                                Who is your target customer? What is their
                                problem that you solve?
                            </label>
                            <div className="control">
                                <input
                                    className="input is-large"
                                    type="email"
                                    placeholder="e.g. alexsmith@gmail.com"
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label is-large">
                                Enter a few examples of your competition
                            </label>
                            <div className="control">
                                <input
                                    className="input is-large"
                                    type="email"
                                    placeholder="e.g. alexsmith@gmail.com"
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label is-large">
                                What are your favorite sources for news that
                                effects your business?
                            </label>
                            <div className="control">
                                <input
                                    className="input is-large"
                                    type="email"
                                    placeholder="e.g. alexsmith@gmail.com"
                                />
                            </div>
                        </div>
                        {/* 
                    <label>
                        Message
                        <input type="text" name="message" />
                    </label> */}
                        <div className="button-wrapper">
                            <button
                                type="submit"
                                className="button is-primary is-large is-full-width has-text-weight-bold"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="break"></div>
            </div>
        </div>
    </section>
)
export default BuilderForm
