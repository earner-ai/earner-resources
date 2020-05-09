import path from "path"
import { GatsbyCreatePages } from "../types"
import * as _ from "lodash"
import markdownQuery from "./query-blog-posts"
import markdownEmployee from "./query-employee"
import markdownJobSeekers from "./query-jobSeeker"
import markdownEntrepreneurs from "./query-entrepreneurs"
const { paginate } = require("gatsby-awesome-pagination") // it works
// import { paginate } from "gatsby-awesome-pagination"

import {
  lessonsQuery,
  habitsQuery,
  questionnairesQuery,
  weeksQuery
} from "./query-contentful"
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

interface Week {
  node: {
    id: string
    slug: string
  }
}

// interface Lesson {
//   node: {
//     id: string
//     slug: string
//     author: string
//     lessonContent: string
//   }
// }

// interface Habit {
//   node: {
//     id: string
//     slug: string
//     title: string
//     period: string
//   }
// }

// interface Questionaire {
//   node: {
//     id: string
//     title: string
//   }
// }

export const createPages: GatsbyCreatePages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const allMarkdown = await graphql(markdownQuery)
  const allMarkdownEmployee = await graphql(markdownEmployee)
  const allMarkdownEntrepreneurs = await graphql(markdownEntrepreneurs)
  const allMarkdownJobSeekers = await graphql(markdownJobSeekers)

  if (allMarkdown.errors) {
    throw allMarkdown.errors
  }

  const posts = allMarkdown.data.allMarkdownRemark.edges
  const employee = allMarkdownEmployee.data.allMarkdownRemark
  const entrepreneurs = allMarkdownEntrepreneurs.data.allMarkdownRemark
  const jobSeekers = allMarkdownJobSeekers.data.allMarkdownRemark

  posts.forEach((post: Post, index: number) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    createPage({
      path: post.node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: {
        next,
        previous,
        slug: post.node.fields.slug
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
      component: path.resolve(`./src/templates/employee.tsx`),
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
      component: path.resolve(`./src/templates/job-seekers.tsx`),
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
      component: path.resolve(`./src/templates/entrepreneurs.tsx`),
      context: {
        limit: entrepreneursPerPage,
        skip: i * entrepreneursPerPage,
        currentPage: i + 1,
        entreNumPages
      }
    })
  })

  return null
}
