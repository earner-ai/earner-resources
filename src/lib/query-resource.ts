const markdownResource = `
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/resources/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/resources/" } }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `

export default markdownResource
