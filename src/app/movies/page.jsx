'use client'
import React, { useEffect, useState } from 'react'
import { useMovies } from '../context/moviesContext';
import MovieCard from './MovieCard';

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
    <div>
       <MovieCard movies={movies} />
    </div>
  )
}

export default Page