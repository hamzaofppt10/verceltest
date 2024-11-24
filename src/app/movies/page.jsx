'use client'
import React, { useEffect, useState } from 'react'
import { useMovies } from '../context/moviesContext';
import MovieCard from './MovieCard';
import Carousel from './Carousel';

const Page = () => {
    const { getTopRatedMovies } = useMovies();
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchMovies = async () => {
            const movies = await getTopRatedMovies();
           setMovies(movies);
        }
        fetchMovies();
    })
  return (
    <div className=''>
       <MovieCard movies={movies} />
    </div>
  )
}

export default Page