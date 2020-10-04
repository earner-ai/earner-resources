import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import { Container } from "../components/Primitives"
import SEO from "../components/SEO"
import Questionnaire from "../components/Questionnaire/Questionnaire"

interface Props {
  data: any
  answer: any
  answerOptions: any
  counter: number
  question: string
  questionId: number
  questionTotal: number
  onAnswerSelected: any
}

const QuestionnaireTemplate = (props: Props) => {
  const { data } = props

  const questionnaire = data.contentfulQuestionnaire

  return (
    <Layout>
      <SEO pathName="questionnaire" title={questionnaire?.title} />

      <Container>
        <Questionnaire data={questionnaire} />
      </Container>
    </Layout>
  )
}

export default QuestionnaireTemplate

export const pageQuery = graphql`
  query QuestionById($slug: String!) {
    contentfulQuestionnaire(slug: { eq: $slug }) {
      title
      slug
      questions {
        title
        id
        type
        question {
          question
          internal {
            type
          }
        }
        answers {
          ... on ContentfulAnswer {
            score
            title
          }
        }
      }
      results {
        description {
          description
        }
        details {
          details
        }
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
