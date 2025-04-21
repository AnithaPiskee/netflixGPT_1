import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice"
import movieReducer from "./moviesSlice"
import GPTSearchReducer from "./GPTSearchSlice";
import configLangReducer from "./configLanguageSlice"

const appStore = configureStore({
    reducer:{
        user: userSlice,
        movies: movieReducer,
        gptSearch:GPTSearchReducer,
        configLang:configLangReducer,

    }
})
export default appStore;