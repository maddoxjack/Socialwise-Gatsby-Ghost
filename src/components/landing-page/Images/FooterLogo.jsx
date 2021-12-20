import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export default function FooterLogoImg() {
    const data = useStaticQuery(
        graphql`
            query {
                footerlogo: file(relativePath: { eq: "logo-text.png" }) {
                    childImageSharp {
                        # Specify the image processing specifications right in the query.
                        # Makes it trivial to update as your page's design changes.
                        fluid(maxWidth: 150) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    );
    return <Img fluid={data.footerlogo.childImageSharp.fluid} />;
}
