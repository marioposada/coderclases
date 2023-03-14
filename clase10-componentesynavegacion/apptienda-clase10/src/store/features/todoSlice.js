import { createSlice } from '@reduxjs/toolkit';

 export const pokemonSlice = createSlice({
     name: 'pokemon',
     initialState: {
         counter: 10
     },
     reducers: {
         increment: (state, /* action */ ) => {
             state.counter += 1;
         },
     }
 });
 
 
 export const { increment } = pokemonSlice.actions;

