import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm flex justify-between items-center px-5 w-100'>
      <img src="/logo.svg" className='size-[50px]'></img>
        <h1 className='font-extrabold text-[25px] font-[sans-serif]'>TravelBuddy</h1>
      <div className='flex justify-right'>
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Header
