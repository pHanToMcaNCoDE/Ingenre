import Image from 'next/image'
import React from 'react'
import icon from '../assets/gaming.png'
import { IoHomeOutline } from "react-icons/io5";
import { FaTheaterMasks } from "react-icons/fa";
import { RiMovie2Line } from "react-icons/ri";
import { PiTelevision } from "react-icons/pi";
import { PiShapesLight } from "react-icons/pi";
import { HiOutlineUsers } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";


const AsideBar = () => {
  return (
    <aside class='h-screen md:w-[20%] lg:w-[15%] border-r border-[#000] fixed left-[-100%] md:left-0 lg:left-0'>
       
       {/* Logo */}
        <div className='flex gap-x-3 items-center py-5 px-4'>
            <Image src={icon} alt='Ingenre Icon' width={40} height={40}></Image>
            <p className='text-[1.25rem] text-blue-400 font-mono tracking-widest leading-snug text-center'>Ingenre</p>
        </div>

        {/* Aside Menu */}
        <div className='w-full py-4'>
            {/* Menu */}
            <div className=''>
                <h1 className='pt-6 text-[1rem] font-mono tracking-widest text-[#000] font-semibold pl-5'>Menu</h1>
                <ul className='w-full pt-3'>
                    <li className='w-full duration-150 hover:border-r-4 hover:rounded-e-sm hover:border-r-blue-400 hover:bg-blue-50 cursor-pointer p-3 ml-[.2rem] font-mono tracking-wider text-[1rem] text-[#555] flex gap-x-5 items-center'><IoHomeOutline className='text-[#000]' size={21}/>Home</li>

                    <li className='w-full duration-150 hover:border-r-4 hover:rounded-e-sm hover:border-r-blue-400 hover:bg-blue-50 cursor-pointer p-3 ml-[.2rem] font-mono tracking-wider text-[1rem] text-[#555] flex gap-x-5 items-center'><FaTheaterMasks className='text-[#000]' size={21}/>Genre</li>
                </ul>
            </div>

            {/* Category */}
            <h1 className='pt-6 text-[1rem] font-mono tracking-widest text-[#000] font-semibold pl-5'>Category</h1>
            <ul className='w-full pt-3'>
                <li className='w-full duration-150 hover:border-r-4 hover:rounded-e-sm hover:border-r-blue-400 hover:bg-blue-50 cursor-pointer p-3 ml-[.2rem] font-mono tracking-wider text-[1rem] text-[#555] flex gap-x-5 items-center'><RiMovie2Line className='text-[#000]' size={21}/>Movie</li>

                <li className='w-full duration-150 hover:border-r-4 hover:rounded-e-sm hover:border-r-blue-400 hover:bg-blue-50 cursor-pointer p-3 ml-[.2rem] font-mono tracking-wider text-[1rem] text-[#555] flex gap-x-5 items-center'><PiTelevision className='text-[#000]' size={21}/>Series</li>
            </ul>

            {/* Engagement */}
            <h1 className='pt-6 text-[1rem] font-mono tracking-widest text-[#000] font-semibold pl-5'>Engagement</h1>
            <ul className='w-full pt-3'>
                <li className='w-full duration-150 hover:border-r-4 hover:rounded-e-sm hover:border-r-blue-400 hover:bg-blue-50 cursor-pointer p-3 ml-[.2rem] font-mono tracking-wider text-[1rem] text-[#555] flex gap-x-5 items-center'><HiOutlineUsers className='text-[#000]' size={21}/>Community</li>

                <li className='w-full duration-150 hover:border-r-4 hover:rounded-e-sm hover:border-r-blue-400 hover:bg-blue-50 cursor-pointer p-3 ml-[.2rem] font-mono tracking-wider text-[1rem] text-[#555] flex gap-x-5 items-center'><PiShapesLight className='text-[#000]' size={21}/> Event</li>
            </ul>


            {/* General */}
            <h1 className='pt-6 text-[1rem] font-mono tracking-widest text-[#000] font-semibold pl-5'>Account</h1>
            <ul className='w-full pt-3'>
                <li className='w-full duration-150 hover:border-r-4 hover:rounded-e-sm hover:border-r-blue-400 hover:bg-blue-50 cursor-pointer p-3 ml-[.2rem] font-mono tracking-wider text-[.785rem] text-[#555] flex gap-x-5 items-center'><FaRegUser className='text-[#000] bg-zinc-200 rounded-full p-1' size={25}/> Victory Odumeh</li>

                <li className='w-full duration-150 hover:border-r-4 hover:rounded-e-sm hover:border-r-blue-400 hover:bg-blue-50 cursor-pointer p-3 ml-[.2rem] font-mono tracking-wider text-[1rem] text-[#555] flex gap-x-5 items-center'><HiOutlineUsers className='text-[#000]' size={21}/>Sign Out</li>
            </ul>

        </div>
    </aside>
  )
}

export default AsideBar
