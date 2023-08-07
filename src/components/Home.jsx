import styles from '../style';
import { transition } from "../hoc";
import { Hero, Work, Tech } from '../components';

const Home = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`bg-blue-gradient bg-cover bg-no-repeat bg-center ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className='bg-contain fixed top-0 right-0 bg-hanji-white w-full h-[100vh] z-0'/>
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

export default transition(Home,"");