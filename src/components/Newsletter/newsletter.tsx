import React, { useState } from "react"
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
//@ts-ignore
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "styled-components"
import { graphql } from "gatsby"
import Image from "../image"
// import { Icon } from "./Icons"
import { SubmitBtn, deviceMin, deviceMax } from "../Primitives"

interface Props {
  image: any
}

const NewsLetterForm = (props: Props) => {
  const [email, setEmail] = useState(null)
  const [allow, setAllow] = useState(true)

  const _handleChange = (e: any) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    addToMailchimp(email)
      .then(({ msg, result }: any) => {
        if (result !== "success") {
          throw msg
        }
        setAllow(false)
        alert(msg)
      })
      .catch((err: string) => {
        console.log("err", err)

        alert(err)
      })
  }

  return (
    <NewsWrap>
      <LeftNews>
        <H1>Let&apos;s keep in touch!</H1>
        <P>Subscribe to our newsletter & stay up to date with our services.</P>
        {allow ? (
          <EmailForm method="POST" onSubmit={handleSubmit}>
            <EmailField
              type="email"
              onChange={_handleChange}
              placeholder="your@email.com"
              name="email"
              className="newsletterInput"
            />
            <SubmitBtn
              title="Subscribe to our newsletter"
              name="Subscribe"
              type="submit"
              style={{ margin: "auto", marginTop: "30px" }}
            >
              Subscribe
            </SubmitBtn>
          </EmailForm>
        ) : (
          <ThanksForSubscribing>Thanks for subscribing!</ThanksForSubscribing>
        )}
      </LeftNews>
      <RightNews>
        <NewsLetterImage alt="Newsletter Image" path={props.image} />
      </RightNews>
    </NewsWrap>
  )
}

export default NewsLetterForm

const NewsWrap = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 100px auto;

  @media ${deviceMax.mobileL} {
    margin: 0px auto;
  }
`
const LeftNews = styled.div`
  margin: 0 auto;
`

const RightNews = styled.div`
  width: 35%;
  height: 600px;
  /* background-image: url("images/newsletter.png"); */
  position: relative;

  border: 20px solid var(--grey);
  border-radius: 0px 100px 0px;
  margin: 0 auto;

  img {
    border-radius: 0px 80px 0px;
  }

  @media ${deviceMax.mobileL} {
    display: none;
  }
`
const H1 = styled.h1`
  text-align: center;
  margin-top: 100px;
`
const P = styled.p`
  text-align: center;
`
const EmailForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem 0rem;
`
const EmailField = styled.input`
  border: none;
  border: 2px solid transparent;
  font-size: 1rem;
  padding: 1rem;
  width: 100%;
  box-shadow: inset 20px 20px 60px #d9d9d9, inset -20px -20px 60px #ffffff;

  &:focus {
    outline: none;
  }
`
const ThanksForSubscribing = styled.div`
  margin-top: 1rem;
  text-align: center;
  font-weight: 700;
`
const NewsLetterImage = styled(Image)`
  img {
    position: initial !important;
  }
`
