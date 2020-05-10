import styled from "styled-components"
import { Link } from "gatsby"

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
}

export const deviceMin = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
}

export const deviceMax = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 0rem 1rem;
  box-sizing: border-box;

  @media ${size.mobileS} {
    padding: 0rem 1rem;
  }

  @media ${size.mobileM} {
    padding: 0rem 1rem;
  }

  @media ${size.mobileL} {
    padding: 0rem 2rem;
  }

  @media ${size.tablet} {
    padding: 0rem 3rem;
  }

  @media ${size.laptop} {
  }

  @media ${size.laptopL} {
  }
`

export const ContentContainer = styled.div`
  max-width: 50rem;
  line-height: 1.5rem;
`

export const HabitContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0rem -1rem;
  flex-wrap: wrap;
  @media ${size.mobileM} {
  }

  @media ${size.mobileL} {
  }

  @media ${size.tablet} {
  }

  @media ${size.laptop} {
  }

  @media ${size.laptopL} {
  }
`

export const H1 = styled.h1`
  font-size: 55px;
  line-height: 65px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;

  @media (max-width: 991px) {
    font-size: 40px;
    line-height: 48px;
  }
`

export const H2 = styled.h2`
  font-size: 38px;
  line-height: 55px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  text-transform: none;

  @media (max-width: 991px) {
    font-size: 32px;
    line-height: 36px;
  }
`

export const H3 = styled.div`
  font-size: 28px;
  line-height: 40px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;

  @media (max-width: 991px) {
    font-size: 28px;
    line-height: 30px;
  }
`

export const H4 = styled.div`
  font-size: 24px;
  line-height: 30px;
  font-family: "Poppins", sans-serif;

  @media (max-width: 991px) {
    font-size: 24px;
    line-height: 30px;
  }
`

export const H5 = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-family: "Poppins", sans-serif;

  @media (max-width: 991px) {
    font-size: 20px;
    line-height: 28px;
  }
`
export const H6 = styled.div`
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: "Poppins", sans-serif;

  @media (max-width: 991px) {
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`
export const P = styled.div`
  font-weight: 400;
  font-size: 17px;
  line-height: 30px;
  margin-bottom: 0px;
  color: var(--darkGrey);
`
export const Small = styled.div`
  font-size: 14px;
  letter-spacing: 0;
  line-height: 22px;
  font-family: "Poppins", sans-serif;
  text-transform: initial;
`

export const UL = styled.ul`
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  text-decoration: none;
`

export const LI = styled.li`
  margin: 15px;
  list-style-type: none;
`

export const Button = styled(Link)`
  background: var(--darkBlue);
  border-color: var(--darkBlue);
  color: white;
  padding: 12px 24px;
  border-radius: 24.5px;
  transition: all 0.25s linear;
  text-decoration: none;
  box-shadow: var(--boxShadow);

  &:hover {
    box-shadow: var(--boxShadowHover);
    transform: scale(1.01);
    color: #fff;
  }
`
export const SubmitBtn = styled.button`
  background: var(--darkBlue);
  border-color: var(--darkBlue);
  color: white;
  padding: 12px 24px;
  border-radius: 24.5px;
  transition: all 0.25s linear;
  text-decoration: none;
  box-shadow: var(--boxShadow);

  &:hover {
    box-shadow: var(--boxShadowHover);
    transform: scale(1.01);
    color: #fff;
  }
`
export const GreenButton = styled(Link)`
  background: var(--green);
  border-color: var(--green);
  color: white;
  padding: 12px 24px;
  border-radius: 24.5px;
  transition: all 0.25s linear;
  text-decoration: none;
  box-shadow: var(--boxShadow);

  &:hover {
    box-shadow: var(--boxShadowHover);
    transform: scale(1.01);
    color: #fff;
  }
`
export const TagPill = styled.div`
  display: block;
  border-radius: 24.5px;
  width: max-content;
  padding: 12px 20px 8px 20px;
  margin-right: 30px;
  box-shadow: var(--boxShadow);
  transition: all 0.25s linear;
  background-color: var(--grey);
`

export const Resources = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 2rem auto;
  max-width: 1440px;

  @media ${deviceMax.mobileL} {
    h2 {
      text-align: center;
    }

    p {
      text-align: justify;
    }
  }
`
