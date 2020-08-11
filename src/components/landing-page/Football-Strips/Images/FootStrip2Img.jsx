import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function FootStripTwoImg() {
    const data = useStaticQuery(
        graphql`
            query {
                striptwo: file(
                    relativePath: { eq: "foot-strip-2-baller.png" }
                ) {
                    childImageSharp {
                        # Specify the image processing specifications right in the query.
                        # Makes it trivial to update as your page's design changes.
                        fluid(maxWidth: 700) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    )
    return <Img fluid={data.striptwo.childImageSharp.fluid} />
}
