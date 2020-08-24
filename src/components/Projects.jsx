import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import ProjectItem from "./ProjectItem"

const ProjectContainer = styled.nav`
  max-width: 960px;
  font-size: 2em;
`

export default function Projects() {
  const {
    site: {
      siteMetadata: { projects },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            projects {
              image
              title
            }
          }
        }
      }
    `
  )
  return (
    <ProjectContainer>
      {projects.length > 0 &&
        projects.map(project => (
          <ProjectItem title={project.title} imageSrc={project.image} />
        ))}
    </ProjectContainer>
  )
}
