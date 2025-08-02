import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetails = () => {

      
  const Navigate = useNavigate();
  
  
  const navigateHandler = () =>{
      Navigate(-1)
  }


  return (
    <div>
        <h1 className='text-4xl font-thin mb-5'>More Services</h1>
        <h2 className='text-2xl font-light mb-5'>Choose us...</h2>
        <button onClick={navigateHandler}
         className=' px-7 py-2 mt-2 bg-amber-50 text-black  rounded active:scale-95'>Go Back</button>
    </div>
  )
}

export default ServiceDetails;