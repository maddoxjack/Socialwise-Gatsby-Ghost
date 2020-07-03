import React from "react"
import { Link } from "gatsby"

const Landing = () => (
    <>
        <h1>This will be the Landing Page</h1>
        <Link to="/blog">
            <h1>This is the link to Blog</h1>
        </Link>
    </>
)

export default Landing