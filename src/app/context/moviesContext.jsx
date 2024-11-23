'use client'
import axios from "axios";
import { createContext, useContext } from "react";

const moviesContext = createContext();
const api_key = "8bd47a15fc6a5e16f7199b7c9907e363";
const base_url = "https://api.themoviedb.org/3";
const MoviesProvider = ({ children }) => {
  const getTopRatedMovies = async () => {
  
    const response = await axios.get(`${base_url}/movie/top_rated?api_key=${api_key}&language=en-US&page=1`);
    const data = await response.data;
    return data.results;
  };
  return <moviesContext.Provider value={{
    getTopRatedMovies
  }}>{children}</moviesContext.Provider>;
};

export default MoviesProvider;
export { moviesContext };
export const useMovies = () => {
  return useContext(moviesContext);
}
