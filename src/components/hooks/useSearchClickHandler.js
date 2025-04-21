 import Together from 'together-ai';
import { API_options } from '../../utils/constants';
import { addGPTMovieNameAndResult } from '../../utils/GPTSearchSlice';


 const getTMDBMovies = async(movie) =>{
     console.log(movie)
     const data =await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_options)
     const result = await data.json();
     return result
   }

 const handlerChatGPTSearchClick = async(searchPlaceholder,dispatch) =>{
 
    const query = searchPlaceholder.current?.value;
    if(query ===null || query==="") alert("please enter movie genere you would like to watch!")
    const together = new Together({
        apiKey: "e262b60c7eaacd8a3746aef77ec3e8eb4cf096611a8aa6d7fd506a69c39df931"
    });
    const stream = await together.chat.completions.create({
      model: 'meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo',
      messages: [
        { role: 'user', content: 'Act as movie suggestion system give the results of movies only movie name not any extra words or text  for the query :' +query+ ' and give the 5 movie names as comma separated result exmaple ahead exmple result: Glomal,3 idiots, Don kaddar,Sholey' },
      ],
      stream: true,
    });
    let fullResponse="";
    for await (const chunk of stream) {
       fullResponse += chunk.choices[0]?.delta?.content || '';
    }
    console.log(fullResponse.split(","))
    const movieNames= fullResponse.split(",");
    const tmdbMovieResult = movieNames.map(movie => getTMDBMovies(movie))
    const result = await Promise.all(tmdbMovieResult);

    dispatch(addGPTMovieNameAndResult({movieNames:movieNames, movieResult:result}))
    console.log(result)
  }

export default handlerChatGPTSearchClick;