import React from 'react'
import { RiSearch2Line } from "react-icons/ri";

const Navbar = () => {
    
  return (
    <nav className='flex justify-between items-center w-[full] py-4 px-3 h-[70px]'>
        <div className='w-[35%] bg-gray-100 rounded-[.5rem] flex items-center gap-x-2 p-2'>
            <RiSearch2Line size={22}/>
            <input className='bg-gray-100 outline-none text-[.875rem] font-mono tracking-wider w-full p-1' type='text' placeholder='Search for your anime of choice...'></input>
        </div>

        <ul className='flex items-center gap-x-8'>
            <li className='font-mono text-[.875rem] tracking-wider cursor-pointer'>Movies</li>
            <li className='font-mono text-[.875rem] tracking-wider cursor-pointer'>Series</li>
        </ul>
    </nav>
  )
}

export default Navbar
