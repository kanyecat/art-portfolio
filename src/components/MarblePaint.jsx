import React from 'react'
import styles from '../style';
import { transition } from "../hoc";
import { marblepaint, marblepaint1, marblepaint2 } from '../assets';

const MarblePaint = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`bg-primary bg-cover bg-no-repeat bg-center ${styles.paddingY} ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <img src={marblepaint2} className='w-full md:h-[400px] h-[100px] object-cover'/>
          <span className='text-white'>coming soon</span>
        </div>
      </div>
    </div>
    
  )
}

export default transition(MarblePaint,"")