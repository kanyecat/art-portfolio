import React, { useState } from 'react';
import { prototypes1, prototypes2, prototypes3 } from '../constants';
import { Tilt } from 'react-tilt';
import "./gallery.css";

const Prototypegallery = () => {
    const [model, setModel] = useState(false);
    const [tempImage, setTempImage] = useState('');
    const getImage = (image) => {
    setTempImage(image);
    setModel(true);

    };
    return (
        <>
            <div className={model? "model open" : "model"} onClick={() => setModel(false)}>
                <img src={tempImage} loading='lazy'/>
                <div className='direction text-dimWhite font-opensans font-thin text-[14px]'>click anywhere to close</div>
            </div>
            <div className='gallery z-[11]'>
            {prototypes1.map((item, index) => (
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
            {prototypes2.map((item, index) => (
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
            {prototypes3.map((item, index) => (
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

export default Prototypegallery