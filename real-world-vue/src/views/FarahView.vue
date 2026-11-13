<!-- Vue FarahView : page affichée quand on va sur /farah -->
<template>
  <!-- On affiche le composant FarahPage -->
  <FarahPage />
</template>

<script>
// On importe le composant (@ = raccourci vers le dossier src)
import FarahPage from "@/components/FarahPage.vue";

export default {
  name: "FarahView",
  // On déclare les composants utilisés dans le template
  components: {
    FarahPage,
  },
};
</script>
