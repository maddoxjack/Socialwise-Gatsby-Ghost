import React from "react"
import '../../../../styles/bul-styles.scss'
import './styles.scss'
import dashboard from '../Images/dashboard.png'

const Hero = () => (
    <section className="hero">
        <div className="hero-body">
            <div className="container">
                <h1 className="title is-size-1-mobile">
                    Community Discovery Done for You
                </h1>
                <h2 className="sub-title is-size-3">
                    Socialwise is a Twitter dashboard that will increase your
                    reach and grow your community. Built for you by our search
                    experts.
                </h2>
                <div className="break"></div>
                <img
                    className="dashboard"
                    src={dashboard}
                    alt="Socialwise Dashboard"
                />
                <button className="button is-primary is-large is-full-width">
                    See what streaming content looks like
                </button>
            </div>
        </div>
    </section>
)

// const Hero = () => (
//     <div className="hero-wrapper">
//         <h1 className="hero is-size-1-mobile">
//             Community Discovery Done for You
//         </h1>
//         <h2 className="hero-sub is-size-3-mobile">
//             Socialwise is a Twitter dashboard that will increase your reach and
//             grow your community. Built for you by our search experts.
//         </h2>
//         <div className="break"></div>
//         <button className="button is-primary">
//             See what streaming content looks like
//         </button>

//         <img className="dashboard" src={dashboard} alt="Socialwise Dashboard" />
//     </div>
// )

export default Hero
