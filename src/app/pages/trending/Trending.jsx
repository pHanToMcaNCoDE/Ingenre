import Image from 'next/image'
import React from 'react'

const Trending = ({animes}) => {
  return (
    <section className='px-4 py-[80px] max-w-[1120px] mx-auto'>
      <h1 className='text-[1.3rem] font-mono tracking-wiser pb-[2em]'>Trending</h1>

        {/* Currently Airing Animes */}
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>

            {/* Card */}
             {/* {
                 animes.data ?
                 <Image className='object-cover' src={animes.data[0].images.jpg.large_image_url} alt='Image' width={300} height={255}></Image>:''
                 
                 
             } */}
             {
                 animes.data && animes.data.slice(0,8).map((item) => (
                     
                     <div key={item.mal_id} className='lg:w-[17em]'>
                        {
                            item.images && <Image className='object-cover' src={item.images.jpg.large_image_url} alt={item.title} width={300} height={255}></Image>
                        }
                        <div className='bg-[#fff] flex flex-col items-start p-2 rounded-b-[1rem]'>
                            <div className='flex justify-between w-full gap-x-3 items-center'>
                                <h1 className='text-[.925rem] text-blue-500 font-mono tracking-wider'>Cowboy Bebop</h1>
                                <p className='text-[.825rem] font-mono tracking-wider text-zinc-500 rounded-[.3rem] px-1'>1998</p>
                            </div>
                                <h1 className='px-1 text-[.925rem] text-black'>ウボーイビバップ</h1>
                            <div className='bg-[#fff] flex items-center justify-between w-full pt-2 gap-x-[.3rem]'>
                                <p className='text-[.825rem] font-mono tracking-wider text-zinc-500'>26 episodes</p>
                                <p className='text-[.825rem] font-mono tracking-wider text-red-500 bg-red-100 rounded-[.3rem] px-1'>Action</p>
                            </div>
                        </div>
                     </div>
                 ))
             }
                
        </div>
    </section>
  )
}

export default Trending
