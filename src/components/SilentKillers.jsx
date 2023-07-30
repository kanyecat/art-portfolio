import React from 'react'
import styles from '../style';

const SilentKillers = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`bg-primary bg-cover bg-no-repeat bg-center ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`${styles.paddingX}`}>
            <span className='text-white'>coming soon</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SilentKillers