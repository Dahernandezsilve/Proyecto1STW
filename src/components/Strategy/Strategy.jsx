/* eslint-disable max-len */
/* eslint-disable react/function-component-definition */
import React from 'react'
import {
  strategy,
  videoContainer,
  texto,
  videoStrategy,
  imgArrow1,
  imgArrow2,
} from './Strategy.module.css'

const Strategy = () => (
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
        <span>
          Agency
          <img className={imgArrow1} src="src\assets\arrowRight.png" alt="arrowRight" />
        </span>
        <br />
        <img src="src\assets\line.png" alt="line" />
        <br />
        <span>
          Careers
          <img className={imgArrow2} src="src\assets\arrowRight.png" alt="arrowRight" />
        </span>
      </div>
    </div>
  </div>
)

export default Strategy
