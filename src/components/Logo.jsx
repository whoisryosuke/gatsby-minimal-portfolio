import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const LogoHeading = styled.h1`
  max-width: 960px;
  font-size: 3em;
`

export default function Logo() {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return <LogoHeading>{title}</LogoHeading>
}
