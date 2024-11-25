
'use client'
import React from 'react'
import EmblaCarousel from './carousel/EmblaCarousel';
import { useMovies } from './context/moviesContext';

const Page = () => {
  const {trendingMovies} = useMovies()

  const OPTIONS = { loop: true, duration: 30 }
  const SLIDES = trendingMovies.map(movie => movie.backdrop_path)
  return (
    <div className='min-h-screen max-sm:hidden'>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  )
}

export default Page