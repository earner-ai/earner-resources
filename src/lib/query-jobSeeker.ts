export const markdownJobSeekers = `
    {
        allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/resources/job-seekers/" } }
      ) {
        totalCount
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

export default markdownJobSeekers
