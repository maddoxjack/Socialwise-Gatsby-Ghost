import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/common'
import StripOne from '../components/landing-page/Enterprise-Strips/Strip-1-Problem/Ent-1-Problem'

const EnterprisePage = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">Error 404</h1>
                <section className="content-body">
                    Enterprise!!!, <Link to="/">return home</Link> to start over
                </section>
            </article>
        </div>
        <StripOne/>
        
    </Layout>
)

export default EnterprisePage
