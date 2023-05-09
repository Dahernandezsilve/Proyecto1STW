/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react'
import './App.css'
import { Helmet } from 'react-helmet'
import myImage from './assets/linkHeader.png'
import Header from './components/Header/Header'
import Scroll from './components/Scroll/Scroll'
import VideoBackground from './components/VideoBackground/VideoBackground'

function App() {
  const [videoFinished, setVideoFinished] = useState(false)

  const handleVideoEnd = () => {
    setVideoFinished(true)
  }

  return (
    <>
      <Helmet>
        <title>Locomotive | Montreal web agency</title>
        <link rel="icon" href={myImage} sizes="16x16" />
      </Helmet>
      {!videoFinished && (
        <VideoBackground
          src="src/videos/PantallaDeCargaP.mp4"
          onEnd={() => handleVideoEnd()}
        />
      )}
      {videoFinished && (
        <div className="App">
          <div className="headerBackground" />
          <div className="container">
            <Header />
            <Scroll />
          </div>
        </div>
      )}
    </>
  )
}

export default App
