import React from 'react'
import './Scroll.css'

function HomeFeaturedLinks() {
  return (
    <section className="homeFeaturedLinks">
      <ul className="homeFeaturedLinkList">
        <li className="homeFeaturedLinkItem" data-hover-shuffle="children">
          
        </li>
      </ul>
    </section>
  )
}

function HomeScrollContainer() {
  return (
    <section className="homeSummary" data-scroll data-scroll-css-progress>
      <span className="homeSummaryLabel">©2008-2023</span>
      <div className="homeSummaryLabelInner">
        <p className="homeSummaryText">
          <span>A dedicated team</span>
          <span>obsessed with</span>
          <span>your brand&apos;s decision</span>
        </p>
        <div className="homeSummaryVisual">
          <div className="homeVisualSequence">
            <div className="homeVisualSequenceWrapper">
              <canvas className="homeVisualCanvas" />
              <div className="homeVisualSequenceImage" />
            </div>
          </div>
        </div>
        <span className="homeSummaryFooter">
          Built in MTL
        </span>
      </div>
    </section>
  )
}

function HomeScrollBackground() {
  return (
    <div className="HomeScrollBackground">
      <div className="video homeVideo">
        <div className="homeImage -Image">
          <span className="homeImageSpan">
            <img className="homeImageInner" alt="Locomotive showreel video" width="1920" height="1080" src="uploads/home/posterhome-2000w.jpg" />
          </span>
        </div>
        <video autoPlay loop muted className="homeVideoView">
          <source src="src/videos/fondo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

function HomeScrollContent() {
  return (
    <div className="homeScrollContent">
      <h1 className="homeHeading" data-allow-shuffle>
        <img src="src\assets\locomotive1.png" alt="Caracter1" />
        Locomotive®
        <br />
        Digital-first Design Agency
        <img src="src\assets\locomotive2.png" alt="Caracter2" />
      </h1>
    </div>
  )
}

function Scroll() {
  return (
    <div className="Scroll" data-module-scrooll="main" data-scroll-smooth="true">
      <main>
        <div className="homeScroll">
          <HomeScrollContent />
          <HomeScrollBackground />
        </div>
        <div className="homeScrollContainer">
          <HomeScrollContainer />
          <h2 className="scrollTextMedium">  Featured work </h2>
          <HomeFeaturedLinks />
          <section className="homeAbout">

          </section>
          <section className="homeExtras">

          </section>
        </div>
      </main>
    </div>
  )
}

export default Scroll
