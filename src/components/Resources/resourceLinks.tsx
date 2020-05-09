import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { Button, deviceMax } from "../Primitives"

interface Props {
  title: string
}

// const links = [
//   { title: "Employees" },
//   { title: "Job Seekers" },
//   { title: "Entrepreneurs" }
// ]

const links = [
  { path: "employee", title: "Employees" },
  { path: "job-seekers", title: "Job Seekers" },
  { path: "entrepreneurs", title: "Entrepreneurs" }
]

const ResourceLinks = (props: Props) => {
  return (
    <LinksWrap>
      <UL>
        {links.map((item, index) => (
          <LI key={index}>
            {item.title === props.title && (
              <Button to={`/${item.path}`}>{item.title}</Button>
            )}
            {item.title != props.title && (
              <ButtonGrey to={`/${item.path}`}>{item.title}</ButtonGrey>
            )}
          </LI>
        ))}
      </UL>
    </LinksWrap>
  )
}

export default ResourceLinks

const ButtonGrey = styled(Button)`
  background: var(--grey);
  box-shadow: 0px 5px 15px rgba(2, 38, 64, 0.1);
  color: var(--text);

  &:hover {
    color: var(--text);
  }
`
const LinksWrap = styled.div`
  @media ${deviceMax.tablet} {
    /* margin-top: -30px; */
    max-width: 100% !important;
    overflow: auto;
    white-space: nowrap;
  }
`

const UL = styled.ul`
  margin: 70px auto;
  width: max-content;
`

const LI = styled.li`
  list-style: none;
  display: inline-block;
  margin: 0 20px;
`
