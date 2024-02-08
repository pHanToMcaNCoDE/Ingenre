import Image from 'next/image'
import React from 'react'

const Trending = ({animes}) => {
  return (
    <section className='w-full px-4 py-[80px] max-w-[1120px]'>
      <h1 className='text-[1.3rem] font-mono tracking-wiser pb-[2em]'>Trending</h1>

        {/* Currently Airing Animes */}
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-content-center'>

            {/* Card */}
            <div className='w-[17em]'>
                {
                    animes.data ?
                    <Image className='object-cover' src={animes.data[0].images.jpg.large_image_url} alt='Image' width={300} height={255}></Image>:''
                }
                <div className='bg-[#fff] flex flex-col items-start p-2 rounded-b-[1rem]'>
                    <div className='flex gap-x-3 items-center'>
                        <h1 className='text-[.925rem] text-blue-500 font-mono tracking-wider'>Cowboy Bebop</h1>
                        <p className='text-[.825rem] font-mono tracking-wider text-zinc-500 rounded-[.3rem] px-1'>24 min per ep</p>
                    </div>
                        <h1 className='px-1 text-[.925rem] text-black'>ウボーイビバップ</h1>
                    <div className='bg-[#fff] flex items-center justify-start pt-2 gap-x-[.3rem]'>
                        <p className='text-[.825rem] font-mono tracking-wider text-zinc-500'>26 episodes</p>
                        <div className='w-[.3rem] h-[.3rem] bg-slate-300 rounded-full'></div>
                        <p className='text-[.825rem] font-mono tracking-wider text-red-500 bg-red-100 rounded-[.3rem] px-1'>Action</p>
                        <div className='w-[.3rem] h-[.3rem] bg-slate-300 rounded-full'></div>
                        <p className='text-[.825rem] font-mono tracking-wider text-blue-500 bg-blue-100 rounded-[.3rem] px-1'>Sci-Fi</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Trending
