import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function FootHeroImg() {
    const data = useStaticQuery(
        graphql`
            query {
                hero: file(
                    relativePath: { eq: "foot-hero-fans.png" }
                ) {
                    childImageSharp {
                        # Specify the image processing specifications right in the query.
                        # Makes it trivial to update as your page's design changes.
                        fluid(maxWidth: 400) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    )
    return <Img fluid={data.hero.childImageSharp.fluid} />
}
