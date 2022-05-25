import React from 'react';
import storage from '../../../images/storage.png'
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content  flex-col-reverse lg:flex-row-reverse justify-between mx-10">
                <div className='w-50%'>
                    <img src={storage} className="rounded-lg w-[450px]" alt='' />
                </div>
                <div className='w-[50%]'>
                    <div>
                        <h1 className="text-5xl font-bold">TOOL STORAGE!</h1>
                        <p className="py-6">NEXIQ tool storage system allows professionals to easy
                            access the tools and becomes a relevant time saver in crucial activities.</p>
                        <button className="btn btn-primary">BOOK NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;