/* eslint-disable react/function-component-definition */
import React from 'react'
import {
  homeExtras,
  imgFooter,
} from './HomeExtras.module.css'
import Extras from '../Extras/Extras'
import TwoColumns from '../TwoColumns/TwoColumns'
import Menu from '../Menu/Menu'

const HomeExtras = () => (
  <div className={homeExtras}>
    <Extras />
    <TwoColumns />
    <Menu />
    <img className={imgFooter} src="src\assets\footer.png" alt="arrowRight" />
  </div>

)

export default HomeExtras
