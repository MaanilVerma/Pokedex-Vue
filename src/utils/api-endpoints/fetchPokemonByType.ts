import axios from "axios";
import { fetchPokemon } from "./fetchPokemon";

type Props = {
  pokemon: { name: string };
};

export const fetchPokemonByType = async (type: string, pokemonAmount = 9) => {
  const URL = `https://pokeapi.co/api/v2/type/${type}`;

  try {
    const response = await axios.get(URL);
    const data = response.data;

    const promises = data.pokemon
      .filter(
        (item: Props, index: number) => index + 1 <= pokemonAmount && item
      )
      .map(async (item: Props) => (await fetchPokemon(item.pokemon.name)).data);

    const pokemonList = await Promise.all(promises);
    return pokemonList;
  } catch (error) {
    return [];
  }
};
