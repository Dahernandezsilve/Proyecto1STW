/* eslint-disable react/function-component-definition */
import React from 'react'
import {
  twoColumns,
  firstColumn,
  secondColumn,
  text1,
  text2,
  text11,
  text22,
} from './TwoColumns.module.css'

const TwoColumns = () => (
  <div className={twoColumns}>
    <div className={firstColumn}>
      <img src="src\assets\bag.png" alt="bigLine" />
      <span className={text1}>
        Oversized Tote Bag
      </span>
      <span className={text2}>
        Buy now
        <img style={{ marginLeft: '5px' }} src="src\assets\arrowRight.png" alt="bigLine" />
      </span>
      <br />
      <br />
      <span style={{ marginLeft: '-255px', color: 'black' }}>30 USD</span>
    </div>
    <div className={secondColumn}>
      <img src="src\assets\hoodie.png" alt="bigLine" />
      <span className={text11}>
        Black Hooded Sweatshirt
      </span>
      <span className={text22}>
        Buy now
        <img style={{ marginLeft: '5px', marginTop: '5px' }} src="src\assets\arrowRight.png" alt="bigLine" />
      </span>
      <br />
      <br />
      <span style={{
        marginTop: '40px', marginLeft: '-330px', color: 'black', float: 'left',
      }}
      >
        90 USD
      </span>
    </div>
  </div>
)

export default TwoColumns
