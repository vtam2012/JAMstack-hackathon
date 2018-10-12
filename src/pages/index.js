import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello World</h1>
    <p>This is a site built with Gatsby</p>
    <p>by Vincent Tam</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
