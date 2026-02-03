import React from 'react';
import MyImage from '../../../assets/images/h.png';

const Hero = () => {
    return (
        <>
            <div className=' h-[90vh] ' style={{ backgroundSize: 'contain', backgroundPosition: 'center', backgroundImage: `url(${MyImage})`, backgroundRepeat: 'no-repeat' , backgroundSize: 'cover' }}>
                
            </div>
        </>
    );
};

export default Hero;