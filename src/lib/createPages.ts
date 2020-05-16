import path from "path"
import { GatsbyCreatePages } from "../types"
import * as _ from "lodash"
import markdownQuery from "./query-blog-posts"
import markdownEmployee from "./query-employee"
import markdownJobSeekers from "./query-jobSeeker"
import markdownEntrepreneurs from "./query-entrepreneurs"
import markdownResource from "./query-resource"
const { paginate } = require("gatsby-awesome-pagination") // it works
// import { paginate } from "gatsby-awesome-pagination"

interface Post {
  node: {
    fields: {
      slug: string
    }
    frontmatter: {
      tags: string
    }
  }
}

interface Resource {
  node: {
    fields: {
      slug: string
    }
    frontmatter: {
      tags: string
    }
  }
}
export const createPages: GatsbyCreatePages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const allMarkdown = await graphql(markdownQuery)
  const allMarkdownEmployee = await graphql(markdownEmployee)
  const allMarkdownEntrepreneurs = await graphql(markdownEntrepreneurs)
  const allMarkdownJobSeekers = await graphql(markdownJobSeekers)
  const allMarkdownResource = await graphql(markdownResource)

  if (allMarkdown.errors) {
    throw allMarkdown.errors
  }

  const posts = allMarkdown.data.allMarkdownRemark.edges
  const employee = allMarkdownEmployee.data.allMarkdownRemark
  const entrepreneurs = allMarkdownEntrepreneurs.data.allMarkdownRemark
  const jobSeekers = allMarkdownJobSeekers.data.allMarkdownRemark
  const resourceView = allMarkdownResource.data.allMarkdownRemark.edges

  posts.forEach((post: Post, index: number) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    createPage({
      path: post.node.fields.slug,
      component: path.resolve(`./src/templates/Blog/blog-post.tsx`),
      context: {
        slug: post.node.fields.slug,
        previous,
        next
      }
    })

    createPage({
      path: `${post.node.fields.slug}/amp`,
      component: path.resolve(`./src/templates/Blog/blog-post.amp.tsx`),
      context: {
        slug: post.node.fields.slug,
        previous,
        next
      }
    })
  })

  // const tags = allMarkdown.data.tagsGroup.group
  // tags.forEach((tag: any) => {
  //   createPage({
  //     path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
  //     component: path.resolve(`./src/templates/tag.tsx`),
  //     context: {
  //       tag: tag.fieldValue
  //     }
  //   })
  // })

  // Create your paginated pages
  const employeePerPage = 20

  const employeeNumPages = Math.ceil(employee.totalCount / employeePerPage)
  Array.from({ length: employeeNumPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/employee` : `/employee/${i + 1}`,
      component: path.resolve(`./src/templates/ResourcePages/employee.tsx`),
      context: {
        limit: employeePerPage,
        skip: i * employeePerPage,
        currentPage: i + 1,
        employeeNumPages
      }
    })

    createPage({
      path: i === 0 ? `/employee/amp` : `/employee/${i + 1}/amp`,
      component: path.resolve(`./src/templates/ResourcePages/employee.amp.tsx`),
      context: {
        limit: employeePerPage,
        skip: i * employeePerPage,
        currentPage: i + 1,
        employeeNumPages
      }
    })
  })

  const jobseekersPerPage = 20

  const jobNumPages = Math.ceil(jobSeekers.totalCount / jobseekersPerPage)
  Array.from({ length: jobNumPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/job-seekers` : `/job-seekers/${i + 1}`,
      component: path.resolve(`./src/templates/ResourcePages/job-seekers.tsx`),
      context: {
        limit: jobseekersPerPage,
        skip: i * jobseekersPerPage,
        currentPage: i + 1,
        jobNumPages
      }
    })

    createPage({
      path: i === 0 ? `/job-seekers/amp` : `/job-seekers/${i + 1}/amp`,
      component: path.resolve(
        `./src/templates/ResourcePages/job-seekers.amp.tsx`
      ),
      context: {
        limit: jobseekersPerPage,
        skip: i * jobseekersPerPage,
        currentPage: i + 1,
        jobNumPages
      }
    })
  })

  const entrepreneursPerPage = 20

  const entreNumPages = Math.ceil(
    entrepreneurs.totalCount / entrepreneursPerPage
  )
  Array.from({ length: entreNumPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/entrepreneurs` : `/entrepreneurs/${i + 1}`,
      component: path.resolve(
        `./src/templates/ResourcePages/entrepreneurs.tsx`
      ),
      context: {
        limit: entrepreneursPerPage,
        skip: i * entrepreneursPerPage,
        currentPage: i + 1,
        entreNumPages
      }
    })

    createPage({
      path: i === 0 ? `/entrepreneurs/amp` : `/entrepreneurs/${i + 1}/amp`,
      component: path.resolve(
        `./src/templates/ResourcePages/entrepreneurs.amp.tsx`
      ),
      context: {
        limit: entrepreneursPerPage,
        skip: i * entrepreneursPerPage,
        currentPage: i + 1,
        entreNumPages
      }
    })
  })

  resourceView.forEach((resource: Resource, index: number) => {
    const previous =
      index === resourceView.length - 1 ? null : resourceView[index + 1].node
    const next = index === 0 ? null : resourceView[index - 1].node
    createPage({
      path: resource.node.fields.slug,
      component: path.resolve(`./src/templates/ResourcePages/resource.tsx`),
      context: {
        next,
        previous,
        slug: resource.node.fields.slug
      }
    })

    createPage({
      path: `${resource.node.fields.slug}/amp`,
      component: path.resolve(`./src/templates/ResourcePages/resource.amp.tsx`),
      context: {
        next,
        previous,
        slug: resource.node.fields.slug
      }
    })
  })

  return null
}
