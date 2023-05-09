/* eslint-disable react/function-component-definition */
import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const VideoBackground = ({ src, onEnd }) => {
  const videoRef = useRef(null)

  const handleVideoEnd = () => {
    videoRef.current.pause()
    onEnd()
  }

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      loop={false}
      playsInline
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
      onEnded={handleVideoEnd}
    />
  )
}

VideoBackground.propTypes = {
  src: PropTypes.string.isRequired,
  onEnd: PropTypes.func.isRequired,
}

export default VideoBackground
