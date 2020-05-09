import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/SEO"
import {
  Container,
  ContentContainer,
  Resources,
  deviceMax
} from "../components/Primitives"
import meta from "../../content/data/meta.json"
import styled from "styled-components"
import NewsLetter from "../components/newsletter"
import ResourceCard from "../components/Resources/resourceCard"
import GitHub from "../../static/Icons/GitHub"

const IndexPage = ({ data }: any) => (
  <Layout>
    <SEO pathName={meta.index.path} title={meta.index.title} />
    <HeroWrap>
      <Overlay>
        <HeroContainer>
          <HeroText>
            <h1>Serving the Finnish employment community.</h1>
            <h3>
              Learn about the services available to you as a job seeker,
              employee, or entrepreneur.
            </h3>
          </HeroText>
        </HeroContainer>
      </Overlay>
    </HeroWrap>

    <Container>
      <H1_Attn>Stay informed with Earner</H1_Attn>
      <P>
        Learn about services you&apos;re entitled to from the Finnish
        government.
      </P>

      <Resources>
        {data.allMarkdownRemark.edges.map((post: any) => (
          <ResourceCard
            key={post.node.id}
            title={post.node.frontmatter.title}
            content={post.node.internal.content}
            tags={post.node.frontmatter.tags}
            html={post.node.html}
            source={post.node.frontmatter.source}
          />
        ))}
      </Resources>
      <SeeMore to="/job-seekers">See All Services</SeeMore>

      <H1>For the people, by the people</H1>
      <ContentContainer style={{ margin: "auto" }}>
        <P>
          Earner was created by people who have struggled with the job market
          and lack of knowledge regarding resources available to them. At
          Earner, we want to build a bridge between the employment community and
          services available to them from the Finnish government.
        </P>
        <P>
          We believe in community. <b>Earner is open-source for this reason.</b>
          Want to help others learn about Finnish services? You can help Earner
          grow. Find us on GitHub.
        </P>
        <GitHubLink href="https://github.com/Earner-ai/">
          <GitHub />
        </GitHubLink>
      </ContentContainer>
      <NewsLetter />
    </Container>
  </Layout>
)

export default IndexPage

export const IndexQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/resources/job-seekers/" } }
      limit: 3
    ) {
      edges {
        node {
          id
          timeToRead
          html
          frontmatter {
            author
            slug
            title
            tags
            date
            source
          }
          internal {
            content
          }
        }
      }
    }
  }
`

const HeroWrap = styled.div`
  background-image: url("images/office-phone.png");
  padding: 0;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  /* background-position: center center; */
  background-position: unset;
  min-height: 768px;
`
const Overlay = styled.div`
  height: 100%;
  width: 100%;
  min-height: 768px;
  background-color: rgba(2, 38, 64, 0.4);
`
const HeroContainer = styled(Container)`
  padding: 200px 20px;
  color: white;
  /* text-align: center; */
`
const H1_Attn = styled.h1`
  text-align: center;
  color: var(--softRed);
  margin: 50px 0;
`
const H1 = styled.h1`
  text-align: center;
  margin: 50px 0;
`
const P = styled.p`
  text-align: center;
`
const HeroText = styled.div`
  width: 50%;
  @media ${deviceMax.mobileL} {
    width: 100%;
    text-align: center;
  }
`
const SeeMore = styled(Link)`
  display: block;
  border: 1px solid var(--softRed);
  border-radius: 5px;
  width: max-content;
  padding: 10px;
  margin: auto;

  &:hover {
    border-color: black;
  }
`
const GitHubLink = styled.a`
  margin: auto;
  display: block;
  text-align: center;
  width: max-content;
`
