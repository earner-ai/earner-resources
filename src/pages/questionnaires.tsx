import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/SEO/SEO"
import styled from "styled-components"
import QuestionnaireCard from "../components/questionnaireCard"
import devices from "../../public/devices"
import PageHeader from "../components/PageHeader"

const Questionnaires = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulQuestionnaire(
        filter: { node_locale: { eq: "en-US" } }
        sort: { fields: questions___id }
      ) {
        edges {
          node {
            title
            id
            slug
            description {
              fields {
                excerpt
                readingTime {
                  text
                }
              }
            }
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const questionnaire = data.allContentfulQuestionnaire.edges

  return (
    <Layout>
      <SEO pathName="questionnaires" title="Nyxo Sleep Questionnaire" />
      <PageHeader
        title="Nyxo Sleep Questionnaire"
        text="Find out your sleep quality score with a short test!"
      />

      <ContainerWrap>
        <QuizWrap>
          {questionnaire.map(({ node }: any) => (
            <QuestionnaireCard
              key={node.slug}
              path={`/questionnaire/${node.slug}`}
              name={node.title}
              excerpt={node.description.fields.excerpt}
              readingTime={node.description.fields.readingTime.text}
            />
          ))}
        </QuizWrap>
      </ContainerWrap>
    </Layout>
  )
}

export default Questionnaires

const QuizWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  margin: 2rem auto;
`

const ContainerWrap = styled.div`
  max-width: 1440px;
  margin: 0px auto;

  @media ${devices.mobileS} {
    padding: 0.5rem;
  }

  @media ${devices.mobileM} {
    padding: 0.5rem;
  }

  @media ${devices.mobileL} {
    padding: 0.5rem;
  }

  @media ${devices.tablet} {
    padding: 2rem;
  }

  @media ${devices.laptop} {
    padding: 2rem;
  }

  @media ${devices.laptopL} {
    padding: 2rem;
  }
`
