/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  link,
} from './ExtrasDivider.module.css'

const shuffleWord = (word) => {
  let shuffled = ''
  for (let i = 0; i < word.length; i++) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    shuffled = shuffled.substring(0, randomIndex) + word.charAt(i) + shuffled.substring(randomIndex)
  }
  return shuffled
}

const ExtrasDivider = ({
  text, SmarginLeft, SlineHeight, StextDecoration, Shref, ImarginLeft, I2marginLeft, I2marginTop, position, top,
}) => {
  const [shuffledWord, setShuffledWord] = useState(text)
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
    <div>
      <a
        className={link}
        style={{
          marginLeft: SmarginLeft, lineHeight: SlineHeight, textDecoration: StextDecoration, position, top,
        }}
        href={Shref}
        onMouseEnter={() => handleMouseEnter(text, setShuffledWord)}
        onMouseLeave={() => handleMouseLeave(text, setShuffledWord)}
      >
        {shuffledWord || text }
        <img style={{ marginLeft: ImarginLeft }} src="src\assets\arrowUpR.png" alt="arrowUpR" />
      </a>
      <img style={{ marginLeft: I2marginLeft, marginTop: I2marginTop, display: 0 }} src="src\assets\mediumLine2.png" alt="mediumLine" />
    </div>
  )
}

ExtrasDivider.propTypes = {
  text: PropTypes.string.isRequired,
  SmarginLeft: PropTypes.string,
  SlineHeight: PropTypes.string,
  StextDecoration: PropTypes.string,
  Shref: PropTypes.string,
  ImarginLeft: PropTypes.string,
  I2marginLeft: PropTypes.string,
  I2marginTop: PropTypes.string,
  position: PropTypes.string,
  top: PropTypes.string,
}

ExtrasDivider.defaultProps = {
  SmarginLeft: '0',
  SlineHeight: '1.5',
  StextDecoration: 'none',
  Shref: '#',
  ImarginLeft: '0',
  I2marginLeft: '0',
  I2marginTop: '0',
  position: 'relative',
  top: '0px',
}

export default ExtrasDivider
