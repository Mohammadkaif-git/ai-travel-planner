import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex items-center flex-col mx-56 gap-9'>
      <h1 className='font-extrabold text-[50px] text-center mt-16'><span className='text-[#f56551]'>Discover Your Next Adventure with AI:</span><br></br>Persnoalised Itineraries at Your Fingerprints</h1>
      <p className='text-center text-xl text-gray-500 '>Your persnoalised trip planner and travel curator,creating custom trips tailored to your interest and budget.</p>
      <Link to={"create-trip"}>
        <button>Get Started,It's Free!</button>
      </Link>
    </div>
  )
}

export default Hero
