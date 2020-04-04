import React from 'react'
import { graphql } from 'gatsby'

import Header from '../components/header'
import HeroBlog from '../components/heroBlog'
import CTA from '../components/cta'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className=" text-white bg-gray-800">
      <Header />
      <HeroBlog
        title={frontmatter.title}
        wordHighlight={frontmatter.wordHighlight}
      />
      <div>
        <div className="px-64 text-xl text-justify">
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <p className="mb-5">{frontmatter.p1}</p>
          <p className="mb-5">{frontmatter.p2}</p>
          <p className="mb-5">{frontmatter.p3}</p>
          <p className="mb-5">{frontmatter.p4}</p>
          <p className="mb-5">{frontmatter.p5}</p>
          <p className="mb-5">{frontmatter.p6}</p>
          <p className="mb-5">{frontmatter.p7}</p>
          <p className="mb-5">{frontmatter.p8}</p>
        </div>
      </div>
      <div>
        <CTA />
      </div>
      <div className="text-center pb-10">
        <a
          href="/"
          className="bg-green-500 p-5 rounded-full uppercase font-bold"
        >
          {' '}
          Voltar ao site
        </a>
      </div>
      <footer className="text-white p-3 text-center bg-gray-800">
        © {new Date().getFullYear()}
        {` `}
        <a href="https://www.flatcodesm.com">Flatcode</a>
      </footer>
    </div>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD/MM/YYYY")
        path
        title
        wordHighlight
        p1
        p2
        p3
        p4
        p5
        p6
        p7
        p8
      }
    }
  }
`