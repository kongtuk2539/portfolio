// Spinner.js
import React from 'react';
import Dog from '../assets/img/pf1.png'

const Spinner = ({ isVisible }) => {
    if (!isVisible) {
        return null; // If isVisible is false, don't render the spinner
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-40">
            <div className="animate-bounce">
                <img src={Dog} alt="" className='w-[220px]' />
            </div>
        </div>
    );
};

export default Spinner;