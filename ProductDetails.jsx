import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {

      
  const Navigate = useNavigate();
  const params = useParams();
  console.log(params);
  
  const navigateHandler = () =>{
      Navigate(-1)
  }


  return (
    <div>
        <h1>{params.name}</h1>
        <h2>Description</h2>
        <button onClick={navigateHandler}
         className=' px-7 py-2 mt-2 bg-amber-50 text-black  rounded active:scale-95'>Go Back</button>
    </div>
  )
}

export default ProductDetails