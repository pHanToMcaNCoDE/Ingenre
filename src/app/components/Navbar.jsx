import React from 'react'
import { RiSearch2Line } from "react-icons/ri";

const Navbar = () => {
    
  return (
    <nav className='flex justify-between items-center lg:ml-[14.5%] lg:w-[85.5%] py-4 px-3 h-[70px] bg-neutral-800'>
      <div className='w-[62%] lg:w-[35%] bg-black rounded-[.5rem] flex items-center gap-x-2 p-2'>
        <RiSearch2Line className='text-white' size={22}/>
        <input className='bg-transparent outline-none text-[.875rem] font-mono tracking-wider w-full p-1 text-gray-300' type='text' placeholder='Search for your anime of choice...'></input>
      </div>

        <ul className='flex items-center gap-x-8'>
          <li className='text-white font-mono text-[.875rem] tracking-wider cursor-pointer'>About Ingenre</li>
        </ul>
    </nav>
  )
}

export default Navbar
