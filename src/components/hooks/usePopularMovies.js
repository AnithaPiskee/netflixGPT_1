import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../../utils/moviesSlice';
import { API_options } from '../../utils/constants';
import { useEffect } from 'react';

const usepopularMovies = () => {
    const dispatch = useDispatch();
     const fetchApiMovies = async() =>{
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_options);
        const json = await response.json();
        console.log(json.results)
        dispatch(addPopularMovies(json.results));
      } 
      useEffect(()=>{
        fetchApiMovies();
      },[])
}

export default usepopularMovies;
