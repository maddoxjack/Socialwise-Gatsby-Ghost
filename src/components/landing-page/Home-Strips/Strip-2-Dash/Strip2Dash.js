import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCommentsDollar,
    faUsers,
    faBullhorn,
    faNewspaper,
    faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

const StripTwo = () => (
    <section id="strip-two">
        <div className="strip-two-body">
            <div className="container strip-two">
                <h2 className="title is-1 is-size-2-mobile">
                    Your Dashboard is 5 Essential Columns
                </h2>
                <div className="columns first-row">
                    <div className="column one">
                        <FontAwesomeIcon icon={faLightbulb} className="icons" />
                        <h3>Your Brand</h3>
                        <p>
                            Track any mention of your brand across Twitter.
                            Respond to good or bad news as soon as it happens.
                        </p>
                    </div>
                    <div className="column two">
                        <FontAwesomeIcon icon={faBullhorn} className="icons" />
                        <h3>Your Competition</h3>
                        <p>
                            Swoop in on your competition&apos;s dissatisfied
                            customers or see what good things are being said.
                            Make better business decisions.
                        </p>
                    </div>
                    <div className="column three">
                        <FontAwesomeIcon icon={faNewspaper} className="icons" />
                        <h3>Your News</h3>
                        <p>
                            It&apos;ll become even easier to find new customers
                            on Twitter.
                        </p>
                    </div>
                </div>
                <div className="columns second-row">
                    <div className="column is-one-third is-offset-2 row-2-one">
                        <FontAwesomeIcon icon={faUsers} className="icons" />
                        <h3>Your Community</h3>
                        <p>
                            Engage with people in this stream and you will grow
                            your reach and increase your profile views.
                        </p>
                    </div>
                    <div className="column is-one-third is-offset-1 row-2-two">
                        <FontAwesomeIcon
                            icon={faCommentsDollar}
                            className="icons"
                        />
                        <h3>Your Customers</h3>
                        <p>
                            A live stream of people with problems that your
                            product solves. Message them and make more money.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
export default StripTwo;
