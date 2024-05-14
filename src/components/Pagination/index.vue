<template>
  <nav>
    <ul class="pagination">
      <li>
        <button
          class="pagination-button"
          :navigation="true"
          @click="goToPrevPage"
          :disabled="currentPage === 1"
        >
          <LeftArrow />
        </button>
      </li>
      <li v-for="pageNumber in pages" :key="pageNumber">
        <button
          class="pagination-button"
          :selected="pageNumber === currentPage"
          @click="goToPage(pageNumber)"
        >
          {{ pageNumber }}
        </button>
      </li>
      <li>
        <button
          class="pagination-button"
          :navigation="true"
          @click="goToNextPage"
          :disabled="currentPage === totalPages"
        >
          <RightArrow />
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { computed } from "vue";
import LeftArrow from "../../assets/images/LeftArrow.vue";
import RightArrow from "../../assets/images/RightArrow.vue";
//   import { Pagination, PaginationButton } from "@/utils/styles/pagination";
import { fetchPokemonList } from "../../utils/api-endpoints/fetchPokemonList";
import { UsePaginationProps } from "../../utils/models/pagination.model";

const props = defineProps<UsePaginationProps>();

const currentPage = computed({
  get: () => props.page,
  set: (value) => props.setPage(value),
});

const totalPages = computed(() =>
  Math.ceil(props.totalItems / props.itemsPerPage)
);

const pages = computed(() => {
  const pages: number[] = [];
  for (let i = 1; i <= totalPages.value; i++) {
    pages.push(i);
  }
  return pages;
});

const goToPage = async (page: number) => {
  if (page !== currentPage.value) {
    props.setLoading(true);
    props.setPokemonList(await fetchPokemonList(page));
    currentPage.value = page;
    props.setLoading(false);
    window.scrollTo({
      top: props.searchBarRef.value!.offsetTop - 56,
    });
  }
};

const goToPrevPage = () => {
  if (currentPage.value > 1) {
    goToPage(currentPage.value - 1);
  }
};

const goToNextPage = () => {
  if (currentPage.value < totalPages.value) {
    goToPage(currentPage.value + 1);
  }
};
</script>
