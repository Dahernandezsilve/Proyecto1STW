/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react'
import {
  strategy,
  videoContainer,
  texto,
  videoStrategy,
  imgArrow1,
  imgArrow2,
} from './Strategy.module.css'

const shuffleWord = (word) => {
  let shuffled = ''
  for (let i = 0; i < word.length; i++) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    shuffled = shuffled.substring(0, randomIndex) + word.charAt(i) + shuffled.substring(randomIndex)
  }
  return shuffled
}

const Strategy = () => {
  const [shuffledWordAgency, setShuffledWordAgency] = useState('Agency')
  const [shuffledWordCareers, setShuffledWordCareers] = useState('Careers')

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
    <div className={strategy}>
      <div className={videoContainer}>
        <video className={videoStrategy} autoPlay muted loop preload="auto">
          <source src="src/videos/man.mp4" type="video/mp4" />
        </video>
        <div className={texto}>
          <span>
            From strategy to deployment and maintenance, we&apos;re the ultimate digital one-stop shop. Over the 15 years, Locomotive® has become a go-to for meaningful, innovative, results-driven digital experiences, web design and branding. Freshness guaranteed.
          </span>
          <br />
          <img src="src\assets\line.png" alt="line" />
          <br />
          <a
            style={{
              textDecoration: 'none',
            }}
            href="https://locomotive.ca/en/agency"
            onMouseEnter={() => handleMouseEnter('Agency', setShuffledWordAgency)}
            onMouseLeave={() => handleMouseLeave('Agency', setShuffledWordAgency)}
          >
            {shuffledWordAgency || 'Agency'}
            <img className={imgArrow1} src="src\assets\arrowRight.png" alt="arrowRight" />
          </a>
          <br />
          <img src="src\assets\line.png" alt="line" />
          <br />
          <a
            style={{
              textDecoration: 'none',
            }}
            href="https://locomotive.ca/en/careers"
            onMouseEnter={() => handleMouseEnter('Careers', setShuffledWordCareers)}
            onMouseLeave={() => handleMouseLeave('Careers', setShuffledWordCareers)}
          >
            {shuffledWordCareers || 'Careers'}
            <img className={imgArrow2} src="src\assets\arrowRight.png" alt="arrowRight" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Strategy
