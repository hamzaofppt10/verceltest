'use client'
import React, { useEffect, useState } from 'react'
import { useMovies } from '../context/moviesContext';
import MovieCard from './MovieCard';
import Carousel from './Sekeleton';

const Page = () => {
    const { trendingMovies } = useMovies();
  return (
    <div className=''>
       <MovieCard movies={trendingMovies} />
    </div>
  )
}

export default Page