import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavSite.css'

class NavSite extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Manage</Link>
          <div id="nav-border">&nbsp;</div>
          <Link to="/preview"> Preview</Link>
        </nav>
      </div>
    )
  }
}

export default NavSite
