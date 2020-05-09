import React from "react"
import styled from "styled-components"

const EmailIcon = () => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 100 125"
    width="35"
  >
    <path d="M50,0a50,50,0,1,0,50,50A50,50,0,0,0,50,0ZM72,33L50,49.46,28,33H72Zm3,32.2A1.82,1.82,0,0,1,72.93,67H27a1.81,1.81,0,0,1-2-1.92q0-13.69,0-27.38V35.17l8.14,6.11L48.5,52.8a2.14,2.14,0,0,0,3,0L74.56,35.49l0.38-.28a3.85,3.85,0,0,1,.05.44V65.16Z" />
  </SVG>
)

export default EmailIcon

const SVG = styled.svg`
  vertical-align: middle;
  margin-right: 10px;
`
