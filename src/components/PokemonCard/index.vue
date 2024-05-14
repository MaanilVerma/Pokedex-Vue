<template>
  <div class="pokemon-card-container">
    <div
      class="pokemon-card-overlay"
      :color="color"
      :background-color="color"
    />
    <PokemonImg>
      <SkeletonLoading :src="imgUrl" :alt="pokemon?.name" />
    </PokemonImg>
    <PokemonNumber>{{ formatPokemonId(pokemon?.id) }}</PokemonNumber>
    <PokemonName>{{ pokemon?.name }}</PokemonName>
    <PokemonCardType>
      <PokemonType
        v-for="{ type } in pokemon?.types"
        :key="type.name"
        :type="type.name"
        :tabIndex="false"
      />
    </PokemonCardType>
    <PokemonFeatures>
      <PokemonWeight>
        <div>
          <WeightIcon />
          <span>{{ `${pokemon.weight / 10}` }} kg</span>
        </div>
        <span>Weight</span>
      </PokemonWeight>
      <PokemonHeight>
        <div>
          <RulerIcon />
          <span>{{ `${pokemon.height / 10}` }} m</span>
        </div>
        <span>Height</span>
      </PokemonHeight>
    </PokemonFeatures>
    <MoreDetailsButton :color="color" @click="handleClick">
      <BoltIcon />
      More Details
    </MoreDetailsButton>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { Pokemon } from "../../utils/models/pokemon.model";
import { pokemonTypesColor } from "../../utils/constants/constants";
import { fetchPokemon } from "../../utils/api-endpoints/fetchPokemon";
import PokemonType from "../PokemonType/index.vue";
import WeightIcon from "../../assets/images/WeightIcon.vue";
import RulerIcon from "../../assets/images/RulerIcon.vue";
import BoltIcon from "../../assets/images/BoltIcon.vue";

interface PokemonCardProps {
  pokemon: Pokemon;
  setModal: (value: boolean) => void;
  setPokemonData: (data: Pokemon) => void;
}

const props = defineProps<PokemonCardProps>();

const imgUrl = computed(
  () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.pokemon.id}.png`
);

const color = computed(() => {
  const [{ color }] = pokemonTypesColor?.filter(
    (type) => props?.pokemon?.types[0]?.type?.name?.indexOf(type?.name) !== -1
  );
  return color;
});

const handleClick = async () => {
  const requestPokemon = await fetchPokemon(props?.pokemon?.name);
  props.setPokemonData(requestPokemon?.data!);
  props.setModal(true);
};

const formatPokemonId = (id: number) => {
  if (id < 10) return `#00${id}`;
  else if (id >= 10 && id < 99) return `#0${id}`;
  else return `#${id}`;
};
</script>
