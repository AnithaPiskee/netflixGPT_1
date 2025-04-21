import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../../utils/moviesSlice';
import { API_options } from '../../utils/constants';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
     const fetchApiMovies = async() =>{
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_options);
        const json = await response.json();
        console.log(json.results)
      
        dispatch(addNowPlayingMovies(json.results));
      } 
      useEffect(()=>{
        fetchApiMovies();
      },[])
}

export default useNowPlayingMovies;
