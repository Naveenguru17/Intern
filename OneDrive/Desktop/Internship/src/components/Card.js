import React from 'react'

const Card = () => {
  return (
    <div className='w-[357px] h-[533px] bg-white border-solid border-2 rounded-md border-gray-400'>
      <ul className='text-center text-xl'>
        <li className='p-2 hover:bg-gray-300'>Add Users</li>
        <li className='p-2 hover:bg-gray-300'>Manage Users</li>
        <li className='p-2 hover:bg-gray-300'>Add BU</li>
      </ul>
    </div>
  )
}

export default Card;