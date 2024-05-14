<template>
  <button class="home-button" @click="handleClick" :disabled="disabledButton">
    <HomeIcon />
    Reset
  </button>
</template>

<script setup lang="ts">
import { fetchPokemonList } from "../../utils/api-endpoints/fetchPokemonList";
import HomeIcon from "../../assets/images/HomeIcon.vue";
import "./index.scss";

interface HomeButtonProps {
  setLoading: (value: boolean) => void;
  setDisabledButton: (value: boolean) => void;
  setPokemonList: (data: any[]) => void;
  setPage: (page: number) => void;
  setShowPagination: (value: boolean) => void;
  disabledButton: boolean;
}

const props = defineProps<HomeButtonProps>();

const handleClick = async () => {
  props.setLoading(true);
  props.setDisabledButton(true);
  props.setPokemonList(await fetchPokemonList(1));
  props.setLoading(false);
  props.setDisabledButton(false);
  props.setPage(1);
  props.setShowPagination(true);
};
</script>
