export const markdownEmployee = `
    {
        allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/resources/employed/" } }
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

export default markdownEmployee
