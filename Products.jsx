import React from 'react'
import { useNavigate } from 'react-router-dom'

const Products = () => {
  
  const navigate = useNavigate();
  const navigateHandler = (name) =>{
      navigate(`/products/details/${name}`);
  }


  return (
    <div >
      <h1 className='text-5xl font-thin mb-10'>Products</h1>
      <div className='mb-10'>
        <h1 className='text-3xl font-thin'>Product 1</h1>
        <button onClick={() => navigateHandler("Product 1")} 
        className=' px-7 py-2 mt-2 bg-amber-50 text-black  rounded active:scale-95'>See Details</button>
      </div>

      <div className='mb-10'>
        <h1 className='text-3xl font-thin'>Product 2</h1>
        <button onClick={() => navigateHandler('Product 2')}
        className=' px-7 py-2 mt-2 bg-amber-50 text-black  rounded active:scale-95'>See Details</button>
      </div>

      <div className='mb-10'>
        <h1 className='text-3xl font-thin'>Product 3</h1>
        <button onClick={() => navigateHandler('Product 3')}
        className=' px-7 py-2 mt-2 bg-amber-50 text-black  rounded active:scale-95'>See Details</button>
      </div>
      </div>
  )
}

export default Products