import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { thunkGetPokemons, thunkGetAnPokemon } from "../thunk/Middleware";
import { PokemonsState,Pokemon } from "../types/pokemon.types";

let other = { home:{ front_default:"" } };
let stats = { /* Tu código acá */ };
let type = { /* Tu código acá */ };


const initialState: PokemonsState = {
  search: { 
  name: "",
  url: "",
  id:0, 
  sprites:{other}, 
  stats:[stats], 
  types:[type]
},
  allPokemons: [],
  loading: false,
};

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
  /* Tu código acá */
});

export default pokemonSlice.reducer;
