/* eslint-disable no-plusplus */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react'
import {
  twoColumns,
  firstColumn,
  secondColumn,
  text1,
  text2,
  text11,
  text22,
  link,
} from './TwoColumns.module.css'

const shuffleWord = (word) => {
  let shuffled = ''
  for (let i = 0; i < word.length; i++) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    shuffled = shuffled.substring(0, randomIndex) + word.charAt(i) + shuffled.substring(randomIndex)
  }
  return shuffled
}

const TwoColumns = () => {
  const [shuffledWordtext1, setShuffledWordtext1] = useState('Oversized Tote Bag')
  const [shuffledWordtext2, setShuffledWordtext2] = useState('Buy now')
  const [shuffledWordtext3, setShuffledWordtext3] = useState('Black Hooded Sweatshirt')
  const [shuffledWordtext4, setShuffledWordtext4] = useState('Buy now')

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
    <div className={twoColumns}>
      <div className={firstColumn}>
        <a
          className={link}
          href="https://store.locomotive.ca/products/oversized-tote-bag"
        >
          <img src="src\assets\bag.png" alt="bigLine" />
          <span
            onMouseEnter={() => handleMouseEnter('Oversized Tote Bag', setShuffledWordtext1)}
            onMouseLeave={() => handleMouseLeave('Oversized Tote Bag', setShuffledWordtext1)}
            className={text1}
          >
            {shuffledWordtext1 || 'Oversized Tote Bag'}
          </span>
          <span
            onMouseEnter={() => handleMouseEnter('Buy now', setShuffledWordtext2)}
            onMouseLeave={() => handleMouseLeave('Buy now', setShuffledWordtext2)}
            className={text2}
          >
            {shuffledWordtext2 || 'Buy now'}
            <img style={{ marginLeft: '5px' }} src="src\assets\arrowRight.png" alt="bigLine" />
          </span>
          <br />
          <br />
          <span style={{ marginLeft: '-255px', color: 'black' }}>30 USD</span>
        </a>
      </div>
      <div className={secondColumn}>
        <a
          className={link}
          href="https://store.locomotive.ca/products/signature-sweatshirt"
        >
          <img src="src\assets\hoodie.png" alt="bigLine" />
          <span
            onMouseEnter={() => handleMouseEnter('Black Hooded Sweatshirt', setShuffledWordtext3)}
            onMouseLeave={() => handleMouseLeave('Black Hooded Sweatshirt', setShuffledWordtext3)}
            className={text11}
          >
            {shuffledWordtext3 || 'Black Hooded Sweatshirt'}
          </span>
          <span
            onMouseEnter={() => handleMouseEnter('Buy now', setShuffledWordtext4)}
            onMouseLeave={() => handleMouseLeave('Buy now', setShuffledWordtext4)}
            className={text22}
          >
            {shuffledWordtext4 || 'Buy now'}
            <img style={{ marginLeft: '5px', marginTop: '5px' }} src="src\assets\arrowRight.png" alt="bigLine" />
          </span>
          <br />
          <br />
          <span style={{
            marginTop: '40px', marginLeft: '-330px', color: 'black', float: 'left',
          }}
          >
            90 USD
          </span>
        </a>
      </div>
    </div>
  )
}

export default TwoColumns
