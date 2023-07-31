import styles from '../style';
import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant } from '../motion'
import { TypingText } from '../components';
import { me } from "../assets";
import { Tech } from '../components';

const About = () => {
  return (
    <>
    <div className={`bg-orangered-gradient ${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}>
      <section id='home' className={`flex md:flex-row flex-col`}>
      <span className='text-white font-arimo font-normal pb-10 md:text-[22px] text-[16px]'>Hello, I'm Joo Hee! I am currently pursuing a Bachelors 
      in Engineering Studies and Arts (Mechanical Engineering and Art) and a minor in Physical Computing of IDeATe 
      at Carnegie Mellon University. </span>
        <img src={me} className='w-[400px]'/>
      </section>
    </div>
    <div className={`${styles.boxWidth}`}>
      <Tech />
    </div>
    </>
  )
}

export default About