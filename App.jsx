import React from 'react'
import './app.css'


import Nav from './components/Nav'
import Mainroutes from './routes/mainroutes'

const App = () => {
  return (
    <div className=' w-screen h-screen bg-gray-800 text-white p-10  mx-auto'>
      <Nav />
      <Mainroutes />
    </div>
  )
}

export default App