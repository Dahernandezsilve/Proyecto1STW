/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import './Header.css'

function Nav1() {
  return (
    <nav className="navHeader">
      <ul className="navHeaderList">
        <li className="navHeaderItemList">
          <a href="https://locomotive.ca/en/work" className="navHeaderLinkItemList" data-hover-shuffle>
            Work
          </a>
        </li>
        <li className="navHeaderItemList">
          <a href="https://locomotive.ca/en/agency" className="navHeaderLinkItemList" data-hover-shuffle>
            Agency
          </a>
        </li>
        <li className="navHeaderItemList">
          <a href="https://locomotive.ca/en/careers" className="navHeaderLinkItemList" data-hover-shuffle>
            Careers
          </a>
        </li>
      </ul>
    </nav>
  )
}

function Header() {
  return (
    <header>
      <div className="Header">
        <a href="https://locomotive.ca/en" className="headerLogo">
          <span className="headerLocomotive" data-hover-shuffle>Locomotive</span>
          ®
        </a>
        <span className="headerSymbol" />
        <Nav1 />
        <a href="https://locomotive.ca/en/contact" className="headerContact" data-hover-shuffle>
          Let´s talk
        </a>
        <button type="button" className="headerButton_menu-toggler" data-header="menu-toggler" data-header-open-label="Menu" data-header-close-label="Close">
          Menu
        </button>
      </div>
    </header>

  )
}

export default Header
