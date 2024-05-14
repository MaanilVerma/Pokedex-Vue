import type { Ref } from "vue";
import type { Pokemon } from "./pokemon.model";

export interface UsePaginationProps {
  setPokemonList: (data: Pokemon[]) => void;
  setLoading: (value: boolean) => void;
  searchBarRef: Ref<HTMLDivElement | null>;
  page: number;
  setPage: (value: number) => void;
}
