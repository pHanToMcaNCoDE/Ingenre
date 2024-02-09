import Image from 'next/image'
import React from 'react'

const GenreDisplay = ({animes}) => {
  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

        {
            animes.data ? <Image className='object-cover' src={animes.data[5].images.jpg.large_image_url} alt='' width={200} height={100}></Image> : ''
        }

      </div>
    </section>
  )
}

export default GenreDisplay
