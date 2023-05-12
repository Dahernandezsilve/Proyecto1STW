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

const shuffleWord = (word) => {
  let shuffled = ''
  for (let i = 0; i < word.length; i++) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    shuffled = shuffled.substring(0, randomIndex) + word.charAt(i) + shuffled.substring(randomIndex)
  }
  return shuffled
}

const Header = () => {
  const [shuffledWordLocomotive, setShuffledWordLocomotive] = useState('Locomotive®')
  const [shuffledWordWork, setShuffledWordWork] = useState('Work')
  const [shuffledWordAgency, setShuffledWordAgency] = useState('Agency')
  const [shuffledWordCareers, setShuffledWordCareers] = useState('Careers')
  const [shuffledWordStore, setShuffledWordStore] = useState('Store')
  const [shuffledWordLets, setShuffledWordLets] = useState('Let´s talk')

  let timer

  const handleMouseEnter = (word, setState) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      const shuffled = shuffleWord(word)
      setState(shuffled)
    }, 50)
    timer = setTimeout(() => {
      setState(word)
    }, 100)
  }

  const handleMouseLeave = (word, setState) => {
    clearTimeout(timer)
    setState(word)
  }

  return (
    <header>
      <div className={Header1}>
        <a href="https://locomotive.ca/en" className={headerLogo}>
          <span
            className={headerLocomotive}
            onMouseEnter={() => handleMouseEnter('Locomotive®', setShuffledWordLocomotive)}
            onMouseLeave={() => handleMouseLeave('Locomotive®', setShuffledWordLocomotive)}
          >
            {shuffledWordLocomotive || 'Locomotive®'}
          </span>

        </a>
        <img className={headerSymbol} src="/locomotive3.png" alt="caracter3" />
        <nav className={navHeader}>
          <ul>
            <li className={navHeaderItemList} data-word="Work">
              <a
                href="https://locomotive.ca/en/work"
                className={navHeaderLinkItemList}
                onMouseEnter={() => handleMouseEnter('Work', setShuffledWordWork)}
                onMouseLeave={() => handleMouseLeave('Work', setShuffledWordWork)}
              >
                {shuffledWordWork || 'Work'}
              </a>
              ,
            </li>
            <li className={navHeaderItemList} data-word="Agency">
              <a
                href="https://locomotive.ca/en/agency"
                className={navHeaderLinkItemList}
                onMouseEnter={() => handleMouseEnter('Agency', setShuffledWordAgency)}
                onMouseLeave={() => handleMouseLeave('Agency', setShuffledWordAgency)}
              >
                {shuffledWordAgency || 'Agency'}
              </a>
              ,
            </li>
            <li className={navHeaderItemList} data-word="Careers">
              <a
                href="https://locomotive.ca/en/careers"
                className={navHeaderLinkItemList}
                onMouseEnter={() => handleMouseEnter('Careers', setShuffledWordCareers)}
                onMouseLeave={() => handleMouseLeave('Careers', setShuffledWordCareers)}
              >
                {shuffledWordCareers || 'Careers'}
              </a>
              ,
            </li>
            <li className={navHeaderItemList} data-word="Store">
              <a
                href="https://locomotive.ca/en/careers"
                className={navHeaderLinkItemList}
                onMouseEnter={() => handleMouseEnter('Store', setShuffledWordStore)}
                onMouseLeave={() => handleMouseLeave('Store', setShuffledWordStore)}
              >
                {shuffledWordStore || 'Store'}
              </a>
            </li>
          </ul>
        </nav>
        <a href="https://locomotive.ca/en/contact" className={headerContact}>
          <span
            onMouseEnter={() => handleMouseEnter("Let's Talk", setShuffledWordLets)}
            onMouseLeave={() => handleMouseLeave("Let's Talk", setShuffledWordLets)}
          >
            {shuffledWordLets || 'Let´s talk'}
          </span>
        </a>
      </div>
    </header>
  )
}

export default Header
