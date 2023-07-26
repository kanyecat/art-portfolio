import styles from '../style';

import { Hero, Work, Footer } from '../components';

const Home = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`bg-primary bg-cover bg-no-repeat bg-center ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Work />
        </div>
      </div>
    </div>
  )
}

export default Home