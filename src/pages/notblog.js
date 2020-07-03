import React from "react"
import Index from "../templates/blog-index"
const Blog = () => {
    console.log(`blog index component`)
    return (
        <>
            <Index/>
        </>
    )
}

export default Blog

// import React from "react"
// import PropTypes from "prop-types"
// import { Layout, PostCard, Pagination } from "../components/common"
// import { MetaData } from "../components/common/meta"
// import { graphql } from "gatsby"

// import { Link } from "gatsby"

// const Blog = ({ data, location, pageContext }) => {
//     console.log(`this is data`, data)
//     const posts = data.allGhostPost.edges

//     return (
//         <>
//             <MetaData location={location} />
//             <Layout isHome={true}>
//                 <div className="container">
//                     <section className="post-feed">
//                         {posts.map(({ node }) => (
//                             // The tag below includes the markup for each post - components/common/PostCard.js
//                             <PostCard key={node.id} post={node} />
//                         ))}
//                     </section>
//                     <Pagination pageContext={pageContext} />
//                 </div>
//             </Layout>
//         </>
//     )
// }

// Blog.propTypes = {
//     data: PropTypes.shape({
//         allGhostPost: PropTypes.object.isRequired,
//     }).isRequired,
//     location: PropTypes.shape({
//         pathname: PropTypes.string.isRequired,
//     }).isRequired,
//     pageContext: PropTypes.object,
// }

// export default Blog

// export const blogQuery = graphql`
//     query GhostPostQuery($limit: Int!, $skip: Int!) {
//         allGhostPost(
//             sort: { order: DESC, fields: [published_at] }
//             limit: $limit
//             skip: $skip
//         ) {
//             edges {
//                 node {
//                     ...GhostPostFields
//                 }
//             }
//         }
//     }
// `