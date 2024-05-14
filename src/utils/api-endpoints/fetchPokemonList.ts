import axios from "axios";
import { fetchPokemon } from "./fetchPokemon";

export const fetchPokemonList = async (page: number) => {
  const offset = 9 * (page - 1);
  const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`;

  try {
    const response = await axios.get(URL);
    const data = response.data;

    const promises = data.results.map(async (pokemon: { name: string }) => {
      const { data } = await fetchPokemon(pokemon.name);
      return data;
    });

    const pokemonList = await Promise.all(promises);
    return pokemonList;
  } catch (error) {
    return [];
  }
};
