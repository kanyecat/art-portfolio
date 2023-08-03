import React from 'react'
import styles from '../style';
import { transition } from "../hoc";
import { marblepaint, marblepaint1, marblepaint2 } from '../assets';

const MarblePaint = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`bg-primary bg-cover bg-no-repeat bg-center ${styles.paddingY} ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} justify-center`}>
          <div className='w-full px-6 text-center md:mb-4 mb-3'>
            <span className='md:text-[90px] text-[38px] text-white font-grandiflora'>MARBLE PAINT</span>
          </div>
          <img src={marblepaint2} className='w-full md:h-[400px] h-[100px] object-cover mb-4'/>
          <span className='text-white font-animo'>Marble Paint is a machine that allows you to paint with marbles using 
          canvas movement. The whole machine consists of a canvas connected to four crank motion mechanisms moving 
          in succession.</span>
        </div>
      </div>
    </div>
    
  )
}

export default transition(MarblePaint,"")