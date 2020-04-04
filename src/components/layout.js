/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-800">
      <Header />
      <div className="h-auto">
        <main>{children}</main>
      </div>
      <footer className="text-white p-3 text-center">
        © {new Date().getFullYear()}
        {` `}
        <a href="https://www.flatcodesm.com">Flatcode</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
