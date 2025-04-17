import React from 'react';

import bookimage from './../../assets/image.png';

const Banner = () => {
    return (
        <div className="lg:hero rounded-lg bg-base-300 min-h-screen">
    <div className="hero-content flex-col lg:gap-[86px] lg:p-[100px] lg:flex-row-reverse">
    <img
      src={bookimage}
      className="max-w-sm " />
    <div className=''>
      <h1 className="text-center lg:text-left lg:text-5xl text-3xl font-bold lg:pb-[48px]">Books to freshen up your bookshelf</h1>
      <button className="rounded-md text-white lg:px-[28px] lg:py-[12px] lg:text-[18px] bg-[#23BE0A]">View The List</button>
    </div>
    </div>
        </div>
    );
};

export default Banner;