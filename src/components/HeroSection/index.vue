<template>
  <div class="hero-section-container">
    <Header />
    <div class="main-container hero-section">
      <div class="hero-section-content">
        <div class="charizard-data">
          <span class="charizard-number">#006</span>
          <div class="charizard-types">
            <PokemonType :type="'fire'" :tab-index="false" />
            <PokemonType :type="'flying'" :tab-index="false" />
          </div>
          <h1 class="charizard-name">Charizard</h1>
          <p class="charizard-description">
            Charizard resembles a large traditional European dragon. Despite the
            similarity, Charizard is explicitly a Pokémon from Fire and Flying
            types, and not a Dragon type except in its "Mega Charizard X";
            However, it can learn type attacks Dragon.
          </p>
          <button class="more-details-button" @click="handleClick">
            <BoltIcon />
            More details
          </button>
        </div>

        <div class="divider">
          <DividerFire />
        </div>

        <div class="charizard-image">
          <img
            src="@/assets/images/img-charizard-min.png"
            width="488"
            height="528"
            alt="Charizard Picture"
            priority
            loading="eager"
          />
        </div>
      </div>
    </div>
    <Waves />
  </div>
  <ScrollDownIndicator />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { fetchPokemon } from "../../utils/api-endpoints/fetchPokemon";
import "./index.scss";
import PokemonType from "../PokemonType/index.vue";
import Header from "../Header/index.vue";
import Waves from "../Waves/index.vue";
import BoltIcon from "../../assets/images/BoltIcon.vue";
import DividerFire from "../../assets/images/DividerFire.vue";
import ScrollDownIndicator from "../ScrolldownIndicator/index.vue";

import type { Pokemon } from "../../utils/models/pokemon.model";

interface HeroSectionProps {
  setModal: (value: boolean) => void;
  setPokemonData: (data: Pokemon | null) => void;
}

const props = defineProps<HeroSectionProps>();

const handleClick = async () => {
  const { data } = await fetchPokemon("charizard");
  props.setPokemonData(data);
  props.setModal(true);
};
</script>
