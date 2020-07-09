import React from "react"
import Layout from "../components/layout"
import SEO from "../components/SEO"
import { Container } from "../components/Primitives"

const NotFoundPage = () => (
  <Layout>
    <Container>
      <SEO title="404: Not found" pathName="/404" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)

export default NotFoundPage
