import React from 'react'
import Edit from './Edit'
import Card from './Card'

const Body = () => {
  return (
    <div className='m-2'>
      <div className='flex justify-between items-center mx-4'>
        <h1 className='text-lg'>Setings {'>'} Manager user {'>'} Edit</h1>
        <div className='border-solid border-2 border-gray-400 rounded-md w-24 bg-white'>
          <h1 className='px-4 text-center border-b-2 border-gray-400'>Setings</h1>
          <h1 className='px-4 text-center'>LogOut</h1>
        </div>
      </div>
      <div className='mx-4 flex  justify-between m-4'>
        <Card />
        <Edit />
      </div>
    </div>
  )
}

export default Body