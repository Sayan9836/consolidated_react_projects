import {createAsyncThunk, createSlice } from "@reduxjs/toolkit"; 


export const fetchCocktails=createAsyncThunk('cocktails/fetchCocktails',async ()=>{
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita').then(res=>res.json());
})

export const fetchSingleCocktail=createAsyncThunk('cocktails/fetchSingleCocktail',async (id)=>{
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then(res=>res.json());
})

export const fetchSearchCocktail=createAsyncThunk('cocktails/fetchSearchCocktail',async (searchText)=>{
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`).then(res=>res.json());
})

const cocktailSlice=createSlice({
    name:'cocktails',
    initialState:{
        loading:false,
        cocktails:[],
        error:null,
        cocktail:[]
    },
    extraReducers:{
        [fetchCocktails.pending]: (state,action)=>{
            state.loading=true
        },
        [fetchCocktails.fulfilled]: (state,action)=>{
            state.loading=false
            state.cocktails=action.payload.drinks
        },
        [fetchCocktails.rejected]: (state,action)=>{
             state.loading=true;
            state.error=action.payload
        },
        [fetchSingleCocktail.pending]:(state,action)=>{
          state.loading=true;
        },
        [fetchSingleCocktail.fulfilled]:(state,action)=>{
            state.loading=false;
            state.cocktail=action.payload.drinks
        },
        [fetchSingleCocktail.rejected]:(state,action)=>{
            state.loading=true;
            state.error=action.payload
        },
        [fetchSearchCocktail.pending]:(state,action)=>{
          state.loading=true;
        },
        [fetchSearchCocktail.fulfilled]:(state,action)=>{
            state.loading=false;
            state.cocktails=action.payload.drinks
        },
        [fetchSearchCocktail.rejected]:(state,action)=>{
            state.loading=true;
            state.error=action.payload
        }
    }
})

export const getAlldata=()=> state => ({...state.app}) 
export default cocktailSlice.reducer