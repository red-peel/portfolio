import React from 'react';

function HeroSection() {
    return (
        <div className='bg-gradient-to-br from-orange-500 p-10 md:p-40'>
            <div className="max-w-4xl mx-auto ">
                <div className='text-slate-900 text-left '>
                    <p className='text-3xl'> Elias Gonzalez</p>
                    <p className='text-xl font-thin'> Fullstack Developer </p>
                    <p className="md:text-5xl leading-tight">Hello! I am Elias Gonzalez a Fullstack <br/>Java-React developer based out of San Antonio, Texas!</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
