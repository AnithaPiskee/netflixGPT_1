import { useEffect } from "react";
import { API_options } from "../../utils/constants";
import { useDispatch } from "react-redux";
import {addTrailerVideo} from "../../utils/moviesSlice"


const useVideo = (id) => {
  const dispatch = useDispatch();
const fetchVideos = async()=>{
 const data= await fetch("https://api.themoviedb.org/3/movie/"+id +"/videos?language=en-US",API_options);
  const json = await data.json(); 
  const filterData = json.results.filter(each=> each.type==="Trailer");
  const trailer = filterData.length ? filterData[0] : json.result[0];
  dispatch(addTrailerVideo(trailer))
}
useEffect(()=>{
  fetchVideos();
}
,[])
}

export default useVideo

