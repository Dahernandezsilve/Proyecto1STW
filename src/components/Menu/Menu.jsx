/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react'
import {
  menu,
  col1,
  col2,
  col3,
  imgLine,
  ref,
} from './Menu.module.css'

const shuffleWord = (word) => {
  let shuffled = ''
  for (let i = 0; i < word.length; i++) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    shuffled = shuffled.substring(0, randomIndex) + word.charAt(i) + shuffled.substring(randomIndex)
  }
  return shuffled
}

const Menu = () => {
  const [shuffledWordWork, setShuffledWordWork] = useState('Work')
  const [shuffledWordAgency, setShuffledWordAgency] = useState('Agency')
  const [shuffledWordCareers, setShuffledWordCareers] = useState('Careers')
  const [shuffledWordLets, setShuffledWordLets] = useState("Le'ts talk")
  const [shuffledWordFr, setShuffledWordFr] = useState('Français')
  const [shuffledWordInstagram, setShuffledWordInstagram] = useState('Instagram')
  const [shuffledWordTwitter, setShuffledWordTwitter] = useState('Twitter')
  const [shuffledWordLinkedIn, setShuffledWordLinkedIn] = useState('LinkedIn')
  const [shuffledWordMedium, setShuffledWordMedium] = useState('Medium')
  const [shuffledWordBehance, setShuffledWordBehance] = useState('Behance')
  const [shuffledWordGitHub, setShuffledWordGitHub] = useState('GitHub')
  const [shuffledWordStore, setShuffledWordStore] = useState('Store')
  const [shuffledWordScroll, setShuffledWordScroll] = useState('Locomotive Scroll')
  const [shuffledWordCharcoal, setShuffledWordCharcoal] = useState('Charcoal CMS')
  const [shuffledWordAnnual, setShuffledWordAnnual] = useState('Annual trips')

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
    <div className={menu}>
      <div className={col1}>
        Menu
        <img className={imgLine} src="src\assets\menuLine1.png" alt="menuLine1" />
        <a
          className={ref}
          style={{ marginTop: '-33px' }}
          href="https://locomotive.ca/en/work"
          onMouseEnter={() => handleMouseEnter('Work', setShuffledWordWork)}
          onMouseLeave={() => handleMouseLeave('Work', setShuffledWordWork)}
        >
          {shuffledWordWork || 'Work'}
          <span style={{ marginTop: '-33px', marginLeft: '400px' }}>
            Newsletter
            <img style={{ paddingLeft: '5px' }} src="src\assets\arrowDown.png" alt="arrowDown" />
          </span>
        </a>
        <a
          className={ref}
          href="https://locomotive.ca/en/agency"
          onMouseEnter={() => handleMouseEnter('Agency', setShuffledWordAgency)}
          onMouseLeave={() => handleMouseLeave('Agency', setShuffledWordAgency)}
        >
          {shuffledWordAgency || 'Agency'}
        </a>
        <a
          className={ref}
          href="https://locomotive.ca/en/careers"
          onMouseEnter={() => handleMouseEnter('Careers', setShuffledWordCareers)}
          onMouseLeave={() => handleMouseLeave('Careers', setShuffledWordCareers)}
        >
          {shuffledWordCareers || 'Careers'}
        </a>
        <a
          className={ref}
          href="https://locomotive.ca/en/contact"
          onMouseEnter={() => handleMouseEnter("Le'ts talk", setShuffledWordLets)}
          onMouseLeave={() => handleMouseLeave("Le'ts talk", setShuffledWordLets)}
        >
          {shuffledWordLets || "Le'ts talk"}
        </a>
        <a
          className={ref}
          href="https://locomotive.ca/fr"
          onMouseEnter={() => handleMouseEnter('Français', setShuffledWordFr)}
          onMouseLeave={() => handleMouseLeave('Français', setShuffledWordFr)}
        >
          {shuffledWordFr || 'Français'}
        </a>
      </div>
      <div className={col2}>
        Social
        <img className={imgLine} src="src\assets\menuLine2.png" alt="menuLine2" />
        <a
          className={ref}
          style={{ marginTop: '-33px' }}
          href="https://www.instagram.com/locomotivemtl/"
          onMouseEnter={() => handleMouseEnter('Instagram', setShuffledWordInstagram)}
          onMouseLeave={() => handleMouseLeave('Instagram', setShuffledWordInstagram)}
        >
          {shuffledWordInstagram || 'Instagram'}
        </a>
        <a
          className={ref}
          href="https://twitter.com/locomotivemtl"
          onMouseEnter={() => handleMouseEnter('Twitter', setShuffledWordTwitter)}
          onMouseLeave={() => handleMouseLeave('Twitter', setShuffledWordTwitter)}
        >
          {shuffledWordTwitter || 'Twitter'}
        </a>
        <a
          className={ref}
          href="https://www.linkedin.com/company/locomotive-mtl"
          onMouseEnter={() => handleMouseEnter('LinkedIn', setShuffledWordLinkedIn)}
          onMouseLeave={() => handleMouseLeave('LinkedIn', setShuffledWordLinkedIn)}
        >
          {shuffledWordLinkedIn || 'Linkedln'}
        </a>
        <a
          className={ref}
          href="https://medium.com/@locomotivemtl"
          onMouseEnter={() => handleMouseEnter('Medium', setShuffledWordMedium)}
          onMouseLeave={() => handleMouseLeave('Medium', setShuffledWordMedium)}
        >
          {shuffledWordMedium || 'Medium'}
        </a>
        <a
          className={ref}
          href="https://www.behance.net/locomotivemtl"
          onMouseEnter={() => handleMouseEnter('Behance', setShuffledWordBehance)}
          onMouseLeave={() => handleMouseLeave('Behance', setShuffledWordBehance)}
        >
          {shuffledWordBehance || 'Behance'}
        </a>
        <a
          className={ref}
          href="https://github.com/locomotivemtl"
          onMouseEnter={() => handleMouseEnter('GitHub', setShuffledWordGitHub)}
          onMouseLeave={() => handleMouseLeave('GitHub', setShuffledWordGitHub)}
        >
          {shuffledWordGitHub || 'GitHub'}
        </a>
      </div>
      <div className={col3}>
        External
        <img className={imgLine} src="src\assets\menuLine3.png" alt="menuLine3" />
        <a
          className={ref}
          style={{ marginTop: '-33px' }}
          href="https://store.locomotive.ca/"
          onMouseEnter={() => handleMouseEnter('Store', setShuffledWordStore)}
          onMouseLeave={() => handleMouseLeave('Store', setShuffledWordStore)}
        >
          {shuffledWordStore || 'Store'}
        </a>
        <a
          className={ref}
          href="https://locomotivemtl.github.io/locomotive-scroll/"
          onMouseEnter={() => handleMouseEnter('Locomotive Scroll', setShuffledWordScroll)}
          onMouseLeave={() => handleMouseLeave('Locomotive Scroll', setShuffledWordScroll)}
        >
          {shuffledWordScroll || 'Locomotive Scroll'}
        </a>
        <a
          className={ref}
          href="https://charcoal.locomotive.ca/en"
          onMouseEnter={() => handleMouseEnter('Charcoal CMS', setShuffledWordCharcoal)}
          onMouseLeave={() => handleMouseLeave('Charcoal CMS', setShuffledWordCharcoal)}
        >
          {shuffledWordCharcoal || 'Charcoal CMS'}
        </a>
        <a
          className={ref}
          href="https://explore.locomotive.ca/en"
          onMouseEnter={() => handleMouseEnter('Annual trips', setShuffledWordAnnual)}
          onMouseLeave={() => handleMouseLeave('Annual trips', setShuffledWordAnnual)}
        >
          {shuffledWordAnnual || 'Annual trips'}
        </a>
      </div>
    </div>
  )
}

export default Menu
