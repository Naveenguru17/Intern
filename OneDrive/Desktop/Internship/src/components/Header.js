import React from 'react'
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <div className= 'bg-[#009000] p-2 flex justify-between items-center text-white'>
      <div>
        <h1 className='text-4xl p-2 font-poppins'>LOGO</h1>
      </div>
      <div >
        <ul className='flex justify-between text-xl items-center mx-2'>
          <li className='p-2 m-2'>Learners</li>
          <li className='p-2 m-2'>My Program</li>
          <li className='p-2 m-2'>Assessements</li>
          <li className='p-2 m-2'>Analytics</li>
          <li className='p-2 m-2'>User_name</li>
          <li className='p-2 m-2'><FaUserCircle className='text-2xl'/></li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Header/* Frame 9 */

// position: absolute;
// width: 1280px;
// height: 81px;
// left: 0px;
// top: 0px;
// overflow: scroll;

// background: #009000;
