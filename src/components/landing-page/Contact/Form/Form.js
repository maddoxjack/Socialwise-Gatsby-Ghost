import React from "react"
import "../../../../styles/bul-styles.scss"
import "./styles.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons"

const ContactForm = () => (
    <section className="contact">
        <div className="contact-body">
            <div className="container contact">
                <h1 className="title has-text-weight-bold is-1 is-size-2-mobile has-text-left-mobile">
                    We would love to hear from you.
                </h1>
                <div className="form-wrapper">
                    <form
                        className="contact-form"
                        method="post"
                        netlify-honeypot="bot-field"
                        data-netlify="true"
                        name="contact"
                    >
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">From</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <p className="control is-expanded has-icons-left">
                                        <input
                                            className="input is-large"
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            required
                                        />
                                        <span className="icon is-small is-left">
                                            <FontAwesomeIcon icon={faUser} />
                                        </span>
                                    </p>
                                </div>
                                <div className="field">
                                    <p className="control is-expanded has-icons-left has-icons-right">
                                        <input
                                            className="input  is-large"
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            required
                                        />
                                        <span className="icon is-small is-left">
                                            <FontAwesomeIcon
                                                icon={faEnvelope}
                                            />
                                        </span>
                                       
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">Question</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <div className="control">
                                        <textarea
                                            className="textarea is-large"
                                            placeholder="Explain how we can help you"
                                            name="message"
                                            required
                                        ></textarea>
                                    </div>
                                </div>
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
export default ContactForm