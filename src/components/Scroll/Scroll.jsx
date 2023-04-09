import React from 'react'
import './Scroll.css'

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
              <canvas className="homeVisualCanvas" width="208" height="292" />
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
        <video className="homeVideoView" poster="uploads/home/posterhome-2000w.jpg" playsInline muted="true" loop="true" data-module-video-inview="m5" data-scroll="" data-scroll-repeat="" data-scroll-call="toggle, VideoInview" data-src="https://player.vimeo.com/progressive_redirect/playback/792718372/rendition/720p/file.mp4?loc=external&amp;signature=b0c78c25f2f55ae3f00dca4e07238b15d319799aae345f3fbfce5a8d56c6692e" data-src-mobile="https://player.vimeo.com/progressive_redirect/playback/793443646/rendition/540p/file.mp4?loc=external&amp;signature=242657e35d3787e2cb90fb59a5eed30aae9a604953d7db175f6c1d25ed0d887a" src="https://player.vimeo.com/progressive_redirect/playback/793443646/rendition/540p/file.mp4?loc=external&amp;signature=242657e35d3787e2cb90fb59a5eed30aae9a604953d7db175f6c1d25ed0d887a" />
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
          <section className="homeFeaturedLinks" ></section>
          <section className="homeAbout" ></section>
          <section className="homeExtras" ></section>

        </div>
      </main>
    </div>
  )
}

export default Scroll
