import Image from 'next/image'
import React from 'react'
import { HiOutlineArrowLongRight } from "react-icons/hi2";


const GenreDisplay = ({animes}) => {
  return (
    <section>
      <div className='max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

        {
            animes.data ? 
            <div className='lg:w-[23rem] h-[10.56rem] bg-neutral-800 rounded-[.3rem]'>
               <div className='relative flex items-center gap-x-3'>
                    <div className='absolute -top-3 right-5 bg-blue-400 translate-x-6 translate-y-2 w-[.65rem] h-[.65rem] rounded-full'>
                        <div className='w-[.7rem] h-[.7rem] rounded-full border border-blue-400 animate-ping'></div>
                    </div>

                    <Image className='rounded-s-[.3rem] object-cover relative' src={animes.data[5].images.jpg.large_image_url} alt='' width={120} height={50}></Image>

                    <div>
                        <h1 className='font-mono text-[1.2rem] pb-1 tracking-widest text-gray-200'>Sports Genre</h1>
                        <h2 className='font-mono text-[.8rem] pb-1 tracking-widest text-white'>スポーツジャンル</h2>
                        <button className='flex items-center gap-x-2 pt-2 text-blue-400 font-mono tracking-widest text-[.7rem]'>View more <HiOutlineArrowLongRight className='duration-300 -translate-x-1 hover:translate-x-3' size={25} /></button>
                    </div>
               </div>
            </div> 
            : 
            ''
        }

        {
            animes.data ? 
            <div className='lg:w-[23rem] h-[10.7rem] bg-neutral-800 rounded-[.3rem]'>
               <div className='relative flex items-center gap-x-3'>
                    <div className='absolute -top-3 right-5 bg-blue-400 translate-x-6 translate-y-2 w-[.65rem] h-[.65rem] rounded-full'>
                        <div className='w-[.7rem] h-[.7rem] rounded-full border border-blue-400 animate-ping'></div>
                    </div>

                    <Image className='rounded-s-[.3rem] object-cover relative' src={animes.data[4].images.jpg.large_image_url} alt='' width={120} height={50}></Image>

                    <div>
                        <h1 className='font-mono text-[1.2rem] pb-1 tracking-widest text-gray-200'>Kodomomuke Genre</h1>
                        <h2 className='font-mono text-[.8rem] pb-1 tracking-widest text-white'>こどもむけジャンル</h2>
                        <button className='flex items-center gap-x-2 pt-2 text-blue-400 font-mono tracking-widest text-[.7rem]'>View more <HiOutlineArrowLongRight className='duration-300 -translate-x-1 hover:translate-x-3' size={25} /></button>
                    </div>
               </div>
            </div> 
            : 
            ''
        }
        {
            animes.data ? 
            <div className='lg:w-[23rem] h-[10.56rem] bg-neutral-800 rounded-[.3rem]'>
               <div className='relative flex items-center gap-x-3'>
                    <div className='absolute -top-3 right-5 bg-blue-400 translate-x-6 translate-y-2 w-[.65rem] h-[.65rem] rounded-full'>
                        <div className='w-[.7rem] h-[.7rem] rounded-full border border-blue-400 animate-ping'></div>
                    </div>

                    <Image className='rounded-s-[.3rem] object-cover relative' src={animes.data[1].images.jpg.large_image_url} alt='' width={120} height={50}></Image>

                    <div>
                        <h1 className='font-mono text-[1.2rem] pb-1 tracking-widest text-gray-200'>Sci-Fi Genre</h1>
                        <h2 className='font-mono text-[.8rem] pb-1 tracking-widest text-white'>SF ジャンル</h2>
                        <button className='flex items-center gap-x-2 pt-2 text-blue-400 font-mono tracking-widest text-[.7rem]'>View more <HiOutlineArrowLongRight className='duration-300 -translate-x-1 hover:translate-x-3' size={25} /></button>
                    </div>
               </div>
            </div> 
            : 
            ''
        }
        {
            animes.data ? 
            <div className='lg:w-[23rem] h-[10.56rem] bg-neutral-800 rounded-[.3rem]'>
               <div className='relative flex items-center gap-x-3'>
                    <div className='absolute -top-3 right-5 bg-blue-400 translate-x-6 translate-y-2 w-[.65rem] h-[.65rem] rounded-full'>
                        <div className='w-[.7rem] h-[.7rem] rounded-full border border-blue-400 animate-ping'></div>
                    </div>

                    <Image className='rounded-s-[.3rem] object-cover relative' src={animes.data[10].images.jpg.large_image_url} alt='' width={120} height={50}></Image>

                    <div>
                        <h1 className='font-mono text-[1.2rem] pb-1 tracking-widest text-gray-200'>Shounen Genre</h1>
                        <h2 className='font-mono text-[.8rem] pb-1 tracking-widest text-white'>少年ジャンル</h2>
                        <button className='flex items-center gap-x-2 pt-2 text-blue-400 font-mono tracking-widest text-[.7rem]'>View more <HiOutlineArrowLongRight className='duration-300 -translate-x-1 hover:translate-x-3' size={25} /></button>
                    </div>
               </div>
            </div> 
            : 
            ''
        }
        {
            animes.data ? 
            <div className='lg:w-[23rem] h-[10.7rem] bg-neutral-800 rounded-[.3rem]'>
               <div className='relative flex items-center gap-x-3'>
                    <div className='absolute -top-3 right-5 bg-blue-400 translate-x-6 translate-y-2 w-[.65rem] h-[.65rem] rounded-full'>
                        <div className='w-[.7rem] h-[.7rem] rounded-full border border-blue-400 animate-ping'></div>
                    </div>

                    <Image className='rounded-s-[.3rem] object-cover relative' src={animes.data[18].images.jpg.large_image_url} alt='' width={120} height={50}></Image>

                    <div>
                        <h1 className='font-mono text-[1.2rem] pb-1 tracking-widest text-gray-200'>Cooking Genre</h1>
                        <h2 className='font-mono text-[.8rem] pb-1 tracking-widest text-white'>料理ジャンル</h2>
                        <button className='flex items-center gap-x-2 pt-2 text-blue-400 font-mono tracking-widest text-[.7rem]'>View more <HiOutlineArrowLongRight className='duration-300 -translate-x-1 hover:translate-x-3' size={25} /></button>
                    </div>
               </div>
            </div> 
            : 
            ''
        }
        {
            animes.data ? 
            <div className='lg:w-[23rem] h-[10.7rem] bg-neutral-800 rounded-[.3rem]'>
               <div className='relative flex items-center gap-x-3'>
                    <div className='absolute -top-3 right-5 bg-blue-400 translate-x-6 translate-y-2 w-[.65rem] h-[.65rem] rounded-full'>
                        <div className='w-[.7rem] h-[.7rem] rounded-full border border-blue-400 animate-ping'></div>
                    </div>

                    <Image className='rounded-s-[.3rem] object-cover relative' src={animes.data[19].images.jpg.large_image_url} alt='' width={120} height={50}></Image>

                    <div>
                        <h1 className='font-mono text-[1.2rem] pb-1 tracking-widest text-gray-200'>Seinen Genre</h1>
                        <h2 className='font-mono text-[.8rem] pb-1 tracking-widest text-white'>青年ジャンル</h2>
                        <button className='flex items-center gap-x-2 pt-2 text-blue-400 font-mono tracking-widest text-[.7rem]'>View more <HiOutlineArrowLongRight className='duration-300 -translate-x-1 hover:translate-x-3' size={25} /></button>
                    </div>
               </div>
            </div> 
            : 
            ''
        }

      </div>
    </section>
  )
}

export default GenreDisplay
