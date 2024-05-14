import axios from "axios";
import type { Pokemon } from "@/utils/models/pokemon.model";

export const fetchPokemon = async (pokemon: string) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  try {
    const response = await axios.get(URL);
    const data: Pokemon = response.data;
    return { response, data, error: false };
  } catch (error) {
    return { response: null, data: null, error: true };
  }
};
