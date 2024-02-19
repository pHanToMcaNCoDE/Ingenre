'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { TiArrowRightOutline } from "react-icons/ti";
import { BiSolidLike } from "react-icons/bi";
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const Trending = ({ animes }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(false)


  const sortedAnimes = animes.data && [...animes.data].sort((a, b) => a.rank - b.rank);

  const router = useRouter();

  return (
    <section className='px-4 py-[20px] max-w-[1200px] mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
              sortedAnimes && sortedAnimes.slice(5, 9).map((item) => (
                <Link
                  href={`/trending/${item.mal_id}`}
                  key={item.mal_id}
                  onClick={(e) => {
                    e.preventDefault(); 
                    router.push(`/trending/${item.mal_id}`); 
                  }}
                  onMouseEnter={() => setHoveredCard(item.mal_id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className='lg:w-[17em] relative cursor-pointer'
                >
                  {item.images && item.rank >= 45 && (
                    <Image
                      className='object-cover relative rounded-t-[.3rem]'
                      src={item.images.jpg.large_image_url}
                      alt={item.title}
                      width={300}
                      height={200}
                    />
                  )}

                  {/* Overlay */}
                  <div
                    className='lg:w-[17em] duration-300 opacity-0 hover:opacity-100 absolute bg-[#000]/30 min-h-[75%] w-0 top-0'
                  ></div>

                  <div className='absolute top-0 bg-neutral-700 p-1 rounded-ee-[.5rem] text-[#fff] font-mono tracking-widest'>
                    {item.type === 'TV' ? 'Series' : 'Movie'}
                  </div>

                  <div className='bg-neutral-800 flex flex-col items-start p-2 rounded-b-[1rem]'>
                    <div className='flex justify-between w-full gap-x-3 items-center'>
                      <h1 className='text-[.925rem] text-blue-500 font-mono tracking-wider'>
                        {item.title}
                      </h1>
                      <p className='text-[.825rem] font-mono tracking-wider text-zinc-300 rounded-[.3rem] px-1'>
                        {item.year}
                      </p>
                    </div>
                    <h1 className='w-full px-1 text-[.925rem] text-white font-mono tracking-wider'>
                      {item.titles && item.title_japanese ? item.title_japanese : 'Nil'}
                    </h1>
                    <div className='flex items-center justify-between w-full pt-2 gap-x-[.3rem]'>
                      <p className='text-[.825rem] font-mono tracking-wider text-zinc-500'>
                        {item.episodes} episode(s)
                      </p>
                      <p className='text-[.825rem] font-mono tracking-wider text-red-500 bg-red-100 rounded-[.3rem] px-1'>
                        Action
                      </p>
                    </div>
                  </div>
                </Link>
            ))}
          </div>
        
        <section className='py-[7em]'>
          <div className='flex justify-center items-center duration-300 hover:-translate-x-2 relative hover:-translate-y-2'>
            <div className='p-2 bg-white rounded-[.3rem] h-[4em] w-[12em] absolute translate-x-2 translate-y-2'></div>
            <button onMouseEnter={() => setHoveredButton(true)} onMouseLeave={() => setHoveredButton(false)} className='duration-300 hover:-translate-x-2 hover:-translate-y-1 flex justify-center items-center gap-x-3 bg-black absolute border-2 border-black rounded-[.3rem] px-2 py-1 text-white w-[12em] h-[4em] font-mono tracking-widest'>
              View more <TiArrowRightOutline size={21} />
            </button>
          </div>
        </section>
    </section>
  );
};

export default Trending;
