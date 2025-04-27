import React from 'react';
import { Link } from 'react-router';

const navbar = () => {
    const links = <>
    <Link to='/'><li className='m-2 font-semibold text-[18px] hover:text-[#23BE0A] py-2 px-4 hover:border hover:rounded-lg'>Home</li></Link>
    <Link to='/about'><li className='m-2 font-semibold text-[18px] hover:text-[#23BE0A] py-2 px-4 hover:border hover:rounded-lg'>About</li></Link>
    <Link to='/readList'><li className='m-2 font-semibold text-[18px] hover:text-[#23BE0A] py-2 px-4 hover:border hover:rounded-lg'>Listed Books</li></Link>
    <li className='m-2 font-semibold text-[18px] hover:text-[#23BE0A] py-2 px-4 hover:border hover:rounded-lg'>Pages to Read</li>
    
    </>
    return (
        <div className="navbar bg-base-100 py-[30px]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
      </ul>
    </div>
    <a className="font-bold text-[28px]">BookBloom</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-[16px] px-1">
        {links}
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <a className="rounded-md text-white md:px-[28px] md:py-[12px] md:text-[18px] bg-[#23BE0A]">Sign In</a>
    <a className="rounded-md text-white md:px-[28px] md:py-[12px] md:text-[18px] bg-[#59C6D2]">Sign Up</a>
  </div>
</div>
    );
};

export default navbar;