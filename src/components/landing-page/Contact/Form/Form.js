import React from "react"
import "../../../../styles/bul-styles.scss"
import "./styles.scss"

const ContactForm = () => (
    <section className="contact">
        <div className="contact-body">
            <div className="contact-container">
                <h1 className="title has-text-weight-bold is-1 is-size-2-mobile has-text-left-mobile">
                    We would love to hear from you.
                </h1>
                <form
                    className="contact-form"
                    method="post"
                    netlify-honeypot="bot-field"
                    data-netlify="true"
                    name="contact"
                >
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />

                    <label>
                        Email
                        <input type="email" name="email" />
                    </label>
                    <label>
                        Name
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Message
                        <input type="text" name="message" />
                    </label>
                    <div className="button-wrapper">
                        <button type="submit" className="button is-primary is-large is-full-width has-text-weight-bold">
                            Submit
                        </button>
                    </div>
                </form>
                <div className="break"></div>
            </div>
        </div>
    </section>
)
export default ContactForm