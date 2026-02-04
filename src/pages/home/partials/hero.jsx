import React from 'react';
import MyImage from '../../../assets/images/bf79f27957a2f1b6fba4dbe3178c4e3e.jpg';

const Hero = () => {
    return (
    <>
    <div className="flex items-center h-[90vh]" style={{ backgroundImage: `url(${MyImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        
        <div className="px-[10vw]">

            <h1 className="text-white font-light text-7xl w-[80vw]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Full Stack DEVELOPMENT
            </h1>

            <p className="text-white font-mono  text-m w-[80vw] mt-2">
                Dream big, Start small ...
            </p>

            <button className="hover:bg-[#b7b7b7be] bg-[#9a939684] h-[7vh] rounded-lg mt-8 w-[25vw] text-[#f9e9eb] font-light text-2xl flex items-center justify-center gap-4 p-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Start ur dream NOW
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M1.99974 12.9999L1.9996 11L15.5858 11V5.58582L22 12L15.5858 18.4142V13L1.99974 12.9999Z" /></svg>
            </button>

        </div>

    </div>
    </>
    );
};

export default Hero;
