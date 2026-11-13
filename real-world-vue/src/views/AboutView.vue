<!-- Vue About : page affichée quand on va sur /about -->
<template>
  <div class="about">
    <!-- On affiche le composant FarahPage (titre + mon nom) -->
    <FarahPage />
  </div>
</template>

<script>
// On importe le composant (@ = raccourci vers le dossier src)
import FarahPage from "@/components/FarahPage.vue";

export default {
  name: "AboutView",
  // On déclare les composants utilisés dans le template
  components: {
    FarahPage,
  },
};
</script>
