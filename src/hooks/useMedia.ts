import { ref, onMounted, onBeforeUnmount } from "vue";

export const useMedia = (media: string) => {
  const match = ref<boolean | null>(null);

  const changeMatch = () => {
    const { matches } = window.matchMedia(media);
    match.value = matches;
  };

  onMounted(() => {
    changeMatch();
    window.addEventListener("resize", changeMatch);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", changeMatch);
  });

  return match;
};
