import React, { useState } from 'react';
import { experiment1, experiment2, experiment3 } from '../constants';
import { Tilt } from 'react-tilt';
import "./gallery.css";

const Experimentgallery = () => {
    const [model, setModel] = useState(false);
    const [tempImage, setTempImage] = useState('');
    const getImage = (image) => {
    setTempImage(image);
    setModel(true);

    };
    return (
        <>
            <div className={model? "model open z-[13]" : "model z-[13]"} onClick={() => setModel(false)}>
                <img src={tempImage} className="z-[13]" loading='lazy'/>
                <div className='direction text-dimWhite font-opensans font-thin text-[14px]'>click anywhere to close</div>
            </div>
            <div className='gallery z-[11]'>
            {experiment2.map((item, index) => (
                <Tilt className='pics'
                loading="lazy"
                options={{
                max: 15,
                scale: 1,
                speed: 450
                }}
                key={index}>
                    <img
                    className='pic'
                    src={item.image} 
                    onClick={() => getImage(item.image)}
                    />
                {/* </div> */}
                </Tilt>
            
                ))}
            {experiment3.map((item, index) => (
                <Tilt className='pics'
                loading="lazy"
                options={{
                max: 15,
                scale: 1,
                speed: 450
                }}
                key={index}>
                    <img
                    className='pic'
                    src={item.image} 
                    onClick={() => getImage(item.image)}
                    />
                {/* </div> */}
                </Tilt>
                ))}
            {experiment1.map((item, index) => (
                <Tilt className='pics'
                loading="lazy"
                options={{
                max: 15,
                scale: 1,
                speed: 450
                }}
                key={index}>
                    <img
                    className='pic'
                    src={item.image} 
                    onClick={() => getImage(item.image)}
                    />
                {/* </div> */}
                </Tilt>
            
                ))}
            </div>
        </>
    )
}

export default Experimentgallery