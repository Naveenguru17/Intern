import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
const Filter = () => {
  return (
    <div className=" bg-white rounded-md border-solid border-2 border-gray-400 py-4 mx-4">
      <ul className="flex justify-around text-lg items-center ">
        <li className="border-solid border-2 border-gray-400 rounded-md px-8 py-1 flex items-center">
          <h1>All Users</h1>
          <IoMdArrowDropdown className="ml-2 text-3xl"></IoMdArrowDropdown>
        </li>
        <li className="border-solid border-2 border-gray-400 rounded-md px-8 py-1 flex items-center">
          <h1>All Rolls</h1>
          <IoMdArrowDropdown className="ml-2 text-3xl"></IoMdArrowDropdown>
        </li>
        <li className="border-solid border-2 border-gray-400 rounded-md px-8 py-1 flex items-center">
          <h1>Email id</h1>
          <FaMagnifyingGlass className="ml-8 text-xl"/>
          
        </li>
        <li>
          <button className="bg-[#009000] text-white px-4 py-2 rounded-md">
            Apply
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
