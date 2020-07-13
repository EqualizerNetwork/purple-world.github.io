import React from 'react'
import {Link} from 'gatsby'

import headerStyle from './assets/Header.module.scss'

const Header = () => (
  <header className={headerStyle.header}>
    <Link to="/">
      {/* <h1>Purple World</h1> */}
      <img src="logo/logo.png" alt="logo" />
    </Link>
  </header>
)

export default Header
