/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Scroll from './components/Scroll/Scroll'

function App() {
  return (
    <div className="App">
      <div className="headerBackground" />
      <div className="container">
        <Header />
        <Scroll />
      </div>
    </div>
  )
}

export default App
