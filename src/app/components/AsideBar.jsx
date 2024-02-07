import Image from 'next/image'
import React from 'react'
import icon from '../assets/gaming.png'

const AsideBar = () => {
  return (
    <aside class='h-screen w-[15%] border-r border-[#000] fixed'>
       
       {/* Logo */}
        <div className='flex gap-x-3 items-center py-5 px-4'>
            <Image src={icon} alt='Ingenre Icon' width={40} height={40}></Image>
            <p className='text-[1.25rem] text-blue-400 font-mono tracking-widest leading-snug text-center'>Ingenre</p>
        </div>

        {/* Aside Menu */}
        <div className='p-3 fle flex-col justify-center items-center'>
            {/* Menu */}
            <h1>Menu</h1>
            <ul className='py-5 px-4'>
                <li>Home</li>
                <li>Genre</li>
            </ul>

            {/* Category */}
            <h1>Category</h1>
            <ul className='py-5 px-4'>
                <li>Movie</li>
                <li>Series</li>
            </ul>

            {/* Library */}
            <h1>Library</h1>
            <ul className='py-5 px-4'>
                <li>Liked</li>
                <li></li>
            </ul>
        </div>
    </aside>
  )
}

export default AsideBar
