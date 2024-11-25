'use client'
import axios from "axios";
import { get } from "lodash";
import { createContext, useContext, useState, useEffect } from "react";

const moviesContext = createContext();
const api_key = "8bd47a15fc6a5e16f7199b7c9907e363";
const base_url = "https://api.themoviedb.org/3";

const MoviesProvider = ({ children }) => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      const response = await axios.get(`${base_url}/movie/top_rated?api_key=${api_key}&language=en-US&page=1`);
      const data = await response.data;
      setTopRatedMovies(data.results);
    };

    const fetchTrendingMovies = async () => {
      const response = await axios.get(`${base_url}/trending/all/day?api_key=${api_key}`);
      const data = await response.data;
      setTrendingMovies(data.results);
    };
    
    
    fetchTopRatedMovies();
    fetchTrendingMovies();
  }, []);

  return (
    <moviesContext.Provider value={{
      topRatedMovies,
      trendingMovies
    }}>
      {children}
    </moviesContext.Provider>
  );
};

export default MoviesProvider;
export { moviesContext };
export const useMovies = () => {
  return useContext(moviesContext);
}
