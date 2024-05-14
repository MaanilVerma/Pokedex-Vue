<template>
  <div v-if="name && color">
    <button
      class="type-button"
      :color="color"
      :style="{ backgroundColor: color }"
      :value="name"
      @click="handleClick"
      :tab-index="tabIndexComputed"
    >
      <img
        :src="`@assets/images/pokemonTypes/${name}.svg`"
        width="16"
        height="16"
        :alt="name"
      />
      {{ name }}
    </button>
  </div>
  <span class="type-error-message" v-else>
    Oops, we couldn't find the type of this Pokémon.
  </span>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import { pokemonTypesColor } from "../../utils/constants/constants";
import "./index.scss";

type PokemonTypeProps = {
  type: string;
  tabIndex: boolean;
  handleClick?: (e: Event) => void;
};

const props = defineProps<PokemonTypeProps>();

const { name, color } =
  pokemonTypesColor.find((item) => item.name === props.type) || {};

const tabIndexComputed = computed(() => (props.tabIndex ? 0 : -1));

function handleClick(event: Event) {
  if (props.handleClick) {
    props.handleClick(event as unknown as Event);
  }
}
</script>
