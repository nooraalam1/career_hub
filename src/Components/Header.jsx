import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className='my-4'>
            <div className=' text-center md:flex justify-evenly items-center'>

<h1 className=" font-bold text-3xl">CareerHub</h1>
<div className='md:flex gap-4'>
<NavLink to="/stat" className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
}>Home</NavLink>
<NavLink to="/AJ"  className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
}>Applied Jobs</NavLink>
<NavLink to="/blog"  className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
}>Blog</NavLink>
</div>

<div>
    <NavLink to="/SA"> <button className='btn btn-accent'>Start Applying</button> </NavLink>
</div>
</div>
        </div>
    );
};

export default Header;