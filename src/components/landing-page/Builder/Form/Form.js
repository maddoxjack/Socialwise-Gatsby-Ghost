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
                                    name="name"
                                    required
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
                                    name="email"
                                    required
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
                                    placeholder="e.g Jamie Oliver, Richard Branson, Elonn Musk etc."
                                    name="industry examples"
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label is-large">
                                What are your favorite sources for news that
                                matters to your business?
                            </label>
                            <div className="control">
                                <input
                                    className="input is-large"
                                    type="text"
                                    placeholder="e.g. @business, @businessinsider, @etsy"
                                    name="fav sources"
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
                                    type="text"
                                    placeholder="e.g. @Tesla, @Facebook"
                                    name="competition"
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label is-large">
                                Who is your target customer &amp; what problem
                                do you solve?
                            </label>
                            <div className="control">
                                <textarea
                                    className="textarea is-large"
                                    placeholder="Tell us more"
                                    name="target customer"
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
                <h3 className="sub-title is-size-3">
                    Once submitted a representative will be in touch with a
                    proposal in 24-48 hours.
                </h3>
            </div>
        </div>
    </section>
)
export default BuilderForm
