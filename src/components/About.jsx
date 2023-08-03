import styles from '../style';
import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant } from '../motion'
import { TypingText } from '../components';
import { me } from "../assets";
import { Tech } from '../components';
import { transition } from "../hoc";

const About = () => {
  return (
    <>
    <div id='about' className="bg-orangered-gradient w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <section className={`flex flex-col`}>
            <div className='pb-10 md:pr-6'>
              <span className='text-dimWhite font-arimo font-normal md:text-[24px] text-[16px]'>Hello, I'm Joo Hee. I am currently in the</span>
              <span className='text-white font-grandiflora font-normal md:text-[26px] text-[18px]'> Bachelor of Engineering Studies and Arts (BESA) </span>
              <span className='text-dimWhite font-arimo font-normal md:text-[24px] text-[16px]' >intercollege degree program at Carnegie Mellon University. I am pursuing
              two majors in the</span>
              <span className='text-white font-grandiflora font-normal md:text-[26px] text-[18px]'> School of Art </span>
              <span className='text-dimWhite font-arimo font-normal md:text-[24px] text-[16px]'>and</span>
              <span className='text-white font-grandiflora font-normal md:text-[26px] text-[18px]'> Mechanical Engineering </span>
              <span className='text-dimWhite font-arimo font-normal md:text-[24px] text-[16px]'>as well as a minor in</span>
              <span className='text-white font-grandiflora font-normal md:text-[26px] text-[18px]'> Physical Computing (IDeATe)</span>
              <span className='text-dimWhite font-arimo font-normal md:text-[24px] text-[16px]'>.</span>
            </div>
            <div className='flex md:flex-row flex-col justify-center items-center'>
              <img src={me} className='w-[400px]' loading='lazy'/>
              <div className='md:pl-6 justify-center items-center'>
                <span className='text-white font-arimo font-normal md:text-[18px] text-[16px]'></span>
              </div>
            </div>
          </section>
          <Tech />
        </div>
      </div>
    </div>
    </>
  )
}

export default transition(About);