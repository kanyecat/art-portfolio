import styles from '../style';

import { Hero, Work, Tech } from '../components';

const Home = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`bg-blue-gradient bg-cover bg-no-repeat bg-center ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          {/* <Tech /> */}
        </div>
      </div>
      <div className={`bg-white-gradient ${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Work />
        </div>
      </div>
    </div>
  )
}

export default Home