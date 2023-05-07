/* eslint-disable react/function-component-definition */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  homeFeaturedLinkItem,
  homeFeaturedItemText,
  homeFeaturedImage,
  homeFeaturedItemTitle,
  homeFeaturedImageInner,
  featuredLink,
} from './HomeFeaturedLinkItem.module.css'

const HomeFeaturedLinkItem = ({
  title, subtitle1, subtitle2, videoSrc, link, linkText,
}) => {
  const [hover, setHover] = useState(false)

  const handleHover = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <li className={homeFeaturedLinkItem} data-hover-shuffle="children" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
      <h3 className={homeFeaturedItemText}>{title}</h3>
      <div className={homeFeaturedItemTitle}>
        <span>{subtitle1}</span>
        <div className={homeFeaturedImage} style={{ width: hover ? '2em' : 0 }}>
          <span className={homeFeaturedImageInner}>
            <video autoPlay muted loop preload="auto">
              <source src={videoSrc} type="video/mp4" />
            </video>
          </span>
        </div>
        <span>{subtitle2}</span>
      </div>
      <a href={link} className={featuredLink}>{linkText}</a>
    </li>
  )
}

const HomeFeaturedLinkItem2 = ({
  title, link, linkText,
}) => (
  <li className={homeFeaturedLinkItem} data-hover-shuffle="children">
    <h3 className={homeFeaturedItemText}>{title}</h3>
    <div className={homeFeaturedItemTitle}>
      <video autoPlay muted loop preload="auto">
        <source src="src/videos/TriangleL.mp4" type="video/mp4" />
      </video>
      <span>{title}</span>
      <video autoPlay muted loop preload="auto">
        <source src="src/videos/Triangle.mp4" type="video/mp4" />
      </video>
    </div>
    <a href={link} className={featuredLink}>{linkText}</a>
  </li>
)

HomeFeaturedLinkItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle1: PropTypes.string.isRequired,
  subtitle2: PropTypes.string.isRequired,
  videoSrc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
}

HomeFeaturedLinkItem2.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
}

export { HomeFeaturedLinkItem, HomeFeaturedLinkItem2 }
