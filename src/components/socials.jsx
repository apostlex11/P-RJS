import React from 'react';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';
import x from '../assets/x.png';

const SocialBar = () => {
    return (
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-center space-y-4 z-50 p-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="Github" className="w-8 h-8" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="Linked In" className="w-8 h-8" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={x} alt="Twitter" className="w-8 h-8" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" className="w-8 h-8" />
            </a>
        </div>
    );
};

export default SocialBar;
