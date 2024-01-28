import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {


    return (
        <>


<nav className="navbar navbar-expand-md navbar-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">MERAM</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <NavLink className="nav-link"  to="/home">Ana Sayfa</NavLink>
          <NavLink className="nav-link"  to="/contact">İletişim</NavLink>
        </ul>
        
      </div>
    </div>
  </nav>

        </>
    )
}

export default Navbar