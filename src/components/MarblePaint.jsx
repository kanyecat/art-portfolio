import React from 'react'
import styles from '../style';
import { marblepaint, marblepaint1, marblepaint2 } from '../assets';

const MarblePaint = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`bg-primary bg-cover bg-no-repeat bg-center ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`${styles.paddingX}`}>
            <img src={marblepaint2} className='w-full h-[400px] object-cover'/>
            <span className='text-white'>coming soon</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarblePaint