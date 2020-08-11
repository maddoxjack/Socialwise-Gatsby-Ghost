import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function EntStripFiveImg() {
    const data = useStaticQuery(
        graphql`
            query {
                stripfive: file(
                    relativePath: { eq: "ent-strip-5-millions.png" }
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
    return <Img fluid={data.stripfive.childImageSharp.fluid} />
}
