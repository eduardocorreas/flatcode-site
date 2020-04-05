import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

export default function UseCaseItem({
  imgNode,
  caption,
  title,
  description,
  link,
}) {
  return (
    <div className="sm:flex bg-gray-100 rounded-lg shadow-md p-8 sm:p-10 sm:ml-2 sm:mr-2">
      <div className="sm:w-1/3 mb-5 sm:mb-0">
        <Img
          fluid={imgNode.childImageSharp.fluid}
          className="sm:mx-5 mb-5 rounded-md"
        />
        <p className="text-center">{caption}</p>
      </div>
      <div className="sm:w-2/3">
        <h1
          className="text-xl text-justify sm:text-2xl mb-5 font-bold"
          style={{ color: '#ff7400' }}
        >
          <Link to={link}> {title}</Link>
        </h1>
        <p className="text-justify mb-5">{description}</p>
        <p className="font-bold" style={{ color: '#ff7400' }}>
          <Link to={link}> Leia mais ></Link>
        </p>
      </div>
    </div>
  )
}
