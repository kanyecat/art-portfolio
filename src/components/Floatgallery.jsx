'use client';
import { prototypes1, prototypes2, prototypes3, experiment1, experiment2, experiment3 } from '../constants';
import { useRef, useState } from "react";
import { gsap } from 'gsap/dist/gsap';
import Experimentgallery from './Experimentgallery';
import Prototypegallery from './Prototypegallery';
import "./gallery.css";
import styles from '../style';
import { menu } from '../assets';
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
    <div className={`${styles.boxWidth} justify-center z-10`}>
    <div className='flex flex-col gap-16'>
        <div onMouseMove={(e) => {manageMouseMove(e)}} className={`${viewPro ? '' : 'hover:bg-[rgba(255,255,255,0.1)] transition ease-in-out duration-300'} w-[100%] h-[90vh] relative corner-border overflow-hidden`}>
            <div ref={plane1} className={`${viewPro ?'hidden' :'brightness-[0.8] w-full h-[100%] absolute'} `}>
                {prototypes1.map((item, index) => (
                <img
                loading="lazy"
                alt="image"
                className={`${item.position} w-[12%] absolute saturate-0`}
                src={item.image}
                onClick={() => getImage(item.image)}
                />
                ))}
            </div>
            <div ref={plane2} className={`${viewPro ? 'hidden' : 'brightness-[0.9] w-full h-[100%] absolute'}`}>
                {prototypes2.map((item, index) => (
                <img
                loading="lazy"
                alt="image"
                className={`${item.position} w-[13%] absolute saturate-0`}
                src={item.image} 
                onClick={() => getImage(item.image)}
                />
                ))}
            </div>
            <div ref={plane3} className={`${viewPro ? 'hidden' : 'brightness-[1] w-full h-[100%] absolute cursor-pointer'}`}
            onClick={() => showPro(true)}>
                {prototypes3.map((item, index) => (
                <img
                loading="lazy"
                alt="image"
                className={`${item.position} w-[14%] absolute saturate-0`}
                src={item.image}
                />
                ))}
            </div>
            <div className={`${viewPro? 'hidden' : 'absolute top-[50%] left-[45%] cursor-pointer'}`} onClick={() => showPro(true)}>
                <h1 className='text-center text-white font-opensans font-normal text-[18px]'>Digital Prototypes</h1>
                <p className='text-center text-dimWhite font-opensans font-normal text-[14px]'>3D Rendering</p>
            </div>
            <div className={`${viewPro? "gallery-container open" : "gallery-container"} scroll-box`}>
                <Prototypegallery />
            </div>
            <img src={menu}
            className={`w-[25px] h-[25px] object-contain z-[12] sticky top-[2.5%] left-[1.5%] cursor-pointer ${viewPro? "menu-button open" : "menu-button"}`}
                onClick={() => showPro((prev) => !prev)}
            />
        </div>
        <div onMouseMove={(e) => {manageMouseMove(e)}} className={`${viewExp ? '' : 'hover:bg-[rgba(255,255,255,0.1)] transition ease-in-out duration-300'} w-[100%] h-[90vh] relative corner-border overflow-hidden`}>
            <div ref={plane4} className={`${viewExp ? 'hidden' :'brightness-[0.8] w-[100%] h-[100%] absolute'} `}>
                {experiment1.map((item, index) => (
                <img
                loading="lazy"
                alt="image"
                className={`${item.position} w-[12%] absolute saturate-0`}
                src={item.image}
                onClick={() => getImage(item.image)}
                />
                ))}
            </div>
            <div ref={plane5} className={`${viewExp ?'hidden' : 'brightness-[0.9] w-full h-[100%] absolute'}`}>
                {experiment2.map((item, index) => (
                <img
                loading="lazy"
                alt="image"
                className={`${item.position} w-[13%] absolute saturate-0`}
                src={item.image} 
                onClick={() => getImage(item.image)}
                />
                ))}
            </div>
            <div ref={plane6} className={`${viewExp ?'hidden' : 'brightness-[1] w-full h-[100%] absolute cursor-pointer'}`}
            onClick={() => showExp(true)}>
                {experiment3.map((item, index) => (
                <img
                loading="lazy"
                alt="image"
                className={`${item.position} w-[14%] absolute saturate-0`}
                src={item.image}
                />
                ))}
            </div>
            <div className={`${viewExp? 'hidden' : 'absolute top-[50%] left-[45%] cursor-pointer'}`} onClick={() => showExp(true)}>
                <h1 className='text-center text-white font-opensans font-normal text-[18px]'>Experiments</h1>
                <p className='text-center text-dimWhite font-opensans font-normal text-[14px]'>Sketch, Painting, Design</p>
            </div>
            <div className={`${viewExp? "gallery-container open" : "gallery-container"} scroll-box`}>
                <Experimentgallery />
            </div>
            <img src={menu}
            className={`w-[25px] h-[25px] object-contain z-[12] sticky top-[2.5%] left-[1.5%] cursor-pointer ${viewExp? "menu-button open" : "menu-button"}`}
            onClick={() => showExp((prev) => !prev)}
            />
        </div>
    </div>
    </div>
  )
}

export default Floatgallery