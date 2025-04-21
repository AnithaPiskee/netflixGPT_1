import { createSlice } from "@reduxjs/toolkit";

const GPTSearchSlice = createSlice({
    name:"GPTSearch",
    initialState:{
        toggleGPTSearch:false,
        gptMovieNames:null,
        gptMovieResult:null
    },
    reducers:{
        addToggleGPTSearch:(state,action) =>{
            state.toggleGPTSearch= !state.toggleGPTSearch;
        },
        addGPTMovieNameAndResult:(state,action) =>{
            const {movieNames,movieResult} = action.payload;
            state.gptMovieNames= movieNames;
            state.gptMovieResult = movieResult
        }
    }
})

export default GPTSearchSlice.reducer;
export const {addToggleGPTSearch,addGPTMovieNameAndResult} = GPTSearchSlice.actions;