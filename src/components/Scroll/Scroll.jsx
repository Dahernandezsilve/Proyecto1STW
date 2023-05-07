/* eslint-disable react/function-component-definition */
import React from 'react'
import './Scroll.css'
import { HomeFeaturedLinkItem, HomeFeaturedLinkItem2 } from '../HomeFeaturedLinkItem/HomeFeaturedLinkItem'

const HomeFeaturedLinks = () => (
  <section className="homeFeaturedLinks">
    <ul className="homeFeaturedLinkList">
      <HomeFeaturedLinkItem
        title="Pangram Pangram"
        subtitle1="Pangram"
        subtitle2="Pangram"
        image="src/assets/pangram.png"
        link="https://locomotive.ca/en/work/pangram-pangram-foundry"
        linkText="Read more about this project"
      />
      <HomeFeaturedLinkItem
        title="Baillat Studio"
        subtitle1="Baillat"
        subtitle2="Studio"
        image="src/assets/baillat.png"
        link="https://locomotive.ca/en/work/baillat-studio"
        linkText="Read more about this project"
      />
      <HomeFeaturedLinkItem
        title="Age of Union"
        subtitle1="Age"
        subtitle2="of Union"
        image="src/assets/age.png"
        link="https://locomotive.ca/en/work/age-of-union"
        linkText="Read more about this project"
      />
      <HomeFeaturedLinkItem
        title="It&apos;s not violent"
        subtitle1="It&apos;s not"
        subtitle2="violent"
        image="src/assets/its.png"
        link="https://locomotive.ca/en/work/it-s-not-violent"
        linkText="Read more about this project"
      />
      <HomeFeaturedLinkItem
        title="Haven Studios"
        subtitle1="Haven"
        subtitle2="Studios"
        image="src/assets/haven.png"
        link="https://locomotive.ca/en/work/haven-studios"
        linkText="Read more about this project"
      />
      <HomeFeaturedLinkItem2
        title="All Work"
        link="https://locomotive.ca/en/work"
        linkText="See all projects"
      />
    </ul>
  </section>
)

const HomeScrollContainer = () => (
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
        <img className="homeSummaryFooterImage" src="src/assets/locomotive4.png" alt="caracter4" />
        Built in MTL
      </span>
    </div>
  </section>
)

const HomeScrollBackground = () => (
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

const HomeScrollContent = () => (
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

const Scroll = () => (
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

export default Scroll
