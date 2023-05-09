/* eslint-disable no-plusplus */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react'
import {
  extras,
  bigLine,
  title1,
  title2,
  link,
} from './Extras.module.css'

const shuffleWord = (word) => {
  let shuffled = ''
  for (let i = 0; i < word.length; i++) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    shuffled = shuffled.substring(0, randomIndex) + word.charAt(i) + shuffled.substring(randomIndex)
  }
  return shuffled
}

const Extras = () => {
  const [shuffledWordShould, setShuffledWordShould] = useState('Should I use Locomotive Scroll on my project?')
  const [shuffledWord500, setShuffledWord500] = useState('500 days later, My Better Normal')
  const [shuffledWordWhy, setShuffledWordWhy] = useState("Why don't we use front-end frameworks at Locomotive?")
  const [shuffledWordThe, setShuffledWordThe] = useState('The revolution of the workspace as we know it')
  const [shuffledWordA, setShuffledWordA] = useState('A few things your UX designer can learn from your shrink')
  const [shuffledWordCan, setShuffledWordCan] = useState('Can I say bravo?')
  const [shuffledWordCarmen, setShuffledWordCarmen] = useState('(2022) Locomotive in Playa del Carmen')
  const [shuffledWordMexico, setShuffledWordMexico] = useState('(2019) Locomotive in Mexico')
  const [shuffledWordJamaica, setShuffledWordJamaica] = useState('(2018) Locomotive in Jamaica')
  const [shuffledWordSanama, setShuffledWordSanama] = useState('(2017) Locomotive in Samaná')
  const [shuffledWordCheck, setShuffledWordCheck] = useState('Check out our gear')

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
    <div className={extras}>
      <span className={title1}>
        Extras
      </span>
      <span className={title2}>
        (11)
      </span>
      <img className={bigLine} src="src\assets\bigLine.png" alt="bigLine" />
      <span>
        Articles
      </span>
      <a
        className={link}
        style={{ marginLeft: '43vw', lineHeight: '0.6', textDecoration: 'none' }}
        href="https://medium.com/@LocomotiveMTL/should-i-use-locomotive-scroll-on-my-project-7fc8fa38bcc5"
        onMouseEnter={() => handleMouseEnter('Should I use Locomotive Scroll on my project?', setShuffledWordShould)}
        onMouseLeave={() => handleMouseLeave('Should I use Locomotive Scroll on my project?', setShuffledWordShould)}
      >
        {shuffledWordShould || 'Should I use Locomotive Scroll on my project?'}
        <img style={{ marginLeft: '12vw' }} src="src\assets\arrowUpR.png" alt="arrowUpR" />
      </a>
      <img style={{ marginLeft: '47.2vw', marginTop: '-30px' }} src="src\assets\mediumLine2.png" alt="mediumLine" />
      <a
        className={link}
        style={{
          textDecoration: 'none', marginLeft: '48.3vw', lineHeight: '0.1', position: 'relative', top: '-20px',
        }}
        href="https://medium.com/@LocomotiveMTL/500-days-later-my-better-normal-e9fe2eedd44e"
        onMouseEnter={() => handleMouseEnter('500 days later, My Better Normal', setShuffledWord500)}
        onMouseLeave={() => handleMouseLeave('500 days later, My Better Normal', setShuffledWord500)}
      >
        {shuffledWord500 || '500 days later, My Better Normal'}
        <img style={{ marginLeft: '21vw' }} src="src\assets\arrowUpR.png" alt="arrowUpR" />
      </a>
      <img style={{ marginLeft: '47.2vw', marginTop: '-70px' }} src="src\assets\mediumLine2.png" alt="mediumLine" />
      <a
        className={link}
        href="https://medium.com/@LocomotiveMTL/why-dont-we-use-front-end-frameworks-at-locomotive-4ccb20c05bc5"
        style={{
          textDecoration: 'none', marginLeft: '48.3vw', lineHeight: '0.1', position: 'relative', top: '-40px',
        }}
        onMouseEnter={() => handleMouseEnter("Why don't we use front-end frameworks at Locomotive?", setShuffledWordWhy)}
        onMouseLeave={() => handleMouseLeave("Why don't we use front-end frameworks at Locomotive?", setShuffledWordWhy)}
      >
        {shuffledWordWhy || 'Why don&apos;t we use front-end frameworks at Locomotive?'}
        <img style={{ marginLeft: '5.4vw' }} src="src\assets\arrowUpR.png" alt="arrowUpR" />
      </a>
      <img style={{ marginLeft: '47.2vw', marginTop: '-110px' }} src="src\assets\mediumLine2.png" alt="mediumLine" />
      <a
        className={link}
        href="https://medium.com/@LocomotiveMTL/the-revolution-of-the-workspace-as-we-know-it-6e50c4bc1b2"
        style={{
          textDecoration: 'none', marginLeft: '48.3vw', lineHeight: '0.1', position: 'relative', top: '-60px',
        }}
        onMouseEnter={() => handleMouseEnter('The revolution of the workspace as we know it', setShuffledWordThe)}
        onMouseLeave={() => handleMouseLeave('The revolution of the workspace as we know it', setShuffledWordThe)}
      >
        {shuffledWordThe || 'The revolution of the workspace as we know it'}
        <img style={{ marginLeft: '12.2vw' }} src="src\assets\arrowUpR.png" alt="arrowUpR" />
      </a>
      <img style={{ marginLeft: '47.2vw', marginTop: '-150px' }} src="src\assets\mediumLine2.png" alt="mediumLine" />
      <a
        href="https://medium.com/@LocomotiveMTL/a-few-things-your-ux-designer-can-learn-from-your-shrink-locomotive-style-8a8de62c841"
        className={link}
        style={{
          textDecoration: 'none', marginLeft: '48.3vw', lineHeight: '0.1', position: 'relative', top: '-80px',
        }}
        onMouseEnter={() => handleMouseEnter('A few things your UX designer can learn from your shrink', setShuffledWordA)}
        onMouseLeave={() => handleMouseLeave('A few things your UX designer can learn from your shrink', setShuffledWordA)}
      >
        {shuffledWordA || 'A few things your UX designer can learn from your shrink'}
        <img style={{ marginLeft: '5vw' }} src="src\assets\arrowUpR.png" alt="arrowUpR" />
      </a>
      <img style={{ marginLeft: '47.2vw', marginTop: '-190px' }} src="src\assets\mediumLine2.png" alt="mediumLine" />
      <a
        className={link}
        href="https://medium.com/@LocomotiveMTL/can-i-say-bravo-18e8769b2bf1"
        style={{
          textDecoration: 'none', marginLeft: '48.3vw', lineHeight: '0.1', position: 'relative', top: '-100px',
        }}
        onMouseEnter={() => handleMouseEnter('Can I say bravo?', setShuffledWordCan)}
        onMouseLeave={() => handleMouseLeave('Can I say bravo?', setShuffledWordCan)}
      >
        {shuffledWordCan || 'Can I say bravo?'}
        <img style={{ marginLeft: '32.4vw' }} src="src\assets\arrowUpR.png" alt="arrowUpR" />
      </a>
      <img style={{ marginTop: '-255px', marginLeft: '-13px' }} src="src\assets\bigLine.png" alt="bigLine" />
      <span style={{ position: 'relative', top: '-120px' }}>
        Culture
      </span>
      <a
        className={link}
        href="https://explore.locomotive.ca/en/playa"
        style={{
          textDecoration: 'none', marginLeft: '43vw', lineHeight: '0.1', position: 'relative', top: '-120px',
        }}
        onMouseEnter={() => handleMouseEnter('(2022) Locomotive in Playa del Carmen', setShuffledWordCarmen)}
        onMouseLeave={() => handleMouseLeave('(2022) Locomotive in Playa del Carmen', setShuffledWordCarmen)}
      >
        {shuffledWordCarmen || '(2022) Locomotive in Playa del Carmen'}
        <img style={{ marginLeft: '16vw' }} src="src\assets\arrowUpR.png" alt="arrowUpR" />
      </a>
      <img style={{ marginLeft: '47.2vw', marginTop: '-270px' }} src="src\assets\mediumLine2.png" alt="mediumLine" />
      <a
        className={link}
        href="https://explore.locomotive.ca/en/mexico"
        style={{
          textDecoration: 'none', marginLeft: '48.3vw', lineHeight: '0.1', position: 'relative', top: '-140px',
        }}
        onMouseEnter={() => handleMouseEnter('(2019) Locomotive in Mexico', setShuffledWordMexico)}
        onMouseLeave={() => handleMouseLeave('(2019) Locomotive in Mexico', setShuffledWordMexico)}
      >
        {shuffledWordMexico || '(2019) Locomotive in Mexico'}
        <img style={{ marginLeft: '23.3vw' }} src="src\assets\arrowUpR.png" alt="arrowUpR" />
      </a>
      <img style={{ marginLeft: '47.2vw', marginTop: '-310px' }} src="src\assets\mediumLine2.png" alt="mediumLine" />
      <a
        className={link}
        href="https://explore.locomotive.ca/en/jamaica"
        style={{
          textDecoration: 'none', marginLeft: '48.3vw', lineHeight: '0.1', position: 'relative', top: '-160px',
        }}
        onMouseEnter={() => handleMouseEnter('(2018) Locomotive in Jamaica', setShuffledWordJamaica)}
        onMouseLeave={() => handleMouseLeave('(2018) Locomotive in Jamaica', setShuffledWordJamaica)}
      >
        {shuffledWordJamaica || '(2018) Locomotive in Jamaica'}
        <img style={{ marginLeft: '22.8vw' }} src="src\assets\arrowUpR.png" alt="arrowUpR" />
      </a>
      <img style={{ marginLeft: '47.2vw', marginTop: '-350px' }} src="src\assets\mediumLine2.png" alt="mediumLine" />
      <a
        className={link}
        href="https://explore.locomotive.ca/en/samana"
        style={{
          textDecoration: 'none', marginLeft: '48.3vw', lineHeight: '0.1', position: 'relative', top: '-180px',
        }}
        onMouseEnter={() => handleMouseEnter('(2017) Locomotive in Samaná', setShuffledWordSanama)}
        onMouseLeave={() => handleMouseLeave('(2017) Locomotive in Samaná', setShuffledWordSanama)}
      >
        {shuffledWordSanama || '(2017) Locomotive in Samaná'}
        <img style={{ marginLeft: '22.8vw' }} src="src\assets\arrowUpR.png" alt="arrowUpR" />
      </a>
      <img style={{ marginTop: '-410px', marginLeft: '-13px' }} src="src\assets\bigLine.png" alt="bigLine" />
      <span style={{ position: 'relative', top: '-195px' }}>
        Store
      </span>
      <a
        className={link}
        href="https://store.locomotive.ca/en"
        style={{
          textDecoration: 'none', marginLeft: '44.5vw', lineHeight: '0.1', position: 'relative', top: '-195px',
        }}
        onMouseEnter={() => handleMouseEnter('Check out our gear', setShuffledWordCheck)}
        onMouseLeave={() => handleMouseLeave('Check out our gear', setShuffledWordCheck)}
      >
        {shuffledWordCheck || 'Check out our gear'}
        <img style={{ marginLeft: '30.2vw' }} src="src\assets\arrowUpR.png" alt="arrowUpR" />
      </a>
    </div>
  )
}

export default Extras
