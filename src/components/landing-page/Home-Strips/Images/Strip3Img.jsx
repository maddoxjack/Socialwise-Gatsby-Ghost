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
                        fluid(maxWidth: 1200) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    )
    return <Img fluid={data.stripthree.childImageSharp.fluid} />
}
