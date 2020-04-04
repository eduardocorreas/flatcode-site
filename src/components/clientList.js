import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function ClientList() {
  const data = useStaticQuery(graphql`
    query {
      clients: allFile(filter: { relativeDirectory: { eq: "clients" } }) {
        edges {
          node {
            id
            relativePath
            childImageSharp {
              fluid(maxWidth: 150) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div className="flex flex-wrap mx-auto justify-center">
      {data.clients.edges.map(({ node }, i) => {
        return (
          <div className="w-1/4 " key={i}>
            <Img
              fluid={node.childImageSharp.fluid}
              style={{ width: '150px' }}
              className="mx-auto"
            />
          </div>
        )
      })}
    </div>
  )
}