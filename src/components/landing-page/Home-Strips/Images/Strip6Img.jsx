import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function StripSixImg() {
    const data = useStaticQuery(
        graphql`
            query {
                stripsix: file(relativePath: { eq: "strip-6-proud.png" }) {
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
    return <Img fluid={data.stripsix.childImageSharp.fluid} />
}
