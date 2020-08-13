import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function HeaderLogoImg() {
    const data = useStaticQuery(
        graphql`
            query {
                headerlogo: file(relativePath: { eq: "socialwise-heart.png" }) {
                    childImageSharp {
                        # Specify the image processing specifications right in the query.
                        # Makes it trivial to update as your page's design changes.
                        fluid(maxWidth: 50) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    )
    return <Img fluid={data.headerlogo.childImageSharp.fluid} />
}
