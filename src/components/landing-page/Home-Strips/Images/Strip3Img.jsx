import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function StripThreeImg() {
    const data = useStaticQuery(
        graphql`
            query {
                stripthree: file(relativePath: { eq: "headshotsquare.jpg" }) {
                    childImageSharp {
                        # Specify the image processing specifications right in the query.
                        # Makes it trivial to update as your page's design changes.
                        fixed(width: 350) {
                            ...GatsbyImageSharpFixed_withWebp
                        }
                    }
                }
            }
        `
    )
    return (
        <Img style={{ borderRadius: `50%` }}
            fixed={data.stripthree.childImageSharp.fixed}
        />
    )
}
