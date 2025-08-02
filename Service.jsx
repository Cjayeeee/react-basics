import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import ServiceDetails from './ServiceDetails';

const Service = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h1 className='text-4xl font-thin mb-5'>
        Service
      </h1>

      <button onClick={() => navigate("/service/details")}
        className=' px-7 py-2  bg-amber-50 text-black  rounded active:scale-95 mt-5 mb-15'>See Details</button>
        <hr  className='my-10'/>
        <Outlet />
    </div>
  )
}

export default Service