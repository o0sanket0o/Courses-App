import React from 'react'
import './Spinner.css'
export const Spinner = () => {
  return (
    <div className='flex flex-col items-center h-[100vh] w-[100vw]'>
        <div className='spinner'></div>
        <p>Loading...</p>
    </div>
  )
}
