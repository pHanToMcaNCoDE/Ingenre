import Image from 'next/image'
import React from 'react'
import TopRanking from '../pages/trending/TopRanking'


const Display = ({animes}) => {
  return (
    <section>
      <TopRanking animes={animes}/>
    </section>
  )
}

export default Display
