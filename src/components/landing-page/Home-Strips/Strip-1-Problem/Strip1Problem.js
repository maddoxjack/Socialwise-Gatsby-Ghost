import React from 'react'
import StripOneImg from '../Images/Strip1Img'

const StripOne = () => (
    <section id="strip-one">
        <div className="strip-one-body">
            <div className="container strip-one">

                <h2 className="title is-1 is-size-2-mobile">
            You can&apos;t find your Twitter community and it&apos;s starting to
            get frustrating.
                </h2>
                <div className="columns">
                    <div className="column" id="vector-img">
                        <StripOneImg/>                    </div>
                    <div className="column" id="benefits">
                        <h3>Socialwise Benefits:</h3>
                        <div>
                            <ul>
                                <li>
                    ✅ No need to learn any complicated tools. We’ve pre-vetted
                    the users and built the searches.
                                </li>
                                <li>
                    ✅ We use proprietary search algorithms to pre-vet users
                    talking about things that matter to you.
                                </li>
                                <li>
                    ✅ Our setup prevents us from being a noise amplifier and to
                    show only relevant communities.
                                </li>
                                <li>
                    ✅ Our setup prevents us from being a noise amplifier and to
                    show only relevant communities.
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <h3 className="closing-tag has-text-centered">Focus on Growth. Not learning new tools.</h3>
            </div>
        </div>
    </section>
)
export default StripOne