'use client';
import { prototypes1, prototypes2, prototypes3, experiment1, experiment2, experiment3 } from '../constants';
import { useRef, useState } from "react";
import { gsap } from 'gsap/dist/gsap';
import Experimentgallery from './Experimentgallery';
import Prototypegallery from './Prototypegallery';
import "./gallery.css";
import { useTransform, useScroll } from 'framer-motion';

const Floatgallery = () => {
    const plane1 = useRef(null);
    const plane2 = useRef(null);
    const plane3 = useRef(null);
    const plane4 = useRef(null);
    const plane5 = useRef(null);
    const plane6 = useRef(null);
    let requestAnimationFrameId = null;
    let xForce = 0;
    let yForce = 0;
    const easing = 0.08;
    const speed = 0.01;

    const manageMouseMove = (e) => {
        const { movementX, movementY } = e;
        xForce += movementX * speed;
        yForce += movementY * speed;
        if(requestAnimationFrameId == null){
            requestAnimationFrameId = requestAnimationFrame(animate);
        }
    };

    const lerp = (start, target, amount) => start * (1 - amount) +target * amount;

    const animate = () => {
        xForce = lerp(xForce, 0, easing);
        yForce = lerp(yForce, 0, easing);
        gsap.set(plane1.current, {x: `+=${xForce}`, y: `+=${yForce}`})
        gsap.set(plane2.current, {x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}`})
        gsap.set(plane3.current, {x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}`})
        gsap.set(plane4.current, {x: `+=${xForce}`, y: `+=${yForce}`})
        gsap.set(plane5.current, {x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}`})
        gsap.set(plane6.current, {x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}`})
        if(Math.abs(xForce) < 0.01) xForce = 0;
        if(Math.abs(yForce) < 0.01) yForce = 0;
        if(xForce != 0 || yForce != 0){
        requestAnimationFrame(animate);
        }
        else{
        cancelAnimationFrame(requestAnimationFrameId)
        requestAnimationFrameId = null;
        }
    };

    const [viewExp, showExp] = useState(false);
    const [viewPro, showPro] = useState(false);

  return (
    <div className='flex flex-col gap-16'>
        {/* <div className={model? "model open" : "model"} onClick={() => setModel(false)}>
            <img src={tempImage} loading='lazy'/>
            <div className='direction text-dimWhite font-opensans font-thin text-[14px]'>click anywhere to close</div>
        </div> */}
        <div onMouseMove={(e) => {manageMouseMove(e)}} className={`hover:bg-[rgba(0,0,0,0.6)] transition ease-in-out duration-300 w-[100%] h-[100vh] z-10 relative border-[1px] overflow-hidden`}>
            <div ref={plane1} className= {`${viewPro ?'hidden' :'brightness-[0.85] w-[100%] h-[100%] absolute'} `}>
                {prototypes1.map((item, index) => (
                <img
                loading="lazy"
                alt="image"
                className={`${item.position} md:w-[200px] w-[120px] absolute`}
                src={item.image}
                onClick={() => getImage(item.image)}
                />
                ))}
            </div>
            <div ref={plane2} className={`${viewPro ? 'hidden' : 'brightness-[0.925] w-full h-[100%] absolute'}`}>
                {prototypes2.map((item, index) => (
                <img
                loading="lazy"
                alt="image"
                className={`${item.position} md:w-[220px] w-[140px] absolute`}
                src={item.image} 
                onClick={() => getImage(item.image)}
                />
                ))}
            </div>
            <div ref={plane3} className={`${viewPro ? 'hidden' : 'brightness-[1] w-full h-[100%] absolute'}`}
            onClick={() => showPro(true)}>
                {prototypes3.map((item, index) => (
                <img
                loading="lazy"
                alt="image"
                className={`${item.position} md:w-[250px] w-[150px] absolute`}
                src={item.image}
                />
                ))}
                <div className='absolute top-[50%] left-[45%]'>
                    <h1 className='text-center text-white font-opensans font-normal text-[18px]'>Digital Prototypes</h1>
                    <p className='text-center text-dimWhite font-opensans font-normal text-[15px]'>3D Rendering</p>
                </div>
            </div>
            <div className={`${viewPro? "w-full h-[100%] absolute scroll-box transition ease-in-out duration-300" : "hidden"}`}>
                <Prototypegallery />
                <button className='sticky top-[2%] left-[1%] w-[25px] h-[25px] text-white z-[12]'
                onClick={() => showPro(false)}
                >close</button>
            </div>
        </div>
        <div onMouseMove={(e) => {manageMouseMove(e)}} className={`hover:bg-[rgba(0,0,0,0.6)] transition ease-in-out duration-300 w-[100%] h-[100vh] z-10 relative border-[1px] overflow-hidden`}>
            <div ref={plane4} className={`${viewExp ? 'hidden' :'brightness-[0.85] w-[100%] h-[100%] absolute'} `}>
                {experiment1.map((item, index) => (
                <img
                loading="lazy"
                alt="image"
                className={`${item.position} md:w-[200px] w-[120px] absolute`}
                src={item.image}
                onClick={() => getImage(item.image)}
                />
                ))}
            </div>
            <div ref={plane5} className={`${viewExp ?'hidden' : 'brightness-[0.925] w-full h-[100%] absolute'}`}>
                {experiment2.map((item, index) => (
                <img
                loading="lazy"
                alt="image"
                className={`${item.position} md:w-[220px] w-[140px] absolute`}
                src={item.image} 
                onClick={() => getImage(item.image)}
                />
                ))}
            </div>
            <div ref={plane6} className={`${viewExp ?'hidden' : 'brightness-[1] w-full h-[100%] absolute'}`}
            onClick={() => showExp(true)}>
                {experiment3.map((item, index) => (
                <img
                loading="lazy"
                alt="image"
                className={`${item.position} md:w-[250px] w-[150px] absolute z-[11]`}
                src={item.image}
                />
                ))}
                <div className='absolute top-[50%] left-[45%]'>
                    <h1 className='text-center text-white font-opensans font-normal text-[18px]'>Experiments</h1>
                    <p className='text-center text-dimWhite font-opensans font-normal text-[15px]'>Sketch, Painting, Design</p>
                </div>
            </div>
            <div className={`${viewExp? "w-full h-[100%] absolute scroll-box opacity-[1] transition-opacity ease-in-out duration-600" : "hidden opacity-[0]"}`}>
                <Experimentgallery />
                <button className='sticky top-[2%] left-[1%] w-[25px] h-[25px] text-white z-[12]'
                onClick={() => showExp(false)}
                >close</button>
            </div>
        </div>
    </div>
  )
}

export default Floatgallery