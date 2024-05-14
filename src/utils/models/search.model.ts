import type { Ref } from "vue";
import type { Pokemon } from "./pokemon.model";

export interface SearchBarProps {
  setPokemonList: (data: Pokemon[]) => void;
  pokemonAmount: number;
  setPokemonAmount: (value: number) => void;
  setError: (value: boolean) => void;
  setLoading: (value: boolean) => void;
  setPage: (value: number) => void;
  setShowPagination: (value: boolean) => void;
  disabledButton: boolean;
  setDisabledButton: (value: boolean) => void;
  searchBarRef: Ref<HTMLDivElement | null>;
}

export interface SearchFilterProps {
  setPokemonList: (data: Pokemon[]) => void;
  pokemonAmount: number;
  setPokemonAmount: (value: number) => void;
  setLoading: (value: boolean) => void;
  setShowPagination: (value: boolean) => void;
  setDisabledButton: (value: boolean) => void;
}
