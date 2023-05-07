/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable no-plusplus */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import {
  Header1,
  headerLogo,
  headerLocomotive,
  headerSymbol,
  navHeader,
  navHeaderItemList,
  navHeaderLinkItemList,
  headerContact,
} from './Header.module.css'

const Header = () => {
  const [originalText, setOriginalText] = useState(null)

  const shuffle = (text) => {
    const chars = text.split('')
    for (let i = chars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [chars[i], chars[j]] = [chars[j], chars[i]]
    }
    return chars.join('')
  }

  const handleMouseOver = (event) => {
    const { target } = event
    setOriginalText(target.innerText)
    const shuffledText = shuffle(target.innerText)
    target.innerText = shuffledText
    target.style.textDecoration = 'underline'
  }
  const handleMouseOut = (event) => {
    const { target } = event
    target.innerText = originalText
    target.style.textDecoration = 'none'
  }

  return (
    <header>
      <div className={Header1}>
        <a href="https://locomotive.ca/en" className={headerLogo}>
          <span
            className={headerLocomotive}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Locomotive
          </span>
          ®
        </a>
        <img className={headerSymbol} src="src/assets/locomotive3.png" alt="caracter3" />
        <nav className={navHeader}>
          <ul>
            <li className={navHeaderItemList} data-word="Work">
              <a href="https://locomotive.ca/en/work" className={navHeaderLinkItemList} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                Work
              </a>
              ,
            </li>
            <li className={navHeaderItemList} data-word="Agency">
              <a href="https://locomotive.ca/en/agency" className={navHeaderLinkItemList} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                Agency
              </a>
              ,
            </li>
            <li className={navHeaderItemList} data-word="Careers">
              <a href="https://locomotive.ca/en/careers" className={navHeaderLinkItemList} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                Careers
              </a>
              ,
            </li>
            <li className={navHeaderItemList} data-word="Story">
              <a href="https://locomotive.ca/en/careers" className={navHeaderLinkItemList} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                Story
              </a>
            </li>
          </ul>
        </nav>
        <a href="https://locomotive.ca/en/contact" className={headerContact} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <span>Let´s talk</span>
        </a>
      </div>
    </header>
  )
}

export default Header
