import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Logo from "../components/Logo"
import Description from "../components/Description"
import Projects from "../components/Projects"
import GlobalStyles from "../components/GlobalStyles"

export default function Home() {
  const {
    site: {
      siteMetadata: {
        title,
        description,
        name,
        jobTitle,
        url,
        streetAddress,
        poBox,
        city,
        state,
        postalCode,
        country,
        email,
        phone,
        birthDate,
      },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            name
            jobTitle
            url
            streetAddress
            poBox
            city
            state
            postalCode
            country
            email
            phone
            birthDate
          }
        }
      }
    `
  )
  return (
    <div className="App">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <script type="application/ld+json">
          {`
          "@context": "http://www.schema.org",
          "@type": "person",
          "name": "${name}",
          "jobTitle": "${jobTitle}",
          "url": "${url}",
          "address": {
            "@type": "PostalAddress",
            ${streetAddress !== "" && `"streetAddress": "${streetAddress}",`}
            ${poBox !== "" && `"postOfficeBoxNumber": "${poBox}",`}
            "addressLocality": "${city}",
            "addressRegion": "${state}",
            "postalCode": "${postalCode}",
            "addressCountry": "${country}"
          },
          "email": "${email}",
          "telephone": "${phone}",
          "birthDate": "${birthDate}"
        `}
        </script>
      </Helmet>
      <GlobalStyles />
      <Logo />
      <Description />
      <Projects />
    </div>
  )
}
