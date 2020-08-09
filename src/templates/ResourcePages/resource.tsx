import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/SEO"
import { graphql, PageProps, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { TagPill, GreenButton, SeeMore } from "../../components/Primitives"
import { RelatedContentFactory } from "../../Helpers/related-content"

interface Props extends PageProps {
  data: any
  type: string
}

const ResourceView = (props: Props) => {
  const {
    data,
    type,
    location: { pathname }
  } = props
  const post = data.markdownRemark
  const excerpt = post.excerpt
  const slug = post.fields.slug
  const frontmatter = post.frontmatter
  const tags = frontmatter.tags
  const html = post.html
  const finalarray: any = []

  let relatedBlogPosts

  if (post.frontmatter.resourceType == "employed") {
    const employed = data.employed.edges.map(({ node }: any) => node)

    relatedBlogPosts = new RelatedContentFactory(employed, slug)
      .setMaxArticles(3)
      .setTags(tags)
      .getArticles()
  } else if (post.frontmatter.resourceType == "jobSeeker") {
    const jobSeeker = data.jobSeeker.edges.map(({ node }: any) => node)

    relatedBlogPosts = new RelatedContentFactory(jobSeeker, slug)
      .setMaxArticles(3)
      .setTags(tags)
      .getArticles()
  } else if (post.frontmatter.resourceType == "entrepreneur") {
    const entrepreneur = data.entrepreneur.edges.map(({ node }: any) => node)

    relatedBlogPosts = new RelatedContentFactory(entrepreneur, slug)
      .setMaxArticles(3)
      .setTags(tags)
      .getArticles()
  }

  return (
    <Layout>
      <>
        <SEO
          title={frontmatter.title}
          pathName={pathname}
          description={frontmatter.description || excerpt}
          staticImage={true}
          keywords={frontmatter.keywords}
        />

        <Container className="container">
          <h1>{post.frontmatter.title}</h1>
          {data.markdownRemark.frontmatter.tags.map((tag: any) => {
            return <TagPill key={tag}>{tag}</TagPill>
          })}
          <Content dangerouslySetInnerHTML={{ __html: html }} />
          <br />

          {post.frontmatter.resourceType == "employed" && (
            <SeeMore to="/employee">See All Information</SeeMore>
          )}
          {post.frontmatter.resourceType == "jobSeeker" && (
            <SeeMore to="/job-seekers">See All Information</SeeMore>
          )}
          {post.frontmatter.resourceType == "entrepreneur" && (
            <SeeMore to="/entrepreneurs">See All Information</SeeMore>
          )}

          <SimilarContentWrap>
            <H2>You also might like</H2>
            {relatedBlogPosts?.map(({ article: blogPost }: any) => (
              <SimilarContent key={blogPost.id}>
                <h2>{blogPost.frontmatter.title}</h2>
                <br />
                <p>{blogPost.excerpt}</p>
                <GreenButton to={`/${blogPost.frontmatter.slug}`}>
                  Read More
                </GreenButton>
              </SimilarContent>
            ))}
          </SimilarContentWrap>
        </Container>
      </>
    </Layout>
  )
}

export default ResourceView

export const pageQuery = graphql`
  query ResourceBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        tags
        keywords
        resourceType
      }
    }
    employed: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content/resources/" }
        frontmatter: { resourceType: { eq: "employed" } }
      }
    ) {
      edges {
        node {
          frontmatter {
            resourceType
            tags
            slug
            title
          }
          excerpt(format: PLAIN)
          id
        }
      }
    }
    jobSeeker: allMarkdownRemark(
      limit: 3
      filter: {
        fileAbsolutePath: { regex: "/content/resources/" }
        frontmatter: { resourceType: { eq: "jobSeeker" } }
      }
    ) {
      edges {
        node {
          frontmatter {
            resourceType
            tags
            slug
            title
          }
          excerpt(format: PLAIN)
          id
        }
      }
    }
    entrepreneur: allMarkdownRemark(
      limit: 3
      filter: {
        fileAbsolutePath: { regex: "/content/resources/" }
        frontmatter: { resourceType: { eq: "entrepreneur" } }
      }
    ) {
      edges {
        node {
          frontmatter {
            resourceType
            tags
            slug
            title
          }
          excerpt(format: PLAIN)
          id
        }
      }
    }
  }
`

const Content = styled.div`
  font-family: "Domine", serif;
  line-height: 30px;
  margin: 47px 0 23px;

  p {
    margin: 0 0 16px;
    font-family: "Domine", serif;
  }

  ol,
  ul {
    list-style: inside circle;
  }

  li ul {
    list-style: inside circle;
  }
  .title {
    margin: 0 0 44px;
  }
`

const Container = styled.div`
  position: relative;
  width: 95%;
  margin: 100px auto 0;

  @media only screen and (min-width: 33.75em) {
    width: 80%;
  }
  @media only screen and (min-width: 60em) {
    width: 60%;
    max-width: 1440px;
  }
`
const SimilarContentWrap = styled.div`
  width: 100%;
  box-shadow: var(--boxShadow);
  margin: 100px auto;
  padding: 30px;
`
const H2 = styled.h2`
  text-align: center;
  color: var(--green);
  margin-bottom: 50px;
`
const SimilarContent = styled.div`
  border-bottom: 1px solid var(--grey);
  padding-bottom: 40px;
  margin-bottom: 40px;
`
