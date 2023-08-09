import styles from '../style';
import { transition } from "../hoc";
import { Hero, Work, Tech } from '../components';

const Home = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`bg-blue-gradient bg-cover bg-no-repeat bg-center ${styles.flexStart}`}>
      <div className='bg-cover fixed top-0 right-0 bg-hanji-blue opacity-[0.2] w-full h-[100vh] z-0'/>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          {/* <Tech /> */}
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} z-10`}>
          <Work />
        </div>
      </div>
    </div>
  )
}

export default transition(Home,"");