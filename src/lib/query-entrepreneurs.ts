export const markdownEntrepreneurs = `
    {
        allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/resources/entrepreneurs/" } }
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

export default markdownEntrepreneurs
