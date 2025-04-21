import { createSlice } from "@reduxjs/toolkit";

const configLanguageSlice = createSlice({
    name:"configLang",
    initialState:{
        lang:"en"
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.lang= action.payload
        }
    }
})

export default configLanguageSlice.reducer;
export const {changeLanguage} = configLanguageSlice.actions;