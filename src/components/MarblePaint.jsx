import React from 'react'
import styles from '../style';
import { transition } from "../hoc";
import { marblepaint, marblepaint1, marblepaint2 } from '../assets';
import "./gallery.css"

const MarblePaint = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`bg-primary bg-cover bg-no-repeat bg-center ${styles.paddingY} ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} flex flex-wrap justify-center`}>
          <div className='flex md:flex-row flex-col'>
            <div className='flex flex-col flex-[1.5] image-box md:h-[650px]'>
              <span className='md:text-[90px] text-[35px] text-white font-grandiflora px-6 text-start md:mb-4 mb-3'>MARBLE PAINT</span>
              <img src={marblepaint} className='w-auto h-[auto] object-cover mt-6 mb-6'/>
              <img src={marblepaint2} className='w-auto h-[auto] object-cover mt-6 mb-6'/>
            </div>
            <div className='flex flex-col flex-1 md:pl-10 md:pt-40'>
              <div className={`w-full pt-3 text-start md:mb-4 mb-3`}>
                <span className='md:text-[50px] text-[20px] text-white font-grandiflora'>ABSTRACT</span>
              </div>
              <span className={`text-white font-animo font-normal md:text-[18px] text-[16px]`}>Marble Paint is a machine that allows you to paint with marbles using 
              canvas movement. The whole machine consists of a canvas connected to four crank motion mechanisms moving 
              in succession.</span>
              <div className={`w-full pt-5 text-start md:mb-4 mb-3`}>
                <span className='md:text-[50px] text-[20px] text-white font-grandiflora'>OBJECTIVES</span>
              </div>
              <ul className={`text-white font-animo font-normal md:text-[18px] text-[16px] objectives`}>
                <li>Create an interactive painting machine</li>
                <li>Allow the children to  have artistic freedom</li>
                <li>Make the project easy to interact with</li>
                <li>Able to produce variety of paintings (paintings are not structured)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default transition(MarblePaint,"")