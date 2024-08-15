import React from 'react';
import './stat.css'
const Stat = () => {
    return (
        <div className='my-4'>
          {/* stat==home */}

          <div className='container'>
           <div className="md:flex justify-around items-center">
           <img src="./public/assets/images/bg1.png" alt="" />
            <img src="./public/assets/images/bg2.png" alt="" />
           </div>
            <div className="other md:flex items-center justify-evenly">
               <div className="">
               <h1 className="font-bold md:text-2xl">One Step Closer To Your <span className="text-">Dream Job</span> </h1>
               <p className='text-sm'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
               <button className='btn btn-accent'>Get Started</button>
               </div>
                <img className='md:w-64' src="./public/assets/images/user.png"  />
            </div>
           
          </div>
        </div>
    );
};

export default Stat;