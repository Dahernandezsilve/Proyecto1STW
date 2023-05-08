/* eslint-disable react/function-component-definition */
import React from 'react'
import {
  menu,
  col1,
  col2,
  col3,
  imgLine,
  ref,
} from './Menu.module.css'

const Menu = () => (
  <div className={menu}>
    <div className={col1}>
      Menu
      <img className={imgLine} src="src\assets\menuLine1.png" alt="menuLine1" />
      <a className={ref} style={{ marginTop: '-33px' }} href="https://locomotive.ca/en/work">
        Work
        <span style={{ marginTop: '-33px', marginLeft: '400px' }}>
          Newsletter
          <img style={{ paddingLeft: '5px' }} src="src\assets\arrowDown.png" alt="arrowDown" />
        </span>
      </a>
      <a className={ref} href="https://locomotive.ca/en/agency">Agency</a>
      <a className={ref} href="https://locomotive.ca/en/careers">Careers</a>
      <a className={ref} href="https://locomotive.ca/en/contact">Let&apos;s talk</a>
      <a className={ref} href="https://locomotive.ca/fr">Français</a>
    </div>
    <div className={col2}>
      Social
      <img className={imgLine} src="src\assets\menuLine2.png" alt="menuLine2" />
      <a className={ref} style={{ marginTop: '-33px' }} href="https://www.instagram.com/locomotivemtl/">Instagram</a>
      <a className={ref} href="https://twitter.com/locomotivemtl">Twitter</a>
      <a className={ref} href="https://www.linkedin.com/company/locomotive-mtl">Linkedln</a>
      <a className={ref} href="https://medium.com/@locomotivemtl">Medium</a>
      <a className={ref} href="https://www.behance.net/locomotivemtl">Behance</a>
      <a className={ref} href="https://github.com/locomotivemtl">GitHub</a>
    </div>
    <div className={col3}>
      External
      <img className={imgLine} src="src\assets\menuLine3.png" alt="menuLine3" />
      <a className={ref} style={{ marginTop: '-33px' }} href="https://store.locomotive.ca/">Store</a>
      <a className={ref} href="https://locomotivemtl.github.io/locomotive-scroll/">Locomotive Scroll</a>
      <a className={ref} href="https://charcoal.locomotive.ca/en">Charcoal CMS</a>
      <a className={ref} href="https://explore.locomotive.ca/en">Annual trips</a>
    </div>
  </div>

)

export default Menu
