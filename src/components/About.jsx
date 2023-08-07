import styles from '../style';
import { me, me2 } from "../assets";
import { Tech } from '../components';
import { transition } from "../hoc";
import "./gallery.css";
import '../index.css';

const About = () => {
  return (
    <>
    <div id='about' className="bg-orangered-gradient w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <div className='bg-contain fixed top-0 right-0 bg-hanji-white opacity-[0.125] w-full h-[100vh] z-0'/> */}
          <div className={`flex md:flex-row flex-col md:flex-wrap justify-center`}>
            <div className='flex flex-1 flex-col pb-10 scroll-box md:h-[700px] z-10'>
              <div className='flex flex-row md:pb-8 pb-6 about-section '>
                <span className='flex-[0.25] text-end pr-4 text-white font-grandiflora md:text-[14px] text-[12px]'>ABOUT</span>
                <div className='flex-[2]'>
                  <span className='text-white font-opensans font-thin md:text-[18px] text-[18px] leading-[30px]'>I am currently in the</span>
                  <span className='text-white font-opensans font-normal md:text-[18px] text-[18px] leading-[30px]'> Bachelor of Engineering Studies and Arts (BESA) </span>
                  <span className='text-white font-opensans font-thin md:text-[18px] text-[18px] leading-[30px]'>intercollege degree program at Carnegie Mellon University. I am pursuing
                  two majors in the</span>
                  <span className='text-white font-opensans font-normal md:text-[18px] text-[18px] leading-[30px]'> School of Art </span>
                  <span className='text-white font-opensans font-thin md:text-[18px] text-[18px] leading-[30px]'>and</span>
                  <span className='text-white font-opensans font-normal md:text-[18px] text-[18px] leading-[30px]'> Mechanical Engineering </span>
                  <span className='text-white font-opensans font-thin md:text-[18px] text-[18px] leading-[30px]'>as well as a minor in</span>
                  <span className='text-white font-opensans font-normal md:text-[18px] text-[18px] leading-[30px]'> Physical Computing (IDeATe).</span>
                </div>
              </div>
              <div className='visible md:hidden flex-[0.7] flex flex-row justify-center items-center z-10'>
                <img src={me} className='w-full' loading='lazy'/>
              </div>
              <div className='flex flex-row md:pb-8 pb-6 md:pt-8 pt-6 about-section'>
                <span className='flex-[0.25] text-end pr-4 text-white font-grandiflora md:text-[14px] text-[12px]'>01</span>
                <div className='flex-[2]'>
                  <span className='text-white font-opensans font-thin md:text-[16px] text-[16px]'>Carnegie Mellon University First-Year Art Award: Wilfred Radio</span>
                </div>
              </div>
              <div className='flex flex-row md:pb-8 pb-6 md:pt-8 pt-6 about-section'>
                <span className='flex-[0.25] text-end pr-4 text-white font-grandiflora md:text-[14px] text-[12px]'>02</span>
                <div className='flex-[2]'>
                  <span className='text-white font-opensans font-thin md:text-[16px] text-[16px]'>Scholastic Art & Writing Awards: National Gold Medal</span>
                </div>
              </div>
              <div className='flex flex-row md:pb-8 pb-6 md:pt-8 pt-6 about-section'>
                <span className='flex-[0.25] text-end pr-4 text-white font-grandiflora md:text-[14px] text-[12px]'>03</span>
                <div className='flex-[2]'>
                  <span className='text-white font-opensans font-thin md:text-[16px] text-[16px]'>Scholastic Art & Writing Awards: New York Life Foundation Selected Work</span>
                </div>
              </div>
              <div className='flex flex-row md:pb-8 pb-6 md:pt-8 pt-6 about-section'>
                <span className='flex-[0.25] text-end pr-4 text-white font-grandiflora md:text-[14px] text-[12px]'></span>
                <div className='flex-[2]'>
                  <span className='text-white font-opensans font-thin md:text-[18px] text-[18px] leading-[30px]'>The art of kinetics always captivates my interest as I find the sensory experience that comes from the movement of artwork particularly gratifying.
                  I am always exploring kinetic art that triggers sensory, emotional, and intellectual responses through its mechanical components.</span>
                </div>
              </div>
              <div className='flex flex-row md:pb-8 pb-6 md:pt-8 pt-6 about-section'>
                <span className='flex-[0.25] text-end pr-4 text-white font-grandiflora md:text-[14px] text-[12px]'>04</span>
                <div className='flex-[2]'>
                  <span className='text-white font-opensans font-thin md:text-[16px] text-[16px]'>Front-end developer at Hyix LLC - San Diego, CA - Present</span>
                </div>
              </div>
              <div className='flex flex-row md:pb-8 pb-6 md:pt-8 pt-6 about-section'>
                <span className='flex-[0.25] text-end pr-4 text-white font-grandiflora md:text-[14px] text-[12px]'>04</span>
                <div className='flex-[2]'>
                  <span className='text-white font-opensans font-thin md:text-[16px] text-[16px]'>Engineering Instructor at Robolink - San Diego, CA</span>
                </div>
              </div>
              <div className='flex flex-row md:pb-8 pb-6 md:pt-8 pt-6'>
                <span className='flex-[0.25] text-end pr-4 text-white font-grandiflora md:text-[14px] text-[12px]'></span>
                <div className='flex-[2]'>
                  <span className='text-white font-opensans font-thin md:text-[18px] text-[18px] leading-[30px]'>While working as an engineering instructor at a summer basecamp hosted by Robolink, I fortunately built
                  a connection with another instructor working as a software engineer. After stepping into the web development industry, I learned how to empathize with the clients and provide them with solutions. Since then, my design
                  thinking skills have been improving in my main disciplines: art and mechanical enginneering.</span>
                </div>
              </div>
            </div>
            <div className='flex-[0.05] h-[700px] w-[auto]'></div>
            <div className='hidden md:visible md:flex-[0.7] md:flex md:flex-row flex-col justify-center items-start z-10'>
              <img src={me} className='w-full' loading='lazy'/>
            </div>
          </div>
          <div className={`flex flex-col md:flex-wrap justify-center items-center md:py-16`}>
            <div className='md:w-[400px] bg-hanji-black items-center justify-center z-10'>
              <img src={me2} className='py-10 md:px-16 px-10' loading='lazy'/>
              <div className='md:px-16 px-10 pb-10'>
                <span className='text-white font-opensans font-thin md:text-[16px] text-[16px] leading-[30px]'>Aside from school and work, I am always making things after exploring nature, calligraphy, and films.</span>
              </div>
            </div>
          </div>
          <Tech />
        </div>
      </div>
    </div>
    </>
  )
}

export default transition(About);