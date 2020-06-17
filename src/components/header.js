import { Link } from 'gatsby'
import React from 'react'

import logo from '../images/logo-flatcode.svg'

const Header = () => (
  <header className="bg-gray-800 mb-3">
    <div className="pt-10 px-8  sm:pt-8 sm:pb-8 sm:px-24">
      <h1 className="m-0 pt-10">
        <Link to="/" className="text-white">
          <img src={logo} alt="Logo Flatcode" width="150" />
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
