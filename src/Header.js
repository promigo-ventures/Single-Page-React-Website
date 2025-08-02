import React from 'react'

const Header = () => {
  
  return (
     <header className="header">
       <a className="link" href="#mainhead">
       <img src={process.env.PUBLIC_URL + '/Promigo-Logo.png'} alt="MyLogo" className="logo"/>
       <span>Promigo Ventures</span>
       </a>
       <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
       </nav>
    </header>
  )
}

export default Header