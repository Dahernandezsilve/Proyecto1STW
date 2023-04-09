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
      <div className="homeVideo">
        <div className="homeImage">
          <span className="homeImageSpan">
            <img className="homeImageInner" alt="Locomotive showreel video" width="1920" height="1080" src="uploads/home/posterhome-2000w.jpg" />
          </span>
        </div>
        <video className="homeVideoView" playsInline muted="true" loop="true" data-module-video-inview="m5" data-scroll="" data-scroll-repeat="" data-scroll-call="toggle, VideoInview" src="src/assets/fondo.mp4" />
      </div>
    </div>
  )
}

function HomeScrollContent() {
  return (
    <div className="homeScrollContent">
      <h1 className="homeHeading" data-allow-shuffle>
        <span>🔶</span>
        Locomotive®
        <br />
        Digital-first Design Agency
        <span>🍺🔞</span>
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
